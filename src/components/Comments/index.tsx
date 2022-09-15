import React from 'react'

import {Avatar} from '../Avatar'

import { FiTrash2 } from 'react-icons/fi'
import { BiLike } from 'react-icons/bi'

import { StyledComments } from './style'

interface comments{
    
    commentAuthor?:string;
    content?:string;

}

export function Comment ({commentAuthor, content}:comments){

    function likeCounter (){
                
        console.log("incrementing");
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
                    <footer >
                    <button onClick={likeCounter}>
                        <BiLike  size="20"/>
                        Aplaudir {' '}
                        <span >  {' '} 20 </span>
                    </button>
                </footer>
                </div>

                

            </div>

        </StyledComments>

    )
}


