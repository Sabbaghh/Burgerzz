import React, { Component, Fragment } from 'react'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import './Layout.css';
//
import ToolBar from '../Navigation/ToolBar/ToolBar'

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    hideSideDrawer = () => {
        this.setState({ showSideDrawer: false })
    }
    showSideDrawer = () => {
        this.setState({ showSideDrawer: true })
    }


    render() {
        return (
            <Fragment>
                <ToolBar show={this.showSideDrawer} />
                <SideDrawer
                    closed={this.hideSideDrawer}
                    show={this.state.showSideDrawer} />
                <main className='content'>
                    {this.props.children}
                </main>
            </Fragment >
        )
    }


}



export default Layout;