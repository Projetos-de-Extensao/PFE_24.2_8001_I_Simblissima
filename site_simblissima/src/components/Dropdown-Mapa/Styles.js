import styled from "styled-components";

export const DropdownContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const StyledSelect = styled.select`
    padding: 10px;
    width: 200px;
    margin: 0 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    color: #333;
    outline: none;
    cursor: pointer;
    transition: border-color 0.3s;

    &:hover {
        border-color: #888;
    }

    &:focus {
        border-color: #555;
    }
`;