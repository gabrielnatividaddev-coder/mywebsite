import React from 'react';
import './help.css';
import Header from '../../components/header/header.component';
const HomeBodyMessageCSS = {
    fontStyle: 'Italic', 
    color:'black', 
    padding: '20px', 
    textAlign:'center', 
    borderRadius: '8px',
    fontSize: '20px',
    lineHeight: '30px'
}
const MainDivCSS = {
    width: '100%', 
    zIndex: 123
}
const NestedDivCSS = {
    height:'100%', 
    paddingLeft: '15px', 
    zIndex: 123
};
const astyles = {
    textDecoration: 'none'
};
const HelpPage = () => (<>
    <div className='home' >
        <Header showPicture={true}/>
        <div style={MainDivCSS}>
            <div style={NestedDivCSS}>

            <p style={HomeBodyMessageCSS}>
                <a style={astyles} href ={"https://github.com/gabrielnatividaddev-coder/calculator"}>https://github.com/gabrielnatividaddev-coder/calculator</a> <br/>
               <a style={astyles} href ={"https://github.com/gabrielnatividaddev-coder/boxing-news-website"}>https://github.com/gabrielnatividaddev-coder/boxing-news-website</a><br/>
               <a style={astyles} href ={"https://github.com/gabrielnatividaddev-coder/BMI-Calculator"}>https://github.com/gabrielnatividaddev-coder/BMI-Calculator</a> <br/>
               <a style={astyles} href ={"https://github.com/gabrielnatividaddev-coder/React-JS-Paint-Application"}>https://github.com/gabrielnatividaddev-coder/React-JS-Paint-Application</a> <br/>      
               <a style={astyles} href ={"https://github.com/gabrielnatividaddev-coder/React-Website-Sidebar"}>https://github.com/gabrielnatividaddev-coder/React-Website-Sidebar</a> <br/>
               <a style={astyles} href ={"https://github.com/gabrielnatividaddev-coder/React-Website-Sidebar-2"}>https://github.com/gabrielnatividaddev-coder/React-Website-Sidebar-2</a><br/>
               <a style={astyles} href ={"https://github.com/gabrielnatividaddev-coder/React-Website-Header"}>https://github.com/gabrielnatividaddev-coder/React-Website-Header</a> <br/>
               <a style={astyles} href ={"https://github.com/gabrielnatividaddev-coder/React-Website-Header-2"}>https://github.com/gabrielnatividaddev-coder/React-Website-Header-2</a> <br/>     
               <a style={astyles} href={'https://newsapi.org/'} >https://newsapi.org/</a><br/>
               <a style={astyles} href={"https://tabler.io/icons"}> https://tabler.io/icons </a> <br/>
               <a style={astyles} href={"https://styled-components.com/"}> https://styled-components.com/ </a> <br/>
               <a style={astyles} href={"https://semantic-ui.com//"}> https://semantic-ui.com// </a> <br/>
               <a style={astyles} href={"https://react-redux.js.org/"}> https://react-redux.js.org/ </a> <br/>
               <a style={astyles} href={"https://mantine.dev/getting-started/"}> https://mantine.dev/getting-started/ </a> <br/>
            </p>
            </div>
            <p style={{width: '200px'}}></p>
        </div>
        
    </div>




    </>
);

export default HelpPage;
