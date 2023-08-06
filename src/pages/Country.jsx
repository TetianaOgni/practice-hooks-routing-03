import { Section, Container, CountryInfo, Loader, Heading } from 'components';
import { useEffect, useState, useRef } from 'react';
import { useParams, useLocation,  Link} from 'react-router-dom';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { countryId } = useParams();
  const location = useLocation()
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchOneCountryData = async () => {
      setIsLoading(true);
      try {
        const countryData = await fetchCountry(countryId);
        console.log(2, countryData);
        setCountry(countryData);
      } catch (error) {
        setError(error.response.statusText);
        console.log(3, error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchOneCountryData();
  }, [countryId]);
  const { flag, capital, countryName, id, languages, population } = country;
  return (
    <Section>
     <Link to={backLinkHref.current}>
        <p>Go Back</p>
    </Link>
      <Container>
        {isLoading && <Loader />}
        {error ? (
          <Heading>{error}</Heading>
        ) : (
          <CountryInfo
            country={countryName}
            capital={capital}
            flag={flag}
            id={id}
            languages={languages}
            population={population}
          />
        )}
      </Container>
    </Section>
  );
};

