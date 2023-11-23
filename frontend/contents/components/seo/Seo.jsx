import Head from 'next/head'

function SEO() {

    return (
        <Head>
            <title>SkillKitty</title>
            <meta name="description" content="SkillKitty" />
            <meta charSet="utf-8" />
            <link rel="icon" href={`/assets/template/dist/img/Setting.png`} />

            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link rel="stylesheet" href={`/assets/template/dist/css/adminlte.min.css`} />
            {/* For chart schedule */}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/frappe-gantt/0.6.1/frappe-gantt.min.css"
          integrity="sha512-b6CPl1eORfMoZgwWGEYWNxYv79KG0dALXfVu4uReZJOXAfkINSK4UhA0ELwGcBBY7VJN7sykwrCGQnbS8qTKhQ=="
          crossorigin="anonymous" referrerpolicy="no-referrer"/>
        </Head>
    )
}

export default SEO