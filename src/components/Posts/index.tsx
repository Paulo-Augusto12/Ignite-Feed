import React , {useState} from 'react'
import { Avatar } from '../Avatar';

import { Comment } from '../Comments/index'

import { StyledPosts } from './style'

interface posts {
    
    content?:string;
    authorName?:string;
    authorRole?:string;

}

export function Post ({content, authorName, authorRole}:posts) {

    const [commentText , setCommentText] = useState('')

    const [newComment , setNewComment] = useState(commentText)

    const [actualComment , setActualComment] = useState('')
        

    function commentVisible(){
        
        setActualComment('dasddffg')
    }

    return(
        <>

        <StyledPosts>
        
        <article className="post">
            
            <header className="styledHeader">
                <div className="styledAuthorAvatar">
                    <Avatar 
                        image="https://avatars.githubusercontent.com/u/109320299?v=4"
                        hasBorder
                    />
                    
                    <div className="authorInfo">
                        
                        <strong>{authorName}</strong>
                        <span>{authorRole}</span>

                    </div>
                </div>

                <time title="13 de setembro as 09:00"dateTime="2022-09-13 09:00:00">Publicado há cerca de 1 hora atrás </time>
            </header>

            <div className="styledContent">
                <p>{content}</p>                
            </div>

            <form className="styledForm">
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder="deixe um comentário"
                />
                
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className="styledCommentList">
                <Comment 
                    commentAuthor="Paulo Augusto"
                    content={actualComment}
                />
            </div>

        </article>
        
        </StyledPosts>

        </>
    )
}