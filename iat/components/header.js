import PropTypes from 'prop-types';
import React from 'react';
import Menu from './theme/menu';
import SocialMenu from './theme/socialMenu';
import Link from 'next/link';
import classnames from 'classnames';

const mobileLogo = '/IA TECH LOGO 3.png'; // assuming the image is in the public directory

const styling = {
  backgroundImage: `url('/IA TECH LOGO 1.png')`, // assuming the image is in the public directory
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSidebar: false,
    };
  }

  showSidebar = () => {
    const current = this.state.showSidebar;
    this.setState({ showSidebar:!current });
  };

  render() {
    return (
      <header>
        <div id="topbar">
          <img src={mobileLogo} alt="IA Tech Ed" />
          <i
            tabIndex="0"
            onClick={this.showSidebar}
            className={classnames(
              `fas`,
              this.state.showSidebar? `fa-times` : `fa-bars`
            )}
          />
        </div>
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto py-4 py-md-0">
                    <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 active">
                      <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Home</a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <a className="dropdown-item" href="#">Another action</a>
                      </div>
                    </li>
                    <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                      <a className="nav-link" href="#">Portfolio</a>
                    </li>
                    <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                      <a className="nav-link" href="#">Agency</a>
                    </li>
                    <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                      <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Services</a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <a className="dropdown-item" href="#">Another action</a>
                      </div>
                    </li>
                    <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                      <a className="nav-link" href="#">Journal</a>
                    </li>
                    <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                      <a className="nav-link" href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div id="sidebar" className={this.state.showSidebar? 'show' : 'hide'}>
<div>
            <Link href="/" legacyBehavior>
              <div className="logo" style={styling} />
            </Link>
            <Menu />
            <SocialMenu />
            <div id="stars-container">
              <div id="stars" />
              <div id="stars2" />
              <div id="stars3" />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;