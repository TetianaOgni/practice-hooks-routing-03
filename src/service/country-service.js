import axios from 'axios';
import { transformCountriesData, transformCountryData } from 'helpers';

axios.defaults.baseURL = 'https://restcountries.com/v3.1';

export const getCountries = async () => {
  const { data } = await axios.get('/region/europe');
  const countries = transformCountriesData(data);


  return countries;
};

export const fetchCountry = async name => {
  console.log(5, name);
  const { data } = await axios.get(`/name/${name}`);
  console.log(6, data);
  const country = transformCountryData(data);
  console.log(0, country[0]);
  return country[0];
};

export const fetchByRegion = async region => {
  const { data } = await axios.get(`/region/${region}`);
  const countries = transformCountriesData(data);
  console.log(4, countries)
  return countries;
};



