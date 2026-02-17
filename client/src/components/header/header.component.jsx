import React from 'react';
import JBDM from  '../../assets/javier.png';
import './header.css';
import {
  HeaderNavigator,
  NavItemsMenu,
  NavItems,
  ProfilePictureContainer
} from './header.styles';
const ImageStyleCSS = { 
  marginTop:'20px',
  verticalAlign: 'middle', 
  border: '5px solid #FFFFFF',
  filter: 'grayscale(25%)'
};
const CaptionStyleCSS = { 
  fontFamily:'Snell Roundhand, cursive', 
  fontWeight:'bold', 
  fontStyle: 'italic', 
  color: 'red', 
  textAlign:'center', 
  backgroundColor:'white'
};
const Header = ({showPicture}) => (
  <HeaderNavigator>
      <NavItemsMenu style={{zIndex: 123}}>
      <NavItems to='/' className='itemsReact'>HOME</NavItems>
      <NavItems to='/about' className='itemsReact'>ABOUT</NavItems>
      <NavItems to='/services' className='itemsReact'>APPLICATIONS</NavItems>
      <NavItems to='/help' className='itemsReact'>LINKS</NavItems>
    </NavItemsMenu>
    <div className='rightsection'>
      {!showPicture && <ProfilePictureContainer to='/'>
    <img width="200" className='setimage' src={JBDM} style={ImageStyleCSS} ></img>
    <figcaption className='setimagecaption' style={CaptionStyleCSS} >Gabriel Natividad</figcaption>
    </ProfilePictureContainer> }
 
    </div>
  </HeaderNavigator>
);


export default Header;
