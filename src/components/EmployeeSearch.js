  
import React from 'react'

function EmployeeSearch(props) {
    return (
        <form className="py-5 mx-auto">
            <div className="form-group">
                <input
                    type="text"
                    placeholder="Enter Employee Name"
                    name="search"
                    value={props.value}
                    onChange={props.handleInputChange}
                    className="form-control"
                />
            </div>
        </form>
    )
}

export default EmployeeSearch;