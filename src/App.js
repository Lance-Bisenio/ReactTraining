import React from 'react'

import { Navbar } from './components';
import { Header, About, Footer } from './container';


const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Footer />
    </div>
  )
}

export default App