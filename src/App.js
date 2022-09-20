import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import React from 'react';

// import logo from './logo.svg';
import './App.css';

const App = () => {
  const [searchField, setsearchField] = useState('');
  const [title, setTitle] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);


  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilterMonsters(newfilteredMonsters);
  }, [monsters, searchField])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setsearchField(searchFieldString);
  };

  const onTitleChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setTitle(searchFieldString);
  }




  return (
    <div className="App">
      <h1 className='app-title'>{title}</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder='Search Monsters'
        className='monsters-search-box'
      />\
      <br />
      <SearchBox
        onChangeHandler={onTitleChange}
        placeholder='Search title'
        className='monsters-title'
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}


// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: ''
//     };

//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((user) => this.setState(() => {
//         return { monsters: user }
//       }));
//   }


//   onSearchChange = (event) => {

//     const searchField = event.target.value.toLowerCase();

//     this.setState(() => {
//       return { searchField }
//     });
//   };

//   render() {

//     const{monsters , searchField} = this.state;
//     const { onSearchChange} = this;
//     const filteredMonsters =monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monster Rolodex</h1>
//         <SearchBox onChangeHandler ={onSearchChange} placeholder = 'Search Monsters' className='monsters-search-box'/>
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
