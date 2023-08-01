import styled from "styled-components";

const Title = styled.h1`
    text-decoration: none;
`

const Nav = styled.nav`
  background-image: radial-gradient(100% 100% at 100% 0, #5adaff 0, #5468ff 100%);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

const Navbar = () => {
  const handleMenuToggle = () => {
    const nav = document.querySelector('nav ul');
    if (nav) {
      nav.classList.toggle('slidex');
    }
  };

  return (
    <Nav className="p-4 fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto flex items-center justify-between px-6">

        <a className="navbar-brand" href="/"><Title>Images.</Title></a>

        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="/random" className="nav-link">Image</a>
          </li>
          <li className="nav-item">
            <a href="/list" className="nav-link">Images</a>
          </li>
          <li className="nav-item">
            <a href="/login" className="nav-link">Login</a>
          </li>
        </ul>

        <div className="menu-toggle">
          <input className="input-ham" type="checkbox" onChange={handleMenuToggle} />
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
