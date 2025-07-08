import React, { useState } from 'react';
import "../Styles/Header.css";



function Header() {

  const [openMenu, setOpenMenu] = useState(false);

  const ChangeMenu = () => setOpenMenu(!openMenu);

  return (
    <div id="Main_Header_Div">
      <nav id='nav'>
        <h2 id='name'>Paramesh Kumar S</h2>
        <h3 id="Menu" onClick={ChangeMenu} style={{ display: openMenu ? "none" : "" }}>MENU</h3>

        <ul id="links" className={openMenu ? 'show' : 'hide'}>
          <li className='lists'><a onClick={ChangeMenu} href="#Main_Home_Div">Home</a></li>
          <li className='lists'><a onClick={ChangeMenu} href="#Main_About_Div">About</a></li>
          <li className='lists'><a onClick={ChangeMenu} href="#Main_Skill_Div">Skills</a></li>
          <li className='lists'><a onClick={ChangeMenu} href="#Main_Project_Div">Projects</a></li>
          <li className='lists'><a onClick={ChangeMenu} href="#Main_Experience_Div">Experience</a></li>
          <li className='lists'><a onClick={ChangeMenu} href="#Main_Contact_Div">Contact</a></li>

          {openMenu && (
            <li className='lists'><p onClick={ChangeMenu}
              style={{
                color: "red",
                fontSize: "20px",
                fontWeight:"bolder"
              }}
            >X</p></li>
          )}

        </ul>
      </nav>
    </div>
  );
}

export default Header;
