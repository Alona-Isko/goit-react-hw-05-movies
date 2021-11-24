import { NavLink,  useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import s from './MoviesList.module.css';

export default function MoviesList({ data }) {
    const location = useLocation();

    return (
        <ul className={s.list}>
            {data && data.map(movie => (
                    <li key={movie.id} className={s.list__item}>
                        <NavLink
                            to={{
                                pathname: `/movies/${movie.id}`,
                                state: {from: location},
                            }}
                        >
                            {movie.title}
                        </NavLink>
                    </li>
            ))
            }
        </ul>
    )
};

MoviesList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number.isRequired })),
};


