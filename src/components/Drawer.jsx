import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { createSvgIcon } from '@mui/material/utils';
import ContactIcon from '@mui/icons-material/ContactMail';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';



const HomeIcon = createSvgIcon(
	<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
	'Home',
);

const AppDrawer = ({ drawer, toggleDrawer }) => {

	const list = (anchor) => (
		<Box
			sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 280 }}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>

			<List>
				{['Home', 'Contacts'].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemIcon>
								{index % 2 === 0 ?  <HomeIcon color="info" /> : <ContactIcon />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{['About us', 'Write to us'].map((text) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemText primary={text} />
							<ListItemIcon>
								<HelpOutlineIcon color='error'/>
							</ListItemIcon>
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<div>
			<Drawer
				anchor={"left"}
				open={drawer["left"]}
				onClose={toggleDrawer("left", false)}
			>
				{list("left")}
			</Drawer>
		</div>
	);
}

export { AppDrawer };