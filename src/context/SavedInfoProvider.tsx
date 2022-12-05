import React, { createContext, useState } from 'react'

// Mudar isso pra tipos mais apropriados
type SavedInfoContextType = {
  watched: Array<Object>,
  wantToWatch: Array<Object>,
  addWatched: (newWatched: any) => void;
  addWantToWatch: (addWantToWatch: any) => void;
  isInWatched: (id: number) => boolean;
  isInWantToWatch: (id: number) => boolean;
  removeFromWatched: (id: number) => void;
  removeFromWantToWatch: (id: number) => void;
}

export let SavedInfoContext = createContext<SavedInfoContextType>(
  {
    watched: [],
    wantToWatch: [],
    addWatched: (newWatched: any) => console.log(''),
    addWantToWatch: (newWantToWatch: any) => console.log(''),
    isInWatched: (id: number) => false,
    isInWantToWatch: (id: number) => false,
    removeFromWatched: (id: number) => console.log(''),
    removeFromWantToWatch: (id: number) => console.log(''),
  }
);


function SavedInfoProvider({children} : React.ReactNode) {
  const [watched, setWatched] = useState([]);
  const [wantToWatch, setWantToWatch] = useState([]);

  function addWatched(newWatched) {
    console.log('tentei adicionar')
    const alteredWatched = [...watched, newWatched];
    setWatched(alteredWatched);
  }

  function addWantToWatch(newWantToWatch) {
    const alteredWantToWatch = [...wantToWatch, newWantToWatch];
    setWantToWatch(alteredWantToWatch);
  }

  function isInWatched(id: number): boolean {
    if (watched.length == 0) return false;
    return watched.some(item => item.id === id);
  }

  function isInWantToWatch(id: number): boolean {
    if (wantToWatch.length == 0) return false;
    return wantToWatch.some(item => item.id === id);
  }

  function removeFroWatched(id: number): void {
    let alteredWatched = watched.filter(w => w.id != id)
    setWatched(alteredWatched);
  }

  function removeFromWantToWatch(id: number): void {
    let alteredWantToWatch = wantToWatch.filter(wtw => wtw.id != id);
    setWantToWatch(alteredWantToWatch);
  }

  const value = {
    watched: watched,
    wantToWatch: wantToWatch,
    addWatched: addWatched,
    addWantToWatch: addWantToWatch,
    isInWatched: isInWatched,
    isInWantToWatch: isInWantToWatch,
    removeFromWatched: removeFroWatched,
    removeFromWantToWatch: removeFromWantToWatch,
  }

  return (
    <SavedInfoContext.Provider value={value}>
      {children}
    </SavedInfoContext.Provider>
  )
}

export default SavedInfoProvider;