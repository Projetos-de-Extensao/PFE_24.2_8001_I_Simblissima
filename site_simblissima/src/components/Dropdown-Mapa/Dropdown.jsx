import React from 'react';
import { DropdownContainer, StyledSelect } from './Styles';

const Dropdown = ({ selectedPlace, setSelectedPlace }) => {
    const handleChange = (event) => {
        setSelectedPlace(event.target.value);
    };

    return (
        <DropdownContainer>
            <StyledSelect value={selectedPlace} onChange={handleChange}>
                <option value="hospital">Hospital</option>
                <option value="hotel">Hotel</option>
                <option value="atratativos">Atrativos</option>
                <option value="police">Delegacia</option>
                <option value="school">Escola</option>
                <option value="restaurant">Restaurante</option>
            </StyledSelect>
        </DropdownContainer>
    );
};

export default Dropdown;