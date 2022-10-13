import styled from 'styled-components'


export const StyledComments = styled.div`


.comment{
    margin-top:1.5rem;
    display: flex;
    gap: 1rem;
}

.commentBox{
    flex: 1;
}

.commentContent{
    background: var(--gray-700);

    border-radius: 8px;
    padding: 1rem;
}

.commentContent header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}

.authorData strong{
    display:block;
    font-size: 0.875rem;
    line-height: 1.6

}

.authorData time {
    display: block;
    font-size: 0.75rem;
    line-height:1.6;
    color: var(--gray-400);

}

.commentContent header button{

    background: transparent;
    border:0;
    color: var(--gray-400);
    cursor: pointer;
    line-height: 0;
    border-radius: 2px;
    transition: 0.1s;
    &:hover {
        color: var(--red-500);
    }
}

.commentContent p {
    margin-top:1rem;
    color: var(--gray-300);
}

.commentBox footer{
    margin-top: 1rem;
    display: flex;
}

.commentBox footer button{
    background:transparent;
    border:0;
    color: var(--gray-400);
    cursor:pointer;

    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 1.9rem;
    

    border-radius: 2px;

    &:hover{
        color:var(--green-300);
    }

}

.commentBox footer button svg {
    margin-right:0.2rem;
}

.commentBox footer span{
    display: flex;
    align-items: center;
}

.commentBox footer span::before {
    content: "\u2022";

  padding : 0 0.25rem;
}

`