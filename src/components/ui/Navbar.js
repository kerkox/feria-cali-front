import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
import { makeStyles } from "@material-ui/core/styles"
import { List, ListItem, ListItemText } from "@material-ui/core"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import logo from './../../assets/static/logo_feria.png'
import './Navbar.scss'

const navLinks = [
	{ title: `Inicio`, path: `/home` },
	{ title: `Streaming`, path: `/streaming` },
	{ title: `Juegos`, path: `/juegos` },	
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

	const { user, dispatch } = useContext(AuthContext);
	const history = useHistory();

	const handleLogout = () => {

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
					{navLinks.map(({ title, path }) => (
						<NavLink 
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
					))}
				</List>
			</div>
			<div className="header__menu">
				<div className="header__menu--profile">
					<AccountCircleIcon fontSize="large"></AccountCircleIcon>					
				</div>
				<ul>
					<li><a href="/">Cuenta</a></li>
					<li><a href="/">Cerrar Sesión</a></li>
				</ul>
			</div>
		</header>
	)
}