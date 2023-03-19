import React from 'react'

import Pages from './Pages'
import {HashRouter} from "react-router-dom";
import {Layout} from "./layout/Layout";


function HW5() {
    return (
        <div>
            <hr/>
            homeworks 5
            <HashRouter>
                {/*в gh-pages лучше работает HashRouter, с BrowserRouter скорее всего не пройдёт тест*/}
                <Layout>
                    <Pages/>
                </Layout>
            </HashRouter>
        </div>
    )
}

export default HW5
