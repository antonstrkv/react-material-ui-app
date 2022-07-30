import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



const AppForm = ({ addTodo, handleClose }) => {
	const [taskTitle, setTaskTitle] = useState('');
	const [taskDescription, setTaskDescription] = useState('');
	const [errorTitle, setErrorTitle] = useState(false);
	const [errorDescription, setErrorDescription] = useState(false);


	const onAdd = () => {
		if (!taskTitle) { setErrorTitle(true) } else { setErrorTitle(false) };
		if (!taskDescription) { setErrorDescription(true) } else { setErrorDescription(false) };


		if (taskTitle && taskDescription) {
			setErrorTitle(false);
			setErrorDescription(false);
			addTodo(taskTitle, taskDescription);
			handleClose();
		}
	}


	return (
		<Box
			component="form"
			sx={{
				m: 3, width: 300,
			}}
			noValidate
			autoComplete="off"
		>
			<TextField id="standard-basic" label="Enter the title" variant="filled" fullWidth placeholder='title' color="info"
				sx={{ marginBottom: 2, }} onChange={(e) => setTaskTitle(e.currentTarget.value)}
				error={errorTitle} helperText={errorTitle ? "The title field cannot be empty." : ''} />

			<TextField id="standard-basic" label="Enter the description" variant="filled" fullWidth placeholder='description'
				color="info" sx={{ marginBottom: 2, }} onChange={(e) => setTaskDescription(e.currentTarget.value)}
				error={errorDescription} helperText={errorDescription ? "The description field cannot be empty." : ''} />

			<Button variant="contained" color="info" onClick={onAdd}>Add element</Button>
		</Box>
	);
}

export { AppForm };