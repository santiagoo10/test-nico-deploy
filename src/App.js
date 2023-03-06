import "./App.css";

function App() {
  const pokeApiUrl = "https://pokeapi.co/api/v2";

  fetch(`${pokeApiUrl}/ability/1`)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

  return <div></div>;
}

export default App;
