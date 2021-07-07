import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Input = styled.input`
  height: 2rem;
`;

const Select = styled.select`
  height: 2rem;
`;

const Dropdown = (props) => {
    const [filter, setFilter] = useState({})
    const handleChange = (event) => {
        setFilter({jql: event.target.value});
    }

    const handleSubmit = () => {
        props.fetchWithFilter(filter)
        event.preventDefault();
    }

    const optionsList = props.filters.map((filter) => <Option name={filter.name} jql={filter.jql} />);

    return(
        <form onSubmit={handleSubmit}>
            <label>
                <Select value={filter.jql} onChange={handleChange}>
                    <option selected value="All issues">All issues</option>
                    {optionsList}
                </Select>
            </label>
            <Input type="submit" value="Submit" />
        </form>
    );
}

function Option(props) {
   return <option value={props.jql}>{props.name}</option>
}

export default Dropdown;
