import React, {useState, useEffect} from 'react';
import { Card } from 'antd';
import { db, doc, getDoc } from '../firebase';
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';



const Post = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { state } = useLocation(); 
    const { uid, id } = state || {}; 
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPost = async () => {
            try {    
                const postRef = doc(db, `users/${uid}/posts/${id}`);
                const docSnapshot = await getDoc(postRef);


                if (docSnapshot.exists()) {
                    const { title, content } = docSnapshot.data();
                    setTitle(title);
                    setContent(content);
                } else {
                    console.error("El documento no existe");
                }
            } catch (error) {
                console.error("Error al obtener el post: ", error);
            };
        };
        
        if (uid && id) {
            fetchPost();
          }

    }, [uid, id])

    return(
        <div className="post_container">
            <h1 className="page_header_container">{title}</h1>
            
            <div className="post_content_container">
                <Card 
                style={{marginTop: 20}}
                extra={
                    <div className="post_snippet_links">
                        <Link 
                            onClick={() => {navigate(-1)}} 
                            style={{marginRight: '15px', float:'left'}}
                        >
                            Back
                        </Link>                                                  
                    </div>
                }
                >
                  {
                    content.split('\n').map((paragraph, idx) => {
                        return <p key ={idx}>{paragraph}</p>
                    })
                    }
                </Card>            
            </div>
        </div>
    )
}

export default Post;