import React, { useState } from 'react'
import Dropdown from './Dropdown'
import { BsList } from 'react-icons/bs'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
const groupingOptions = [
    { label: 'Status', value: 'status' },
    { label: 'Priority', value: 'priority' },
    { label: 'User', value: 'user' },
];

const orderingOptions = [
    { label: 'Priority', value: 'priority' },
    { label: 'Title', value: 'title' },
];



const Navbar = ({ groupBy, changeGroupBy, sortBy, changeSortBy }) => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    return (
        <div style={{
            padding: "15px",
            background: "white",
        }}>
            <button style={buttonStyle} onClick={() => setIsDropdownVisible(!isDropdownVisible)}>
                <BsList />
                <span style={{ margin: "0 5px" }}>Display</span>
                {isDropdownVisible ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </button>
            {isDropdownVisible && (
                <div style={dropdownContainerStyle}>
                    <Dropdown label="Grouping" selected={groupBy} changeSelection={changeGroupBy} options={groupingOptions} />
                    <Dropdown label="Ordering" selected={sortBy} changeSelection={changeSortBy} options={orderingOptions} />
                </div>
            )}
        </div>
    );
}


const buttonStyle = {
    marginLeft: "15px",
    background: "white",
    border: "0.5px solid grey",
    borderRadius: "3px",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

const dropdownContainerStyle = {
    background: "#F8F9FC",
    width: "250px",
    border: "0.5px solid grey",
    padding: "0 15px",
    borderRadius: "5px",
    margin: "10px 20px",
    position: "absolute",
    left: "10px",
    top: "30px",
};


export default Navbar;