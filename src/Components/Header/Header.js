// import logo from './logo.svg';
import "./Header.css";
import { Nav, Button } from "react-bootstrap";

function Header() {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow"
    >
      <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6">
        Network - Monitor
      </a>
      <Button
        className="navbar-toggler position-absolute d-md-none collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </Button>
      <input
        className="form-control form-control-dark w-100 rounded-0 border-0"
        type="text"
        placeholder="Search"
        aria-label="Search"
      ></input>
      <div className="navbar-nav">
        <div className="nav-item text-nowrap">
          <a className="nav-link px-3">Sign out</a>
        </div>
      </div>
    </Nav>
  );
}

export default Header;
