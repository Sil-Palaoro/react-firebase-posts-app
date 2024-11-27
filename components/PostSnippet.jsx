import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import { db, doc, deleteDoc } from '../firebase';


const PostSnippet = (props) => {

    const onDeletePost = async () =>{
        try {
            const postRef = doc(db, `users/${props.user.uid}/posts/${props.id}`);
            await deleteDoc(postRef);
            console.log('Post deleted');
            props.onPostDeleted();
        }  catch (error) {
            console.error("Error deleting post: ", error);
        }
    }

    return (
        <div className="post_snippet_container">
            <Card
                    style={{
                      marginTop: 16,
                    }}
                    type="inner"
                    title={props.title}
                    extra={
                        <div className="post_snippet_links">
                            <Link 
                                to={`/blogs/${props.uid}/post/${props.id}`} 
                                state={{ uid: props.user.uid, id: props.id }}
                                style={{marginRight: '15px', float:'left'}}
                            >
                                Read Full Article
                            </Link>

                            {props.user &&    
                                <div className="post_edit_links" style={{float:'right'}} >                            
                                    <Link 
                                        to={`/update_post/${props.id}`} 
                                        state={{ uid: props.user.uid, id: props.id }}
                                        style={{marginRight: '15px'}}
                                    >
                                        Edit
                                    </Link>

                                    <a onClick={onDeletePost}>
                                        Delete
                                    </a>
                                </div>
                            }                            
                        </div>
                    }
                >
                    <p className="article_content">
                        {
                        props.content.split('\n').map((paragraph, idx) => {
                                return <p key ={idx}>{paragraph}</p>
                            })
                        }
                    </p>                                      
                </Card>
        </div>
    )

}

export default PostSnippet;