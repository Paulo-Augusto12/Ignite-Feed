import { useState } from 'react'

import { Header } from './components/Header'
import { SideBar } from './components/Sidebar'
import { Post } from './components/Posts'
import { Comment } from './components/Comments'
import {Avatar} from './components/Avatar'
import v4 from 'uuid'

import {StyledWrapper} from './styles'

import './global.css';

const postagens = [
  {
    id: 1,
    
      author:{
        name:'Otto Gioia',
        avatar:'https://avatars.githubusercontent.com/u/109320299?v=4',
        role:'Estudante',
    },

    content:
    [
        {type:'paragraph', 
        content:'Adobe anuncia compra do Figma por US$ 20 bilhões'
        },
        {
          type:'paragraph',
          content:'A Adobe anunciou a compra da Figma por US$ 20 bilhões. A informação foi relatada pelo site TechCrunch, onde é dito que com esta negociação, a Adobe está eliminando um de seus maiores rivais no campo de design digital.'
        },
        {
          type:'link',
          content:'https://www.oficinadanet.com.br/tecnologia/42311-adobe-compra-figma'
        }
    ],
    
    publishedAt: new Date(),
  }, 
  
  {
    id: 2,
    
    author:{
      name:'Paulo Augusto',
      avatar:'https://avatars.githubusercontent.com/u/102987686?v=4',
      role:'Estudante',
    },
    
    content:
    [
      {type:'paragraph', 
      content:'Nós sofremos uma intrusão desautorizada de um terceiro, que ilegalmente'
      },
      
      {type:'paragraph',
      content:'acessou e baixou informações confidenciais dos nossos sistemas, incluindo clipes da fase inicial de desenvolvimento do próximo GTA.'
      }, 
      
      {type:'paragraph',
      content:' Neste momento, não antecipamos qualquer interrupção dos nossos games como serviço ou no desenvolvimento dos nossos projetos de longo prazo.'
      },
      
      {type:'link', 
      content:'https://meups.com.br/noticias/rockstar-vazamentos-gta-vi-desapontados/'
      },
    ],
    
    publishedAt: new Date(),
  }
];


export function App() {
    return(
   
   <>
    
    <Header
    />

      <StyledWrapper>
        <div className="wrapper">
        
     <SideBar />
        
        <main>
          {postagens.map(posts => {
            return (
            <Post 
              authorName={posts.author.name}
              content={posts.content}
              publishedAt={posts.publishedAt}
              authorRole={posts.author.role}
              authorImg={posts.author.avatar}
            />
            )
          })}
        </main>


      </div>
      </StyledWrapper>    
   
   </>
  
  )
}
