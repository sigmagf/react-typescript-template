import React from 'react'
import { useNavigate } from 'react-router-dom'

import { NotFoundContainer } from './style'

export const NotFoundErrorPage: React.FC = () => {
  const navigate = useNavigate()
  document.title = '404 | React Template'

  return (
    <NotFoundContainer>
      <div className="container">
        <div className="errorMessage">
          <h1 className="notFound">404</h1>
          <h2 className="pageNotFound">This Page can&apos;t be founded.</h2>
        </div>
        <div className="backHome">
          <button type="button" onClick={() => navigate('/')}>
            Back to home
          </button>
        </div>
      </div>
    </NotFoundContainer>
  )
}
