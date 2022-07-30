import { useState, useContext, memo } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useTheme } from '@mui/material/styles';
import { ColorModeContext } from '../App';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';



const AppHeader = memo(({ toggleDrawer }) => {
	const theme = useTheme();
	const colorMode = useContext(ColorModeContext);
	const [anchorEl, setAnchorEl] = useState(null);

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" color="transparent" >
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
						onClick={toggleDrawer("left", true)}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Material UI App
						<IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
							{theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
						</IconButton>
					</Typography>
					<div>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleMenu}
							color="inherit"
						>
							<MoreIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorEl}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorEl)}
							onClose={handleClose}
						>
							<MenuItem onClick={handleClose}>Refresh</MenuItem>
							<MenuItem onClick={handleClose}>Help</MenuItem>
							<MenuItem onClick={handleClose}>Sign Out</MenuItem>
						</Menu>
					</div>
				</Toolbar>
			</AppBar>
		</Box>
	);
})

export { AppHeader };