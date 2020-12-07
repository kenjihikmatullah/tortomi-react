import { CommandBar, ICommandBarItemProps, Text } from '@fluentui/react';
import AppBar from "@material-ui/core/AppBar";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import MoreIcon from "@material-ui/icons/MoreVert";
import NotificationsIcon from "@material-ui/icons/Notifications";
import React, { FC as Component, useState } from 'react';
import { connect } from 'react-redux';
import { BASE_URL } from 'Utils/constants';
import { GlobalProps, mapDispatchToProps, mapStateToProps } from 'Redux/Map';
import './Navbar.scss';


interface State {
  mobileAnchorEl?: any;
  menus: ICommandBarItemProps[];
}

const Navbar: Component<GlobalProps> = (props: GlobalProps) => {
  const [mobileAnchorEl, setMobileAnchorEl] = useState<any>(false);
  const menus = [
    {
      key: '0',
      name: 'Artikel',
      href: `${BASE_URL}/articles`,
      path: '/articles'
    },
    {
      key: '1',
      name: 'Perawatan',
      href: `${BASE_URL}/treatments`,
      path: '/treatments'
    },
    {
      key: '2',
      name: 'Tentang Kami',
      href: `${BASE_URL}/about-us`,
      path: 'about-us'
    }
  ]

  return (
    <nav>

      <AppBar className='app-bar' position="static">
        <Toolbar className='toolbar'>

          <Text className='title'>
            Tortomi
            </Text>

          {/* Desktop */}
          <div className='desktop-section'>
            <CommandBar
              items={menus}
            />
          </div>

          {/* Mobile */}
          <div className='mobile-section'>
            <IconButton
              color="primary"
              aria-label="show more"
              aria-controls={',pbo;e'}
              aria-haspopup="true"
              onClick={(event) => setMobileAnchorEl(event.target)}
            >
              <MoreIcon />
            </IconButton>
          </div>

        </Toolbar>
      </AppBar>

      <Menu
        anchorEl={mobileAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={'mobile'}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={mobileAnchorEl}
        onClose={() => setMobileAnchorEl(null)}
      >
        {menus.map((m) => {
          return (
            <MenuItem onClick={() => window.location.href=m.href}>
              <Text>{m.name}</Text>
            </MenuItem>
          );
        })}
      </Menu>

    </nav>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(
  Navbar
);

// References
/**
 * https://medium.com/codeartisan/breakpoints-and-media-queries-in-scss-46e8f551e2f2
 * https://codesandbox.io/s/material-ui-navbar-responsive-forked-ez6kw?file=/src/components/Toolbar/Toolbar.js:7097-7103&resolutionWidth=320&resolutionHeight=675
 */