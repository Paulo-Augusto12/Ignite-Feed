import React , { useState } from "react"

import {Avatar} from '../Avatar'

import { FiTrash2 } from 'react-icons/fi'
import { BiLike, BiDislike } from 'react-icons/bi'

import { StyledComments } from './style'

interface comments{
    
    commentAuthor?:string;
    content?:string;

}

export function Comment ({commentAuthor, content}:comments){

    const [likeCounter, setLikeCounter] = useState(0)
    const [disLikeCounter , setDisLikeCounter] = useState(0)

    function increaseLike(){
        setLikeCounter(likeCounter + 1)
    }

    function decreaseLike(){
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
                            <time title="13 de setembro as 09:00"
                            dateTime="2022-09-13 09:00:00"
                            >
                                Publicado a cerca de 1 hora atrás
                            </time>
                            </div>
                            
                            <button  title="Deletar comentário">
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
                    <button onClick={decreaseLike}>
                        <BiDislike size="20"/>
                          <span>{disLikeCounter}</span>
                    </button>
                </footer>
                </div>

                

            </div>

        </StyledComments>

    )
}


