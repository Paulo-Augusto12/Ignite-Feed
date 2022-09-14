import { useState } from 'react'

import { Header } from './components/Header'
import { SideBar } from './components/Sidebar'
import { Post } from './components/Posts'
import { Comment } from './components/Comments'
import {Avatar} from './components/Avatar'

import {StyledWrapper} from './styles'

import './global.css';


export function App() {
    return(
   
   <>
    
    <Header
    />

      <StyledWrapper>
        <div className="wrapper">
        
     <SideBar />
        
        <main>
        
          <Post 
          authorName= 'Otto Gioia'
          authorRole='Estudante'
          content='Jovem morre esperando o lançamento de Hogwarts Legacy'
          />



  
        </main>


      </div>
      </StyledWrapper>    
   
   </>
  
  )
}
