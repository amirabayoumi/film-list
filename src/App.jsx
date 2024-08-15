import { useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import MovieList from './components/MovieList'
import './App.css'


const App = () => {
  const [input , setInput] = useState('')
  const getValue = (value) =>{
    setInput(value);
  }
  return (
    <div className="app">
    <Header title=' TOP Movies on 2019' />
    <div className="content">
      <SearchBar inputValue={getValue} />
      <MovieList input={input} />
    </div>
  </div>
);
};

export default App