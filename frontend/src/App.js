import {BrowserRouter as Router,Routes,Route,BrowserRouter} from 'react-router-dom'
import Header from './components/Header';
import EditPost from './pages/EditPost';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ViewPost from './pages/ViewPost';

function App() {
  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route path='/' index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/posts/:postId' element={<ViewPost />} />
          <Route path='/update-post/:postId' element={<EditPost />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
