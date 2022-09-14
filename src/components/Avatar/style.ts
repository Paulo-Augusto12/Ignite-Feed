import styled from 'styled-components'

export const StyledAvatar= styled.div` 

    .avatar  {
        width:  3rem;
        height:  3rem ;

        border-radius: 3px;

        .avatar img{
            display: flex;
        align-items: center;
        }
        
    }


.avatarWithBorder{ 
    
    width: calc(3rem + 12px);
    height: calc(3rem + 12px);
    
    border-radius: 3px;
    border: 4px solid var(--gray-800);
    outline: 2px solid var(--green-500);

}

` 