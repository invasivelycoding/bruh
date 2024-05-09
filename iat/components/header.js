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