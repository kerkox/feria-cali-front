import './Navbar.scss'
import SideDrawer from './SideDrawer'
import React, { useContext } from 'react';
import { types } from '../../types/types';
import { makeStyles } from "@material-ui/core/styles"
import { AuthContext } from '../../auth/AuthContext';
import { NavLink, useHistory } from 'react-router-dom';
import logo from './../../assets/static/logo_feria.png'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { List, ListItem, ListItemText, Hidden, Menu, MenuItem } from "@material-ui/core"


const navLinks = [
	{ title: `Inicio`, path: `/home`, premium: false },
	{ title: `Streaming`, path: `/streaming`, premium: false },
	{ title: `Juegos`, path: `/juegos`, premium: false },
	{ title: `Streaming Premium`, path: `/premium/streaming`, premium: true },
]

const useStyles = makeStyles({
	navDisplayFlex: {
		display: `flex`,
		justifyContent: `space-between`
	},
	linkText: {
		textDecoration: `none`,
		color: `white`,
	},
});

export const Navbar = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const { user, dispatch } = useContext(AuthContext);
	const history = useHistory();

	const handleLogin = () => {
		history.replace('/auth/login');
	}

	const handleLogout = () => {
		handleClose()
		history.replace('/');

		dispatch({
			type: types.logout
		});
	}

	const classes = useStyles();


	return (

		<header className="header">
			<img className="header__img" src={logo} alt="Feria de cali" />
			<Hidden smDown>
				<div className="header__menu--options">

					<List
						component="nav"
						aria-labelledby="main navigation"
						className={classes.navDisplayFlex} // this
					>
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
			</Hidden>
			<div className="header__menu">
				<div className="header__menu--profile">
					<div className="header__menu--username">
						{user.name}
					</div>
					<AccountCircleIcon onClick={handleClick} fontSize="large">

					</AccountCircleIcon>
				</div>
				<Menu
					id="simple-menu"
					anchorEl={anchorEl}
					keepMounted
					open={Boolean(anchorEl)}
					onClose={handleClose}
					elevation={0}
					getContentAnchorEl={null}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'center',
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'center',
					}}
				>
					{!user.logged && <MenuItem onClick={handleLogin}>
						iniciar sesion
						</MenuItem>
					}
					{user.logged && <MenuItem onClick={handleLogout}>
						Logout
						</MenuItem>
					}
				</Menu>
				<Hidden mdUp>
					<SideDrawer navLinks={navLinks} />
				</Hidden>
			</div>
		</header>
	)
}