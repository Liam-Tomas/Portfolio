// import React, { useState, useRef } from 'react';
// import styled, { keyframes } from 'styled-components';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import Toggle from './Toggler.js';
// import { Link } from 'react-router-dom';
// import { faChartBar, faSquarePollVertical } from '@fortawesome/free-solid-svg-icons';
// import { useLocation } from 'react-router-dom';
// import { faBars } from '@fortawesome/free-solid-svg-icons';
// import { faPalette } from '@fortawesome/free-solid-svg-icons';


// const NavbarLink = styled(Link)`
//   text-decoration: none;
//   color: inherit; // Ensures the link color matches your theme
// `;



// const NavbarContainer = styled.div`
//   z-index:1000;
//   padding: 15px 0px;
//   position:fixed;
//   left: 0;
//   top: 0;
//   height: 100vh;
//   background-color: #f8fafc;
//   background: ${props => props.theme.card};
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
//   // border-right: 1px solid ${props => props.theme.borderColor};
//   box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 5px 0px;

//   @media (max-width: 868px) {
//     width: 80px; // Adjust width as needed
//     transform: translateX(${props => props.isOpen ? '0' : '-100%'});
//     transition: transform 0.3s ease;
//   }
// `;

// const NavbarItems = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;



// const StyledIcon = styled(FontAwesomeIcon)`
//   font-size: 1rem;
//   padding: 7.5px 17.5px;
//   border-radius: 20px;
//   background-color: ${(props) => props.isActive ? props.theme.buttonHoverBackground : 'none'};
//   color: ${(props) => props.isActive ? props.theme.text : 'none'};
//   transition: background-color 0.15s;

// `

// const NavbarItem = styled.div`
//   position: relative;
//   gap: 1px;
//   font-size: .8rem;
//   align-items: center;
//   font-weight: 400;
//   margin: 9px 0;
//   cursor: pointer;
//   display: flex;
//   flex-direction: column;
//   padding: 4px 17px;
//   // transition: background-color 0.2s, box-shadow 0.3s;
//   // overflow: hidden;
//   color: ${props => props.theme.secondary};
//   user-select: none;
//   color: ${(props) => props.isActive ? props.theme.texpt : 'none'};
//   &:hover {
//     color: ${props => props.theme.text};
//     ${StyledIcon} {
//       background-color: ${props => props.theme.buttonHoverBackground};
//     }
//   &:active {
//     color: ${props => props.theme.text};

//     ${StyledIcon} {
//       transform: scale(.92);
//     }
//   }
// `;

// const SubMenu = styled.div`
//   position: absolute;
//   height:100vh;
//   background-color: ${props => props.theme.card};
//   top: 0;
//   left: 100%; // Adjust as needed to position correctly
//   width: 200px; 
//   z-index: 100; 
//   display: flex;
//   flex-direction: column;
//   border-rdaius: 15px;
//   gap: 10px;
//   padding: 25px 15px 15px 15px;
//   box-shadow: 5px 0 5px -5px rgba(0, 0, 0, 0.2); // Adjust as needed
//   border-left: 1px solid ${props => props.theme.buttonHoverBackground};

// `;

// const SubMenuItem = styled(Link)`
//   text-decoration: none;
//   transition: background-color 0.15s;
//   font-size: .95rem;
//   color: inherit; // Ensures the link color matches your theme
//   padding: 10px 15px;
//   font-weight: 500;
//   border-radius: 25px;
//   &:hover {
//     background-color: ${props => props.theme.buttonHoverBackground};
//   }
//   &:active {
//     transform: scale(.98);
// `;

// const HamburgerButton = styled.button`
//   background: none;
//   color :red;
//   border: none;
//   display: none; // Hidden by default
//   cursor: pointer;
//   font-size: 24px;
//   position: fixed;
//   top: 10px; // Adjust the position as needed
//   left: 10px;
//   z-index: 1100; // Make sure it's above other elements

//   @media (max-width: 768px) {
//     display: block; // Show only on mobile screens
//   }
// `;

// const Navbar = ({ theme, toggleTheme, toggleColorScheme }) => {
//   const location = useLocation(); // This line gets the current location
//   const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);
//   let navbarContainerRef = useRef(null);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };
//   let submenuRef = useRef(null);

