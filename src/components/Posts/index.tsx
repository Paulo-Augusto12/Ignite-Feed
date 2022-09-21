
//React

import React , {useState} from 'react'

//Importação de componentes

import { Avatar } from '../Avatar';

import { Comment } from '../Comments/index'

import { StyledPosts } from './style'

//Format Date

import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/esm/locale/pt-BR/index.js';

// Adicionais

import { v4 } from 'uuid';


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
    
    const publishedAtFormatted = format(publishedAt , "d 'de' LLLL 'as' HH:mm'h'", {
        locale:ptBR,
    })

    const publishedDateRelativeToNow =  formatDistanceToNow(publishedAt, {
        locale:ptBR,
        addSuffix:true,
    })


        
    const [newComment , setNewComment] = useState([0])
    const [newCommentText, setNewCommentText ] = useState('')
    const [commentText , setCommentText] = useState('')
    const [commentFixed , setCommentFixed] = useState('')
    
    function handleDisplayNewcomment(){
        event.preventDefault()
        setNewComment([...newComment , newComment.length + 1])
        
        console.log('O comentário foi publicado -> ' , { newComment })
    }

    const nComment = (event:any) =>{
        setNewCommentText(event.target.value)
    }

    const commentId = v4()

    function commentData (){
    
    const commentTxt = (texto:any)=>{
        setCommentText(texto.value)
    } 
 }

 function setComment(texto:string){
    const getComment = (texto) =>{ 
    setCommentText(newCommentText)
    }
    return texto;
 }
    
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
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className="styledContent">
                {content.map(line => {
                    if(line.type === 'paragraph'){
                        return(<p>{line.content}</p>)
                    }else if (line.type === 'link')
                    return(<p><a href={line.content}>{line.content}</a></p>)
                })}                
            </div>

            <form onSubmit={handleDisplayNewcomment} className="styledForm">
                <strong>Deixe seu feedback</strong>

                <textarea
                    maxLength={200} 
                    placeholder="Deixe um comentário"       
                    onChange={nComment}
                    value={newCommentText} 
                />
                
                <footer>
                    <button type="submit" value="Enviar Comentário !">Publicar</button>
                </footer>
            </form>

            <div className="styledCommentList">
                    {newComment.map(comment => {
                        return <Comment
                            id={commentId}
                            commentAuthor="Paulo Augusto"
                            publishedAt={new Date()}
                            content={commentText}
                        />
                    })} 
            </div>

        </article>
        
        </StyledPosts>

        </>
    )

}