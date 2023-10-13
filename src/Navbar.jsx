import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
      <button data-text="Awesome" className="button">
      <span className="actual-text">&nbsp;QuestAI&nbsp;</span>
      <span className="hover-text" aria-hidden="true">&nbsp;QuestAI&nbsp;</span>
  </button>
    )
  }

const Navbar = () => {

    const navLinks = [ 
        {href:"/" , label:"Home"},
        {href:"/Text" , label:"Text"},
        {href:"/Image" , label:"Image"},
    ]

    return (
        <header
            id="NavbarCon"
        >
            <nav
            className='navbar'
            >
            <div
            className='MainHeader'
            >
                <Logo />
            </div>
               <ul className="navelements">
                    {
                        navLinks.map((items)=>(
                            <Link to={items.href} className='nav-elements'>{items.label}</Link>
                        ))
                    }
               </ul>
            </nav>
        </header>
    )
}

export default Navbar