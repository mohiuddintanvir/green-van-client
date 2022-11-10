import React from 'react';

const Allreview = ({ revi }) => {
    const { customer, email, phonenumber, comment } = revi
    return (
        <div >


            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={phonenumber} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{customer}</h2>
                    <h2 className="card-title">{email}</h2>

                    <p>{comment}</p>

                </div>
            </div>


        </div>
    );
};

export default Allreview;