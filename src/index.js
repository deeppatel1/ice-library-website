import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import HighlightVideo from './components/HighlightVideo';
import App from './App';
import Axios from 'axios'
import SearchBar from './components/SearchBar'
import SearchResultsPage from './components/SearchResultsPage'


const { search } = window.location;
const query = new URLSearchParams(search).get('q');


// ReactDOM.render(
//   // <HighlightVideo url="https://www.youtube.com/watch?v=uG4W4G0LThg" title="Ice Poseidon Regrets Getting Drunk | Creepy Guy Pressed?" description="Ice Poseidon Regrets Getting Drunk | Creepy Guy Pressed? | Mexican Andy moving into the Streamer Mansion | Best Of Cx Highlights Compilation
//   // Contact Me ⬇
//   // ➤https://twitter.com/Liutauras_
//   // ➤https://www.instagram.com/liutauras1/
//   // ➤https://discord.gg/9gdyADa
//   // ➤ 

//   // Credits ⬇
//   // Ice Poseidon: https://www.youtube.com/channel/UCv9E...
//   // Cassandra: https://www.youtube.com/channel/UCoQn...
//   // Mexican Andy: https://www.youtube.com/channel/UC8Em...
//   // ONLYUSEmeBLADE: https://www.youtube.com/user/ONLYUSEm...
//   // Mr G: https://www.youtube.com/channel/UCogq...

//   // Outro music: https://www.youtube.com/watch?v=YMbbn..." views="3243242"/>,
//   <App></App>,
//   document.getElementById('root')
// );


ReactDOM.render(<SearchBar></SearchBar>, document.getElementById('searchBar'))
if (query) {
  Axios.get("http://127.0.0.1:5000/search?q=" + query).then((response) => {
    console.log(response)
    ReactDOM.render(<SearchResultsPage data={response.data.videos}></SearchResultsPage>, document.getElementById('root'))
  })
}

