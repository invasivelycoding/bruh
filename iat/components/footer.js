import React from 'react';
import FooterNav from './theme/footerNav';

const Footer = () => (
  <footer>
    <FooterNav />
    <div className="sub-footer row m-0">
      <div className="col-lg-4 p-2">
        <div className="w-100">
          &copy; Team IAT 2024-{new Date().getFullYear()}.
        </div>
      </div>
      <div className="col-lg-3 p-2">
        <div className="w-100">
          <a href="#privacy">Privacy</a>
          <a href="mailto:cc@email.com">Feedback</a>
          <a href="https://example.com">Code Of Conduct</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;