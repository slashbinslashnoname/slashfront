import React from 'react'

import { Container, Grid } from '@mui/material'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <Grid className="container container-footer">
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <h3>Who we are</h3>
            <p>
              <strong>Slashbin.xyz</strong> has been initiated to have a safe
              space for freelancers who wish to contribute on the Bitcoin,
              Cryptocurrencies, and Web3 industry.
            </p>
            <p>
              They can communicate with each other in a safe space where we can
              grow together.
            </p>
            <p>
              Made with <span style={{ fontSize: '1.3em' }}>❤️</span> by
              Slashbin
            </p>
          </Grid>
          <Grid item xs={12} md={4}>
            <h3>We are decentralized</h3>
            <p>
              Every one of our Freelancers is independent and have they own
              company registration
            </p>
            <p>
              You can work with just 1 Freelancer or with a team dedicated to
              your project. We can work with your team too.
            </p>
          </Grid>
          <Grid item xs={12} md={4}>
            <h3>Contact</h3>
            <p>
              <Link to="/contact">Contact us</Link> if you are a Freelancer and
              want to join our community.
            </p>
            <p>
              <Link to="/contact">Contact us</Link> if your project needs a
              review.
            </p>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  )
}

export default Footer
