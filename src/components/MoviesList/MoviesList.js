import { Link,  useLocation } from "react-router-dom";
// import PropTypes from 'prop-types';

export default function MoviesList({ data }) {
    const location = useLocation();

    return (
        <ul>
            {data && data.map(movie => {
                return (
                    <li key={movie.id}>
                        <Link
                            to={{
                                pathname: `movies/${movie.id}`,
                                state: {from: location},
                            }}
                        >
                            {movie.title}
                        </Link>
                    </li>
            )})
            }
        </ul>
    )
};

// MoviesList.propTypes = {
//   data: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number.isRequired })),
// //   onImageClick: PropTypes.func,
// };


