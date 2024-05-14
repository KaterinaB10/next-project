import Link from "next/link";

export function NavBar() {
  return (
    <header>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "16px",
          background: "darkGreen",
          color: "white",
        }}
      >
        <div className="logo-container"></div>
        <div className="navigation-icons-container">
          <Link style={{ padding: "16px", color: "white" }} href="/">
            Home
          </Link>
          <Link
            style={{ padding: "16px", color: "white" }}
            href="/shopping-card"
          >
            Shopping Card
          </Link>
        </div>
      </div>
    </header>
  );
}
