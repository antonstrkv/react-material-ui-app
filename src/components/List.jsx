import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';


const AppList = ({ todos, setTodos }) => {

	const handleToggle = (item) => {
		let newTodos = [...todos];
		newTodos[newTodos.indexOf(item, 0)].checked = !newTodos[newTodos.indexOf(item, 0)].checked;
		setTodos(newTodos);
	}


	return (
		<List>
			{todos.map((item, index) => <div key={index}> <ListItem
				disablePadding
				
			>
				<ListItemButton role={undefined} onClick={() => handleToggle(item)} dense>
					<ListItemIcon >
						<Checkbox
							edge="start"
							checked={item.checked}
							tabIndex={-1}
							disableRipple
							inputProps={{ 'aria-labelledby': index }}
						/>
					</ListItemIcon>
					<ListItemText id={index} primary={item.title} secondary={item.description} />
				</ListItemButton>
			</ListItem>
				<Divider /> </div>)}

		</List>
	);
}

export { AppList };