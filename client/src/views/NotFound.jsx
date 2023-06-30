import React from 'react'
import { NotFoundContainer } from '../styles/StyledNotFound.styled'

const NotFound = () => {
  return (
    <NotFoundContainer>
      <img src="../assets/notfound.png" alt="Error 404" />
      <span>Nothing to see here...</span>
    </NotFoundContainer>
  )
}

export default NotFound