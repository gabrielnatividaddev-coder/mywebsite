import React from 'react';
import './services.css';
import Header from '../../components/header/header.component';
import boxing from '../../assets/boxing.png';
import paint from '../../assets/reactpaint.png';
import bmicalc from '../../assets/bmicalc.png';
import calculator from '../../assets/calc.png';
import ReactWebsiteHeader1 from '../../assets/ReactWebsiteHeader1.png';
import ReactWebsiteHeader2 from '../../assets/ReactWebsiteHeader2.png';
import ReactWebsiteSidebar1 from '../../assets/ReactWebsiteSidebar1.png';
import ReactWebsiteSidebar2 from '../../assets/ReactWebsiteSidebar2.png';
const ServicesPage = () => (<>
    <div className='home' >
        <Header showPicture={true} />
        <div className='outerservicesdiv'> 
            <div class="card-list">

                <a class="card-container" href ={"https://github.com/ricaricabile/boxing-news-website"}><img height="200" src={ReactWebsiteHeader1} ></img>
                    <p class="reduce">
                    <h4 class="reduceh">React Website Header 1</h4>
                    This is an example on how to implement a header in React JS using CSS Libraries. Website link: <a href={"https://basic-calculator-be080dcf00c0.herokuapp.com/"}>https://basic-calculator-be080dcf00c0.herokuapp.com/</a>
                    Github link <a href ={"https://github.com/gabrielnatividaddev-coder/React-Website-Header"}>https://github.com/gabrielnatividaddev-coder/React-Website-Header</a> 
                    </p>
                </a>   
            
                <a class="card-container" href ={"https://github.com/ricaricabile/boxing-news-website"}><img height="200" src={ReactWebsiteHeader2} ></img>
                    <p class="reduce">
                    <h4 class="reduceh">React Website Header 2</h4>
                    This is an example on how to implement a header in React JS using CSS Libraries.
                    Website link: <a href={"https://basic-calculator-be080dcf00c0.herokuapp.com/"}>https://basic-calculator-be080dcf00c0.herokuapp.com/</a>
                    Github link <a href ={"https://github.com/gabrielnatividaddev-coder/React-Website-Header-2"}>https://github.com/gabrielnatividaddev-coder/React-Website-Header-2</a> 
                    </p>
                </a>   
            
                <a class="card-container" href ={"https://github.com/ricaricabile/boxing-news-website"}><img height="200" src={ReactWebsiteSidebar1} ></img>
                    <p class="reduce">
                    <h4 class="reduceh">React Website Sidebar 1</h4>
                    This is an example on how to implement a Sidebar in React JS using CSS Libraries.
                    Website link: <a href={"https://basic-calculator-be080dcf00c0.herokuapp.com/"}>https://basic-calculator-be080dcf00c0.herokuapp.com/</a>
                    Github link <a href ={"https://github.com/gabrielnatividaddev-coder/React-Website-Sidebar"}>https://github.com/gabrielnatividaddev-coder/React-Website-Sidebar</a> 
                    </p>
                </a>   
            
                <a class="card-container" href ={"https://github.com/ricaricabile/boxing-news-website"}><img height="200" src={ReactWebsiteSidebar2} ></img>
                    <p class="reduce">
                    <h4 class="reduceh">React Website Sidebar 2</h4>
                    This is an example on how to implement a Sidebar in React JS using CSS Libraries. 
                    Website link: <a href={"https://basic-calculator-be080dcf00c0.herokuapp.com/"}>https://basic-calculator-be080dcf00c0.herokuapp.com/</a>
                    Github link <a href ={"https://github.com/gabrielnatividaddev-coder/React-Website-Sidebar-2"}>https://github.com/gabrielnatividaddev-coder/React-Website-Sidebar-2</a> 
                    </p>
                </a>

                <a class="card-container"  href ={"https://github.com/ricaricabile/boxing-news-website"} >
                    <img height="200" src={boxing} ></img>
                    <p class="reduce">
                    <h4 class="reduceh">World Boxing News Website</h4>
                    This application fetches the latest boxing news using this api ( <a href={'https://newsapi.org/'} >https://newsapi.org/</a> ) The frontend used in this application is React JS and for the Backend Node JS with express js framework. This application uses React-Redux for state management. Website link: ( <a href="https://boxing-news-website-live-eb4bad6591ca.herokuapp.com/">https://boxing-news-website-live-eb4bad6591ca.herokuapp.com</a> )
                    Github link <a href ={"https://github.com/gabrielnatividaddev-coder/boxing-news-website"}>https://github.com/gabrielnatividaddev-coder/boxing-news-website</a> 
                    </p>
                </a>

                <a class="card-container" href ={"https://github.com/ricaricabile/boxing-news-website"}><img height="200" src={paint} ></img>
                    <p class="reduce">
                    <h4 class="reduceh">React JS Paint Application</h4>
                    This is a React JS paint website application. The website application has a guide on how to use tools/colors etc. The frontend used in this application is React JS and for the Backend Node JS. This application uses React-Redux for state management. Website link: ( <a href="https://boxing-news-website-live-eb4bad6591ca.herokuapp.com/">https://boxing-news-website-live-eb4bad6591ca.herokuapp.com</a> ) Github link  <a href ={"https://github.com/gabrielnatividaddev-coder/React-JS-Paint-Application"}>https://github.com/gabrielnatividaddev-coder/React-JS-Paint-Application</a>
                    </p>
                </a>

                <a class="card-container" href ={"https://github.com/ricaricabile/boxing-news-website"}><img height="200" src={bmicalc} ></img>
                    <p class="reduce">
                    <h4  class="reduceh">BMI Calculator Website</h4>
                    This application calculates a person body mass index. 
                    The frontend used in this application is React JS and Mantine UI, Styled Components, CSS and for the Backend Node JS with express js framework.
                    This application uses React-Redux for state management.
                    Website link:  <a href ={"https://bmi-calculator-live-ad16371bd9f6.herokuapp.com/"}>https://bmi-calculator-live-ad16371bd9f6.herokuapp.com/</a> 
                    Github link <a href ={"https://github.com/gabrielnatividaddev-coder/BMI-Calculator"}>https://github.com/gabrielnatividaddev-coder/BMI-Calculator</a> 
                    </p>
                </a>

                <a class="card-container" href ={"https://github.com/ricaricabile/boxing-news-website"}><img height="200" src={calculator} ></img>
                    <p class="reduce">
                    <h4 class="reduceh">Basic Calculator Application</h4>
                    This is a calculator application you can perform basic mathematical operations.
                    This application is built using React.JS and ECMAScript 2023 javascript, Mantine UI and has an inbuilt redux state management scaffold that I made you should see more of redux on my other projects.
                    Website link: <a href={"https://basic-calculator-be080dcf00c0.herokuapp.com/"}>https://basic-calculator-be080dcf00c0.herokuapp.com/</a>
                    Github link <a href ={"https://github.com/gabrielnatividaddev-coder/calculator"}>https://github.com/gabrielnatividaddev-coder/calculator</a> 
                    </p>
                </a>
          
        </div>

        </div>
        
    </div>




    </>
);

export default ServicesPage;
