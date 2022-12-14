import React, { useState } from "react";
import Menu from "./Menu/Menu";
import TableUser from "./TableUser/TableUser";

const TableValidate = () => {
    let arr = [
        {
            id: 1,
            firstName: "Terry",
            lastName: "Medhurst",
            age: 50,
            gender: "male",
            phone: "637916758914",
        },
        {
            id: 2,
            firstName: "Sheldon",
            lastName: "Quigley",
            age: 28,
            gender: "male",
            phone: "78131177139",
        },
        {
            id: 3,
            firstName: "Terrill",
            lastName: "Hills",
            age: 38,
            gender: "male",
            phone: "637392927942",
        },
        {
            id: 4,
            firstName: "Miles",
            lastName: "Cummerata",
            age: 49,
            gender: "male",
            phone: "864611454186",
        },
        {
            id: 5,
            firstName: "Mavis",
            lastName: "Schultz",
            age: 38,
            gender: "male",
            phone: "3722857711911",
        },
        {
            id: 6,
            firstName: "Alison",
            lastName: "Reichert",
            age: 21,
            gender: "female",
            phone: "3515277353642",
        },
        {
            id: 7,
            firstName: "Oleta",
            lastName: "Abbott",
            age: 31,
            gender: "female",
            phone: "626408027111",
        },
        {
            id: 8,
            firstName: "Ewell",
            lastName: "Mueller",
            age: 29,
            gender: "male",
            phone: "869462972275",
        },
        {
            id: 9,
            firstName: "Demetrius",
            lastName: "Corkery",
            age: 22,
            gender: "male",
            phone: "863565909727",
        },
        {
            id: 10,
            firstName: "Eleanora",
            lastName: "Price",
            age: 37,
            gender: "female",
            phone: "601844080824",
        },
    ];
    const [user, setUser] = useState(arr);
    const [show, setShow] = useState(false);
    const [data, setData] = useState({});
    const [action, setAction] = useState("");
    const [index, setIndex] = useState(null);
    const handleShow = () => {
        setData({
            firstName: "",
            lastName: "",
            age: "",
            gender:"",
            phone: "",
        });
        setAction("Add");
        setShow((pre) => !pre);
    };
    const getData = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    const handleEdit = () => {
        setData(user[index]);
        setAction("Edit");
        setShow(true);
    };
    const handleDelete = () => {
        user.splice(index, 1);
        setUser([...user]);
    };

    const updateUser = (data) => {
        if (action === "Add") {
            setUser([data, ...user]);
            setShow(false);
        }
        if (action === "Edit") {
            user[index] = data;
            setUser([...user]);
            setShow(false);
        }
    }

    const handleActive = (e) => {
        if (index === e) {
            setIndex(null);
        } else {
            setIndex(e);
        }
    };
    return (
        <div className="mx-5">
            <Menu
                index={index}
                show={show}
                user={data}
                onAdd={handleShow}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onSave={updateUser}
                clickEdit={getData}
            ></Menu>
            <TableUser user={user} index={index} onClick={handleActive}></TableUser>
        </div>
    );
};

export default TableValidate;
