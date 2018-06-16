import React from 'react'

const MainLayout = ({children}) => (
  <div className='container'>
    <header className='header'>
      <nav role='navigation'>
        <ul className='nav nav-pills pull-right'>
          <li><a href='http://www.phoenixframework.org/docs'>Get Started</a></li>
        </ul>
      </nav>
      <span className='logo' />
    </header>
    {children}
  </div>
)

export default MainLayout
