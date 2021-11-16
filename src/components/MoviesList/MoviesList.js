
export default function MoviesList({data}) {
    return (
        <ul>
            {data.map(movie => {
                return (
                <li key={movie.id}>
                    <p>{movie.name}</p>
                </li>
            )})
            }
        </ul>
    )
}