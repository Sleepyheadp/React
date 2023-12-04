import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Button} from "antd";
import RouterView from "../router/routerFive";
import routes from "../router/routerFive/routes";
import "../styles/user.css";
class UserRouterFive extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
          <>
            <div className="userBox router5">
                <div className="userNav">
                    <Link to="/user/a"><Button className='userA'>UserA</Button></Link>
                    <Link to="/user/b"><Button className='userB'>UserB</Button></Link>
                    <Link to="/user/c"><Button className='userC'>UserC</Button></Link>
                </div>
                <div className="userContent">
                    <RouterView routes={routes[1]?.children}></RouterView>
                </div>
            </div>
          </>
        );
    }
}

export default UserRouterFive;
