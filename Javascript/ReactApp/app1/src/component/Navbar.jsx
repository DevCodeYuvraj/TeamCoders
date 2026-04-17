//Component Nabar 
function Navbar() {
  return (
   <nav className="navbar navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><h2>START BOOTSTRAP</h2></a>
      <ul class="nav justify-content-end">
  <li class="nav-item">
    <a class="nav-link " aria-current="page" href="#">PORTFOLIO</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">ABOUT</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">CONTACT US</a>
  </li>
  
</ul>
  </div>
</nav>
  );
}

export default Navbar;