import { IconButton, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react'
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { logout } from '../../shared/utils/auth';
import { connect } from "react-redux";
import { getActions } from '../../store/actions/roomActions';
const DropDownMenu = ({audioOnly,setAudioOnly}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }
  const handleAudioOnlyChange = () => {
    setAudioOnly(!audioOnly)
  }

  return (
    <div>
      <IconButton onClick={handleMenuOpen} style={{ color: "white" }}>
           <MoreVertIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
            MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
      <MenuItem onClick={logout}>Logout</MenuItem>    
        <MenuItem onClick={handleAudioOnlyChange}>
          {audioOnly ? "Audio Only Enabled":"Audio Only Disabled"}
        </MenuItem>    
      </Menu>
    </div>
  )
}

const mapStoreStateToProps = ({ room }) => {
  return {
    ...room
  }
}


const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  }
}
export default connect(mapStoreStateToProps,mapActionsToProps)(DropDownMenu)