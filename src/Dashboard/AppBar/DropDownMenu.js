import { IconButton, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react'
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { logout } from '../../shared/utils/auth';

const DropDownMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
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
      </Menu>
    </div>
  )
}

export default DropDownMenu