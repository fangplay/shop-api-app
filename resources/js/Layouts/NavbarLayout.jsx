import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
} from "flowbite-react";
import cookie from "js-cookie";
import { Head } from "@inertiajs/inertia-react";

function NavLayout({ props }) {
    const handleLogout = (e) => {
        e.preventDefault();
        cookie.remove("token");
        props.logout();
    };
    // const [isAuthenticated, setIsAuthenticated] = useState(false);
    // return (
    //     <div className="container">
    //         <Header title="NeoShop"/>
    //         {/* <Navbar expand="lg" className="bg-body-tertiary">
    //            <Container>
    //                  <Navbar.Brand href="#home">NeoShop</Navbar.Brand>
    //                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //                  <Navbar.Collapse id="basic-navbar-nav">
    //                      <Nav className="me-auto topnav-right">
    //                          <Nav.Link href="/Register">Register</Nav.Link>
    //                          <Nav.Link href="/Login">Login</Nav.Link>
    //                      </Nav>
    //                  </Navbar.Collapse>
    //              </Container>
    //          </Navbar> */}
    //         <nav className="bg-white border-b border-gray-100">
    //             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //                 <div className="flex justify-between h-16">
    //                     <div className="flex">
    //                         <div className="shrink-0 flex items-center">
    //                             <Link href="/">
    //                                 <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
    //                             </Link>
    //                         </div>

    //                         {/*<div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex topnav-right">
    //                              <div className="ant-space-item">
    //                                  <a href="/Register">Register</a>
    //                              </div>
    //                              <div className="ant-space-item">
    //                                  <a className="header-button ant-btn ant-btn-primary" href="/Login">Login</a>
    //                              </div>
    //                          </div> */}
    //                         {/* {navbar} */}
    //                         {isAuthenticated ? (
    //                             <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex topnav-right">
    //                                 <div className="ant-space-item">
    //                                     <a
    //                                         className="header-button ant-btn ant-btn-primary"
    //                                         href="/Register"
    //                                     >
    //                                         Register
    //                                     </a>
    //                                 </div>
    //                                 <div className="ant-space-item">
    //                                     <a
    //                                         className="header-button ant-btn ant-btn-primary"
    //                                         href="/Login"
    //                                     >
    //                                         Login
    //                                     </a>
    //                                 </div>
    //                             </div>
    //                         ) : (
    //                             <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex topnav-right">
    //                                 <div className="ant-space-item">
    //                                     <a
    //                                         className="header-button ant-btn ant-btn-primary"
    //                                         href="/User"
    //                                     >
    //                                         Profile
    //                                     </a>
    //                                 </div>
    //                                 <div className="ant-space-item">
    //                                     <a
    //                                         className="header-button ant-btn ant-btn-primary"
    //                                         href="/Logout"
    //                                     >
    //                                         Logout
    //                                     </a>
    //                                 </div>
    //                             </div>
    //                         )}
    //                     </div>
    //                 </div>
    //             </div>
    //         </nav>
    //         <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
    //             {children}
    //         </div>
    //     </div>
    // );
    return (
        <body>
            <Head title="NeoShop" />
            <div className="container">
                {/* <nav className="flex bg-white border-b border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="justify-between h-16">
                            <Link href="/">
                                <h2 className="py-4 mx-10">NeoShop</h2>
                            </Link>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                                navbar ? "block" : "hidden"
                            }`}
                        >
                            {!props.loggedIn ? (
                                <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                    <li className="text-grey-700 hover:text-green-700">
                                        <a href="/login">Login</a>
                                    </li>
                                    <li className="text-grey-700 hover:text-green-700">
                                        <a href="/register">Register</a>
                                    </li>
                                </ul>
                                // <Fragment>
                                //     <Link
                                //         className="m-3 py-1 px-2 bg-purple-700 text-white rounded inline-block"
                                //         to="/login"
                                //     >
                                //         Login
                                //     </Link>
                                //     <Link
                                //         className="m-3 py-1 px-2 bg-purple-700 text-white rounded inline-block"
                                //         to="/register"
                                //     >
                                //         Register
                                //     </Link>
                                // </Fragment>
                            ) : (
                                // <Fragment>
                                //     <Link
                                //         className="m-3 py-1 px-2 bg-purple-700 text-white rounded inline-block"
                                //         to="/user"
                                //     >
                                //         {user.name}
                                //     </Link>
                                //     <Link
                                //         className="m-3 py-1 px-2 bg-purple-700 text-white rounded inline-block"
                                //         to="/logout"
                                //         onClick={handleLogout}
                                //     >
                                //         Logout
                                //     </Link>
                                // </Fragment>
                                <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                    <li className="text-grey-700 hover:text-green-700">
                                        <a href="/user">{user.name}</a>
                                    </li>
                                    <li className="text-grey-700 hover:text-green-700">
                                        <a
                                            href="/logout"
                                            onClick={handleLogout}
                                        >
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                </nav> */}
                <Navbar className="flex bg-white border-b border-gray-100">
                    <NavbarBrand as={Link} href="/">
                        <span className="self-center whitespace-nowrap text-xl font">
                            NeoShop
                        </span>
                    </NavbarBrand>
                    <NavbarToggle />
                    <div className="flex md:order-2">
                        {!props.loggedIn ? (
                        <NavbarCollapse  className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <NavbarLink className="text-grey-700 hover:text-green-700" href="/register">Register</NavbarLink>
                            <NavbarLink className="text-grey-700 hover:text-green-700" href="/login">Login</NavbarLink>
                        </NavbarCollapse>
                        ):(
                        <NavbarCollapse  className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <NavbarLink className="text-grey-700 hover:text-green-700" href="/user:?{user.name}">{user.name}</NavbarLink>
                            <NavbarLink className="text-grey-700 hover:text-green-700" href="/logout" onClick={handleLogout}>
                                Logout
                            </NavbarLink>
                        </NavbarCollapse>
                        )}
                    </div>
                </Navbar>

                {props.children}
            </div>
        </body>
    );
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.auth.loggedIn,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch({ type: "SET_LOGOUT" }),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(NavLayout);
