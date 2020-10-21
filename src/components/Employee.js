import React from 'react'
import Moment from 'react-moment';

function Employee(props) {
    return (
        <React.Fragment>
            <td><img src={props.image} alt="Profile" /></td>
            <td>{props.firstName} {props.lastName}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td><Moment format="ll">{props.dob}</Moment></td>
        </React.Fragment>
    )
}

export default Employee