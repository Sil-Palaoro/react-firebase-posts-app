import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';


const PostsSnippets = (props) => {    

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
                                state={{ uid: props.uid, id: props.id }}
                                style={{marginRight: '15px', float:'left'}}
                            >
                                Read Full Article
                            </Link>                                                  
                        </div>
                    }
                >
                    <div className="article_content">
                        {
                        props.content.split('\n').map((paragraph, idx) => {
                                return <p key ={idx}>{paragraph}</p>
                            })
                        }
                    </div>                                      
                </Card>
        </div>
    )

}

export default PostsSnippets;