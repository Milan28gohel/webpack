import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div>
                    <footer>
         <div className="footer">
            <div className="container">
               <div className="row">
                  <div className="col-md-3">
                     <h3>Link Menu</h3> 
                      <ul className="link_menu">
                        <li><a href="#">Home</a></li>
                        <li><a href="about.html"> About</a></li>
                        <li><a href="service.html">Services</a></li>
                        <li><a href="news.html">News</a></li>
                        <li><a href="trainer.html">Trainer</a></li>
                        <li><a href="gallery.html">Gallery</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                     </ul>
                  </div>
                  <div className=" col-md-5">
                     <h3>Contact US</h3>
                     <ul className="conta">
                        <li><i className="fa fa-map-marker" aria-hidden="true"></i>Address : 3036,silver business centre  <br></br>Victory infotech
                        </li>
                        <li><i className="fa fa-mobile" aria-hidden="true"></i> Phone :  +(1234) 567 890</li>
                        <li> <i className="fa fa-envelope" aria-hidden="true"></i><a href="#">Email : victory@infotech.com</a></li>
                     </ul>
                  </div>
                  <div className="col-md-4">
                     <h3>News letter</h3>
                     <form className="bottom_form">
                        <input className="enter" placeholder="Enter your email" type="text" name="Enter your email" />
                        <button className="sub_btn">subscribe</button>
                     </form>
                  </div>
               </div>
            </div>
            <div className="copyright">
               <div className="container">
                  <div className="row">
                     <div className="col-md-10 offset-md-1">
                        <p>© 2019 All Rights Reserved. Design by <a href="https://html.design/"> Free Html Templates</a></p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer> 
        
            </div>
        )
    }
}

export default Footer
