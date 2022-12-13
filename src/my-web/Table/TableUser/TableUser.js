import React from 'react';
import THead from './THead';
import TBody from './TBody';
import "bootstrap/dist/css/bootstrap.css";

const TableUser = (props) => {
    return (
        <div>
            <table className="table table-bordered">
                <THead></THead>
                <TBody listUser={props.user} index={props.index} onClick={props.onClick}></TBody>
            </table>
        </div>
    );
};

export default TableUser;