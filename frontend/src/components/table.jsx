import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import axios from "axios";
const baseUrl = 'https://1fdfc97b5dc5.ngrok.io'

const HeaderWrapper = styled.div`
  padding-top: 0.5vw;
  min-width: 780px;
  max-width: 780px;
  margin-top: 5%;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  display: block;
  font-size: 1.1rem;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  text-align: center;
`;

const SelectWrapper = styled.div`
  margin: 0.5vw 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Grid = styled.divstyled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  text-align: center;
`;

export default function Table(props) {
const [filters, setFilters] = useState([]);
const [issues, setIssues] = useState([]);
useEffect(() => {
    axios.get(`${baseUrl}//get-state`)
        .then(res => {
            setFilters(res.data.filters);
            setIssues(res.data.issues);
        })
}, []);
    const optionsList = filters.map((filter) => <Option name={filter.name}></Option>)
    return (
        <HeaderWrapper>
            <SelectWrapper>
                <span>
                    Choose the filter
                </span>
                <select>
                    {optionsList}
                </select>
            </SelectWrapper>
            <Header>
                <span>Assignee</span>
                <span>To do</span>
                <span>In Progress</span>
                <span>Done</span>
            </Header>

        </HeaderWrapper>

    );
};

function Option(props) {
    return(
        <option>{props.name}</option>
    );
}

function Assignee (props) {
    const jiraUser = props.name;
    const allIssues = props.issues.filter(issue => issues.assignee.displayName === jiraUser);
    const toDo = allIssues.filter(issue => issue.status === "To Do" );
    const inProgress = allIssues.filter(issue => issue.status === "In Progress" );
    const done = allIssues.filter(issue => issue.status === "Done" );
    return(
        <Grid>
            <span>{jiraUser}</span>
            <span>{toDo.length}</span>
            <span>{inProgress.length}</span>
            <span>{done.length}</span>
        </Grid>
    );
}


window.addEventListener('load', () => {
    const wrapper = document.getElementById('tablewrapper');
    ReactDOM.render(
        <Table />,
        wrapper,
    );
});

