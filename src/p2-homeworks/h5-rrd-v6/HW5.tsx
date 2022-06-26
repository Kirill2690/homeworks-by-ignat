import React from 'react'
import Header from './Header'
import Pages from './Pages'
import {HashRouter} from "react-router-dom";
import Error404 from "../h2/tests/h5-rrd-v6/pages/Error404";
///
function HW5() {
    return (
        <div>
            <HashRouter>

                <Header/>

                <Pages/>
                <Error404/>

            </HashRouter>
        </div>
    )
}

export default HW5
