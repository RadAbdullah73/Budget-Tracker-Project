import React, { useState } from 'react';
import {
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button
} from '@material-ui/core';
import useLogin from '../hooks/useLogin';
import { navigate } from '@reach/router';
import './assets/css/bootstrap.css'
import "./assets/css/style.css"
import "./assets/css/font-awesome.min.css"


const Home = () => {
    const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const {login,error,isLoading}=useLogin()

const handleSubmit = async (e) =>{
    e.preventDefault()
    console.log(email,password)
    await login(email,password)
}
    return (
        <div>
            <header>
                <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation" style={{paddingTop:'10px'}}>
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <img src={require("./assets/img/Budget_Tracker_1.png")} alt="" style={{height: '10%',width: '30%'}}/>
                        </div>

                        <div className="collapse navbar-collapse navbar-ex1-collapse">
                            <ul className="nav navbar-nav navbar-right">
        

                                <li><a href="/reg">Registration</a>
                                </li>

                                <li><a href="#contact-sec">Contact Us</a>
                                </li>
                                <li>
                                    <a href="#our-sec">Our Team</a>
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
                                <form onSubmit={handleSubmit}>

                                    <div className="col-md-12 col-sm-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" required="required" placeholder="Email" onChange={(e)=> setEmail(e.target.value)}  value={email} />
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-sm-12">
                                        <div className="form-group">
                                            <input className="form-control" required="required" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} type="password" value={password} />
                                        </div>
                                    </div>


                                    <div className="col-md-12 col-sm-12">
    
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
            <section id="our-sec" style={{height : "380px" , paddingTop:'0px' , backgroundColor: '#E3F0F3'}}>
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-8 col-md-offset-2">
                            <h2 >Our Team</h2>

                        </div>

                    </div>

                    <div className="row text-center ">
                        <div className="col-md-3 col-sm-3">

                            <div >

                                <i><img src={require("./assets/img/11639594320pss4tbiransxz0lclgesdm9kr73odulxn16eo3n1remr761kz0vj2nda3llvan8besj5i9fp18ocdvfnf36c5b6wfz8b8itb81fp.png")} alt="" style={{height: '40%' , width: '40%'}}/></i>


                                <h3>Khaled Ammar </h3>
                                <p>
                                    | <a href="https://www.linkedin.com/in/khaled-ammar-4b239a254/"><i className="fa fa-linkedin fa-2x"></i></a> |
                                    <a href="https://www.gmail.com"><i className="fa fa-google-plus fa-2x"></i></a> |
                                    <a href="https://github.com/Khaled-Ammar"><i className="fa fa-github fa-2x"></i></a> |
                                </p>

                            </div>

                        </div>
                        <div className="col-md-3 col-sm-3">

                            <div >

                                <i><img src={require("./assets/img/11639594320pss4tbiransxz0lclgesdm9kr73odulxn16eo3n1remr761kz0vj2nda3llvan8besj5i9fp18ocdvfnf36c5b6wfz8b8itb81fp.png")} alt="" style={{height: '40%' , width: '40%'}}/></i>


                                <h3>Thabet tome </h3>
                                <p>
                                    | <a href="https://www.linkedin.com/in/thabet-toma/"><i className="fa fa-linkedin fa-2x"></i></a> |
                                    <a href="https://www.gmail.com"><i className="fa fa-google-plus fa-2x"></i></a> |
                                    <a href="https://github.com/thabet-toma"><i className="fa fa-github fa-2x"></i></a> |
                                </p>

                            </div>

                        </div>
                        <div className="col-md-3 col-sm-3">

                            <div >

                                <i><img src={require("./assets/img/11639594320pss4tbiransxz0lclgesdm9kr73odulxn16eo3n1remr761kz0vj2nda3llvan8besj5i9fp18ocdvfnf36c5b6wfz8b8itb81fp.png")} alt="" style={{height: '40%' , width: '40%'}}/></i>


                                <h3>Ra'd Tome </h3>
                                <p>
                                    | <a href="https://www.linkedin.com/in/ra-d-abdullah-2b60b0254/"><i className="fa fa-linkedin fa-2x"></i></a> |
                                    <a href="https://www.gmail.com"><i className="fa fa-google-plus fa-2x"></i></a> |
                                    <a href="https://github.com/RadAbdullah73"><i className="fa fa-github fa-2x"></i></a> |
                                </p>

                            </div>

                        </div>
                        <div class="col-md-3 col-sm-3">

                            <div>

                                <i><img src={require("./assets/img/11639594320pss4tbiransxz0lclgesdm9kr73odulxn16eo3n1remr761kz0vj2nda3llvan8besj5i9fp18ocdvfnf36c5b6wfz8b8itb81fp.png")} alt="ICon" style={{height: '40%' , width: '40%'}}/></i>


                                <h3>Ahmad Tome </h3>
                                <p>
                                    | <a href="https://www.linkedin.com/in/ahmad-tomeh-05035218b/"><i className="fa fa-linkedin fa-2x"></i></a> |
                                    <a href="https://www.gmail.com"><i className="fa fa-google-plus fa-2x"></i></a> |
                                    <a href="https://github.com/ahmadtomeh"><i className="fa fa-github fa-2x"></i></a> |
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
                                    <h2><i className="fa fa-desktop fa-3x"></i>&nbsp;What is Budget Tracker ? </h2>
                                    <h4>
                                        <strong>Budget Tracker It is a Personal service website for calculate the final output of your
monthly income and expenses, It aims to facilitate users' lives, 
calculating their daily expenses and debts, and comparing that with their monthly 
income.

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
                
                    <div id="social-icon" style={{display:'flex' , justifyContent:'space-between' , paddingBottom:'20px'}}>
                        <div>                       <strong> Address: </strong> Palestine / Ramallah <br></br>
                        <strong> Phone Number :</strong> +970569517616 <br></br>
                        <strong> Email :</strong> BudgetTracker@gmail.com <br></br>
                        </div>
 
                        {/* <a href="#"><i className="fa fa-facebook fa-2x"></i></a>  */}
                       {/* <a href="#"><i className="fa fa-twitter fa-2x"></i></a>  */}
                       <div>
                        <a href="#"><i className="fa fa-linkedin fa-2x" ></i></a>
                        <a href="https://www.gmail.com"><i className="fa fa-google-plus fa-2x"></i></a>
                        <a href="#"><i className="fa fa-github fa-2x"></i></a>
                        </div>
                    </div>
                </div>
                

            </div>
        </div>
    </section>
    <div class="for-full-back " id="footer">
       
         
       </div>

                </div>
                )
}

                export default Home