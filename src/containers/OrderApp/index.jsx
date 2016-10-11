'use strict';
import React, { Component } from 'react';
import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';
import Menu from 'antd/lib/menu';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Icon from 'antd/lib/icon';
import Select from 'antd/lib/select';
import './header.less'
class OrderApp extends Component {
    render () {
        return (
            <header id="header">
                <Row>
                  <Col lg={5} md={6} sm={7} xs={24}>
                    <Icon
                      className="nav-phone-icon"
                      type="menu"
                    />
                    <Link to="/" id="logo">
                      <img alt="logo" src="https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png" />
                      <span>ANT DESIGN | MOBILE</span>
                    </Link>
                  </Col>
                  <Col className="nav" lg={19} md={18} sm={17} xs={0} style={{ display: 'block' }}
                  >
                    <Menu id="nav">
                      <Menu.Item key="home">
                        <Link to="/">
                          首页
                        </Link>
                      </Menu.Item>
                      <Menu.Item key="components">
                        <Link to="/docs/react/introduce">
                          组件
                        </Link>
                      </Menu.Item>
                      <Menu.Item key="docs/pattern">
                        <Link to="/docs/pattern/color">
                          设计基础
                        </Link>
                      </Menu.Item>
                    </Menu>
                  </Col>
                </Row>
            </header>
        );
    }
}

export default OrderApp;