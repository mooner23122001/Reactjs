import React from 'react';

const THead = () => {
    return (
        <thead className='table-primary text-center'>
            <tr>
                <th scope="col">STT</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Age</th>
                <th scope="col">Gender</th>
                <th scope="col">Phone Number</th>
            </tr>
        </thead>
    );
};

export default THead;