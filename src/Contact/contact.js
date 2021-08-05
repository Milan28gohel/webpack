import React, { Component } from 'react';
import { Header } from '../Header';

class Contact extends Component {
    render() {
        return (
            <div>
                <Header />
            <div>
                
                {/* <!-- body --> */}
   <body className="main-layout">
      <div className="back_re">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="title">
                     <h2>Requst A call  for You</h2>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* <!--  contact --> */}
      <div id="contact" className="contact">
         <div className="container">
            <div className="row">
               <div className="col-md-6">
                  <form id="request" className="main_form">
                     <div className="row">
                        <div className="col-md-12 ">
                           <input className="contactus" placeholder="Your Name" type="type" name="Your Name" /> 
                        </div>
                        <div className="col-md-12">
                           <input className="contactus" placeholder="Email" type="type" name="Email" /> 
                        </div>
                        <div className="col-md-12">
                           <input className="contactus" placeholder="Phone Number" type="type" name="Phone Number" />                          
                        </div>
                        <div className="col-md-12">
                           <input className="contactus" placeholder="Subject" type="type" name="Subject" />                          
                        </div>
                        <div className="col-md-12">
                           <textarea className="textarea" placeholder="Message" type="type" Message="Name">Message</textarea>
                        </div>
                        <div className="col-md-12">
                           <button className="send_btn">Send</button>
                        </div>
                     </div>
                  </form>
               </div>
               <div class="col-md-6">
                  <div class="map_main">
                     <div class="map-responsive">
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- end contact --> */}
      </body>
            </div>
            </div>
        )
    }
}

export default Contact;
