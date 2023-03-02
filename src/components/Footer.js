//Rafc returns named export and rafce returns default export
//here rafc is used
import React from 'react'

export const Footer = () => {
  const FooterStyle={
      position: "fixed",
      bottom: "1px",
      width: "100%"
  }
  return (
    <footer className="bg-dark text-light mt-3" style={FooterStyle}>
      <p className="text-center">
        Copyright &copy; MyTodosList.com
      </p>
    </footer>

  )
}
