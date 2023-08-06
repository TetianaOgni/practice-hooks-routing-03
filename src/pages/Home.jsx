import { Container, CountryList, Heading, Loader, Section } from 'components';

import { useEffect, useState } from 'react';
import { getCountries } from 'service/country-service';
// import TransformCountries from '..helpers/TransformCountries';

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchCountriesData = async () => {
      try {
        const countriesList = await getCountries();
        console.log('countriesList', countriesList);

        setCountries(countriesList);
      } catch (error) {
        setError(error.response.statusText);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCountriesData();
  }, []);
  console.log(1.1, countries)
  return (
    <Section>
      <Container>
        <h2>Home</h2>
        {error !== null && <Heading>{error}</Heading>}
        {isLoading && <Loader />}
        {countries.length > 0 && <CountryList countries={countries} />}
      </Container>
    </Section>
  );
};
