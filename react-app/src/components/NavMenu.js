import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import RouteValue from '../constants/RouteValue';
import { Menu, Dropdown, Container, Image } from 'semantic-ui-react';

import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  state = { activeItem: 'Home' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state

    return (
      <header>
        {/* <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
          <Container>
            <NavbarBrand tag={Link} to="/">AspDotNetCoreTest</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/counter">Counter</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/fetch-data">Fetch data</NavLink>
                </NavItem>
              </ul>
            </Collapse>
          </Container>
        </Navbar> */}
        {/*<Menu secondary>
          <Menu.Item as={NavLink} to="/" name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} />
          <Menu.Item as={NavLink} to="/counter" name='Counter' active={activeItem === 'Counter'} onClick={this.handleItemClick} />
          <Menu.Item as={NavLink} to="/fetch-data" name='Fetch data' active={activeItem === 'Fetch data'} onClick={this.handleItemClick} />
            </Menu>*/}

        <Menu fixed='top' borderless>
          <Container>
            <Menu.Item as='a' header>{/* <Image size='mini' src='/logo.png' /> */}GanHJ React</Menu.Item>
            <Menu.Item as={NavLink} to={RouteValue.HOME.path} name={RouteValue.HOME.name} active={activeItem === RouteValue.HOME.name} onClick={this.handleItemClick} />
            <Menu.Item as={NavLink} to={RouteValue.COUNTER.path} name={RouteValue.COUNTER.name} active={activeItem === RouteValue.COUNTER.name} onClick={this.handleItemClick} />
            <Menu.Item as={NavLink} to={RouteValue.FETCH_DATA.path} name={RouteValue.FETCH_DATA.name} active={activeItem === RouteValue.FETCH_DATA.name} onClick={this.handleItemClick} />
            <Menu.Item as={NavLink} to={RouteValue.ADD_PRODUCT.path} name={RouteValue.ADD_PRODUCT.name} active={activeItem === RouteValue.ADD_PRODUCT.name} onClick={this.handleItemClick} />
          </Container>
        </Menu>
      </header >
    );
  }
}
