import React from 'react';
import './DrawerToggleButton.css';
const LasoonToggleButton = props => (
    <button className="toggle-button" onClick={props.click}>
        <div className="toggle-button-line"/>
        <div className="toggle-button-line" />
        <div className="toggle-button-line"/>
    </button>

);
export default LasoonToggleButton;