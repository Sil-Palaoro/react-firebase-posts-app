import React from 'react';
import { Link } from "react-router-dom";
import { HighlightOutlined, ReadOutlined, HomeOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

const AppNav = (props) => {
  const items = [
    {
      key: 'home',
      icon: <HomeOutlined />,
      label: (
        <Link to={'/'} style={{ float: 'right' }}>
          Home
        </Link>
      ),
    },
    ...(props.user
      ? [
        {
          key: 'posts',
          icon: <ReadOutlined />,
          label: (
            <Link to={`/blogs/${props.user?.uid}/posts`} style={{ float: 'right' }}>
              My Posts
            </Link>
          ),
        },
      ]
      : []),
    ...(props.user
      ? [
          {
            key: 'create_post',
            icon: <HighlightOutlined />,
            label: (
              <Link to="/create_post" style={{ float: 'right' }}>
                Create Post
              </Link>
            ),
          },
        ]
      : []),
    {
      key: 'auth',
      label: props.user ? (
        <a onClick={props.onSignOut} style={{ float: 'right' }}>
          Sign Out
        </a>
      ) : (
        <Link to="/sign_in" style={{ float: 'right' }}>
          Sign In
        </Link>
      ),
    },
  ];

  return (
      <div className="app_main_navigation">
        <Menu mode="horizontal" items={items} />
      </div>
  );
};

export default AppNav;

// <div className="app_main_navigation">
//             <Menu mode="horizontal">
//               <Menu.Item key="posts">
//                 <ReadOutlined />                
//                 <Link to ={`/blogs/${props.user.uid}/posts`} style={{ float: 'right'}}>
//                   'Posts'
//                 </Link>  
//               </Menu.Item>;

//               {props.user &&
//                 <Menu.Item key="create_post">
//                   <HighlightOutlined />                
//                   <Link to ="/create_post" style={{ float: 'right'}}>
//                     'Create Post'
//                   </Link>  
//                 </Menu.Item>
//               }

//               {!props.user
//                 ?
//                 <Link to="/sign_in" style={{ float: 'right'}} >
//                   Sign In
//                 </Link>
//                 :
//                 <a onClick={props.onSignOut} style={{ float: 'right'}}>
//                   'Sign Out'
//                 </a>

//               }
//             </Menu>        
//         </div>