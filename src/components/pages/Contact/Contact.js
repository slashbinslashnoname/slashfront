import React from 'react'
import { Container, Grid, Typography, IconButton } from '@mui/material'
import { CalendarMonth, Telegram, Twitter, WhatsApp } from '@mui/icons-material'
import Footer from '../../organisms/Footer'

function Contact() {
  return (
    <>
      <Grid className="container container-head">
        <Container>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Grid item xs={12} md={12}>
              <Typography variant="h1" component="h1">
                Contact us
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Grid>

      <Grid className="container-section container-grey">
        <Container>
          <Grid container>
            <Grid item xs={12} md={12}>
              <Grid
                container
                direction="column"
                alignItems="center"
                justify="center"
              >
                <p>
                  Book a 30 minutes visio call with us on Calendly to introduce
                  your project.
                </p>

                <Grid container sx={{ textAlign: 'center' }}>
                  <Grid item xs={12} sm={12}>
                    <IconButton
                      size="large"
                      sx={{ border: '1px solid grey' }}
                      href="https://calendly.com/slashbin/meet"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <CalendarMonth />
                    </IconButton>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <h5>Calendly</h5>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <Grid className="container-section container-white">
        <Container>
          <Grid>
            <Grid item xs={12} md={12}>
              <Grid
                direction="column"
                alignItems="center"
                justify="center"
                sx={{ textAlign: 'center' }}
              >
                <h5>Contact US</h5>

                <Grid container>
                  <Grid item xs={12} sm={3}>
                    <Grid sx={{ textAlign: 'center', marginBottom: '3em' }}>
                      <Grid item xs={12} sm={12}>
                        <h5>Telegram</h5>
                      </Grid>
                      <Grid item xs={12} sm={12} sx={{ marginTop: '2em' }}>
                        <IconButton
                          size="large"
                          sx={{ border: '1px solid grey' }}
                          href="https://t.me/slashbin"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Telegram />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Grid sx={{ textAlign: 'center' }}>
                      <Grid item xs={12} sm={12}>
                        <h5>Whatsapp</h5>
                      </Grid>
                      <Grid item xs={12} sm={12} sx={{ marginTop: '2em' }}>
                        <IconButton
                          size="large"
                          sx={{ border: '1px solid grey' }}
                          href="whatsapp://send?abid=+33769526954"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <WhatsApp />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={3}>
                    <Grid sx={{ textAlign: 'center' }}>
                      <Grid item xs={12} sm={12}>
                        <h5>Calendly</h5>
                      </Grid>
                      <Grid item xs={12} sm={12} sx={{ marginTop: '2em' }}>
                        <IconButton
                          size="large"
                          sx={{ border: '1px solid grey' }}
                          href="https://calendly.com/slashbin/meet"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <CalendarMonth />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={3}>
                    <Grid sx={{ textAlign: 'center' }}>
                      <Grid item xs={12} sm={12}>
                        <h5>Twitter</h5>
                      </Grid>
                      <Grid item xs={12} sm={12} sx={{ marginTop: '2em' }}>
                        <IconButton
                          size="large"
                          sx={{ border: '1px solid grey' }}
                          href="https://www.twitter.com/slashbin_fr"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Twitter />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <Footer />
    </>
  )
}

export default Contact
