import React from 'react';
import THead from './THead';
import TBody from './TBody';
import "bootstrap/dist/css/bootstrap.css";

const TableUser = () => {
    let arr = [
        {
            id: 1,
            firstName: "Terry",
            lastName: "Medhurst",
            age: 50,
            gender: "male",
            phone: "63 791 675 8914",
        },
        {
            id: 2,
            firstName: "Sheldon",
            lastName: "Quigley",
            age: 28,
            gender: "male",
            phone: "7 813 117 7139",
        },
        {
            id: 3,
            firstName: "Terrill",
            lastName: "Hills",
            age: 38,
            gender: "male",
            phone: "63 739 292 7942",
        },
        {
            id: 4,
            firstName: "Miles",
            lastName: "Cummerata",
            age: 49,
            gender: "male",
            phone: "86 461 145 4186",
        },
        {
            id: 5,
            firstName: "Mavis",
            lastName: "Schultz",
            age: 38,
            gender: "male",
            phone: "372 285 771 1911",
        },
        {
            id: 6,
            firstName: "Alison",
            lastName: "Reichert",
            age: 21,
            gender: "female",
            phone: "351 527 735 3642",
        },
        {
            id: 7,
            firstName: "Oleta",
            lastName: "Abbott",
            age: 31,
            gender: "female",
            phone: "62 640 802 7111",
        },
        {
            id: 8,
            firstName: "Ewell",
            lastName: "Mueller",
            age: 29,
            gender: "male",
            phone: "86 946 297 2275",
        },
        {
            id: 9,
            firstName: "Demetrius",
            lastName: "Corkery",
            age: 22,
            gender: "male",
            phone: "86 356 590 9727",
        },
        {
            id: 10,
            firstName: "Eleanora",
            lastName: "Price",
            age: 37,
            gender: "female",
            phone: "60 184 408 0824",
        },
    ];
    return (
        <div>
            <table className="table table-bordered">
                <THead></THead>
                <TBody userList={arr}></TBody>
            </table>
        </div>
    );
};

export default TableUser;