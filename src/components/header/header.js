import React, { Component } from 'react';
export default class Header extends Component {
    render() {
        let resumeData = this.props.resumeData;

        return (
            <React.Fragment>
                <header id="home">
                    <nav id="nav-wrap">
                        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                        <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                        <ul id="nav" className="nav">
                            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                            <li><a className="smoothscroll" href="#about">About</a></li>
                            <li><a className="smoothscroll" href="#resume">Resume</a></li>
                            <li><a className="smoothscroll" href="#contact">Contact</a></li>
                        </ul> 
                    </nav>
                    <div className="row banner">
                        <div className="banner-text">
                            <h1 className="responsive-headline">I'm {resumeData.name}.</h1>
                            <h3>Singapore based <span>Java Developer</span> working for a <span>FinTech</span> company. Experienced in working on backend development, building scalable solutions with microservices. Learn more <a className="smoothscroll" href='#about'>about me</a>.</h3>
                            <hr />
                            <ul className="social">
                                <li><a href={resumeData.github}><i className="fa fa-github" /></a></li>
                                <li><a href={resumeData.linkedin}><i className="fa fa-linkedin" /></a></li>
                            </ul>
                        </div>
                    </div>
                    <p className="scrolldown">
                        <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
                    </p>
                </header> {/* Header End */}
            </React.Fragment>
        );
    }
}