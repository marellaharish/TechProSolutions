import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';
import "../Assets/CSS/Home.css";
function NavBar() {
    const [showBasic, setShowBasic] = useState(false);
    return (
        <React.Fragment>
            <>
                <MDBNavbar expand='lg' light bgColor='light'>
                    <MDBContainer fluid>
                        <MDBNavbarBrand href='#'>
                            <img
                                src='https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.webp'
                                height='30'
                                alt=''
                                loading='lazy'
                            />
                        </MDBNavbarBrand>
                        <MDBNavbarBrand href='#'>TechPro Solutions</MDBNavbarBrand>

                        <MDBNavbarToggler
                            aria-controls='navbarSupportedContent'
                            aria-expanded='false'
                            aria-label='Toggle navigation'
                            onClick={() => setShowBasic(!showBasic)}
                        >
                            <MDBIcon icon='bars' fas />
                        </MDBNavbarToggler>

                        <MDBCollapse navbar show={showBasic}>
                            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                                <MDBNavbarItem>
                                    <MDBNavbarLink active aria-current='page' href='#'>
                                        <MDBIcon fas icon="home" className='me-2' />Home
                                    </MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='#'><MDBIcon fas icon="user" className='me-2' /> About</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='#'><MDBIcon fas icon="desktop" className='me-2' />  Features</MDBNavbarLink>
                                </MDBNavbarItem>

                                <MDBNavbarItem>
                                    <MDBDropdown>
                                        <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                                            Services
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu>
                                            <MDBDropdownItem link>Web Designing</MDBDropdownItem>
                                            <MDBDropdownItem link>Web Development</MDBDropdownItem>
                                            <MDBDropdownItem link>Application Development</MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='#'><MDBIcon fas icon="rss" className='me-2' />  Blogs</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='#'><MDBIcon fas icon="at" className='me-2' />  Contact</MDBNavbarLink>
                                </MDBNavbarItem>
                            </MDBNavbarNav>

                            <form className='d-flex input-group w-auto'>
                                <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
                                <MDBBtn color='primary'>Search</MDBBtn>
                            </form>
                        </MDBCollapse>
                    </MDBContainer>
                </MDBNavbar>
            </>
        </React.Fragment>
    )
}
export default NavBar