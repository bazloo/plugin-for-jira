const axios = require('axios');
const JIRA_API_URL = '/rest/api/3';

async function setOptions (query) {
    const requestOptions = {
        method: 'get',
        url: `${process.env.HOST_BASE_URL}${JIRA_API_URL}${query}`,
        auth: {
            username: process.env.JIRA_USER,
            password: process.env.JIRA_PASSWORD
        },
    }
    return requestOptions;
}

async function getALlIssues() {
    const result = await axios(setOptions('/search'));
    return result;
}

async function getALlFilters() {
    const result = await axios(setOptions('/filter/my'));
    return result;
}

module.exports = {
    getALlIssues,
    getALlFilters
};