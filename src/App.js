import './App.css';

function App() {
  return (
    <div className="App container">
      <div>
        <header>Todo Lost</header>
        <p>Tasks go here</p>
      </div>
      <footer>
        <div className='App-footerContainer'>
          <div className='App-footerElement'>
            <i class="fa-solid fa-list"></i>
            <span>All</span>
          </div>
          <div className='App-footerElement'>
            <i class="fa-solid fa-unlock"></i>
            <span>Active</span>
          </div>
          <div className='App-footerElement'>
            <i class="fa-solid fa-clock-rotate-left"></i>
            <span>History</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
