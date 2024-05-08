import React from 'react';
import FooterNav from './theme/footerNav';

const Footer = () => (
  <footer>
    <FooterNav />
    <div className="sub-footer row m-0">
      <div className="col-lg-4 p-2" id="footer-logos">
        <a href="https://amrita.edu">
          <img src="/logos/amrita.png" alt="amrita" />
        </a>
        <a href="https://bi0s.in/">
          <img src="/logos/bi0s.png" alt="bi0s" />
        </a>
      </div>
      <div className="col-lg-4 p-2">
        <div className="w-100">
          &copy; Team amFOSS 2007-{new Date().getFullYear()}. All Rights Reserved.
        </div>
      </div>
      <div className="col-lg-3 p-2">
        <div className="w-100">
          <a href="#privacy">Privacy</a>
          <a href="mailto:amritapurifoss@gmail.com">Feedback</a>
          <a href="https://coc.amfoss.in/">Code Of Conduct</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;