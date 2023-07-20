import React from 'react'

function Header() {
    const [open, setopen] = React.useState(false)
    const sections = ["is", "experiences","works","about"]
    
    const menuBtnClick = (e) => {
      e.preventDefault()
      setopen(!open)
      const body = document.getElementsByTagName("body")[0]
      body.style.overflow = !open ? "hidden" : "auto"
    }

    const closeMenu = () => {
      setopen(false)
      const body = document.getElementsByTagName("body")[0]
      body.style.overflow = "auto"
    }

    return (
        <header className="header">
        <nav className="flex flex-row flex-ai-b flex-jc-sb">
          <a href="/" className="header__logo">fm()</a>
          <a onClick={menuBtnClick} className={`header__menu hide-pc ${open ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </a>
          <div className={`header__links ${open ? "open" : ""}`}>
            {
              sections.map(s=>(<a key={s} onClick={closeMenu} href={`#${s}`}>{s}()</a>))
            }
          </div>
        </nav>
      </header>
    )
}

export default Header
