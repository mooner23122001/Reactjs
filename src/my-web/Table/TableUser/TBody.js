import React from 'react';
import { useState } from "react";

const TBody = (props) => {
    const [user, setUser] = useState(props.userList)
    return (
        <tbody className="text-center" id="show-infor">
            {user.map((val, ind) => {
        return (
            <tr key={ind}>
                <th scope="row">{ind + 1}</th>
                <td>{val.firstName}</td>
                <td>{val.lastName}</td>
                <td>{val.age}</td>
                <td>{val.gender}</td>
                <td>{val.phone}</td>
            </tr>
        );
    })}
        </tbody>
    );
};

export default TBody;