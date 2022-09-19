import styled from 'styled-components'


export const HeaderDiv = styled.div`


.styledHeader{

    background-color: var(--gray-800);
    height: 80px;
    display: flex;
    flex-direction:row;
    align-items:center;
    justify-content: center;
    
    padding: 1.25rem;
    

    .logo img{
    height: 2rem;
    margin-right:0.5rem;
    }

    .logo span{
        margin:0;
        padding:1rem;
        align-items: center;
        font-size:1.5rem;
    }

    .headerElements{
        display:flex;
        justify-content: center;
        align-content: center;
        flex-wrap: wrap;
        align-items: center;
    }
    
}

`

