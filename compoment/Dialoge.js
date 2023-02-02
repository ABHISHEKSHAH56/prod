import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';






export default function DraggableDialog({open, setOpen}) {
    
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
       
        <Dialog
          open={open}
          onClose={handleClose}          
          aria-labelledby="draggable-dialog-title"
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle  id="draggable-dialog-title">
            Processing
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              we have sent mail 2 out of 10 .
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Cancel
            </Button>
            
          </DialogActions>
        </Dialog>
      </div>
    );
  }