import React, { useEffect, useState } from 'react';
import { validateMail } from '../../shared/utils/validators';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material';
import InputWithLabel from '../../shared/InputWithLabel';
import CustomPrimaryButton from '../../shared/CustomPrimaryButton';
import { connect } from "react-redux";
import { getActions } from '../../store/actions/friendsAction';

const AddFriendDialog = (props) => {
  const { isDialogOpen, closeDialogHandler, sendFriendInvitation=()=>{} } = props;
  const [mail, setMail] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSendInvitation = () => {
    sendFriendInvitation({
      targetMailAddress:mail,
    },handleCloseDialog)
  }

  const handleCloseDialog  = () => {
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
        <DialogActions>
          <CustomPrimaryButton
            onClick={handleSendInvitation}
            disabled={!isFormValid}
            label="Send"
            additionalStyles={{
              marginLeft: "15px",
              marginRight: "15px",
              marginBottom:"10px"
            }}
          />
        </DialogActions>
      </Dialog>
    </div>
  )
}

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  }
}
export default connect(null,mapActionsToProps)(AddFriendDialog)