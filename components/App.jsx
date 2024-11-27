import React, { useState } from 'react';
import Posts from './Posts';
import Post from './Post';
import CreatePost from './CreatePost';
import UpdatePost from './UpdatePost';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Home from './Home';
import ErrorPage from './ErrorPage';
import MainLayout from './MainLayout';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import  {createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


function App(props){
    const [user, setUser] = useState(false);
    const auth = getAuth();

    
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in.
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
        //Sign-out succesful
        console.log('User signed out')
        setUser(false)
      }).catch((error) => {
        //An error happened
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
          element: <Posts user={user} />,
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


{/* <Router>
               <AppNav user={user} onSignOut={onSignOut} /> 

                <SignUp path="sign_up" />
                <SignIn path="sign_in" default />
                <Posts path="blogs/:uid/posts" user={user} />
                <CreatePost path="create_post" user={user} />
                <Post path="blogs/:uid/post/:id" user={user} />
                <UpdatePost path="update_post/:id" user={user} />
            </Router>  
            // ),
      // children: [
      //   { path: "blogs/:userId/posts", element: <div>Posts</div> },
      //   { path: "create_post", element: <div>Create Post</div> },
      //   { path: "sign_in", element: <div>Sign In</div> },
      // ],      
      
      
      const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <AppNav user={user} onSignOut={onSignOut} />
          <Outlet />
        </div>)      
    },
    {
      path: "/sign_up",
      element: <SignUp />,
      errorElement: <ErrorPage /> 
    },
    {
      path:"/sign_in",
      element: <SignIn />,
      errorElement: <ErrorPage /> 
    },
    {
      path: "/create_post",
      element: <CreatePost user={user} />,
      errorElement: <ErrorPage /> 
    },
    {
      path: "blogs/:uid/posts",
      element: <Posts user={user} />,
      errorElement: <ErrorPage /> 
    },
    {
      path: "blogs/:uid/post/:id",
      element: <Post user={user} />,
      errorElement: <ErrorPage /> 
    },
    {
      path: "update_post/:id",
      element: <UpdatePost user={user} />,
      errorElement: <ErrorPage /> 
    }
  ]);*/}