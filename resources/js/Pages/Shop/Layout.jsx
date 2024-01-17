import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import cookie from "js-cookie";

function Layout({ children, props }) {
    const handleLogout = e => {
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
        <main>
            <header>
                <nav className="flex bg-white border-b border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="justify-between h-16">
                            <Link href="/">
                                <h2 className="py-4 mx-10">NeoShop</h2>
                            </Link>
                        </div>
                        <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex topnav-right">
                            {!props.loggedIn ? (
                                <Fragment>
                                    <Link
                                        className="m-3 py-1 px-2 bg-purple-700 text-white rounded inline-block"
                                        to="/login"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        className="m-3 py-1 px-2 bg-purple-700 text-white rounded inline-block"
                                        to="/register"
                                    >
                                        Register
                                    </Link>
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <Link
                                        className="m-3 py-1 px-2 bg-purple-700 text-white rounded inline-block"
                                        to="/user"
                                    >
                                        {user.name}
                                    </Link>
                                    <Link
                                        className="m-3 py-1 px-2 bg-purple-700 text-white rounded inline-block"
                                        to="/logout"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </Link>
                                </Fragment>
                            )}
                        </div>
                    </div>
                </nav>
            </header>
            <body>
                <div className="container">{children}</div>
            </body>
        </main>
    );
}

const mapStateToProps = state => {
    return {
      loggedIn: state.auth.loggedIn
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      logout: () => dispatch({ type: "SET_LOGOUT" })
    };
  };
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Layout);