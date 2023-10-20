import React from 'react';

const Dropdown = ({ label, options, selected, changeSelection }) => {
    // Event handler for when the user selects an option
    const handleChange = (event) => changeSelection(event.target.value);

    return (
        <div style={dropdownContainerStyle}>
            {/* Display the label for the dropdown */}
            <span style={labelStyle}>{label}</span>
            {/* Dropdown select element */}
            <select style={selectStyle} value={selected} onChange={handleChange}>
                {options.map((option) =>
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                )}
            </select>
        </div>
    );
};

// Styles for the dropdown container
const dropdownContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    margin: "10px 0",
};

// Styles for the label
const labelStyle = {
    fontSize: "0.8rem",
    fontWeight: "bold",
    color: "grey",
};

// Styles for the select element
const selectStyle = {
    fontWeight: "bold",
    width: "100px",
    border: "0.5px solid grey",
    borderRadius: "3px",
    padding: "1px 5px",
    fontSize: "0.8rem",
};

export default Dropdown;
