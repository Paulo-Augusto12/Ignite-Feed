import React , { useState } from "react"

import {Avatar} from '../Avatar'

import { FiTrash2 } from 'react-icons/fi'
import { BiLike, BiDislike } from 'react-icons/bi'

import { StyledComments } from './style'

import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/esm/locale/pt-BR/index.js';

interface comments{
    
    commentAuthor?:string;
    content?:string;
    publishedAt: Date;
    id:string;

}

export function Comment ({commentAuthor, content, publishedAt, id}:comments){

    const [likeCounter, setLikeCounter] = useState(0)
    const [disLikeCounter , setDisLikeCounter] = useState(0)
    const [commentContent, setCommentContent] = useState('')
    
    const publishedAtFormatted = format(publishedAt , "d 'de' LLLL 'as' HH:mm'h'", {
        locale:ptBR,
    })

    const publishedDateRelativeToNow =  formatDistanceToNow(publishedAt, {
        locale:ptBR,
        addSuffix:true,
    })

    function increaseLike(){
        setLikeCounter(likeCounter + 1)
    }

    function increaseDisLike(){
        setDisLikeCounter(disLikeCounter + 1)
    }
    


    return(

        <StyledComments>
        
            <div className="comment">
                <Avatar hasBorder={false} image="https://avatars.githubusercontent.com/u/102987686?v=4"/>
                
                <div className="commentBox">
                        <div className="commentContent">
                        <header>
                            <div className="authorData">
                            <strong>{commentAuthor}</strong>
                            <time title={publishedAtFormatted}
                            dateTime={publishedAt.toISOString()}
                            >
                                {publishedDateRelativeToNow}
                            </time>
                            </div>
                            
                            <button  
                            title="Deletar comentário"
                            >
                                <FiTrash2 size="24" />
                            </button>
                        </header>
                            <p>{content}</p>
                    </div>
                    <footer>
                    <button onClick={increaseLike}>
                        <BiLike  size="20"/>
                         <span> {likeCounter} </span>
                    </button>
                    <button onClick={increaseDisLike}>
                        <BiDislike size="20"/>
                          <span>{disLikeCounter}</span>
                    </button>
                </footer>
                </div>

            </div>

        </StyledComments>

    )
}


