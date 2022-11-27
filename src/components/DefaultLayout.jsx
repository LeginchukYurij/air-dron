import React from 'react'
import Header from './Header'

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />

      <main className='main-content'>
        {children}
      </main>

      <footer className='footer'>
        Footer
      </footer>
    </>
  )
}

export default DefaultLayout