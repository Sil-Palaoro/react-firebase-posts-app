import React, { useState, useEffect } from 'react';
import { Input, Button } from 'antd';
const { TextArea } = Input;
import { db, doc, getDoc, updateDoc } from '../firebase';
import { useNavigate, useLocation  } from "react-router-dom";



function UpdatePost() {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const navigate = useNavigate();
    const { state } = useLocation(); // Obtén los datos pasados con state
    const { uid, id } = state || {}; // Desestructuramos uid e id


    useEffect(() => {
        const fetchPost = async () => {
            try {
                const postRef = doc(db, `users/${uid}/posts/${id}`);
                const snapshot = await getDoc(postRef);

                if (snapshot.exists()) {
                    const { title, content } = snapshot.data();
                    setTitle(title);
                    setContent(content);
                } else {
                    console.error("The document doesn't exists");
                }            
            } catch (error) {
                console.error("Error retreiving post: ", error);
            }
        };
        
    if (uid && id) {
        fetchPost();
      }

    }, [uid, id])

    const onTitleChange = (event) => setTitle(event.target.value)
    const onContentChange = (event) => setContent(event.target.value)
    
    const onEditPost = async () =>{
        try {
            const postRef = doc(db, `users/${uid}/posts/${id}`);        
            const payload = { title, content }

            await updateDoc(postRef, payload);
            console.log("Doc successfully updated with ID: ", id);            
            
            navigate(`/blogs/${uid}/posts`)
        } catch (error) {
            console.error("Error updating post: ", error);
        }
    };    

    return (
    <div>
        <div className="create_post_container">
            Update Post
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
                    onClick={onEditPost}
                >
                    Edit Post
                </Button>
            </div>
        </div>
    </div>
  )
}

export default UpdatePost;