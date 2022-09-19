
//React

import React , {useState} from 'react'

//Importação de componentes

import { Avatar } from '../Avatar';

import { Comment } from '../Comments/index'

import { StyledPosts } from './style'

//Format Date

import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/esm/locale/pt-BR/index.js';

export interface posts {
    content?:any;
    authorName:string;
    authorRole:string;
    publishedAt: Date;
    authorImg:string;
}

export function Post ({

    content, 
    authorName, 
    authorRole, 
    publishedAt,
    authorImg,

}:posts) {
    
    const [commentText , setCommentText] = useState('')

    const [newComment , setNewComment] = useState(commentText)

    const [actualComment , setActualComment] = useState('')
    
    const publishedAtFormatted = format(publishedAt , "d 'de' LLLL 'as' HH:mm'h'", {
        locale:ptBR,
    })

    const publishedDateRealativeToNow =  formatDistanceToNow(publishedAt, {
        locale:ptBR,
        addSuffix:true,
    })


    return(
        <>

        <StyledPosts>
        
        <article className="post">
            
            <header className="styledHeader">
                <div className="styledAuthorAvatar">
                    <Avatar 
                        image={authorImg}
                        hasBorder
                    />
                    
                    <div className="authorInfo">
                        
                        <strong>{authorName}</strong>
                        <span>{authorRole}</span>

                    </div>
                </div>

                <time title={publishedAtFormatted}  dateTime={publishedAt.toISOString()}>
                    {publishedDateRealativeToNow}
                </time>
            </header>

            <div className="styledContent">
                {content.map(line => {
                    if(line.type === 'paragraph'){
                        return(<p>{line.content}</p>)
                    }else if (line.type === 'link')
                    return(<p><a>{line.content}</a></p>)
                })}                
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