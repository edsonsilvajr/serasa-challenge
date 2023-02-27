import { Header, Links } from './header.styles';
import SerasaLogo from '../../../assets/images/serasa-logo-full.svg';
import { HeadingS, SubHeading } from '../../atoms/typography';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
const SerasaHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };
  return (
    <Header>
      <img src={SerasaLogo} alt='Serasa-Logo' height={80} width={170.656}></img>
      <HeadingS color='light-solid' display='conditional' onClick={toggleMenu}>
        <GiHamburgerMenu></GiHamburgerMenu>
      </HeadingS>
      <Links mobile={showMenu}>
        <li>
          <SubHeading as='a' color='light-high' href='#top'>
            Intro
          </SubHeading>
        </li>
        <li>
          <SubHeading as='a' color='light-high' href='#rating'>
            Contact
          </SubHeading>
        </li>
      </Links>
    </Header>
  );
};

export { SerasaHeader };
