import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import AddPost from './pages/AddPost';
import EditPost from './pages/EditPost';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ViewPost from './pages/ViewPost';



function App() {
  return (
    <>
      <div className='container center'>
      <Router>
      <Header />
        <Routes>
          <Route path='/' element={<PrivateRoute />}>
            <Route path='/' index element={<Home />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/new-post' element={<PrivateRoute />}>
            <Route path='/new-post' element={<AddPost />} />
          </Route>
          <Route path='/posts/:postId' element={<PrivateRoute />}>
            <Route path='/posts/:postId' element={<ViewPost />} />
          </Route>
          <Route path='/update-post/:postId' element={<PrivateRoute />}>
            <Route path='/update-post/:postId' element={<EditPost />}/> 
          </Route>
        </Routes>
      </Router>
      </div>
    </>
  );
}

export default App;
