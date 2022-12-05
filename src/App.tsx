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

//Global Style
import GlobalStyle from './globalStyles';
import TvPage from './pages/TvPage/TvPage';
import PersonPage from './pages/PersonPage/PersonPage';

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Navbar />
        <ApiContextProvider>
        <SavedInfoProvider>
          <Routes>
            <Route path='/' element={<Search />} />
            <Route path='/watched' element={<Watched />} />
            <Route path='/wanttowatch' element={<WantToWatch />} />
            <Route path='/movie/:movieId' element={<MoviePage />} />
            <Route path='/tv/:tvId' element={<TvPage />} />
            <Route path='/person/:personId' element={<PersonPage />} />
          </Routes>
        </SavedInfoProvider>
        </ApiContextProvider>
      </Router>
    </>
  )
}

export default App;