import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Pages
import Search from './pages/Search/Search';
import WantToWatch from './pages/WantToWatch/WantToWatch';
import Watched from './pages/Watched/Watched';
import MoviePage from './pages/MoviePage/MoviePage';

//Components
import Navbar from './components/Navbar/Navbar';

//Context
import SavedInfoProvider from './context/SavedInfoProvider';
import ApiContextProvider from './context/ApiContextProvider';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ApiContextProvider>
        <SavedInfoProvider>
          <Routes>
            <Route path='/' element={<Search />} />
            <Route path='/watched' element={<Watched />} />
            <Route path='/wanttowatch' element={<WantToWatch />} />
            <Route path='/movie/:movieId' element={<MoviePage />} />
          </Routes>
        </SavedInfoProvider>
        </ApiContextProvider>
      </Router>
    </>
  )
}

export default App;