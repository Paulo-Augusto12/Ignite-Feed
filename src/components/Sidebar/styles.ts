import styled from 'styled-components'


export const StyledSideBar = styled.div`


.sideBar{
    background : var(--gray-800);

    border-radius: 8px;
}

.cover{
    width:100%;
    height:72px;

    object-fit:cover
}

.profile{
    display:flex;
    flex-direction:column;
    align-items: center;

    margin-top: calc(0px - 1.5rem + 6px);
}

.profile strong {
    margin-top: 1rem;
    color: var(--gray-100);
    line-height:1.6
}

.profile span {
    font-size: 0.875rem;
    color: var(--gray-400);
    line-height: 1.6;
}

.edit{
    border-top: 1px solid var(--gray-600);
    margin-top:1.5rem;
    padding: 1.5rem 2rem 2rem;
}




.link{
    background: transparent;
    color: var(--green-500);
    border: 1px solid var(--green-500);
    border-radius:8px;
    height:50px;
    padding: 0 1.5rem;
    font-weight: bold;
    display:block;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;

    transition: color 0.1s, background-color 0.1s;
    
        &:hover{
        background: var(--green-500);
        color: white;
    }
} 

`