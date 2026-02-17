import React from 'react';
import './help.css';
import Header from '../../components/header/header.component';
const HomeBodyMessageCSS = {
    // backgroundColor: 'gray',
    fontStyle: 'Italic', 
    // width: '100%', 
    color:'black', 
    padding: '20px', 
    textAlign:'center', 
    // border: '5px solid #FFFFFF', 
    borderRadius: '8px',
    fontSize: '20px',
    lineHeight: '30px'
}
const MainDivCSS = {
    width: '100%', 
    // height:'50%',
    display: 'flex', 
    justifyContent: 'space-around',
    zIndex: 123
}
const NestedDivCSS = {
    width: '70%',
    height:'100%', 
    paddingLeft: '15px', 
    alignSelf:'center',
    zIndex: 123
    // backgroundColor: 'gray'
};
const astyles = {
    textDecoration: 'none'
};
const HelpPage = () => (<>
    <div className='home' >
        <Header />
        <div style={MainDivCSS}>
            <div style={NestedDivCSS}>
            
            <p style={HomeBodyMessageCSS}>
                <a style={astyles} href ={"https://github.com/gabrielnatividaddev-coder/calculator"}>https://github.com/gabrielnatividaddev-coder/calculator</a> <br/>
               <a style={astyles} href ={"https://github.com/gabrielnatividaddev-coder/boxing-news-website"}>https://github.com/gabrielnatividaddev-coder/boxing-news-website</a><br/>
               <a style={astyles} href ={"https://github.com/gabrielnatividaddev-coder/BMI-Calculator"}>https://github.com/gabrielnatividaddev-coder/BMI-Calculator</a> <br/>
               <a style={astyles} href ={"https://github.com/gabrielnatividaddev-coder/calculator"}>https://github.com/gabrielnatividaddev-coder/calculator</a> <br/>
               <a style={astyles} href ={"https://github.com/gabrielnatividaddev-coder/React-JS-Paint-Application"}>https://github.com/gabrielnatividaddev-coder/React-JS-Paint-Application</a> <br/>
                <a style={astyles} href={'https://newsapi.org/'} >https://newsapi.org/</a><br/>
               <a style={astyles} href={"https://fontawesome.com/download"}> https://fontawesome.com/download </a> <br/>
               <a style={astyles} href={"https://styled-components.com/"}> https://styled-components.com/ </a> <br/>
               <a style={astyles} href={"https://semantic-ui.com//"}> https://semantic-ui.com// </a> <br/>
               <a style={astyles} href={"https://react-redux.js.org/"}> https://react-redux.js.org/ </a> <br/>
            </p>
            </div>
            <p style={{width: '200px'}}></p>
        </div>
        
    </div>




    </>
);

export default HelpPage;
