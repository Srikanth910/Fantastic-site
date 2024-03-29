import React, { Component } from 'react'

import {Link} from 'react-router-dom'
export default class About extends Component {
    render() {
        return (
          <div>



          <header className="mt-2 mt-sm-4 fixed-top">
          			<div className="container-fluid px-0 text-center">
          				<a href="#" class="sign-in">Sign In / Register</a>
          				<nav className="navbar navbar-expand-lg orange-bg mt-4 mt-md-5">
          					<a href="index.html" class="navbar-brand">
                      <img src = { process.env.PUBLIC_URL + "/logo.png" }className="d-none d-sm-none d-md-block" alt="Fantastic 3"/>
                      <img src = { process.env.PUBLIC_URL + "/logo-m.png"} className="d-block d-sm-none" alt="Fantastic 3"/>

          					</a>
                    <button className="navbar-toggler" type="button" data-toggle="offcanvas">
          						<span className="navbar-toggler-icon"></span>
          					</button>
          					<div className="navbar-collapse offcanvas-collapse1" id="collapsingNavbar">
          						<ul className="navbar-nav mr-5 ml-auto">
          							<li className="nav-item active">
          								<Link className="nav-link a"  Link to={'/'}>Home</Link>
          							</li>
          							<li className="nav-item">

                          	<Link className="nav-link active "  Link to={'/About'}>About Us</Link>
          							</li>
          						</ul>
          						<ul className="navbar-nav ml-5 mr-auto">
          							<li className="nav-item">

                          	<Link className="nav-link "  Link to={'/Live Casino'}>Live Casino</Link>
          							</li>
          							<li className="nav-item">
          							<Link className="nav-link " Link to={'/FAQ'}>Faq</Link>
          							</li>
          						</ul>
          					</div>
          				</nav>
          			</div>
          		</header>
          		<div id="carouselExampleIndicators" class="carousel inner slide" data-ride="carousel">
          			<div className="carousel-inner">
          				<div className="carousel-item active text-center">

          				</div>
          			</div>
          		</div>

          		<section className="block dark-blue-bg">
          			<div className="container-fluid">
          				<h1 className="h1">About Fantastic 3</h1>
          				<div className="row justify-content-md-center pb-5">
          					<div className="col-12 col-lg-4 px-4 px-sm-5">
          						<p>
          							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          							<br/>
          							Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          							<br></br>
          							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          							<br></br>
          							Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          							<br></br>
          							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          					   	</p>
          					</div>
          					<div className="col-12 col-lg-3 text-center">

                      <img src = { process.env.PUBLIC_URL + "/about-table.png" } className="m-image" alt="" />
          					</div>
          					<div className="col-12 col-lg-4 px-4 px-sm-5">
          						<p>
          							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          							<br></br>
          							Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          							<br></br>
          							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          							<br></br>
          							Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          							<br></br>
          							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          						</p>
          					</div>
          				</div>
          			</div>
          			<div className="border-top">
          				<div className="container-fluid">
          					<div className="row pt-5 mt-5">
          						<div className="col-12 col-sm-12 col-lg-4 px-5">
          							<h4 className="icon1">Lorem ipsum dolor sit amet</h4>
          							<p className="py-3">
          								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          							</p>
          						</div>
          						<div className="col-12 col-sm-12 col-lg-4 px-5">
          							<h4 className="icon2">Lorem ipsum dolor sit amet</h4>
          							<p className="py-3">
          								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          							</p>
          						</div>
          						<div className="col-12 col-sm-12 col-lg-4 px-5">
          							<h4 className="icon3">Lorem ipsum dolor sit amet</h4>
          							<p className="py-3">
          								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          							</p>
          						</div>
          					</div>
          				</div>
          			</div>
          		</section>

          		<section className="px-3 py-3 px-sm-5 py-sm-5 green-bg">
          			<div className="container">
          				<div className="row">
          					<div className="col-12 col-md-6"><h1 class="black">Live Dealer Game</h1></div>
          					<div className="col-12 col-md-6 text-center"><Link className="btn-block"Link to={'/Deposite'}>Deposit</Link></div>
          				</div>
          			</div>
          		</section>

          		<footer className="text-center">
          			<div className="container">
          				<ul className="nav navbar-nav">
                  <li className="nav-item">
                      <Link className="nav-link "  Link to={'/'}>Home</Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link "  Link to={'/About'}>About Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link "  Link to={'/Live Casino'}>Live Casino</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link " Link to={'/FAQ'}>Faq</Link>
                  </li>
          				</ul>
          				<div className="clearfix"></div>
          				<div className="social-media">
          					<a href="#" target="_blank" className="facebook"></a>
          					<a href="#" target="_blank" className="twitter"></a>
          					<a href="#" target="_blank" className="youtube"></a>
          					<a href="#" target="_blank" className="instagram"></a>
          				</div>
          			</div>
          			<div className="border-top">
          				<div className="container">
          					<div className="row py-4">
          						<div className="col-12 col-sm-6 col-md-6 text-left">
								  <Link Link to={'/TermsCondition'}>Terms &amp; Conditions</Link> &nbsp; | &nbsp;<Link Link to={'/privacyPolicy'}>Privacy Policy</Link>
          						</div>
          						<div className="col-12 col-sm-6 col-md-6 text-right">
          							&copy; 2019 Fantastic 3
          						</div>
          					</div>
          				</div>
          			</div>
          		</footer>



          </div>
        )
    }
  }
