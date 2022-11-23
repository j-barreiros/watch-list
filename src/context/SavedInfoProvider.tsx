import React, { createContext, useState } from 'react'

export let SavedInfoContext = createContext({watched: Array<Object>, wantToWatch: Array<Object>, addWatched: Function, addWantToWatch: Function});

function SavedInfoProvider(props) {
  const [watched, setWatched] = useState([]);
  const [wantToWatch, setWantToWatch] = useState([]);

  function addWatched(newWatched) {
    const alteredWatched = [...watched, newWatched];
    setWatched(alteredWatched);
  }

  function addWantToWatch(newWantToWatch) {
    const alteredWantToWatch = [...wantToWatch, newWantToWatch];
    setWantToWatch(alteredWantToWatch);
  }

  const value = {
    watched: watched,
    wantToWatch: wantToWatch,
    addWatched: addWatched,
    addWantToWatch: addWantToWatch,
  }

  return (
    <SavedInfoContext.Provider value={value}>
      {props.children}
    </SavedInfoContext.Provider>
  )
}

export default SavedInfoProvider;