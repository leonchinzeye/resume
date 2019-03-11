import React, { Component } from 'react';
export default class Resume extends Component {
    createWork = (data) => {
        let workBody = [];

        for (let i = 0; i < data.length; i++) {
            workBody.push(<div className="row item">
                <div className="twelve columns">
                    <h3>{data[i].company}</h3>
                    <p className="info">{data[i].position}<span>•</span> <em className="date">{data[i].tenure}</em></p>
                    <p dangerouslySetInnerHTML={{__html: data[i].description}} />
                </div>
            </div>)
        }

        return workBody;
    }

    createEducation = (data) => {
        let workBody = [];

        for (let i = 0; i < data.length; i++) {
            workBody.push(<div className="row item">
                <div className="twelve columns">
                    <h3>{data[i].school}</h3>
                    <p className="info">{data[i].degree}<span>•</span> <em className="date">{data[i].tenure}</em></p>
                    <p dangerouslySetInnerHTML={{__html: data[i].description}} />
                </div>
            </div>)
        }

        return workBody;
    }

    render() {
        let resumeData = this.props.resumeData;

        return (
            <React.Fragment>
                <section id="resume">

                    {/* Work */}
                    <div className="row work">
                        <div className="three columns header-col">
                            <h1><span>Work</span></h1>
                        </div>
                        <div className="nine columns main-col">
                            {this.createWork(resumeData.work)}
                        </div>
                    </div> {/* End Work */}

                    {/* Education */}
                    <div className="row education">
                        <div className="three columns header-col">
                            <h1><span>Education</span></h1>
                        </div>
                        <div className="nine columns main-col">
                            {this.createEducation(resumeData.education)}
                        </div> {/* main-col end */}
                    </div> {/* End Education */}

                    {/* Skills */}
                    <div className="row skill">
                        <div className="three columns header-col">
                            <h1><span>Skills</span></h1>
                        </div>
                        <div className="nine columns main-col">
                            <div className="bars">
                                <ul className="skills">
                                    <li><span className="bar-expand java" /><em>Java</em></li>
                                    <li><span className="bar-expand spring" /><em>Spring</em></li>
                                    <li><span className="bar-expand python" /><em>Python</em></li>
                                    <li><span className="bar-expand javascript" /><em>JavaScript</em></li>
                                    <li><span className="bar-expand clang" /><em>C</em></li>
                                    <li><span className="bar-expand cplusplus" /><em>C++</em></li>
                                    <li><span className="bar-expand sql" /><em>SQL</em></li>
                                    <li><span className="bar-expand react" /><em>React</em></li>
                                    <li><span className="bar-expand html5" /><em>HTML5</em></li>
                                    <li><span className="bar-expand css" /><em>CSS</em></li>
                                </ul>
                            </div>{/* end skill-bars */}
                        </div> {/* main-col end */}
                    </div> {/* End skills */}
                </section> {/* Resume Section End*/}
            </React.Fragment>
        );
    }
}