//   const handleMouseEnter = () => {
//     setIsSubmenuVisible(true);
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleMouseLeave = (e) => {
//     // Ensure that relatedTarget exists and is a Node
//     if (!e.relatedTarget || !(e.relatedTarget instanceof Node)) {
//       setIsSubmenuVisible(false);
//       return;
//     }

//     // Check if the mouse is still within the NavbarContainer
//     if (navbarContainerRef.current && !navbarContainerRef.current.contains(e.relatedTarget)) {
//       setIsSubmenuVisible(false);
//     }
//   };

//   const closeSubmenu = () => {
//     setIsSubmenuVisible(false);
//   };



//   const [rippleState, setRippleState] = useState({
//     home: { x: -1, y: -1, active: false },
//     about: { x: -1, y: -1, active: false },
//     contact: { x: -1, y: -1, active: false },
//     toggle: { x: -1, y: -1, active: false },
//     dashboard: { x: -1, y: -1, active: false }
//   });

//   const handleRipple = (event, item) => {
//     const rect = event.currentTarget.getBoundingClientRect();
//     setRippleState({
//       ...rippleState,
//       [item]: {
//         x: event.clientX - rect.left - rect.width / 2,
//         y: event.clientY - rect.top - rect.height / 2,
//         active: true
//       }
//     });
//     setTimeout(() => setRippleState(prevState => ({
//       ...prevState,
//       [item]: { ...prevState[item], active: false }
//     })), 600);
//   };

//   const handleHomeClick = (e) => {
//     handleRipple(e, 'home');
//     closeSubmenu();
//   };

//   const handleAboutClick = (e) => {
//     handleRipple(e, 'about');
//     closeSubmenu();
//   };

//   return (
//     <div>
//       <NavbarContainer isOpen={isMenuOpen} ref={navbarContainerRef}>
//         <NavbarItems>
//           <NavbarLink to="/">
//             <NavbarItem
//               onClick={handleHomeClick}
//             >
//               <StyledIcon icon={faHome} isActive={location.pathname === '/'}
//               />
//               Home
//             </NavbarItem>
//           </NavbarLink>
//           <NavbarLink to="/about">
//             <NavbarItem
//               onClick={handleAboutClick}
//             >
//               <StyledIcon icon={faUser} isActive={location.pathname === '/about'} />
//               About
//             </NavbarItem>
//           </NavbarLink>
//           <NavbarLink to="/contact">
//             <NavbarItem onClick={handleAboutClick}>
//               <StyledIcon icon={faEnvelope} isActive={location.pathname === '/contact'} />
//               Contact
//             </NavbarItem>
//           </NavbarLink>

//           <NavbarItem
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//             onClick={e => handleRipple(e, 'dashboard')}
//           >
//             {/* {rippleState.dashboard.active && <RippleSpan style={{ left: rippleState.dashboard.x, top: rippleState.dashboard.y }} />} */}
//             <StyledIcon icon={faChartBar} isActive={location.pathname === '/vehicle-theft' || location.pathname === '/mental-health' || location.pathname === '/assault' || location.pathname === '/drugs'} />
//             Projects
//           </NavbarItem>


//           {isSubmenuVisible && (
//             <SubMenu ref={submenuRef} onMouseLeave={handleMouseLeave}>
//               <SubMenuItem to="/vehicle-theft" onClick={closeSubmenu}>SubMenu Item1</SubMenuItem>
//               <SubMenuItem to="/mental-health" onClick={closeSubmenu}>SubMenu Item2</SubMenuItem>
//               <SubMenuItem to="/assault" onClick={closeSubmenu}>SubMenu Item3</SubMenuItem>
//               <SubMenuItem to="/drugs" onClick={closeSubmenu}>SubMenu Item4</SubMenuItem>
//             </SubMenu>
//           )}
//           <NavbarItem onClick={toggleColorScheme}>
//             <StyledIcon icon={faPalette} />
//             Color
//           </NavbarItem>


//         </NavbarItems>

//         <Toggle theme={theme} toggleTheme={toggleTheme} />

//       </NavbarContainer>
//       <HamburgerButton onClick={toggleMenu}>
//         <FontAwesomeIcon icon={faBars} />
//       </HamburgerButton>
//     </div>
//   );
// };


// export default Navbar;


import React, { useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Toggle from './Toggler.js';
import { Link } from 'react-router-dom';
import { faChartBar, faSquarePollVertical } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import ColorSchemeModal from '../ColorSchemeModal.js'// Adjust the path as necessary


const NavbarLink = styled(Link)`
  text-decoration: none;
  color: inherit; // Ensures the link color matches your theme
`;



const NavbarContainer = styled.div`
  z-index:1000;
  padding: 15px 0px;
  position:fixed;
  left: 0;
  top: 0;
  height: 100vh;
  background-color: #f8fafc;
  background: ${props => props.theme.card};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  // border-right: 1px solid ${props => props.theme.borderColor};
  box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 5px 0px;

  @media (max-width: 868px) {
    width: 250px; // Adjust width as needed
    transform: translateX(${props => props.isOpen ? '0' : '-100%'});
    transition: transform 0.3s ease;
  }
`;

const NavbarItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;


`;



const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 1rem;
  padding: 7.5px 17.5px;
  border-radius: 20px;
  background-color: ${(props) => props.isActive ? props.theme.buttonHoverBackground : 'none'};
  color: ${(props) => props.isActive ? props.theme.text : 'none'};
  transition: background-color 0.15s;

`

const NavbarItem = styled.div`
  position: relative;
  gap: 1px;
  font-size: .8rem;
  align-items: center;
  font-weight: 400;
  margin: 9px 0;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 4px 17px;
  // transition: background-color 0.2s, box-shadow 0.3s;
  // overflow: hidden;
  color: ${props => props.theme.secondary};
  user-select: none;
  color: ${(props) => props.isActive ? props.theme.texpt : 'none'};
  &:hover {
    color: ${props => props.theme.text};
    ${StyledIcon} {
      background-color: ${props => props.theme.buttonHoverBackground};
    }
  &:active {
    color: ${props => props.theme.text};
    
    ${StyledIcon} {
      transform: scale(.92);
    }
  }
  
  @media (max-width: 768px) { // Adjust this breakpoint as needed
    flex-direction: row; // Change to row in mobile mode
  }

`;

const SubMenu = styled.div`
  position: absolute;
  height:100vh;
  background-color: ${props => props.theme.card};
  top: 0;
  left: 100%; // Adjust as needed to position correctly
  width: 200px; 
  z-index: 100; 
  display: flex;
  flex-direction: column;
  border-rdaius: 15px;
  gap: 10px;
  padding: 25px 15px 15px 15px;
  box-shadow: 5px 0 5px -5px rgba(0, 0, 0, 0.2); // Adjust as needed
  border-left: 1px solid ${props => props.theme.buttonHoverBackground};

`;

const SubMenuItem = styled(Link)`
  text-decoration: none;
  transition: background-color 0.15s;
  font-size: .95rem;
  color: inherit; // Ensures the link color matches your theme
  padding: 10px 15px;
  font-weight: 500;
  border-radius: 25px;
  &:hover {
    background-color: ${props => props.theme.buttonHoverBackground};
  }
  &:active {
    transform: scale(.98);
`;

const HamburgerButton = styled.button`
  background: none;
  color :red;
  border: none;
  display: none; // Hidden by default
  cursor: pointer;
  font-size: 24px;
  position: fixed;
  top: 10px; // Adjust the position as needed
  left: 10px;
  z-index: 1100; // Make sure it's above other elements

  @media (max-width: 768px) {
    display: block; // Show only on mobile screens
  }
`;

const Navbar = ({ theme, toggleTheme, setColorScheme }) => {
  const location = useLocation(); // This line gets the current location
  const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);
  let navbarContainerRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const colorItemRef = useRef(null);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const toggleModal = () => {
    if (colorItemRef.current) {
      const rect = colorItemRef.current.getBoundingClientRect();
      setModalPosition({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX });
    }
    setIsModalOpen(!isModalOpen);
  };


  let submenuRef = useRef(null);

  const handleMouseEnter = () => {
    setIsSubmenuVisible(true);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseLeave = (e) => {
    // Ensure that relatedTarget exists and is a Node
    if (!e.relatedTarget || !(e.relatedTarget instanceof Node)) {
      setIsSubmenuVisible(false);
      return;
    }

    // Check if the mouse is still within the NavbarContainer
    if (navbarContainerRef.current && !navbarContainerRef.current.contains(e.relatedTarget)) {
      setIsSubmenuVisible(false);
    }
  };

  const closeSubmenu = () => {
    setIsSubmenuVisible(false);
  };



  const [rippleState, setRippleState] = useState({
    home: { x: -1, y: -1, active: false },
    about: { x: -1, y: -1, active: false },
    contact: { x: -1, y: -1, active: false },
    toggle: { x: -1, y: -1, active: false },
    dashboard: { x: -1, y: -1, active: false }
  });

  const handleRipple = (event, item) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setRippleState({
      ...rippleState,
      [item]: {
        x: event.clientX - rect.left - rect.width / 2,
        y: event.clientY - rect.top - rect.height / 2,
        active: true
      }
    });
    setTimeout(() => setRippleState(prevState => ({
      ...prevState,
      [item]: { ...prevState[item], active: false }
    })), 600);
  };

  const handleHomeClick = (e) => {
    handleRipple(e, 'home');
    closeSubmenu();
  };

  const handleAboutClick = (e) => {
    handleRipple(e, 'about');
    closeSubmenu();
  };

  const handleColorSchemeChange = (color) => {
    setColorScheme(color); // Directly using the prop without 'props.' prefix
    toggleModal(); // Close the modal after changing the color scheme
  };


  return (
    <div>
      <NavbarContainer isOpen={isMenuOpen} ref={navbarContainerRef}>
        <NavbarItems>
          <NavbarLink to="/">
            <NavbarItem
              onClick={handleHomeClick}
            >
              <StyledIcon icon={faHome} isActive={location.pathname === '/'}
              />
              Home
            </NavbarItem>
          </NavbarLink>
          <NavbarLink to="/about">
            <NavbarItem
              onClick={handleAboutClick}
            >
              <StyledIcon icon={faUser} isActive={location.pathname === '/about'} />
              Resume
            </NavbarItem>
          </NavbarLink>
          <NavbarLink to="/contact">
            <NavbarItem onClick={handleAboutClick}>
              <StyledIcon icon={faEnvelope} isActive={location.pathname === '/contact'} />
              Contact
            </NavbarItem>
          </NavbarLink>

          {/* <NavbarItem
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={e => handleRipple(e, 'dashboard')}
          >
            <StyledIcon icon={faChartBar} isActive={location.pathname === '/vehicle-theft' || location.pathname === '/mental-health' || location.pathname === '/assault' || location.pathname === '/drugs'} />
            Projects
          </NavbarItem> */}


          {isSubmenuVisible && (
            <SubMenu ref={submenuRef} onMouseLeave={handleMouseLeave}>
              <SubMenuItem to="/vehicle-theft" onClick={closeSubmenu}>SubMenu Item1</SubMenuItem>
              <SubMenuItem to="/mental-health" onClick={closeSubmenu}>SubMenu Item2</SubMenuItem>
              <SubMenuItem to="/assault" onClick={closeSubmenu}>SubMenu Item3</SubMenuItem>
              <SubMenuItem to="/drugs" onClick={closeSubmenu}>SubMenu Item4</SubMenuItem>
            </SubMenu>
          )}
          <NavbarItem ref={colorItemRef} onClick={toggleModal}>
            <StyledIcon icon={faPalette} isActive={isModalOpen} />
            Color
          </NavbarItem>
          <ColorSchemeModal
            isModalOpen={isModalOpen}
            toggleModal={toggleModal}
            setColorScheme={handleColorSchemeChange}
            top={modalPosition.top}
            left={modalPosition.left}
          />

        </NavbarItems>

        <Toggle theme={theme} toggleTheme={toggleTheme} />

      </NavbarContainer>

      <HamburgerButton onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </HamburgerButton>
    </div>
  );
};


export default Navbar;

