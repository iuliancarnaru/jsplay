import "./App.css";
import useFetch from "./hooks/useFetch";

function App() {
  const url = "https://swapi.dev/api/planets";
  const { data, isLoading, error } = useFetch(url);

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  if (error) {
    return <p>An error occurred...</p>;
  }

  return (
    <div>
      {data?.map((planet) => (
        <p key={planet.name}>{planet.name}</p>
      ))}
    </div>
  );
}

export default App;
