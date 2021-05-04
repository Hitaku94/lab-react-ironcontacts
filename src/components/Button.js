import React, {useState} from 'react'
import Contacts from '../contacts.json'

function Button(){

    const [actors, addContact] = useState(Contacts.slice(0, 5))

let handleAdd = () => {
  let randomIndex = Math.floor(Math.random() * Contacts.length)
  let elem = Contacts[randomIndex]

  addContact( [elem, ...actors])
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

    return(
        <div>
            <button onClick={handleAdd}>Add Random Contact</button>
            <button onClick={handleSortName}>Sort Contact by name</button>
            <button onClick={handleSortPop}>Sort Contact by popularity</button>
        </div>
)
}




export default Button