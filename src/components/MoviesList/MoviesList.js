import { Link, useRouteMatch } from "react-router-dom";
// import PropTypes from 'prop-types';

export default function MoviesList({ data }) {
    const { url } = useRouteMatch();

    return (
        <ul>
            {data && data.map(movie => {
                return (
                    <li key={movie.id}>
                        <Link to={`${url}/${movie.id}`}>{movie.title}</Link>
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
