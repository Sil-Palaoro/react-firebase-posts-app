import React, { useState } from 'react';
import { Input, Button } from 'antd';
const { TextArea } = Input;
import { db, collection, addDoc } from '../firebase';
import { useNavigate } from "react-router-dom";


function CreatePost(props) {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const navigate = useNavigate();


    const onTitleChange = (event) => setTitle(event.target.value)
    const onContentChange = (event) => setContent(event.target.value)
    
    const onCreatePost = async () =>{
        try {
            const userPostsRef = collection(db, `users/${props.user.uid}/posts`);
            const payload = { 
                uid: props.user.uid, 
                title, 
                content,
            }

            const docRef = await addDoc(userPostsRef, payload);
            console.log("Documento creado con ID: ", docRef.id);

            setTitle('')
            setTitle('')
            navigate(`/blogs/${props.user.uid}/posts`)
            
            } catch (error) {
                console.error("Error creando el post: ", error);
            }
    }    

    return (
    <div>
        <div className="create_post_container">
            CreatePost
        </div>

        <div className="post_inputs_container">
            <div className="post_input_container">
                <div className="post_input_title">
                    <h2>Post title</h2>
                </div>

                <div className="post_input">
                    <Input 
                        placeholder="Post title" 
                        value={title} 
                        onChange={onTitleChange} 
                    />
                </div>
            </div>

            <div className="post_input_container">
                <div className="post_input_title">
                    <h2>Post content</h2>
                </div>

                <div className="post_input">
                    <TextArea 
                        rows={10} 
                        value={content} 
                        onChange={onContentChange} 
                    />
                </div>        
            </div>

            <div className="post_input_button">
                <Button 
                    type="primary" 
                    size="large" 
                    onClick={onCreatePost}
                >
                    Create Post
                </Button>
            </div>
        </div>
    </div>
  )
}

export default CreatePost;
