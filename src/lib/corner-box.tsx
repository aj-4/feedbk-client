import React, { SyntheticEvent } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import { Paper } from '@material-ui/core';


interface Props {
    setOpen: (arg0: boolean) => void,
    open: boolean
}

type Event = React.ChangeEvent<HTMLSelectElement>;

function Transition(props: any) {
  return <Slide direction="up" {...props} />;
}

function AlertDialogSlide({setOpen, open}: Props) {

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const [feedback, setFeedback] = React.useState('');

  return (
    <div>
      <Slide direction="up" in={open} mountOnEnter unmountOnExit>
          <Paper>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                <TextField
                    id="outlined-multiline-static"
                    label="Leave feedback"
                    multiline
                    rows="4"
                    value={feedback}
                    onChange={(e: Event) => setFeedback(e.target.value)}
                    margin="normal"
                    helperText="Thanks for your help!"
                    variant="outlined"
                    />
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Close
                </Button>
                <Button onClick={handleClose} color="primary">
                    Submit
                </Button>
            </DialogActions>
            </Paper>
        </Slide>
    </div>
  );
}

export default AlertDialogSlide;