import React, { Fragment } from 'react'
import './Layout.css';

const Layout = (props) => (
    <Fragment>
        <div>toolbar ,side bar , backdrop</div>
        <main className='content'>
            {props.children}
        </main>
    </Fragment >

)


export default Layout;