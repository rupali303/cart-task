// import React, { useState } from 'react';
// import './Modal.css';

// const StaffCard = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [note, setNote] = useState('');

//   const handleOpenModal = () => {
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   const handleStartDateChange = (event) => {
//     setStartDate(event.target.value);
//   };

//   const handleEndDateChange = (event) => {
//     setEndDate(event.target.value);
//   };

//   const handleNoteChange = (event) => {
//     setNote(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     handleCloseModal();
//   };

//   return (
//     <div>
//       <button onClick={handleOpenModal}>Open Modal</button>
//       {showModal && (
//         <div className="modal">
//           <div className="modal-content">
//             <span className="close" onClick={handleCloseModal}>
//               &times;
//             </span>
//             <form onSubmit={handleSubmit}>
//               <label>Leave Details</label>
//               <div>
//                 <label>From:</label>
//                 <input
//                   type="date"
//                   value={startDate}
//                   onChange={handleStartDateChange}
//                 ></input>
//               </div>
//               <div>
//                 <label>To:</label>
//                 <input
//                   type="date"
//                   value={endDate}
//                   onChange={handleEndDateChange}
//                 />
//               </div>
//               <div>
//                 <label>Reason</label>
//                 <textarea style={{border:"1px solid gray"}} value={note} onChange={handleNoteChange} />
//               </div>
//               <div>
//               <button style={{marginLeft:"30px"}}>Cancel</button>
//               <button style={{marginLeft:"30px",border:"black"}} type="submit">Submit</button>
//               </div>
              
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default StaffCard;
