import React from 'react'
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'

import { Card } from '~/components/Card'

import { HomePageContainer } from './styles'

export const HomePage: React.FC = () => {
  document.title = 'Home | React Template'
  return (
    <HomePageContainer>
      <Card className="card github">
        <FaGithub size={75} />
      </Card>
      <Card className="card instagram">
        <FaInstagram size={75} />
      </Card>
      <Card className="card facebook">
        <FaFacebookF size={75} />
      </Card>
      <Card className="card twitter">
        <FaTwitter size={75} />
      </Card>
      <div className="details">Edit src/pages/Home/index.ts to change this page.</div>
    </HomePageContainer>
  )
}
