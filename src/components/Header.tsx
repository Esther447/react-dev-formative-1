import withLogger from "../hoc/withLogger";

function Header() {
  return (
    <header>
      <h1 style={{ letterSpacing: "1px" }}>Dev Insights</h1>

      <nav>
        <a href="#">New Post</a>
      </nav>
    </header>
  );
}

export default withLogger(Header, "Header");