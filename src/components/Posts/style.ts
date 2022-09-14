import styled from 'styled-components'


export const StyledPosts = styled.div`

.post {
    background: var(--gray-800);
    border-radius: 8px;
    padding: 2.5rem;

    margin-bottom: 2rem;    

}

.styledHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.styledHeader time{
    font-size: 0.875rem;
    color: var(--gray-400);
}

.styledContent{
    line-height: 1.6;
    color:var(--gray-300);
    margin-top: 1.5rem;

}

.styledContent p{
    margin-top: 1rem;
}

.styledContent a{
    font-weight: bold;
    color: var(--green-500);
    text-decoration: none;

    &:hover{
    color: var(--green-300);
}

}

.styledAuthorAvatar{
    display: flex;
    align-items: center;
    gap: 1rem;
}


.authorInfo strong{
    display: block;
    color: var(--gray-100);
    line-height: 1.6;
}

.authorInfo span{
    display: block;
    font-size: 0.75rem;
    color: var(--gray-400);
    line-height: 1.6;
}

.styledForm{
    width:100%;
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--gray-600)
}

.styledForm strong {
    line-height: 1.6;
    color: var(--gray-100)
}

.styledForm textarea{
    width:100%;
    background: var(--gray-900);
    border:0;
    resize:none;
    height:6rem;
    padding:1rem;
    border-radius: 8px;

    color: var(--gray-100);
    line-height: 1.4;
    margin-top:1rem;
}

.styledForm button{
    padding: 1rem 1.5rem;
    margin-top: 1 rem;
    border-radius: 8px;
    border:0;
    background: var(--green-500);
    color: var(--white);
    font-weight: bold;
    
    cursor:pointer;

    

    &:hover{
        background: var(--green-300)
    }
}

.styledForm footer{
    visibility:hidden;
    max-height: 0;
}

.styledForm:focus-within footer{    
    visibility: visible;
    max-height:none;
    margin-top: 0.5rem;
    transition: 0.3s;
}

.styledCommentList{
    margin-top: 2rem;
}


`