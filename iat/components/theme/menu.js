import React from 'react';
import MenuItem from './menuItem';
import Link from 'next/link';

const homeIcon = '/icons/home.png';
const aboutIcon = '/icons/bulb.png';
const lifeIcon = '/icons/mentorship.png';
const achievementsIcon = '/icons/crown.png';
const membersIcon = '/icons/coworking.png';
const ProjectsIcon = '/icons/project.png';
const blogIcon = '/icons/blog.png';
const newsIcon = '/icons/newsArt.png';
const crowdsIcon = '/icons/crowd.png';

const Menu = () => (
  <div className="menu">
    <Link href="/">

      <MenuItem name="Home" icon={homeIcon} />

    </Link>
    <Link href="/about">

      <MenuItem name="About" icon={aboutIcon} />

    </Link>
    <Link href="/life">

      <MenuItem name="Life in Club" icon={lifeIcon} />

    </Link>
    <Link href="/achievements">

      <MenuItem name="Achievements" icon={achievementsIcon} />

    </Link>
    <Link href="/members">

      <MenuItem name="Members" icon={membersIcon} />

    </Link>
    <Link href="/projects">

      <MenuItem name="Projects" icon={ProjectsIcon} />

    </Link>
    {/*<Link href = "/events"><a><MenuItem name="Events" icon={crowdsIcon} /></a></Link>*/}
    <Link href="/news">

      <MenuItem name="News" icon={newsIcon} />

    </Link>
    <Link href="/blog">

      <MenuItem name="Blog" icon={blogIcon} />

    </Link>
  </div>
);

export default Menu;