import { memo, useState } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import TextField from '@mui/material/TextField';
import DialogContentText from '@mui/material/DialogContentText';
import { useSnackbar } from 'notistack';



const CreateFabButton = memo(() => {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState(Date.now());
	const { enqueueSnackbar } = useSnackbar();


	const handleChange = (newValue) => {
		setValue(newValue);
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleClickVariant = (variant) => () => {
		enqueueSnackbar(`Saved date - ${value}`, { variant });
	};

	return (
		<>
			<Fab onClick={handleClickOpen} color="info" aria-label="add" variant="circular"
				style={{
					margin: 0,
					top: 'auto',
					left: 'auto',
					bottom: 40,
					right: 40,
					position: 'fixed',
				}}>
				<AddIcon />
			</Fab>
			<Dialog
				fullWidth
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">
					{"Date Picker"}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description" sx={{ paddingBottom: 2 }}>
						Select the desired date.
					</DialogContentText>
					<MobileDatePicker
						orientation="landscape"
						label="Date mobile"
						inputFormat="dd.MM.yyyy"
						value={value}
						onChange={handleChange}
						renderInput={(params) => <TextField {...params} />}
						onAccept={handleClickVariant('info')}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} autoFocus>
						Ok
					</Button>
				</DialogActions>
			</Dialog>
		</>
	)
})

export { CreateFabButton }