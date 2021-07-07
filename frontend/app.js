import React from 'react';
import ReactDOM from 'react-dom';
import Table from './src/components/Table.jsx'
window.addEventListener('load', () => {
    const wrapper = document.getElementById('tablewrapper');
    ReactDOM.render(
        <Table/>,
        wrapper,
    );
});