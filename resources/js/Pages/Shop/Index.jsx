import React from "react";
import Container from "react-bootstrap/Container";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Head, usePage, Link } from "@inertiajs/inertia-react";
import Layout from "./Layout";

// export default function Index() {
//     return (
//         <NavbarLayout>
//             <Head><title>NeoShop</title></Head>
//             <p>ShopBetaDevRevision</p>
//         </NavbarLayout>
//     );
// }
export default function Index() {
    return (
            <Layout>
            <p>Hello World</p>
            </Layout>
    );
}
