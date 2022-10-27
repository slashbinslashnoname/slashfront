import React from 'react';

import { Container, AppBar, Toolbar } from '@mui/material';
import Menu from '../Menu';

function Header() {
  return (
    <Container>
      <AppBar position="relative" className="navbar" color="transparent" elevation={0}>
        <Toolbar className="navbar-toolbar">
          <div className="navbar-brand">
            <a href="/">
              <img
                className="nav-logo-xl"
                src="/images/logo.png"
                alt="Slashbin"
              />
            </a>
          </div>
          <div className="navbar-menu">
            <Menu
              className="navbar-nav"
              items={[
                { link: '/', title: 'Home' },
                { link: '/process', title: 'Process' },
                { link: '/culture', title: 'Culture' },
                { link: '/freelancers', title: 'Freelancers' },
                { link: '/contact', title: 'Contact' },
              ]}
            />
          </div>
        </Toolbar>
      </AppBar>
    </Container>

  );
}

export default Header;
