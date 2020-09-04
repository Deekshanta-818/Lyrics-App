import React,{useState} from 'react';
import './App.css';

const App = () => {

const [title,setTitle] = useState('')
const [artist,setArtist] = useState('')
const [lyrics,setLyrics] = useState('')


const getLyrics = async () => {

  const response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
  const data = await response.json()
  setLyrics(data.lyrics)
  console.log(data.lyrics)
 
}

const handleClick = (e) => {
getLyrics()
 e.preventDefault();
setTitle('')
setArtist('')
}
const handleTitle = (e) => {
setTitle(e.target.value)
}
const handleArtist = (e) => {
setArtist(e.target.value)
}

    return (
      <div className='app'>
          <h1 className=" text-center">Song Lyrics Web Application</h1>
          <div className="card" style={{width: "900px",height:'650px'}}>
 
  <div className="card-body">
   
   <form className='form' onSubmit={handleClick}>

     <label className='title' htmlFor="title">Enter a song name :</label>
     <input className='inp-title' type="text" name="title" id="title" value={title} onChange={handleTitle} /> <br/>
     <label className='artist' htmlFor="artist">Enter the name of the artist :</label>
     <input className='inp-artist' type="text" name="artist" id="artist" value={artist} onChange={handleArtist} /> <br/> <hr/>
    <button className='btn '  >Get The Lyrics</button>
   </form>
   <div className="lyrics">
{lyrics}
  </div>
  </div>

</div>
      </div>
    )
}
export default App;