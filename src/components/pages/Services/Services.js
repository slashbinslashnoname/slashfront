import React from 'react'
import { Container, Grid, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { ArrowOutward, Diversity3 } from '@mui/icons-material'
import Footer from '../../organisms/Footer'

function Services() {
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
                What we do
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Grid>

      <Grid className="container-section container-grey">
        <Grid container direction="column" alignItems="center" justify="center">
          <blockquote>
            <p>
              We see cryptocurrencies, P2P, Web3 and Bitcoin as a route to
              social, financial and political change.
            </p>
            <p>
              We are dedicated to building pseudonymous or anonymous
              decentralized systems while being committed to gain adoption.
            </p>
          </blockquote>
        </Grid>
      </Grid>
      <Grid className="container-section container-white container-border">
        <Container>
          <Grid container>
            <Grid item xs={12} md={12}>
              <Grid container sx={{ textAlign: 'center' }}>
                <Grid item xs={12} md={4}>
                  <Grid item xs={12} md={12}>
                    <img
                      src="/images/icons/physics.png"
                      width="64"
                      alt="Frontend dev"
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <h3>Frontend development</h3>
                    <p>
                      <strong>We do</strong> frontend development such as
                      applications, dashboards, websites.
                    </p>
                    <p>
                      <strong>We use</strong> frameworks like <em>React</em>,{' '}
                      <em>Vue</em>, <em>Gatsby</em>, <em>Next</em>...
                    </p>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Grid item xs={12} md={12}>
                    <img
                      src="/images/icons/programming.png"
                      width="64"
                      alt="Backend dev"
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <h3>Backend development</h3>
                    <p>
                      <strong>We do</strong> backend development such as API,
                      Microservices, Data parsing...
                    </p>
                    <p>
                      <strong>We use</strong> frameworks and languages like{' '}
                      <em>Express</em>, <em>Nestjs</em>, <em>Golang</em>,{' '}
                      <em>Nodejs</em>...
                    </p>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Grid item xs={12} md={12}>
                    <img
                      src="/images/icons/ux-interface.png"
                      width="64"
                      alt="UI and UX dev"
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <h3>Design & User Experience</h3>
                    <p>
                      <strong>We do</strong> webdesign and components design.
                    </p>
                    <p>
                      <strong>We use</strong> tools like <em>Figma</em>,{' '}
                      <em>Illustrator</em>, <em>Photoshop</em>, <em>Next</em>...
                    </p>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container sx={{ textAlign: 'center' }}>
                <Grid item xs={12} md={4}>
                  <Grid item xs={12} md={12}>
                    <img
                      src="/images/icons/laser-pen.png"
                      width="64"
                      alt="App Monitoring"
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <h3>App & Data Monitoring</h3>
                    <p>
                      <strong>We do</strong> app and data monitoring via
                      configurable alerts. You can monitor useful insights such
                      as Blockchain transactions, Smartcontracts triggers, and
                      more.
                    </p>
                    <p>
                      <strong>We use</strong> your node or available public
                      endpoints...
                    </p>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Grid item xs={12} md={12}>
                    <img
                      src="/images/icons/database-storage.png"
                      width="64"
                      alt="Database design"
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <h3>Database design</h3>
                    <p>
                      <strong>We do</strong> database design and database
                      management via Cloud providers or Baremetal servers.
                    </p>
                    <p>
                      <strong>We use</strong> databases like <em>SQL</em>,{' '}
                      <em>MongoDB</em>, <em>Redis</em>, <em>ElasticSearch</em>
                      ...
                    </p>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Grid item xs={12} md={12}>
                    <img
                      src="/images/icons/mobile-phone.png"
                      width="64"
                      alt="Mobile development"
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <h3>Mobile applications</h3>
                    <p>
                      <strong>We do</strong> mobile applications and mobile
                      projects for all usages.
                    </p>
                    <p>
                      <strong>We use</strong> frameworks like <em>Flutter</em>,{' '}
                      <em>React Native</em>...
                    </p>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container sx={{ textAlign: 'center' }}>
                <Grid item xs={12} md={4}>
                  <Grid item xs={12} md={12}>
                    <img
                      src="/images/icons/brainstorming.png"
                      width="64"
                      alt="Blockchain Consulting"
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <h3>Blockchain Consulting</h3>
                    <p>
                      <strong>We do</strong> blockchain consulting in order to
                      translate your business goals into technology roadmaps.
                    </p>
                    <p>
                      <strong>We use</strong> our knowledge and years of
                      experience ...
                    </p>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Grid item xs={12} md={12}>
                    <img
                      src="/images/icons/robot.png"
                      width="64"
                      alt="Bots development"
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <h3>Bots development</h3>
                    <p>
                      <strong>We do</strong> bots development so you can trigger
                      business actions based on events via blockchain parsing.
                    </p>
                    <p>
                      <strong>We use</strong> <em>balances</em>, <em>events</em>
                      , <em>transaction monitoring</em> ...
                    </p>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Grid item xs={12} md={12}>
                    <img
                      src="/images/icons/non-fungible-token.png"
                      width="64"
                      alt="Mobile development"
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <h3>Token & NFT Design</h3>
                    <p>
                      <strong>We do</strong> Token & NFT design in order to
                      bring your product to Blockchain.
                    </p>
                    <p>
                      <strong>We use</strong> tools like <em>Hardhat</em>,{' '}
                      <em>Solidity</em>, <em>Liquid</em>, <em>Counterparty</em>,{' '}
                      <em>ERC20</em>, <em>ERC721</em>...
                    </p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <Grid className="container-section container-grey">
        <Grid container>
          <Grid item xs={12} md={6}>
            <Grid
              container
              direction="column"
              alignItems="center"
              justify="center"
            >
              <Link to="/process">
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<Diversity3 />}
                >
                  See our Process
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
      </Grid>
      <Footer />
    </>
  )
}

export default Services
