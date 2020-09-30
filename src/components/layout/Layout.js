import React, { Component, Fragment } from 'react'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import './Layout.css';
//
import ToolBar from '../Navigation/ToolBar/ToolBar'

class Layout extends Component {
    state = {
        showSideDrawer: true
    }

    SideDrawerHandler = () => {
        this.setState({ showSideDrawer: false })
    }
    render() {
        return (<Fragment>
            <ToolBar />
            <SideDrawer
                closed={this.SideDrawerHandler}
                show={this.state.showSideDrawer} />

            <main className='content'>
                {this.props.children}
            </main>
        </Fragment >)
    }


}



export default Layout;