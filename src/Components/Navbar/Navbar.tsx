// import { IconButton } from '@fluentui/react/lib/Button';
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
import React from 'react';
import { connect } from 'react-redux';
import { BASE_URL } from 'Utils/constants';
import { GlobalProps, mapDispatchToProps, mapStateToProps } from 'Redux/Map';
import './Navbar.scss';


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
          href: `${BASE_URL}/articles`
        },
        {
          key: '1',
          name: 'Perawatan',
        },
        {
          key: '2',
          name: 'Tentang Kami',
          href: `${BASE_URL}/about-us`
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