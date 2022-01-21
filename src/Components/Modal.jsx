import * as React from 'react';
import { useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { fetchUser } from '../services/Services';
import '../styles/modal.css';
import ClearIcon from '@mui/icons-material/Clear';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  padding:4,
  display:'flex',
  alignItems:'center',
  flexDirection:'column',
  height: 325,
  borderRadius:'2%',
};

export default function BasicModal({login,avatar_url}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [data,setData] = useState('');


  React.useEffect(() => {
    if (!open) {
      return;
    }
    fetchUser(login).then((res) => {
      setData(res.data);
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    })
  },[login, open])


  return (
    <div className='parent'>
      <h2 onClick={handleOpen}>{login}</h2>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='modal'>
            <div className="head">
              <div className="left">
              <h2>User data</h2>
              </div>
              <div className="icon">
                <ClearIcon 
                onClick={handleClose}
                />
              </div>
              </div>
          <div className="image">
            <img src={data.avatar_url} alt="" />
            </div>
            <div className="name">
              <h2>{data.name}</h2>
              <h4>{login}</h4>
            </div>
            <div className="data">
              <div className="followers">
                <h2>{data.followers}</h2>
                <h3>followers</h3>
              </div>
              <div className="following">
              <h2>{data.following}</h2>
              <h3>following</h3>
              </div>
            </div>
              <div className="location">
                <LocationOnIcon/>
                <h2>{data.location}</h2>
              </div>
            </div>
        </Box>
      </Modal>
    </div>
  );
}
