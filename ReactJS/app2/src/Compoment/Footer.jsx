import React from 'react';

const Footer = () => {
  return (<>
  
    <h1>i am footer </h1>
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          
          {/* Company Info */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Company Name</h5>
            <p>Providing the best web solutions since 2024. Your vision, our code.</p>
          </div>

          {/* Useful Links */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Products</h5>
            <p><a href="#" className="text-white" style={{ textDecoration: 'none' }}>The Providers</a></p>
            <p><a href="#" className="text-white" style={{ textDecoration: 'none' }}>Creativity</a></p>
          </div>

          {/* Contact */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Contact</h5>
            <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
            <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
          </div>

        </div>

        <hr className="mb-4" />

        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p>© {new Date().getFullYear()} Copyright: 
              <a href="#" style={{ textDecoration: 'none' }}>
                <strong className="text-warning"> YourBrand.com</strong>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  </>
  );
};

export default Footer;
