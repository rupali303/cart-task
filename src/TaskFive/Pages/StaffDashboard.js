import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function StaffDashboard() {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [showModal, setShowModal] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [note, setNote] = useState('');
  const [statusObj, setStatusObj] = useState({ id: '', status: '' });

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };
  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleChangeStatus = (newStatus) => {
    const newStatusObj = { ...statusObj, status: newStatus };
    setStatusObj(newStatusObj);
    localStorage.setItem('status', JSON.stringify(newStatusObj));
  };

  useEffect(() => {
    const storedStatus = localStorage.getItem('status');

    if (storedStatus) {
      setStatusObj(JSON.parse(storedStatus));
    } else {
      const defaultStatusObj = { id: 'your_id_here', status: 'pending' };
      setStatusObj(defaultStatusObj);
      localStorage.setItem('status', JSON.stringify(defaultStatusObj));
    }

  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleCloseModal();

    const leaveData = {
      startDate,
      endDate,
      note,
      statusObj,
      uuidv4

    }

    const leaveDataUser = localStorage.setItem('leaveData', JSON.stringify(leaveData))

    // const handleChangeStatus = (newStatus) => {
    //   setStatus(newStatus)
    //   localStorage.setItem('status', newStatus);

    //     const storedStatus = localStorage.getItem('status');

    //     if (storedStatus) {
    //       setStatus(storedStatus);
    //     } else {
    //       const defaultStatus = 'pending';
    //       setStatus(defaultStatus);
    //       localStorage.setItem('status', defaultStatus);
    //     }

    // };





  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}></Button>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <label>Leave Details</label>
            <div>
              <label>From:</label>
              <input type="date" value={startDate} onChange={handleStartDateChange} ></input>
            </div>
            <div>
              <label>To:</label>
              <input type="date" value={endDate} onChange={handleEndDateChange} />
            </div>
            <div>
              <label>Reason</label>
              <textarea style={{ border: "1px solid gray" }} value={note} onChange={handleNoteChange} />
            </div>
            <h1>Status ID: {statusObj.id}</h1>
            <h2>Status: {statusObj.status}</h2>
            <input onChange={handleChangeStatus} value={statusObj}></input>
            <div>
              <button style={{ marginLeft: "30px" }}>Cancel</button>
              <button style={{ marginLeft: "30px", border: "black" }} type="submit">Submit</button>
            </div>

          </form>
        </Box>
      </Modal>
    </div>
  );
}
export default StaffDashboard