import React from 'react'

import { StyledAvatar } from './style'


interface props{
    image: string;
    hasBorder?:boolean;
}

export function Avatar ({image, hasBorder}:props){

    return(
            <StyledAvatar>
                   <img   
                    src={image} 
                    alt="Imagem do avatar"
                    className={hasBorder ? "avatarWithBorder" : "avatar" }
                    />
                </StyledAvatar>

    )
}


