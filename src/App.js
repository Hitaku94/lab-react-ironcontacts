import logo from './logo.svg';
import './App.css';
import Contacts from './contacts.json'
import React, {useState} from 'react'




function App() {

const [actors, addContact] = useState(Contacts.slice(0, 5))

let handleAdd = () => {

  let randomIndex = Math.floor(Math.random() * Contacts.length)
  let elem = Contacts[randomIndex]

  addContact([elem, ...actors])
}

let handleSortName = () => {
  let clonedActors = JSON.parse(JSON.stringify(actors))

  clonedActors.sort((a, b) => {
    if (a.name > b.name) {
      return 1
    }
    else if (a.name < b.name) {
      return -1
    }
    else {
      return 0
    }
  })

  addContact(clonedActors)

}

let handleSortPop = () => {
  let clonedActors = JSON.parse(JSON.stringify(actors))

  clonedActors.sort((a, b) => {
    if (a.popularity > b.popularity) {
      return -1
    }
    else if (a.popularity < b.popularity) {
      return 1
    }
    else {
      return 0
    }
  })

  addContact(clonedActors)

}

let handleDelete = (someId) => {

let filteredActor = actors.filter((singleActor) => {
    return singleActor.id !== someId
})
  
addContact(filteredActor)

}


console.log(actors)
  return (
    <div className='app-center'>
      <h1>IronContacts</h1>
      <button onClick={handleAdd}>Add Random Contact</button>
      <button onClick={handleSortName}>Sort Contact by name</button>
      <button onClick={handleSortPop}>Sort Contact by popularity</button>
      <p><span>Picture</span><span>Name</span><span>Popularity</span></p>
      <ul>
        {actors.map(( singleActor, index) => {

          return (
            <>
              <li key={index}><img src={singleActor.pictureUrl}></img><span>{singleActor.name}</span><span>{singleActor.popularity}</span></li>
              <button onClick={() => {handleDelete(singleActor.id)}}>Delete</button>
            </>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
