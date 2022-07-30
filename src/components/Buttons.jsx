import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import AddTaskIcon from '@mui/icons-material/AddTask';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { memo } from 'react';
import { useState } from 'react';
import Popover from '@mui/material/Popover';
import { AppForm } from './Form';

const AppButtonsInner = ({ itemsChecked, removeTodo, addTodo}) => {
	const theme = useTheme();

	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;

	return (
		<Grid container spacing={2} sx={{ paddingBottom: 2 }}>
			<Grid item xs={5}>
				<Button onClick={handleClick}
					variant={theme.palette.mode === 'dark' ? "outlined" : "contained"} endIcon={<AddTaskIcon />}
					color="info" fullWidth={true}>Add element</Button>
				<Popover
					id={id}
					open={open}
					anchorEl={anchorEl}
					onClose={handleClose}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left',
					}}
				>
					<AppForm addTodo={addTodo} handleClose={handleClose} />
				</Popover>
			</Grid>
			<Grid item xs={7}>
				<Button onClick={removeTodo} variant="outlined" endIcon={<DeleteIcon />}
					color="error" fullWidth={true} disabled={itemsChecked.length === 0}>Delete selected items</Button>
			</Grid>
		</Grid>
	)
}

export const AppButtons = memo(AppButtonsInner);