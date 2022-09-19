import React from 'react'

import igniteLogo from '../../Assets/IgniteLogo.svg'

import { HeaderDiv }from './style'


export function Header () {
    return(
        <HeaderDiv>
        <div className="styledHeader">
            <header className="logo">
                <div className="headerElements">
                    <img src={igniteLogo} alt="Logo do projeto Ignite" />
                    <span>Ignite Feed</span>
                </div>
            </header>
        </div>
        </HeaderDiv>
    )

}
