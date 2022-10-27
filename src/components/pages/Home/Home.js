import React, { useCallback } from 'react';
import {
  Container, Grid, Button, Typography,
} from '@mui/material';

import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

import { ArrowOutward, Memory } from '@mui/icons-material';

import { Link } from 'react-router-dom';

const ReactRotatingText = require('react-rotating-text');

function Home({ media }) {
  require('pathseg');

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {
  /* added code start */

  }, []);

  return (
    <>
      {!media.md && (
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{

          fullScreen: {
            enable: false,
          },
          detectRetina: false,
          fpsLimit: 24,
          interactivity: {
            detectsOn: 'window',
            events: {
              onhover: {
                enable: true,
                mode: 'grab',
                parallax: {
                  enable: false,
                  force: 6,
                  smooth: 6,
                },
              },
              resize: false,
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            links: {
              color: {
                value: '#ffffff',
              },
              distance: 70,
              enable: true,
              opacity: 0.4,
            },
            move: {
              noise: {
                enable: false,
              },
              attract: {
                rotate: {
                  x: 150,
                  y: 350,
                },
              },
              enable: true,
              path: {},
              outModes: {
                default: 'split',
                bottom: 'split',
                left: 'split',
                right: 'split',
                top: 'split',
              },
              speed: 0.3,
              spin: {},
            },
            number: {
              density: {
                area: 200,
              },
              value: 200,
            },
            opacity: {
              value: {
                min: 0.05,
                max: 0.4,
              },
              animation: {
                enable: false,
                minimumValue: 0.05,
              },
            },
            size: {
              random: {
                enable: true,
              },
              value: 1,
              animation: {
                speed: 10,
                minimumValue: 0.1,
              },
            },
          },

          polygon: {
            draw: {
              enable: true,
              strokeWidth: 1,
            },
            enable: true,
            inline: {
              arrangement: 'equidistant',
            },
            move: {
              radius: 3,
              type: 'path',
            },
            scale: 0.4,
            type: 'inline',
            url: '/images/logo.svg',
          },

        }}
      />
      )}

      <Grid className="container container-head container-home" sx={{ background: 'none' }}>

        <Container>
          <Grid container>
            <Grid container>
              <Grid item xs={12} md={12}>
                <h1>
                  We have
                  {' '}
                  <ReactRotatingText items={['Bitcoin', 'Ethereum', 'Dev', 'Nodes', 'Consensus', 'Smartcontracts']} />
                  {' '}
                  <br />
                  Experiences.
                </h1>
              </Grid>

              <Grid item xs={12} md={12} sx={{ position: 'absolute', bottom: 250 }}>
                <Typography variant="h6" sx={{ fontWeight: '600' }}>
                  Slashbin.xyz is a decentralized autonomous guild of freelancers and OGs
                  developpers.
                </Typography>

                <Typography variant="h4" sx={{ fontWeight: '600' }}>
                  We build your project from A to Z for Bitcoin and Crypto projects.
                </Typography>

              </Grid>

            </Grid>

          </Grid>

        </Container>
        <Grid
          container
          direction={media.sm ? 'column' : 'row'}
          alignItems={media.sm ? 'center' : undefined}
          justify={media.sm ? 'center' : undefined}
          sx={{ position: 'absolute', bottom: 50 }}
        >
          <Container>
            <Grid container>

              <Grid item xs={12} md={3} sx={media.md && { marginBottom: '2em' }}>
                <Link to="/process">
                  <Button
                    variant="contained"
                    size="large"
                    color="secondary"
                    startIcon={<Memory />}
                  >
                    See our process
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={12} md={3}>
                <Link to="/contact">
                  <Button
                    variant="outlined"
                    size="large"
                    color="secondary"
                    sx={{ color: 'white', borderColor: 'white' }}
                    style={{ marginLeft: '20px' }}
                    endIcon={<ArrowOutward />}
                  >
                    Contact Us
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
