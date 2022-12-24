import React from "react";

function App() {
  const [loading, setLoading] = React.useState(true);
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&&sort_by=year"
    )
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
        setMovies(json.data.movies);
      });
  }, []);

  console.log(movies);
  return <div>{loading ? <h1>Loading now ... </h1> : null}</div>;
}

export default App;
