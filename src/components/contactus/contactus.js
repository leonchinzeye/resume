import React, { Component } from 'react';
export default class Header extends Component {
    render() {
        let resumeData = this.props.resumeData;

        return (
            <React.Fragment>
                <section id="contact">
                    <div className="row section-head">
                        <div className="two columns header-col">
                            <h1><span>Get In Touch.</span></h1>
                        </div>
                        <div className="ten columns">
                            <p className="lead">If you wish to contact me regarding available job openings 
                            or general enquiries on what I do, feel free to drop me an email, or connect with
                            me on <a href={resumeData.linkedin}>LinkedIn</a>.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="widget widget_contact">
                            <h4>Contact Details</h4>
                            <p className="address">
                                {resumeData.name}<br />
                                <span><a href={resumeData.mailto}>{resumeData.email}</a></span>
                            </p>
                        </div>

                    </div>
                </section> {/* Contact Section End*/}
            </React.Fragment>
        );
    }
}