// import { Grid, GridItem } from 'components';
// import { Link } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
// export const CountryList = ({ countries }) => {
//   const location = useLocation()
//   return (
//     <Grid>
//       {countries.map(({ id, country, flag }) => (
//         <GridItem key={id}>
//           <Link to={`/country/${id}`} state={{from: location}}>
//             <img src={flag} alt={country} />
//           </Link>
//         </GridItem>
//       ))}
//     </Grid>
//   );
// };



import { Grid, GridItem } from 'components';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const CountryList = ({ countries }) => {
  const location = useLocation();

  return (
    <Grid>
      {countries.map(({ id, country, flag }) => (
        <GridItem key={id}>
          <Link to={`/country/${id}`} state={{ from: location }}>
            {' '}
            <img src={flag} alt={country} />
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};