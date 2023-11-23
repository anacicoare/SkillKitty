const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('mockdb.json');
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);
server.use(middlewares);

/**
 * CUSTOM ROUTES FOR CRUD
*/ 
server.post('/posts', (req, res) => {
  const { title, content } = req.body;

  // Add a new post
  const newPost = {
    id: Date.now(),
    title,
    content
  };

  // Add post to resource "posts"
  router.db.get('posts').push(newPost).write();

  res.json(newPost);
});

server.put('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const { title, content } = req.body;

  // Find post by id
  const post = router.db.get('posts').find({ id: postId }).value();

  if (post) {
    // Update post information
    post.title = title;
    post.content = content;

    router.db.write();

    res.json(post);
  } else {
    res.status(404).json({ error: 'Post not found' });
  }
});

server.delete('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);

  // Delete post by id
  router.db.get('posts').remove({ id: postId }).write();

  res.status(204).end();
});

/**
 * END CUSTOM ROUTES FOR CRUD
*/ 

server.use(router);

server.listen(3002, () => {
  console.log('JSON Server is running on port 3002');
});