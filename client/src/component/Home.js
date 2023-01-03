import React from 'react'
import './assets/css/bootstrap.css'
import "./assets/css/style.css"


const Home = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>

                        <div className="collapse navbar-collapse navbar-ex1-collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#home">HOME</a>
                                </li>
                                <li><a href="#services">Login</a>
                                </li>

                                <li><a href="#price-sec">Registration</a>
                                </li>

                                <li><a href="#contact-sec">CONTACT Us</a>
                                </li>

                            </ul>
                        </div>

                    </div>

                </nav>
            </header>

            <div id="home">
                <div className="container" >
                    <div className="row ">
                        <div className="col-md-9 col-sm-9">
                            <h1 className="head-main">Budget Tracker</h1>
                            <span className="head-sub-main">$</span>
                            <div className="head-last">

                                Save Your Money
                            </div>

                        </div>
                        <div className="col-md-3 col-sm-3">
                            <div className="div-trans text-center">
                                <h3>Login </h3>
                                <form>

                                    <div className="col-md-12 col-sm-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" required="required" placeholder="Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-sm-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" required="required" placeholder="Email address" />
                                        </div>
                                    </div>


                                    <div className="col-md-12 col-sm-12">
                                        <div className="form-group">
                                            <textarea name="message" id="Textarea1" required="required" className="form-control" rows="3" placeholder="Message"></textarea>
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-success">Submit Here </button>
                                        </div>
                                    </div>

                                </form>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <section id="services">
                <div className="container">

                    <div className="row text-center">
                        <div className="col-md-8 col-md-offset-2">
                            <h2>Our Team</h2>

                        </div>

                    </div>

                    <div className="row text-center space-pad">
                        <div className="col-md-3 col-sm-3">

                            <div >

                                <i><img src="/assets/img/11639594320pss4tbiransxz0lclgesdm9kr73odulxn16eo3n1remr761kz0vj2nda3llvan8besj5i9fp18ocdvfnf36c5b6wfz8b8itb81fp.png" alt="" style={{height: '40%' , width: '40%'}}/></i>


                                <h3>Khaled Ammar </h3>
                                <p>
                                    | <a href="#"><i className="fa fa-linkedin fa-2x"></i></a> |
                                    <a href="#"><i className="fa fa-google-plus fa-2x"></i></a> |
                                    <a href="#"><i className="fa fa-github fa-2x"></i></a> |
                                </p>

                            </div>

                        </div>
                        <div className="col-md-3 col-sm-3">

                            <div >

                                <i><img src="assets\img\11639594320pss4tbiransxz0lclgesdm9kr73odulxn16eo3n1remr761kz0vj2nda3llvan8besj5i9fp18ocdvfnf36c5b6wfz8b8itb81fp.png" alt="" style={{height: '40%' , width: '40%'}}/></i>


                                <h3>Thabet tome </h3>
                                <p>
                                    | <a href="#"><i className="fa fa-linkedin fa-2x"></i></a> |
                                    <a href="#"><i className="fa fa-google-plus fa-2x"></i></a> |
                                    <a href="#"><i className="fa fa-github fa-2x"></i></a> |
                                </p>

                            </div>

                        </div>
                        <div className="col-md-3 col-sm-3">

                            <div >

                                <i><img src="assets\img\11639594320pss4tbiransxz0lclgesdm9kr73odulxn16eo3n1remr761kz0vj2nda3llvan8besj5i9fp18ocdvfnf36c5b6wfz8b8itb81fp.png" alt="" style={{height: '40%' , width: '40%'}}/></i>


                                <h3>Ra'd Tome </h3>
                                <p>
                                    | <a href="#"><i className="fa fa-linkedin fa-2x"></i></a> |
                                    <a href="#"><i className="fa fa-google-plus fa-2x"></i></a> |
                                    <a href="#"><i className="fa fa-github fa-2x"></i></a> |
                                </p>

                            </div>

                        </div>
                        <div class="col-md-3 col-sm-3">

                            <div>

                                <i><img src="./assets/img/11639594320pss4tbiransxz0lclgesdm9kr73odulxn16eo3n1remr761kz0vj2nda3llvan8besj5i9fp18ocdvfnf36c5b6wfz8b8itb81fp.png" alt="ICon" style={{height: '40%' , width: '40%'}}/></i>


                                <h3>Ahmad Tome </h3>
                                <p>
                                    | <a href="#"><i className="fa fa-linkedin fa-2x"></i></a> |
                                    <a href="#"><i className="fa fa-google-plus fa-2x"></i></a> |
                                    <a href="#"><i className="fa fa-github fa-2x"></i></a> |
                                </p>

                            </div>

                        </div>
                    </div>
                    </div>
                    </section>

                  
                    <section id="Parallax-one">
                        <div className="container">

                            <div className="row text-center">
                                <div className="col-md-8 col-md-offset-2 ">
                                    <h2><i className="fa fa-desktop fa-3x"></i>&nbsp;Just Space </h2>
                                    <h4>
                                        <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Curabitur nec nisl odio. Mauris vehicula at nunc id posuere.
                                        </strong>
                                    </h4>
                                </div>

                            </div>


                        </div>
                    </section>
                    <section  id="contact-sec">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                
                    <div id="social-icon">
                        <strong> Address:</strong> Ramallah / palestine.
                        <a href="#"><i className="fa fa-facebook fa-2x"></i></a> 
                       <a href="#"><i className="fa fa-twitter fa-2x"></i></a> 
                        <a href="#"><i className="fa fa-linkedin fa-2x"></i></a>
                        <a href="#"><i className="fa fa-google-plus fa-2x"></i></a>
                        <a href="#"><i className="fa fa-github fa-2x"></i></a>
                    </div>
                </div>
                

            </div>
        </div>
    </section>

                </div>
                )
}

                export default Home