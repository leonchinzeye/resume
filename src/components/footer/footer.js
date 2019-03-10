import React, { Component } from 'react';
export default class Footer extends Component {
    render() {
        let resumeData = this.props.resumeData;

        return (
            <React.Fragment>
                <footer>
                    <div className="row">
                        <div className="twelve columns">
                            <ul className="social-links">
                                <li><a href={resumeData.github}><i className="fa fa-github" /></a></li>
                                <li><a href={resumeData.linkedin}><i className="fa fa-linkedin" /></a></li>
                            </ul>
                            <ul className="copyright">
                                <li>© Copyright 2019 Leon Chin</li>
                                <li>Credit and Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
                                <li>Powered by React</li>
                            </ul>
                        </div>
                        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
                    </div>
                </footer> {/* Footer End*/}
            </React.Fragment>
        );
    }
}