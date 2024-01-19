import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavLayout from "@/Layouts/NavbarLayout";

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
            <NavLayout>
            <p>Hello World</p>
            </NavLayout>
    );
}
