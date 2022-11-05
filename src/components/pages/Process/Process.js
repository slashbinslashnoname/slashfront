import React from 'react'
import { Container, Grid, Typography, Button } from '@mui/material'

import {
  ArrowOutward,
  Diversity3,
  Architecture,
  VideoCameraFront,
  AccessibilityNew,
  NoteAdd,
  Code,
  AttachMoney,
} from '@mui/icons-material'
import Footer from '../../organisms/Footer'

import { Link } from 'react-router-dom'

import RepeatIcon from '@mui/icons-material/Repeat'
import RequestQuote from '@mui/icons-material/RequestQuote'
import {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineConnector,
  TimelineDot,
  TimelineSeparator,
} from '@mui/lab'

import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent'

function Process() {
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
                Our process
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <Grid className=" container-section container-grey">
        <Container>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Grid item xs={12} md={12}>
              <blockquote>
                <p>
                  Size doesn&apos;t matter ! We accept very small projects as
                  well as large projects.
                </p>
                <p>
                  We accompany you to build your Bitcoin or Web3 project from
                  the birth of your idea to its realization through a
                  feasibility study and a feasible roadmap through our process.
                </p>
              </blockquote>
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <Grid className="container-section container-white container-border">
        <Container maxWidth="md">
          <Grid container>
            <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
              <p>
                Our process is very agile. We work in sprints of 2 weeks.
                <br />
                The job is done quickly through these steps.
                <br />
              </p>
            </Grid>
            <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
              <h3>Our process</h3>
            </Grid>

            <Grid item xs={12} md={12}>
              <Timeline
                sx={{
                  [`& .${timelineOppositeContentClasses.root}`]: {
                    flex: 0.2,
                  },
                }}
              >
                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                  >
                    Step 1
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                      <VideoCameraFront />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                      Visio Call
                    </Typography>
                    <Typography>
                      Visual meeting, introduction about your project,
                      explanations about how we work
                      <br />
                      <Link to="/contact">
                        Contact us to introduce your project
                      </Link>
                    </Typography>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                  >
                    Step 2
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot>
                      <AccessibilityNew />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                      Skills Repartition
                    </Typography>
                    <Typography>
                      We create a channel inside our private freelancers space
                      to concentrate all the useful informations about your
                      project.
                    </Typography>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                  >
                    Step 3
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot>
                      <AccessibilityNew />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                      Communication with the team
                    </Typography>
                    <Typography>
                      We create a channel for you and our freelancers to
                      communicate freely without barriers.
                      <br />
                      <Link to="/freelancers">See the team of freelancers</Link>
                    </Typography>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                  >
                    Step 4
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary" variant="outlined">
                      <Architecture />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                      Project Architecture
                    </Typography>
                    <Typography>
                      We design your global project architecture
                    </Typography>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                  >
                    Step 5
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary" variant="outlined">
                      <NoteAdd />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                      Sprint design
                    </Typography>
                    <Typography>
                      Freelancers build tickets to work on. They choose the
                      priority. You choose which are assigned for the next
                      sprint in accordance with the global roadmap.
                    </Typography>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                  >
                    Step 6
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="orange" variant="outlined">
                      <RequestQuote color="orange" />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                      Quotes
                    </Typography>
                    <Typography>
                      Freelancers sends you their quotes. You are free to choose
                      them.
                    </Typography>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                  >
                    Step 7
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                      <Code />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                      Development
                    </Typography>
                    <Typography>
                      Freelancers code and delivers until the sprint is
                      finished.
                    </Typography>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                  >
                    Step 8
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="orange" variant="outlined">
                      <AttachMoney />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                      Invoices
                    </Typography>
                    <Typography>
                      Freelancers sends you their invoices.
                    </Typography>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                  />
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="secondary">
                      <RepeatIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                      Repeat to step 5
                    </Typography>
                    <Typography>
                      Until the project is over or you don&apos;t need our
                      services anymore. Because this is how we try to build a
                      better future !
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <Grid className="container-section container-grey">
        <Container maxWidth="lg">
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
                    See our Freelancers
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
      </Grid>
      <Footer />
    </>
  )
}

export default Process
