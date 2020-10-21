import axios from 'axios';

const queryURL = "https://randomuser.me/api/?results=200&nat=us";

export default {
    search: function () {
        return axios.get(queryURL);
    }
};