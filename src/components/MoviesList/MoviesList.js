// import PropTypes from 'prop-types';

export default function MoviesList({ data }) {
    return (
        <ul>
            {data.map(movie => {
                return (
                    <li key={movie.id}>
                        <p>{movie.title}</p>
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
