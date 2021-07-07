import React, { useState, useEffect }  from 'react';
import axios from "axios";
import Dropdown from "./Dropdown.jsx";
import Spinner from '@atlaskit/spinner';
import { HeaderWrapper, Header, SelectWrapper, Grid, SpinnerWrapper } from './styledComponents'
import baseUrl from '../../baseUrlConfig.js';

export default function Table(props) {
    const [filters, setFilters] = useState([]);
    const [issues, setIssues] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    let assigneeRows;

    const fetchWithFilter = (jql) => {
        console.log(jql);
        setIsLoaded(false)
        axios.post(`${baseUrl}/get-state-filtered`, jql)
             .then(res => {
                 console.log(res, 'res');
                 setIssues(res.data.issues);
                 setIsLoaded(true);
        });
    }

    useEffect(() => {
        setIsLoaded(false);
        axios.get(`${baseUrl}/get-state`)
            .then(res => {
                setFilters(res.data.filters);
                setIssues(res.data.issues);
                setIsLoaded(true)
            })
    }, []);
    if (isLoaded) {
        assigneeRows = issues.map((issue) => <Assignee issue={issue} allIssues={issues} />);
        return (
            <HeaderWrapper>
                <SelectWrapper>
                    <span>
                        Choose the priority:
                    </span>
                    <Dropdown filters={filters} fetchWithFilter={fetchWithFilter} />
                </SelectWrapper>
                <Header>
                    <span>Assignee</span>
                    <span>To do</span>
                    <span>In Progress</span>
                    <span>Done</span>
                </Header>
                <div>
                    {assigneeRows}
                </div>
            </HeaderWrapper>

        );
    } else {
        return <SpinnerWrapper><Spinner /></SpinnerWrapper>
    }
};

function Assignee(props) {
    const jiraUser = props.issue.assignee.displayName;
    const allIssues = props.allIssues.filter(issue => issue.assignee.displayName === jiraUser);
    const toDo = allIssues.filter(issue => issue.status === "To Do");
    const inProgress = allIssues.filter(issue => issue.status === "In Progress");
    const done = allIssues.filter(issue => issue.status === "Done");
    return (
        <Grid>
            <span>{jiraUser}</span>
            <span>{toDo.length}</span>
            <span>{inProgress.length}</span>
            <span>{done.length}</span>
        </Grid>
    );
}




