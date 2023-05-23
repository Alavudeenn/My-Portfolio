// import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import Home from './component/home';
import About from './component/about';
import About1 from './component/about1';
import Footer from './component/footer';
import Project from './component/project';


function App() {
  return (
    <div>
      <Header />
      <div className='top'>
        <Home />
        <About />
        <About1 />
        <Project />
      </div>
      <Footer />

    </div>




  );
}

export default App;
