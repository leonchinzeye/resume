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
                            or general enquiries on what I do, my contact details are listed down below.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="widget widget_contact">
                            <h4>Contact Details</h4>
                            <p className="address">
                                {resumeData.name}<br />
                                {resumeData.address} <br />
                                {resumeData.postal}<br />
                                {resumeData.mobile}<br />
                                <span>{resumeData.email}</span>
                            </p>
                        </div>

                    </div>
                </section> {/* Contact Section End*/}
            </React.Fragment>
        );
    }
}