import './style.css'
import { PostList } from "../components/post/postList";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes,
    Navigate
}from 'react-router-dom';
import {NavBar} from '../components/navBar'
import './style.css'
import React from 'react';
import { PostForm } from '../components/post/postForm';

function Index() {
    return ( 
        <Router>
            <h1>Welcome to blog Application </h1>
            <NavBar />
              <Routes>
                  {/* <Route exact path ='/' element={<Home />}/> */}
                  <Route exact path ="/" element={(
                       <React.Fragment>
                       <PostForm/>
                       <PostList/>
                   </React.Fragment>
                  )}/>
              </Routes>
              <Navigate to="/" />
        </Router>
     );
}

export default Index;

const Home = (props) => {
    return(
        <div>
            <h1>Welcome to Blog application</h1>
        </div>
    )
}