import React from 'react';
import '../style/coursesCode4Kids.css';
import { Grid, Cell } from 'react-mdl';
import HtmlContainer from '../../container/html';
import CssContainer from '../../container/css';
import SystemConfig  from '../../code4kids/tabs/kidSystemconf';
import BrowserConfig  from '../../code4kids/tabs/kidBrowserconf';
import MsOfficeConf  from '../../code4kids/tabs/kidMsoffice';
import code_kids_pic from '../../../images/tabs/code_kids.png';
import GoogleAd from '../../../components/GoogleAd';

const coursesCode4Kids = () => {
    return(
        <div className='page-tab-body'>
            <Grid className='page-tab-grid'>
                <Cell className='page-tab-first-col' col={10}>
                    <div>
                        <img src={code_kids_pic} alt='code4kidsl' />
                    </div>
                    <div className='kid-csforall-oba-video'>
                        <h5>Computer Science For All</h5>
                        <iframe title='CS For All' width="250" height="220" src="https://www.youtube.com/embed/qZfrDLLja-k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                            Computer Science  for Students
                        </iframe>
                    </div>
                    <div className='kid-csforall-oba-para'>
                        <p> 
                            Learn about President Obama’s bold new initiative to empower a generation
                            of American students with the computer science skills they need to thrive
                            igital economy.
                        </p>
                            
                        <h5>
                            CS For All 
                        </h5>
                        <p>
                            Computer Science for All is the President’s bold new initiative to 
                            empower all American students from kindergarten through high school 
                            to learn computer science and be equipped with the computational 
                            thinking skills they need to be creators in the digital economy, 
                            not just consumers, and to be active citizens in our technology-driven 
                            world. Our economy is rapidly shifting, and both educators and business 
                            leaders are increasingly recognizing that computer science (CS) is a “new 
                            c” skill necessary for economic opportunity and social mobility.
                        </p>
                        <p>
                            CS for All builds on efforts already being led by parents, teachers, school 
                            districts, states, and private sector leaders from across the country.  
                        </p>
                    </div>
                    <div>
                        <h5>What is CODING?</h5>
                        <p> 
                            Welcome to our of code an introduction to the basics of computer 
                            programming or as it's commonly called codin., 
                        </p>
                        <p>
                            code is all around you and the results of coding are everywhere whether 
                            you're posting a tweet watching a YouTube video or even swiping a debit 
                            card whatever happens because of lines of code in fact just about anything 
                            with a plug or battery uses code or computer programs to do things lots of 
                            everyday items phones watches microwaves cars have computers in them and they 
                            all rely on code to make them work. 
                        </p>
                        <p>
                            so what is code exactly code is a precise set of instructions a computer
                            can understand think of it as a recipe the instructions need to be 
                            precise so whatever you're making turns out the way it should and just 
                            like people in different parts of the world speak different languages 
                            computers understand many different languages - with names like Python, 
                            C#, Ruby, Java, Javascript and Perl they're all different in their own way
                            similar to spoken languages they share many of the same basic features. 
                        </p>
                        <p>
                            Today we're here to learn how to write code and how can we explore 
                            the innovation, let’s get started to begin.
                        </p>
                        <hr />
                    </div>
                    <div className='kid-outline'>
                        <h2>Course Outline</h2>
                        <div className='kid-course-grid '>
                            <div className='kid-course-basic'> 
                                <ul className='kid-courseList'>
                                    <h5>BASICS</h5>
                                    <a href={SystemConfig}><li>SYSTEM-CONFIGURATION</li></a>
                                    <li>CONTROL PANEL</li> 
                                    <a href={BrowserConfig}><li>BROWSER-CONFIGURATION</li></a>                         
                                </ul>
                            </div>
                            <div className='kid-course-basic'> 
                                <ul className='kid-courseList'>
                                    <h5>HIGHER</h5>
                                    <a href={MsOfficeConf}><li>MS-OFFICE</li></a>
                                    <li>MS-WORD</li>
                                    <li>EXCEL</li>
                                    <li>POWER-POINT</li>
                                    <li>OUTLOOK</li>
                                    <li>ONENOTE</li>
                                    <li>EDITORS</li>
                                </ul>
                            </div>
                            <div className='kid-course-basic'> 
                                <ul className='kid-courseList'>
                                    <h5>INTERMEDIATE</h5>
                                    <li>HTML5</li>
                                    <li>BASIC CSS</li>
                                    <li>INTERMEDIATE CSS</li>   
                                    <li>ADVANCED CSS</li>                       
                                </ul>
                            </div>
                            <div className='kid-course-basic'> 
                                <ul className='kid-courseList'>
                                    <h5>ADVANCED</h5>
                                    <li>JAVASCRIPT</li>
                                    <li>REACT</li>
                                    <li>DEVELOPMENT</li>                            
                                </ul>
                            </div>
                        </div>
                        <hr />
                        <div className='kid-html-section'>
                            <HtmlContainer />
                        </div>
                        <hr />
                        <div className='kid-css-section'>
                            <CssContainer />
                        </div>
                        <hr />
                    </div>
                </Cell>
                <Cell className='page-tab-second-col' col={2} >
                    <GoogleAd slot="1541085932" classNames="page-right-side" />
                </Cell>
            </Grid>
        </div>
    )
}
export default coursesCode4Kids;