import React from 'react';
import {
  Container, Grid, Typography, Paper, IconButton,
} from '@mui/material';
import {
  CalendarMonth, Telegram, Twitter, WhatsApp,
} from '@mui/icons-material';

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

      <Container className="container-body">

        <Grid container>
          <Grid item xs={12} md={12}>
            <Paper elevation={2}>
              <Grid
                container
                direction="column"
                alignItems="center"
                justify="center"
              >
                <Typography variant="h3" component="h3">
                  Book a visio call
                </Typography>

                <Typography variant="body1" component="body1">
                  Book a 30 minutes visio call with us to introduce your project.
                </Typography>

                <Grid container sx={{ textAlign: 'center' }}>
                  <Grid item xs={12} sm={3}>

                    <Grid container sx={{ textAlign: 'center' }}>
                      <Grid item xs={12} sm={12}>
                        <Typography variant="h5" component="h5">
                          Telegram
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={12} sx={{ marginTop: '2em' }}>
                        <IconButton size="large" sx={{ border: '1px solid grey' }} href="https://t.me/slashbin" target="_blank" rel="noreferrer">
                          <Telegram />
                        </IconButton>
                      </Grid>
                    </Grid>

                  </Grid>
                  <Grid item xs={12} sm={3}>

                    <Grid container sx={{ textAlign: 'center' }}>
                      <Grid item xs={12} sm={12}>
                        <Typography variant="h5" component="h5">
                          Whatsapp
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={12} sx={{ marginTop: '2em' }}>
                        <IconButton size="large" sx={{ border: '1px solid grey' }} href="whatsapp://send?abid=+33769526954" target="_blank" rel="noreferrer">
                          <WhatsApp />
                        </IconButton>
                      </Grid>
                    </Grid>

                  </Grid>

                  <Grid item xs={12} sm={3}>

                    <Grid container sx={{ textAlign: 'center' }}>
                      <Grid item xs={12} sm={12}>
                        <Typography variant="h5" component="h5">
                          Calendly
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={12} sx={{ marginTop: '2em' }}>
                        <IconButton size="large" sx={{ border: '1px solid grey' }} href="https://calendly.com/slashbin/meet" target="_blank" rel="noreferrer">
                          <CalendarMonth />
                        </IconButton>
                      </Grid>
                    </Grid>

                  </Grid>

                  <Grid item xs={12} sm={3}>

                    <Grid container sx={{ textAlign: 'center' }}>
                      <Grid item xs={12} sm={12}>
                        <Typography variant="h5" component="h5">
                          Twitter
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={12} sx={{ marginTop: '2em' }}>
                        <IconButton size="large" sx={{ border: '1px solid grey' }} href="https://www.twitter.com/slashbin_fr" target="_blank" rel="noreferrer">
                          <Twitter />
                        </IconButton>
                      </Grid>
                    </Grid>

                  </Grid>

                </Grid>
                <br />

                <br />
                <br />
              </Grid>
            </Paper>

          </Grid>
        </Grid>

      </Container>
    </>
  );
}

export default Contact;
