function Footer() {
  return (
    <footer className="main-footer">
      <strong>Copyright © 2022.</strong>
      All rights reserved.
      <div className="float-right d-none d-sm-inline-block">
        <b>Version: {process.env.NEXT_PUBLIC_VERSION}</b>
      </div>
    </footer>
  );
}

export default Footer;
