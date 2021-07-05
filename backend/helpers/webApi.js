const axios = require('axios');
const JIRA_API_URL = '/rest/api/3';

function setOptions (method, query, data = {}) {
    const requestOptions = {
        method,
        url: `${process.env.HOST_BASE_URL}${JIRA_API_URL}${query}`,
        auth: {
            username: process.env.JIRA_USER,
            password: process.env.JIRA_PASSWORD
        },
        data
    }
    return requestOptions;
}

async function getALlIssues() {
    const result = await axios(setOptions('get','/search'));
    return result.data.issues;
}

async function getALlFilters() {
    const result = await axios(setOptions('get','/filter/my'));
    return result.data;
}

async function getDataWithJql(jql){
    const result = await axios(setOptions('post','search', jql));
    return result.data;
}

module.exports = {
    getALlIssues,
    getALlFilters,
    getDataWithJql
};