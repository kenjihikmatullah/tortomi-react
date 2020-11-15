import './Navbar.scss';
import React from 'react';
// import { IconButton } from '@fluentui/react/lib/Button';
import { IButtonStyles, Layer, Text, FontWeights, Panel, List, CommandBar, ICommandBarItemProps } from '@fluentui/react';
import { useBoolean } from '@uifabric/react-hooks';
import { mergeStyles, AnimationClassNames } from 'office-ui-fabric-react/lib/Styling';
import { Customizer } from 'office-ui-fabric-react/lib/Utilities';
import { Nav, INavLink, INavStyles, INavLinkGroup } from 'office-ui-fabric-react/lib/Nav';

import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import { GlobalProps, mapDispatchToProps, mapStateToProps } from '../../Redux/Map';
import { MenuModel } from '../../Models';
import { connect } from 'react-redux';

interface State {
  anchorEl?: any;
  mobileAnchorEl?: any;
  menus: ICommandBarItemProps[];
}

class Navbar extends React.Component<GlobalProps, State> {

  constructor(props: GlobalProps) {
    super(props);

    this.state = {
      anchorEl: false,
      mobileAnchorEl: false,
      menus: [
        {
          key: '0',
          name: 'Artikel',
        },
        {
          key: '1',
          name: 'Perawatan',
        }
      ]
    };
  }

  render() {
    const { anchorEl, mobileAnchorEl, menus } = this.state;

    return (
      <nav>

        <AppBar className='app-bar' position="static">
          <Toolbar className='toolbar'>

            <Text className='title' nowrap>
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
                aria-label="show more"
                aria-controls={',pbo;e'}
                aria-haspopup="true"
                onClick={(event) => {
                  this.setState({
                    mobileAnchorEl: event.target
                  });
                }}
                color="inherit"
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
          onClose={() => {
            this.setState({
              mobileAnchorEl: null
            });
          }}
        >
          <MenuItem>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <p>Messages</p>
          </MenuItem>
          <MenuItem>
            <IconButton aria-label="show 11 new notifications" color="inherit">
              <Badge badgeContent={11} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <p>Notifications</p>
          </MenuItem>
          <MenuItem>
            <IconButton
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <p>Profile</p>
          </MenuItem>
        </Menu>

      </nav>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  Navbar
);

// References
/**
 * https://medium.com/codeartisan/breakpoints-and-media-queries-in-scss-46e8f551e2f2
 * https://codesandbox.io/s/material-ui-navbar-responsive-forked-ez6kw?file=/src/components/Toolbar/Toolbar.js:7097-7103&resolutionWidth=320&resolutionHeight=675
 */