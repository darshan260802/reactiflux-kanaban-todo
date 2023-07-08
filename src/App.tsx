import './App.scss';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    // Main Layout
    <div className="main-layout flex flex-col justify-between h-screen w-screen">
      {/* Navbar */}
        <Navbar/>
      {/* Content Layout (Sidebar + View) */}
      <div className="content-layout flex h-full justify-between">
        
      </div>
    </div>
  );
}

export default App;
