import React, { useEffect, useState } from 'react';
import { validateMail } from '../../shared/utils/validators';
import { Dialog, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material';
import InputWithLabel from '../../shared/InputWithLabel';

const AddFriendDialog = (props) => {
  const { isDialogOpen, closeDialogHandler, sendFriendInvitation } = props;
  const [mail, setMail] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSendInvitation = () => {
    
  }

  const handleCloseDialog = () => {
    closeDialogHandler();
    setMail("");
  }

  useEffect(() => {
    setIsFormValid(validateMail(mail));
  },[mail,setIsFormValid])
  return (
    <div>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography>Invite a Friend </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter e-mail address of friend which you would like to invite 
          </DialogContentText>
          <InputWithLabel  label="Mail" type="text" value={mail} setValue={setMail} placeholder="Enter mail address"/>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default AddFriendDialog