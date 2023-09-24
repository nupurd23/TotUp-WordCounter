// import logo from './logo.svg';
import Navbar from './components/Navbar';
import Textforms from './components/Textforms';
// import wordcount from './components/wordcount';
// import Footer from './components/footer';

import './App.css';

function App() {
  return (
    <>
   
<Navbar title="TEXT UTILS" />
<div className="container">
<Textforms heading="Enter The Text To Analyse Below" />
</div>


   </>
  );
}

export default App;
