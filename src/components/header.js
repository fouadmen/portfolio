import React from 'react'

function Header() {
    const [open, setopen] = React.useState(false)

    const menuBtnClick = (e) => {
        e.preventDefault()
        setopen(!open)
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
            <a href="#">.is()</a>
            <a href="#">.experience()</a>
            <a href="#">.about()</a>
            <a href="#">.contact()</a>
          </div>
        </nav>
      </header>
    )
}

export default Header
