/* eslint-disable react-hooks/exhaustive-deps */
import Box from '@mui/material/Box';
import { memo, useState } from 'react';
import { AppList } from './List';
import { AppButtons } from './Buttons';
import { CreateFabButton } from './FabButton';
import { useSnackbar } from 'notistack';


const AppContent = memo(() => {
	const { enqueueSnackbar } = useSnackbar();

	const [todos, setTodos] = useState([
		{ title: 'Задача 1', description: '1111111', checked: false },
		{ title: 'Задача 2', description: '222222222222', checked: false },
		{ title: 'Задача 3', description: '333333333333333333', checked: false },
		{ title: 'Задача 4', description: '4444', checked: false },
		{ title: 'Задача 5', description: '55555555555555555', checked: false },
		{ title: 'Задача 6', description: 'csdcscscscsssssssvrfv', checked: false },
		{ title: 'Задача 7', description: '-------------------------------------', checked: false },
		{ title: 'Задача 8', description: 'dfvfbrtr yhthf', checked: false },
	]);

	const removeTodo = () => {
		const newTodos = todos.filter(item => !item.checked);
		setTodos(newTodos);
		enqueueSnackbar('Tasks removed', { variant: 'error' });
	};

	const addTodo = (taskTitle, taskDescription) => {
		setTodos([...todos, { title: taskTitle, description: taskDescription, checked: false }])
		enqueueSnackbar(`Task - ${taskTitle} added`, { variant: 'success' });
	};


	return (
		<Box component="span" sx={{ p: 3 }}>
			<AppButtons itemsChecked={todos.map((item) => item.checked).filter(i => i)} removeTodo={removeTodo} addTodo={addTodo} />
			<AppList todos={todos} setTodos={setTodos} />
			<CreateFabButton />
		</Box>
	)
});

export { AppContent };