import React, { useEffect, useState } from 'react';
import PostSnippet from './PostSnippet';
import _ from 'lodash';
import { db, collection, getDocs } from '../firebase';


function UserPosts(props){
    const [posts, setPosts] = useState([])

    const fetchPosts = async () => {
        //Primero chequeamos si hay un user pasado en las props. Si es así
        //entonces le decimos que lo use. Sino, que tome el uid de la url:
        let userId = props?.user.uid ? props?.user.uid : props.uid

        try {
            const userPostsRef = collection(db, `users/${userId}/posts`);
            const snapshot = await getDocs(userPostsRef);

            const postsData = snapshot.docs.map((doc) => ({ 
                            id: doc.id, 
                            ...doc.data(),
                        }));
                    setPosts(postsData)                      
            } catch (error) {
                console.error("Error retreiving the post: ", error);
            }
    };
    
    useEffect(() =>{     

        fetchPosts();   

    }, [props.user, props.uid])

    const handlePostDeleted = () => {
        // Refetch posts after a post is deleted
        fetchPosts();
    };

    return(
        <div className="app_container">
            <div className="posts_container">
                <h1 className="page_header_container">My posts</h1>
                <div className="articles_container">                
                    {
                        _.map(posts, (article, idx) => {
                            return(
                                <PostSnippet
                                key={idx} 
                                id={article.id}
                                title={_.capitalize(article.title)} 
                                content={
                                    article.content.substring(0, 1000)
                                }
                                user={props.user}
                                uid={props.uid} 
                                onPostDeleted={handlePostDeleted} // Pass the function as prop
                                />
                            )
                        })
                    }    
                </div>
            </div>
        </div>        
    )
}

export default UserPosts;
