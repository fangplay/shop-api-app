import React from "react";
import Container from "react-bootstrap/Container";
import {
    Navbar,
    Nav,
    NavDropdown,
    Form,
    Button,
    ButtonGroup,
} from "react-bootstrap";
import { Link } from "@inertiajs/react";

export default function Layout({ children }) {
    // const navbar = () => {
    //     if (currentUser === null) {
    //         <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex topnav-right">
    //             <div className="ant-space-item">
    //                 <a
    //                     className="header-button ant-btn ant-btn-primary"
    //                     href="/Register"
    //                 >
    //                     Register
    //                 </a>
    //             </div>
    //             <div className="ant-space-item">
    //                 <a
    //                     className="header-button ant-btn ant-btn-primary"
    //                     href="/Login"
    //                 >
    //                     Login
    //                 </a>
    //             </div>
    //         </div>;
    //     } else {
    //         <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex topnav-right">
    //             <div className="ant-space-item">
    //                 <a
    //                     className="header-button ant-btn ant-btn-primary"
    //                     href="/User"
    //                 >
    //                     Profile
    //                 </a>
    //             </div>
    //             <div className="ant-space-item">
    //                 <a
    //                     className="header-button ant-btn ant-btn-primary"
    //                     href="/Logout"
    //                 >
    //                     Logout
    //                 </a>
    //             </div>
    //         </div>;
    //     }
    // };

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    return (
        <div className="container">
            {/* <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">NeoShop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto topnav-right">
                            <Nav.Link href="/Register">Register</Nav.Link>
                            <Nav.Link href="/Login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}
            <nav className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                </Link>
                            </div>

                            {/*<div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex topnav-right">
                                <div className="ant-space-item">
                                    <a href="/Register">Register</a>
                                </div>
                                <div className="ant-space-item">
                                    <a className="header-button ant-btn ant-btn-primary" href="/Login">Login</a>
                                </div>
                            </div> */}
                            {/* {navbar} */}
                            {isAuthenticated ? (
                                <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex topnav-right">
                                    <div className="ant-space-item">
                                        <a
                                            className="header-button ant-btn ant-btn-primary"
                                            href="/Register"
                                        >
                                            Register
                                        </a>
                                    </div>
                                    <div className="ant-space-item">
                                        <a
                                            className="header-button ant-btn ant-btn-primary"
                                            href="/Login"
                                        >
                                            Login
                                        </a>
                                    </div>
                                </div>
                            ) : (
                                <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex topnav-right">
                                    <div className="ant-space-item">
                                        <a
                                            className="header-button ant-btn ant-btn-primary"
                                            href="/User"
                                        >
                                            Profile
                                        </a>
                                    </div>
                                    <div className="ant-space-item">
                                        <a
                                            className="header-button ant-btn ant-btn-primary"
                                            href="/Logout"
                                        >
                                            Logout
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
