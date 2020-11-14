import { Menu } from "@material-ui/icons"
import { NavLink } from 'react-router-dom';
import React, { useState, useContext } from "react"
import { AuthContext } from '../../auth/AuthContext';
import { makeStyles } from "@material-ui/core/styles"
import { List, ListItem, ListItemText, Drawer, IconButton } from "@material-ui/core"

const useStyles = makeStyles({
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  linkText: {
    textDecoration: `none`,
    color: `black`,
  },
  list: {
    width: 250,
  },
});


const SideDrawer = ({navLinks }) => {
  const { user } = useContext(AuthContext);
  const [state, setState] = useState({ right: false }) 
  const classes = useStyles(); 
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }
    setState({ [anchor]: open })
  }

  const sideDrawerList = (anchor, user) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List component="nav">
        {navLinks.map(({ title, path, premium }) => {
          const show = premium ? user.logged : true
          return show && <NavLink
            activeClassName="active"
            exact
            to={path}
            key={title}
            className={classes.linkText}>
            <ListItem button>
              <ListItemText
                className="textoNav"
                primary={title} />
            </ListItem>
          </NavLink>
        }
        )}
      </List> 
    </div>
  );


  return (
    <React.Fragment>
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={toggleDrawer("right", true)} 
      >
        <Menu fontSize="large" style={{color: 'white'}} />
      </IconButton>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
      >
        {sideDrawerList("right", user)}
      </Drawer>
    </React.Fragment>
  )
}
export default SideDrawer