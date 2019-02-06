import React, { Component } from 'react';
import { Card, Nav, Navbar, Image } from 'react-bootstrap';
import logo from './../assets/images/site_logo.png';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from './../actions'
class SiteHeader extends Component {
    
    render() {
        const { logedIn } = this.props;
        return (
            <>
                <Card.Header>
                    <Navbar>
                        <Navbar.Brand ><Link to="/home"><Image src={logo}></Image></Link></Navbar.Brand>
                        <Nav>
                            <NavLink to="/home" activeClassName='active' className="nav-link">Home</NavLink>
                            <NavLink activeClassName='active' to="/about-us" className="nav-link">About Us</NavLink>
                            <NavLink activeClassName='active' to="/contact-us" className="nav-link">Contact Us</NavLink>
                            {(logedIn === true) ? (<> <NavLink activeClassName="active" to="/dashboard" className="nav-link">Dashboard</NavLink> <Link to="/" onClick={logout} className="nav-link">Log Out</Link> </>) : (<NavLink activeClassName="active" to="/login" className="nav-link">Login</NavLink>)}
                        </Nav>
                    </Navbar>
                </Card.Header>
            </>
        );
    }

}
function mapStateToProps(state) {
    const { logedIn } = state.isLogged;
    return {
        logedIn
    };
}
export default connect(mapStateToProps)(SiteHeader);

const logout = () => {
    userActions.logout()
};