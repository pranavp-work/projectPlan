import { faGithub, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import logo from '../../assets/plan-Logo.png'
import { Link } from 'react-router-dom'

function UserFooter() {
  return (
    <>
        <div className="container">
            <hr />
            <div className="row">
                <div className="col-md-3">
                    <h5>About</h5>
                    <ul style={{listStyle: 'none', paddingLeft: '0', marginTop: '10px'}}>
                        <li>About</li>
                        <li>Book Table</li>
                    </ul>
                </div>
                <div className="col-md-3">
                <h5>Contact Us</h5>
                    <ul style={{listStyle: 'none', paddingLeft: '0', marginTop: '10px'}}>
                        <li>Help & Support</li>
                        <li>Partner With Us</li>
                    </ul>
                </div>
                <div className="col-md-3">
                <h5>Social Links</h5>
                    <div className="d-flex justify-content-start gap-3" style={{marginTop: '10px'}}>
                        <a href=""><FontAwesomeIcon icon={faInstagram} style={{color: "#27551a"}} size='2xl' /></a>
                        <a href=""><FontAwesomeIcon icon={faXTwitter} style={{color: "#27551a"}} size='2xl' /></a>
                        <a href=""><FontAwesomeIcon icon={faGithub} style={{color: "#27551a"}} size='2xl'  /></a>
                        <a href=""><FontAwesomeIcon icon={faLinkedin} style={{color: "#27551a"}} size='2xl'  /></a>
                    </div>
                </div>
                <div className="col-md-3 d-flex justify-content-end align-items-center">
                    <Link to = '/'><div style={{height: '40px', width: '100px', background: '#00bf63'}} className='px-3 py-2 rounded-5 d-flex align-items-center justify-content-center'>
                        <img src={logo} alt="" style={{height: 'auto', width: '100%'}} />
                    </div></Link>
                </div>
            </div>
            <hr />

            <p style={{fontSize: '10px', color: 'grey'}} className='text-center'>By continuing past this page, you agree to our Terms of service, Cookie policy, Privacy policy and Content policies. All trademarks are properties of their respective owners. 2016-2021 © Blink Commerce Pvt Ltd. All rights reserved</p>
        </div>
    </>
  )
}

export default UserFooter