import PropTypes from 'prop-types';
import React from 'react';

const facebook = '/icons/facebook.png';
const instagram = '/icons/instagram.png';
const twitter = '/icons/twitter.png';
const linkedin = '/icons/linkedin.png';
const github = '/icons/github.png';
const website = '/icons/website.png';
const chatroom = '/icons/chatroom.png';
const gitlab = '/icons/gitlab.png';
const gmail = '/icons/gmail.png';
const telegram = '/icons/telegram.png';
const matrix = '/icons/matrix-logo.png';

const SocialIcon = ({ name, link }) =>
  link? (
    <a href={link} className="social-icon">
      {name === 'facebook'? <img src={facebook} alt={name} /> : null}
      {name === 'twitter'? <img src={twitter} alt={name} /> : null}
      {name === 'instagram'? <img src={instagram} alt={name} /> : null}
      {name === 'linkedin'? <img src={linkedin} alt={name} /> : null}
      {name === 'github'? <img src={github} alt={name} /> : null}
      {name === 'website'? <img src={website} alt={name} /> : null}
      {name === 'chatroom'? <img src={chatroom} alt={name} /> : null}
      {name === 'gitlab'? <img src={gitlab} alt={name} /> : null}
      {name === 'gmail'? <img src={gmail} alt={name} /> : null}
      {name === 'telegram'? <img src={telegram} alt={name} /> : null}
      {name === 'atrix'? <img src={matrix} alt={name} /> : null}
    </a>
  ) : null;

SocialIcon.propTypes = {
  name: PropTypes.oneOf([
    'facebook',
    'twitter',
    'instagram',
    'linkedin',
    'github',
    'website',
    'chatroom',
    'gmail',
    'gitlab',
    'telegram',
    'web',
    'atrix',
  ]),
  link: PropTypes.string,
};

SocialIcon.defaultProps = {
  name: `web`,
};

export default SocialIcon;