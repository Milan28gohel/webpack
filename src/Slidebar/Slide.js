import React, { Component } from 'react'

export class Slide extends Component {
    render() {
        return (
            <div>
            {/* <!-- banner --> */}
            <section className="banner_main">
               <div id="myCarousel" className="carousel slide banner" data-ride="carousel">
                  <ol className="carousel-indicators">
                     <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                     <li data-target="#myCarousel" data-slide-to="1"></li>
                     <li data-target="#myCarousel" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner">
                     <div className="carousel-item active">
                        <img className="first-slide" src="public/images/banner1.jpg" alt="First slide" />
                        <div className="container">
                        </div>
                     </div>
                     <div className="carousel-item">
                        <img className="second-slide" src="public/images/banner2.jpg" alt="Second slide" />
                     </div>
                     <div className="carousel-item">
                        <img className="third-slide" src="public/images/banner3.jpg" alt="Third slide" />
                     </div>
                  </div>
                  <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                  <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                  <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                  <span className="sr-only">Next</span>
                  </a>
               </div>
               <div className="banner_text">
                  <div className="container">
                     <div className="row">
                        <div className="col-md-10">
                           <div className="stewart">
                              <span>construction</span>
                              <h1>Stewart Fitness </h1>
                              <p> Lorem Ipsum available, but the majority have suffered lteration in some.</p>
                              <a className="read_more" href="/contact">Contact us</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
      {/* <!-- end banner --> */}
      </div>
    
        )
    }
}

export default Slide;
