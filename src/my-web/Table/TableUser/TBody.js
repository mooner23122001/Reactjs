import React from 'react';
import { useState } from "react";

const TBody = (props) => {
    return (
        <tbody className="text-center" id="show-infor">
            {props.listUser.map((val, ind) => {
                return (
                    <tr key={ind} className={ind === props.index ? "active text-center" : "text-center"} onClick={() => props.onClick(ind)}>
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