import React, { Component } from 'react';
import EmployeeSearch from './EmployeeSearch';
import EmployeeTable from './EmployeeTable';
import API from '../utils/API';

export class EmployeeContainer extends Component {
    state = {
        result: [],
        search: "",
        sort: ""
    }

    componentDidMount() {
        this.getEmployees();
    };

    getEmployees() {
        API.search()
            .then(res => {
                this.setState({ result: res.data.results })
            })
            .catch(err => console.log(err));
    };

    handleInputChange = (event) => {
        const value = event.target.value;
        this.setState({
            search: value
        })
    }

    sortAscending = () => {
        let array = this.state.result;
        array.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1);
        this.setState({ result: array });
    }

    sortDescending = () => {
        let array = this.state.result;
        array.sort((a, b) => (a.name.first < b.name.first) ? 1 : -1);
        this.setState({ result: array });
    }

    render() {
        return (
            <div>
                <EmployeeSearch
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                />
                <EmployeeTable
                    result={this.state.result}
                    search={this.state.search}
                    sortAscending={this.sortAscending}
                    sortDescending={this.sortDescending}
                />
            </div>
        )
    }
}

export default EmployeeContainer;