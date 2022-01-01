import React from 'react'

interface Props {
  
}

const Footer = (props: Props) => {
  return (
    <footer className="py-8 text-center bg-blue-800 text-white text-lg">
      Created by <a href='https://github.com/SlimShadyIAm' className="text-blue-300 font-semibold">Aamir Farooq</a> &copy; 2022.
    </footer>
  )
}

export default Footer
