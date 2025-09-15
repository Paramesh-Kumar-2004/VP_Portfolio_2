import React, { useState } from 'react';
import "../Styles/Header.css";
import Hamburger from './Hamburger';



function Header() {

  const [openMenu, setOpenMenu] = useState(false);

  const ChangeMenu = () => setOpenMenu(!openMenu);

  return (
    <div id="Main_Header_Div">
      <nav id='nav'>
        <h2 id='name'>Paramesh Kumar S</h2>
        {/* <h3 id="Menu" onClick={ChangeMenu}>{!openMenu ? "MENU" : "Close"}</h3> */}

        <h1 onClick={ChangeMenu} id="Menu">
          <Hamburger OpenMenu={openMenu} />
        </h1>

        <ul id="links" className={openMenu ? 'show' : 'hide'}>
          <li className='lists'><a onClick={ChangeMenu} href="#Home">Home</a></li>
          <li className='lists'><a onClick={ChangeMenu} href="#About">About</a></li>
          <li className='lists'><a onClick={ChangeMenu} href="#Skills">Skills</a></li>
          <li className='lists'><a onClick={ChangeMenu} href="#Projects">Projects</a></li>
          <li className='lists'><a onClick={ChangeMenu} href="#Experience">Experience</a></li>
          <li className='lists'><a onClick={ChangeMenu} href="#Contact">Contact</a></li>
        </ul>

      </nav>
    </div>
  );
}

export default Header;
