import React from 'react';
import styled from 'styled-components';



function Github() {
  return (
    <StyledWrapper>
      <div className="tooltip-container">
        <div className="tooltip">
          <div className="profile">
            <div className="user">
              {/* <div className="img"></div> */}
              <div className="details">
                <div className="name">Github_User_Name&#160;&#160;&#160;&#160;</div>
                <div className="username">Paramesh-Kumar-2004</div>
              </div>
            </div>
            <div className="about">18 Repositories</div>
          </div>
        </div>
        <div className="text">
          <a className="icon" href="https://github.com/Paramesh-Kumar-2004" target="blank" rel="noopener noreferrer">
            <div className="layer">
              <span />
              <span />
              <span />
              <span />
              <span className="githubSVG">
                <svg fill="white" className="svgIcon" viewBox="0 0 16 16" height="1.5em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.1 0 0 .67-.21 2.2.82a7.6 7.6 0 012-.27 7.6 7.6 0 012 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.09.16 1.9.08 2.1.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </span>
            </div>
            <div className="text">GitHub</div>
          </a>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .tooltip-container {
    position: relative;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 17px;
    border-radius: 10px;
  }

  .tooltip {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s;
    border-radius: 15px;
    box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
      inset -5px -5px 15px rgba(255, 255, 255, 0.1),
      5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
  }

  .profile {
    // width:160px;
    background: #2a2b2f;
    border-radius: 10px 15px;
    padding: 10px;
    border: 1px solid #24292e;
  }

  .tooltip-container:hover .tooltip {
    top: -150px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  .icon {
    text-decoration: none;
    color: #fff;
    display: block;
    position: relative;
  }

  .layer {
    width: 50px;
    height: 50px;
    transition: transform 0.3s;
  }

  .icon:hover .layer {
    transform: rotate(-35deg) skew(20deg);
  }

  .layer span {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border: 1px solid #fff;
    transition: all 0.3s;
    border-radius: 5px;
  }

  .layer span,
  .text {
    color: gray;
    border-color: gray;
  }

  .icon:hover.layer span {
    box-shadow: -1px 1px 3px #24292e;
  }

  .icon .text {
    position: absolute;
    left: 50%;
    bottom: -5px;
    opacity: 0;
    font-weight: 500;
    transform: translateX(-50%);
    transition: bottom 0.3s ease, opacity 0.3s ease;
  }

  .icon:hover .text {
    bottom: -35px;
    opacity: 1;
  }

  .icon:hover .layer span:nth-child(1) { opacity: 0.2; }
  .icon:hover .layer span:nth-child(2) { opacity: 0.4; transform: translate(5px, -5px); }
  .icon:hover .layer span:nth-child(3) { opacity: 0.6; transform: translate(10px, -10px); }
  .icon:hover .layer span:nth-child(4) { opacity: 0.8; transform: translate(15px, -15px); }
  .icon:hover .layer span:nth-child(5) { opacity: 1; transform: translate(20px, -20px); }

  .githubSVG {
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #24292e;
    // border-radius: 10px;
  }

  .user {
    display: flex;
    gap: 10px;
  }

  .img {
    width: 50px;
    color: red;
    height: 50px;
    font-size: 25px;
    font-weight: 700;
    border: 1px solid #24292e;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
  }

  .name {
    font-size: 17px;
    font-weight: 700;
    color: gray;
  }

  .details {
    display: flex;
    flex-direction: column;
    gap: 0;
    color: #fff;
  }

  .about {
    color: #ccc;
    padding-top: 5px;
  }
`;

export default Github;
