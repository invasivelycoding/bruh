import PropTypes from 'prop-types';
import React from 'react';
import Menu from './theme/menu';
import SocialMenu from './theme/socialMenu';
import Link from 'next/link';
import classnames from 'classnames';

const amFOSSLogo = '/amfoss_logo.png'; // assuming the image is in the public directory

const styling = {
  backgroundImage: `url('/logo_light.png')`, // assuming the image is in the public directory
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
          <img src={amFOSSLogo} alt="amFOSS" />
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
          </div>
        </div>
      </header>
    );
  }
}

export default Header;