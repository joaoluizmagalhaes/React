import React from 'react';

const PortfolioItemPage = (props) => (
    <div>
        <h1>A Thing I've Done</h1>
        <p>This page if for the item with id of {props.match.params.id}</p>
    </div>
);

export default PortfolioItemPage