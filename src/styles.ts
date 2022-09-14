import styled from 'styled-components'


export const StyledWrapper = styled.div`

.wrapper {
    max-width:70rem;
    margin:2rem auto;
    padding:0 1rem;
    
    display: grid;
    grid-template-columns: 256px 1fr;
    gap: 2rem;
    align-items: flex-start;
}


@media (max-width: 768px){
    .html{
        font-size: 87.5%;
    }
    
    .wrapper{
        grid-template-columns: 1fr
    }
}

`