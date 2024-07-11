import React from 'react';

const Allreview = ({ revi }) => {
    const { customer, email, phonenumber, comment } = revi
    return (
        <div >

<div className="card card-side bg-base-100 shadow-xl">
  
  <div className="card-body">
    <h2 className="card-title">{customer}</h2>
    <p>{email}</p>
    <div className="card-actions justify-end">
        <p>{comment}</p>
      
    </div>
  </div>
</div>



        </div>
    );
};

export default Allreview;