import "./App.css";

function App({ domElement }) {
  return (
    <div className="App">
      <header className="App-header">
        <p>{domElement}</p>
      </header>
      <div>
        <button onClick={console.log("発注を確定する")}>発注を確定する</button>
      </div>
    </div>
  );
}

export default App;
