import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
export default function Nav() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Text>
          <Link to="/" className="text-decoration-none">
            Search Movies
          </Link>
        </Navbar.Text>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>React App</Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
