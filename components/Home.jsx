import React, { useEffect, useState } from 'react';
import PostsSnippets from './PostsSnippets';
import _ from 'lodash';
import { db } from '../firebase';
import { collectionGroup, getDocs } from "firebase/firestore";

const Home = () => {
    const [posts, setPosts] = useState([])

    const fetchPosts = async () => {
        console.log('Firestore instance:', db);

        try {
            const postsRef = collectionGroup(db, 'posts');
            const snapshot = await getDocs(postsRef);

            const postsData = snapshot.docs.map((doc) => {
                const data = doc.data();
                console.log("Post data:", data); // Depura el contenido del documento
                return {
                    id: doc.id, 
                    ...data,
                        };
            });
            setPosts(postsData)                      
            } catch (error) {
                console.error("Error retrieving the posts: ", error);
            }
    };
    
    useEffect(() =>{    
        fetchPosts();  
    }, [])

    

    return (
        <div className="posts_container">
            <h1 className="page_header_container">All Posts</h1>

            <div className="articles_container">                
                {
                    _.map(posts, (article, idx) => {
                        return(
                            <PostsSnippets
                            key={idx} 
                            id={article.id}
                            uid={article.uid}
                            title={_.capitalize(article.title)} 
                            content={
                                article.content.substring(0, 1000)
                            }                            
                            />
                        )
                    })
                }    
            </div>
        </div>     
    )
}

export default Home; 