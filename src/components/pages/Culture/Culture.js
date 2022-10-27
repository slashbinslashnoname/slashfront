import React from 'react';
import {
  Container, Grid, Typography, Divider, Button, Paper,
} from '@mui/material';
import { Link } from 'react-router-dom';

import { ArrowOutward, Diversity3 } from '@mui/icons-material';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';

function Culture() {
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
                Our culture
              </Typography>
            </Grid>
          </Grid>

        </Container>
      </Grid>

      <Container className="container-body">

        <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Typography variant="body1" component="p">
            We see cryptocurrencies, P2P, Web3 and Bitcoin as
            a route to social, financial and political change.
          </Typography>
          <Typography variant="body1" component="p">
            We are dedicated to building pseudonymous or
            anonymous decentralized systems while also being committed
            to gain adoption via centralized services.
          </Typography>
          <br />
        </Grid>

        <Grid container>
          <Grid item xs={12} md={12}>
            <Paper elevation={2}>
              <Grid
                container
                direction="column"
                alignItems="center"
                justify="center"
              >
                <Grid item xs={12} md={12}>
                  <Typography variant="h3" component="h3">
                    Our routine
                  </Typography>
                </Grid>
              </Grid>
              <Timeline position="alternate">
                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                  >
                    9:30 am
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot>
                      <FastfoodIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                      Eat
                    </Typography>
                    <Typography>Because we need a functionnal brain</Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                  >
                    10:00 am
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                      <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                      Code
                    </Typography>
                    <Typography>Because it is what we are</Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                  >
                    23:00 pm
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary" variant="outlined">
                      <HotelIcon />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                      Sleep
                    </Typography>
                    <Typography>Because we need some rest * </Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                    <TimelineDot color="secondary">
                      <RepeatIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                      Repeat
                    </Typography>
                    <Typography>Because this is how we try to build a better future !</Typography>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
              <Typography variant="caption" display="block" gutterBottom>
                * routine not contractual
              </Typography>
            </Paper>

          </Grid>
        </Grid>

        <Divider />
        <Grid container>
          <Grid item xs={12} md={6}>
            <Grid
              container
              direction="column"
              alignItems="center"
              justify="center"
            >
              <Link to="/freelancers">
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<Diversity3 />}
                >
                  See our freelancers
                </Button>
              </Link>

            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid
              container
              direction="column"
              alignItems="center"
              justify="center"
            >
              <Link to="/contact">
                <Button
                  variant="outlined"
                  size="large"
                  style={{ marginLeft: '20px' }}
                  endIcon={<ArrowOutward />}
                >
                  Contact Us
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>

      </Container>
    </>
  );
}

export default Culture;
