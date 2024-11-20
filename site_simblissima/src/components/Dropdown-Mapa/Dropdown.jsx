import React from 'react';
import { DropdownContainer, StyledSelect } from './Styles';

const Dropdown = ({ selectedPlace, setSelectedPlace }) => {
    const handleChange = (event) => {
        setSelectedPlace(event.target.value);
    };

    return (
        <DropdownContainer>
            <StyledSelect value={selectedPlace} onChange={handleChange}>
                <option value="">ESCOLHA</option>
                <option value="hospital">Hospital</option>
                <option value="hotel">Hotel</option>
                <option value="atrativos">Atrativos</option>
                <option value="police">Delegacia</option>
                <option value="restaurant">Restaurantes</option>
            </StyledSelect>
        </DropdownContainer>
    );
};

export default Dropdown;