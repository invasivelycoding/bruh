import React from 'react';

const FooterNav = () => (
  <div id="footer-nav">
    <div className="row m-0">
      <div className="col-lg-2 col-6  d-flex justify-content-center p-2">
        <div>
          <h4>The Club</h4>
          <ul>
            <li>
              <a href="/about#story">Our Story</a>
            </li>
            <li>
              <a href="/members">Members</a>
            </li>
            <li>
              <a href="/about#teams">Teams</a>
            </li>
            <li>
              <a href="/about#timeline">Timeline</a>
            </li>
            <li>
              <a href="/achievements">Achievements</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-2 col-6 d-flex justify-content-center p-2">
        <div>
          <h4>For Students</h4>
          <ul>
            <li>
              <a href="https://join.amfoss.in/">How to Join?</a>
            </li>
            <li>
              <a href="https://github.com/amfoss/vidyaratna">Learning Resources</a>
            </li>
            <li>
              <a href="https://github.com/amfoss/workshops">
                Workshops & Event Resources
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-2 col-6  d-flex p-2">
        <div>
          <h4>For Partners</h4>
          <ul>
            <li>
              <a href="/members">View Profiles</a>
            </li>
            <li>
              <a href="/projects">View Projects</a>
            </li>
            <li>
              <a href="/about#impact">Our Impact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-2 col-6 p-2">
        <div>
          <h4>The Community</h4>
          <ul>
            <li>
              <a href="/blog">IAT Blog</a>
            </li>
            <li>
              <a href="/about#social-initiatives">Social Initiatives</a>
            </li>
            <li>
              <a href="/">Events & Workshops</a>
            </li>
            <li>
              <a href="/news">Press & Media</a>
            </li>
            <li>
              <a href="/branding">Branding</a>
            </li>
          </ul>
        </div>
      </div>
      <div id="contact-details" className="d-flex flex-column">
        <div id="contact">
          <h4>Contact Us</h4>
          <div className="footer-contact">
            <h6>
              <i className="fa fa-envelope" /> Email
            </h6>
            <p>
              Email:{' '}
              <a href="mailto:cc@email.com"> cc@email.com</a>
              <br />
              School Contact:{' '}
              <a href="mailto:cc@email.com">cc@email.com</a>
              <br />
            </p>
            <h6>
              <i className="fa fa-location-arrow" /> Address
            </h6>
            <p>
              1800 Grand Ave, <br />
              Des Moines, IA <br />
              50309 <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FooterNav;
