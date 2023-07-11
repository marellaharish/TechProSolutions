import React, { useState } from 'react';
import NavBar from '../Components/NavBar'
import "../Assets/CSS/Home.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import whatsapp from "../Assets/Images/whatsapp-communication-message-interaction-network-svgrepo-com.svg";
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import AnimatedComputer from '../Assets/Images/2461971_151.jpg';
import { Tilt } from 'react-tilt';
import ImageSlider from '../Components/ImageSlider';
import img1 from '../Assets/Images/code-learning-professional-svgrepo-com.svg';
import img2 from '../Assets/Images/code-svgrepo-com.svg';
import img3 from '../Assets/Images/computer-svgrepo-com.svg';
import img4 from '../Assets/Images/diamond-svgrepo-com.svg';
import img5 from '../Assets/Images/heart-svgrepo-com.svg';
import img6 from '../Assets/Images/mobile-phone-recharge-svgrepo-com.svg';
import img7 from '../Assets/Images/settings-svgrepo-com.svg';
import img8 from '../Assets/Images/think-svgrepo-com.svg';

function Home() {
    return (
        <React.Fragment>
            <>
                <NavBar />
                <div className="home__bg">
                    <div className='main__head' >
                        <div className='main__head__text'>Programming  <br /> And Design <br /> From The Feture<br />
                        </div>
                        <a class="coolBeans" href="#">Start Today</a>
                        <img title="Feel Free To Text...!" className='whatsapp__logo' src={whatsapp} />
                    </div>
                </div>
                <div className='home__container' >
                    <MDBRow>
                        <MDBCol md="6">
                            <Tilt>
                                <div className='image__container'>
                                    <img src={AnimatedComputer} className='animated__computer' />
                                </div>
                            </Tilt>
                        </MDBCol>
                        <MDBCol md="6">
                            <div className='about__data text__container'>
                                <h1>About Our Company
                                </h1>
                                <span className='routing__border'></span>
                                <br />
                                <p>We offers a wide range of customized services in the field of Website Design like Web Development e-Commerce Solutions, Graphic Design and SEO. We have a creative, talented, devoted and enthusiastic team, who provide professional, constructive and result oriented services to the clients.</p>
                                <p>
                                    Gathering client requirements and understanding their goals for the website.
                                    Creating wireframes, mockups, and prototypes to plan the website's layout and structure.
                                    Selecting color schemes, typography, and graphic elements to establish the website's visual style.
                                    Designing and coding web pages using HTML, CSS, and sometimes JavaScript.
                                    Optimizing websites for responsiveness and ensuring they display correctly on various devices and browsers.
                                    Collaborating with web developers to implement website functionality and interactivity.
                                    Conducting usability testing and making necessary adjustments to improve the user experience
                                </p>
                                <a class="coolBeans__dark" href="#">Learn More</a>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </div>
                <hr />
                <div className='home__container2'>
                    <div className='ket__fearures'>
                        <div className='key__featuresItems'>
                            <img src={img1} alt='Images' />
                            <h4>Problem Solving</h4>
                            <p>Developers need to explore innovative solutions, experiment with different approaches, and adapt their strategies based on feedback and changing requirements. </p>
                        </div>
                        <div className='key__featuresItems'>
                            <img src={img2} alt='Images' />
                            <h4>Coding</h4>
                            <p> It is a fundamental skill for developers and is crucial for translating algorithms and designs into functional and executable code.  </p>
                        </div>
                        <div className='key__featuresItems'>
                            <img src={img3} alt='Images' />
                            <h4>Software Development</h4>
                            <p>This is the process of designing, creating, and maintaining software applications to meet specific user needs and requirements, employing various methodologies and practices </p>
                        </div>
                        <div className='key__featuresItems'>
                            <img src={img4} alt='Images' />
                            <h4>Digital Marketing</h4>
                            <p> It encompasses various techniques such as search engine optimization (SEO), social media marketing, email marketing, and content marketing to drive website traffic.</p>
                        </div>
                        <div className='key__featuresItems'>
                            <img src={img5} alt='Images' />
                            <h4>Passion</h4>
                            <p>Dedication towards creating innovative and impactful solutions. It motivates continuous learning, problem-solving, and a desire to make a positive impact in the digital world. </p>
                        </div>
                        <div className='key__featuresItems'>
                            <img src={img6} alt='Images' />
                            <h4>Mobile Development</h4>
                            <p>This focuses on creating applications specifically designed for mobile devices such as smartphones and tablets. It involves utilizing mobile platforms, frameworks, and programming languages to build user-friendly  </p>
                        </div>
                        <div className='key__featuresItems'>
                            <img src={img7} alt='Images' />
                            <h4>Support</h4>
                            <p>This  involves providing assistance and resolving technical issues for end-users or clients using software applications. </p>
                        </div>
                        <div className='key__featuresItems'>
                            <img src={img8} alt='Images' />
                            <h4>Creative Thinking</h4>
                            <p>This involves approaching problems with unconventional and innovative solutions, thinking outside the box to find unique approaches and strategies. </p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='home__container3'>
                    <p>WORK</p>
                    <h1>Dig Into My Universe</h1>
                    <ImageSlider />
                </div>
            </>
        </React.Fragment>
    )
}
export default Home