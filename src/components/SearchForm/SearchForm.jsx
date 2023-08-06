import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { BtnSearch, Select, SearchFormStyled } from './SearchForm.styled';

export const SearchForm = ({onSubmit}) => {
  const [selected, setSelected] = useState('')

  const handleSelect = (event) => {
  setSelected(event.target.value)
  console.log("selected", selected)
  } 
  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({region: selected})
  }
  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <BtnSearch type="submit" >
        <FiSearch size="16px" />
      </BtnSearch>
      <Select 
      aria-label="select"
      name="region"
      required onChange={handleSelect}>
        <option value="">
       {/* <option disabled defaultValue=""> */}
          Select a region and press enter 
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Select>
    </SearchFormStyled>
  );
};


