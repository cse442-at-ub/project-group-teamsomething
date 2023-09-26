import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          width: "100%",
          height: 50,
          //   backgroundColor: "black",
          color: "white",
          zIndex: 1,
        }}
      >
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            marginTop: 10,
            gap: 20,
          }}
        >
          <li>
            <Link to="/profile">Profile Picture</Link>
          </li>
          <li>
            <Link to="/security">Security</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
