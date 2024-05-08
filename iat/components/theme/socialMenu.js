import React from 'react';
import SocialIcon from './socialIcon';

const SocialMenu = () => (
  <div className="social-menu">
    <SocialIcon name="github" link="https://github.com/amfoss" />
    <SocialIcon name="facebook" link="https://facebook.com/amfoss.in" />
    <SocialIcon name="twitter" link="https://twitter.com/amfoss_in" />
    <SocialIcon name="instagram" link="https://instagram.com/amfoss.in" />
    <SocialIcon name="linkedin" link="https://linkedin.com/company/amfoss" />
    <SocialIcon
      name="matrix"
      link="https://matrix.to/#/%23amfoss-general:matrix.org"
    />
  </div>
);

export default SocialMenu;
