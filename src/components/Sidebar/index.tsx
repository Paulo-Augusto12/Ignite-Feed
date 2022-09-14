import React from 'react'

import { Avatar } from '../Avatar'
import { StyledSideBar } from './styles'

import {TbPencil} from 'react-icons/tb'


export function SideBar (){


    return(

        <StyledSideBar>
            
        <aside className="sideBar">
        
        <img className="cover" 
        src="https://images.unsplash.com/photo-1635830625698-3b9bd74671ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40" 
        />
        <div className="profile">
            <Avatar 
            hasBorder={true}
            image="https://avatars.githubusercontent.com/u/102987686?v=4"
            />
            <strong> Paulo Augusto </strong>
            <span> Desenvolvedor Web Jr</span>
        </div>
        
        <footer className="edit">
            
            <a className="link" href="#">
                <TbPencil size="20"/>
                Editar seu perfil
            </a>
        
        </footer>
        
        </aside>
        
        </StyledSideBar>
    )
}