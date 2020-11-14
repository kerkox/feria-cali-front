import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
import { makeStyles } from "@material-ui/core/styles"
import { List, ListItem, ListItemText } from "@material-ui/core"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import logo from './../../assets/static/logo_feria.png'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './Navbar.scss'

const navLinks = [
	{ title: `Inicio`, path: `/home`, premium:false },
	{ title: `Streaming`, path: `/streaming`, premium:false },
	{ title: `Juegos`, path: `/juegos`, premium:false },
	{ title: `Streaming Premium`, path: `/premium/streaming`, premium:true },
]

const useStyles = makeStyles({
	navDisplayFlex: {
		display: `flex`,
		justifyContent: `space-between`
	},
	linkText: {
		textDecoration: `none`,
		// textTransform: `uppercase`,
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
			<div className="header__menu--options">
				<List
					component="nav"
					aria-labelledby="main navigation"
					className={classes.navDisplayFlex} // this
				>
					{navLinks.map(({ title, path, premium }) => {
							const show = premium ? user.logged : true
						 return show &&  <NavLink 
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
					{ !user.logged && <MenuItem onClick={handleLogin}>
							iniciar sesion						
						</MenuItem>
					}
					{ user.logged && <MenuItem onClick={handleLogout}>
						Logout
						</MenuItem>
					}
				</Menu>
			</div>
		</header>
	)
}