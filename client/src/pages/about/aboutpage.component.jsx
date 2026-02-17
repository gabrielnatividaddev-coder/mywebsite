import React from 'react';
import './aboutpage.css';
import Header from '../../components/header/header.component';
import Samsung from '../../assets/samsung_electronics_logo.jpg';
import Hypereonlabs from '../../assets/hypereonlabs_logo.jpg';
import collabera from '../../assets/collabera_digital_logo.jpg';
import proup from '../../assets/proup.jpg';
const HomeBodyMessageCSS = {
    color:'black', 
    padding: '5px',
    // textAlign:'left',  
    fontSize: '18px',
    fontFamily: 'Verdana, sans-serif'
}
const MainDivCSS = {
    width: '100%', 
    display: 'flex', 
    justifyContent: 'space-around',
    background: 'white'
}
const NestedDivCSS = {
    width: '70%',
    height:'100%', 
    paddingLeft: '15px', 
    paddingBottom: '30px',
    alignSelf:'center',
    zIndex: 123
};
const AboutPage = () => (
    <div className='home' >
        <Header />
        <div style={MainDivCSS}>
            <div style={NestedDivCSS}>
            <p style={HomeBodyMessageCSS}>
            Hi! Im Gabriel M. Nativdad, I have a degree in Computer Science, while studying 
            I also work for a consulting company that specializes in sales and operation tools in the construction industry 
            then I moved on to explore the banking industry creating backend and frontend web programs.
            I am very effective in all aspects of Software development because of my background in Computer Science,
            and working experience in four different industries. My most current work experience was in Samsung please see in my work experience section on this page
            </p>
            <h3 className='workexperienceheaders'>Accomplishments: </h3>
            • <span style={{color: 'red'}}>Samsung Web Developer (2023-2024)</span>.<br/>
             ~<span style={{color: 'darkblue'}}>“TestDome” certified(Top 10%) for JavaScript, React, Node, PHP, ASP.NET core (MVC), Angular, TypeScript, SQL, C#, HTML, CSS.<br/></span>
            • <span style={{color: 'gold'}}>Linkedin JavaScript skill-based assessment certified (Top 5%).</span><br/>
            • Overall lead of 2 company projects(1. Backend API 2. Frontend Web), also involved in analysis and coding of other company projects (backend and frontend).(Sept 2020 - June 2021)<br/>
            • Assigned 3 positions in the span of 8 months. (Sept 2020 - May 2021)<br/>
            • One of the leaders with the most number of deployed defect fixes - Development Team Progress Board. (Sept 2020 - June 2021)<br/>
            • Software Project Manager(Sept 2021 - March 2022)<br/>
            • Consulting company in the construction industry - Researcher, Blueprint Maker, Plan Loader, Matrix Tracker, Data Model Logic. (June 2017, July 2020)<br/>
            • BS in Computer Science (2014-2018)<br/>
            <h3 className='workexperienceheaders'> Work Experience </h3>
            <div className='workexperience'>
            <img src={Samsung} width={'48px'} height="48px" ></img>
            <p className='workexperiencedetails'>
                Web Developer Samsung Electronics · Full-time
                <br/>Jun 2023 - May 2024 · 1 yr
                <br/>Samsung Electronics· Full-time
                <br/>2023 - 2024 · 1 yr
                <br/>Bonifacio Global City, Philippines · On-site
                <br/>Responsibilities:
                <br/>• Developing and maintaining web applications using technologies such as React JS, React-Boilerplate, React-Redux, Node.js, Node-Loopback, and Express.js.
                <br/>• Implementing responsive and visually appealing user interfaces (UI) with HTML, CSS, and JavaScript.
                <br/>• Collaborating with cross-functional teams, including product managers, designers, and other developers.
                <br/>• Utilizing tools like Jira, Gitlab, and SonarQube for project management and code quality.
                <br/>• Working with Material-UI, Semantic-UI, and Mantine UI to create consistent and user-friendly designs.
                <br/>• Managing databases (SQL, Oracle DB, and Mongo DB) and integrating web services.
                <br/>• Following Agile workflows and participating in DevOps practices.
                <br/><br/>Technologies: React JS, React-Boilerplate, React-Redux, Node.js, Node-Loopback,
                <br/>Express.js, HTML, CSS, JavaScript, Jira, Gitlab, SonarQube, DevOps, Material-UI, 
                <br/>Semantic-UI, Mantine UI, SQL, Oracle DB, Mongo DB, WebServices, Agile Work Flow.
            </p>
            </div>
             <div className='workexperience fix'>
            <img src={Hypereonlabs} width={'48px'} height="48px" ></img>
            <p className='workexperiencedetails'>
            Web Developer
            <br/>Hypereon Labs · Full-time
            <br/>Sep 2021 - Mar 2022 · 7 mos
            <br/>Remote
            <br/>Software Project Manager/ Web Developer Software Project Manager/ Web Developer
            <br/>Project Management:
            <br/>• Collaborate with cross-functional teams to define project scope, objectives, and deliverables.
            <br/>• Develop project plans, allocate resources, and track progress.
            <br/>• Ensure adherence to timelines, budgets, and quality standards.
            <br/>• Mitigate risks and resolve issues during the project lifecycle.
            Web Development:
            <br/>• Utilize technologies such as React JS, React-Boilerplate, React-Redux, Node.js, Node-Loopback, Express.js, HTML, CSS, and JavaScript.
            <br/>• Design and implement responsive web interfaces using Material-UI.
            <br/>• Work with databases (SQL, Oracle DB, Mongo DB) and integrate web services.
            <br/>• Collaborate with Gitlab, Jira, and DevOps tools for efficient development workflows.
            <br/>• Apply Agile methodologies to enhance productivity and adapt to changing requirements.
            Quality Assurance:
            <br/>• Implement code reviews, automated testing, and SonarQube analysis.
            <br/>• Ensure code quality, security, and performance.
            <br/>• Communication and Collaboration:
            <br/>• Facilitate communication between technical and non-technical stakeholders.
            <br/>• Coordinate with designers, developers, and testers to achieve project goals.
            <br/>
            <br/>Technologies used: React JS, React-Boilerplate, React-Redux, Node.js, Node-Loopback,
             <br/>Express.js, HTML, CSS, JavaScript, Jira, Gitlab, SonarQube, DevOps, Material-UI, SQL,
              <br/>Oracle DB, Mongo DB, WebServices, Agile Work Flow.
            </p>
            </div>
            <div className='workexperience fix'>
            <img src={collabera} width={'48px'} height="48px" ></img>
            <p className='workexperiencedetails'>
            Web Developer
            <br/>Collabera Digital · Full-time
            <br/>Sep 2020 - Mar 2021 · 7 mos
            <br/>On-site
            <br/>Responsibilities
            <br/>• Lead the creation of banking tools using frontend and backend technologies.
            <br/>• Adapted to existing company technologies without any prior knowledge 
            <br/>• Proven ability to adapt under pressure while still meeting excellent standards
            <br/>• Help teammates understand and build software tools.
            <br/>• Architected an entire project functionality.
            <br/><br/>Technologies used: React JS, React-Boilerplate, React-Redux, Node.js, Node-Loopback,
             <br/>Express.js, HTML, CSS, JavaScript, Jira, Gitlab, SonarQube, DevOps, Material-UI, SQL
             <br/>, Oracle DB, Mongo DB, WebServices, Agile Work Flow.
            </p>
            </div>
            <div className='workexperience fix'>
            <img src={proup} width={'48px'} height="48px" ></img>
            <p className='workexperiencedetails'>
            Web Developer
            <br/>Programmer
            <br/>ProUP · Part-time
            <br/>Jun 2017 - Jul 2020 · 3 yrs 2 mos
            <br/>United States
            <br/>Consulting company in the construction industry -  Researcher, Blueprint Maker, Plan Loader, Matrix Tracker, Data Model Logic., 
            <br/><br/>Technologies used: (React.js, Node.js, Angular.js, JavaScript, TypeScript, ASP.Net core (MVC), HTML, 
            <br/>CSS, Vanilla.js, SQL, SQL Server, Web Server, JQUERY, AJAX, SOAP, REST, Agile Work Flow)
            </p>
            </div>
            </div>
            <p class="watch" ></p>
        </div>
    </div>
);

export default AboutPage;
