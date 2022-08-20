import React from 'react';

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Footer.css";

const Footer = (props) => {
    return (
        <div className="footer">
            
            <h3>Follow Cyber Cup 2022</h3>
            <div className="social-media d-flex flex-row justify-content-center flex-wrap">
                <a href="https://www.linkedin.com/company/cybercup22/" target="_blank">
                    <div className="icon fab fa-linkedin-in"></div>
                </a>
                <a href="https://www.instagram.com/cybercup22/" target="_blank">
                    <div className="icon fab fa-instagram"></div>
                </a>
                <a href="https://facebook.com/amitycyber/" target="_blank">
                    <div className="icon fab fa-facebook-square"></div>
                </a>
                <a href="https://mobile.twitter.com/amity_cybercup" target="_blank">
                    <div className="icon fab fa-twitter-square"></div>
                </a>
                <a href="https://www.youtube.com/channel/UCISt1KjEiuHcIGisbK10dbA" target="_blank">
                    <div className="icon fab fa-youtube-square"></div>
                </a>
            </div>
            <p>© Cyber Cup 2022</p>
            <Row>
                <Col>
                    {/* <h4>Team</h4>
                    <ul>
                        <li><a href="">Become a volunteer</a></li>
                    </ul> */}
                </Col>
                <Col></Col>
                <Col></Col>
            </Row>
        </div>
    )
}
export default Footer;