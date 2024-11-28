import React, { useState } from 'react';
import UserPosts from './UserPosts';
import Post from './Post';
import CreatePost from './CreatePost';
import UpdatePost from './UpdatePost';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Home from './Home';
import ErrorPage from './ErrorPage';
import MainLayout from './MainLayout';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import  {createBrowserRouter, RouterProvider, redirect } from "react-router-dom";


function App(){
    const [user, setUser] = useState(false);
    const auth = getAuth();

    
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(user);
        console.log('User is signed in');
        setUser(user);

      } else {
        console.log('No user is signed in')
      }
    });    

    const onSignOut = () => {

      signOut(auth).then(() => {
        console.log('User signed out')
        setUser(false)
        redirect('/')
      }).catch((error) => {
        console.log('An error occured')

      })
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <MainLayout user={user} onSignOut={onSignOut} />
        </div>),
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/sign_up",
          element: <SignUp />,
        },
        {
          path:"/sign_in",
          element: <SignIn />,
        },
        {
          path: "/create_post",
          element: <CreatePost user={user} />,
        },
        {
          path: "blogs/:uid/posts",
          element: <UserPosts user={user} />,
        },
        {
          path: "blogs/:uid/post/:id",
          element: <Post user={user} />,
        },
        {
          path: "update_post/:id",
          element: <UpdatePost user={user} />,
        }
      ]       
    }    
  ]);
  
    

    return(
        <div className="app_container">
            <RouterProvider router={router} />            
        </div>
    )
}

export default App;
