import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/Home.jsx/Home';
import MovieList from './components/movieList/MovieList';
import Movie from './pages/movieDetail/MovieDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movie/:id' element={<Movie/>}/>
        <Route path='/movies/:type' element={<MovieList/>}/>
        <Route path='/*' element/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
