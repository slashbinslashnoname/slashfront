import React from 'react'
import {
  Container,
  Grid,
  Typography,
  Divider,
  Button,
  Chip,
  Stack,
  Paper,
} from '@mui/material'
import {
  ArrowOutward,
  AutoStories,
  GitHub,
  Twitter,
  Home,
} from '@mui/icons-material'
import { Link } from 'react-router-dom'

const nb = 2

function Item({ item }) {
  return (
    <Grid item xs={12} md={6} p={3}>
      <Paper elevation={2} style={{ height: '100%' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <Typography variant="h4" component="h4">
              {item.pseudonym}
            </Typography>
            <Typography variant="subtitle2" component="p">
              {item.name}
            </Typography>
          </Grid>

          <Grid item xs={12} md={3}>
            <img src={item.photo} alt={item.name} width="100%" />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <Grid container>
              <Grid item xs={12} md={12}>
                <Typography variant="h5" component="h5">
                  Skills
                </Typography>
              </Grid>
              <Grid item xs={12} md={12}>
                {item.skills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    color="secondary"
                    size="small"
                    sx={{ m: 0.5 }}
                  />
                ))}
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={7}>
            <Grid container direction="column">
              <Grid item xs={12} md={12}>
                <Typography variant="h5" component="h5">
                  Description
                </Typography>
              </Grid>
              <Grid item xs={12} md={12}>
                <Typography
                  variant="body1"
                  component="p"
                  dangerouslySetInnerHTML={{
                    __html: item.description,
                  }}
                />
              </Grid>
            </Grid>
            <Grid container direction="column">
              <Grid item xs={12} md={12}>
                <Stack direction="row" spacing={2}>
                  {item.github && item.github !== '' && (
                    <a
                      href={item.github}
                      target="_blank"
                      label={`${item.pseudonym} Github`}
                      rel="noreferrer"
                    >
                      <GitHub sx={{ color: 'black' }} />
                    </a>
                  )}
                  {item.twitter && item.twitter !== '' && (
                    <a
                      href={item.twitter}
                      target="_blank"
                      label={`${item.pseudonym} twitter`}
                      rel="noreferrer"
                    >
                      <Twitter sx={{ color: 'black' }} />
                    </a>
                  )}
                  {item.url && item.url !== '' && (
                    <a
                      href={item.url}
                      target="_blank"
                      label={`${item.pseudonym} URL`}
                      rel="noreferrer"
                    >
                      <Home sx={{ color: 'black' }} />
                    </a>
                  )}
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

function Items({ items }) {
  return (
    <Grid container>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Grid>
  )
}

function Freelancers() {
  const items = [
    {
      id: 3,
      name: 'Stéphane',
      pseudonym: 'JanakaSteph',
      description:
        'Experienced front-end developer. In-depth knowledge of blockchain technology, primarily Bitcoin and Liquid sidechain, but also Ethereum and Monero.',
      skills: [
        'Bitcoin, Monero, Ethereum',
        'React',
        'React-Native',
        'Next.js',
        'Flutter',
        'Ionic',
        'Figma',
        'Sketch',
        'Serverless',
      ],
      twitter: 'https://twitter.com/janakaSteph',
      github: 'https://github.com/Janaka-Steph',
      url: 'https://www.bitcoin-studio.com/',
      photo: '/images/photos/janakasteph.png',
    },
    {
      id: 1,
      name: 'Romain',
      pseudonym: 'Slashbin',
      description:
        'Founder & Builder of this guild of freelancers. Bitcoiner since always. Miner. Develop mining pools. Build front and backend. Loves frontend.',
      skills: [
        'Bitcoin Ecosystem',
        'Ethereum Ecosystem & EVM',
        'PoW, PoS',
        'React',
        'APIs',
        'MongoDB',
        'Redis',
        'Realtime',
        'Bots',
        'Docker',
        'Solidity',
      ],
      photo: '/images/photos/slash.png',
      twitter: 'https://twitter.com/slashbin',
      github: 'https://github.com/slashbinslashnoname',
      url: 'https://slashbin.xyz',
    },
    {
      id: 5,
      name: 'Pierre-Alexis',
      pseudonym: 'PAB',
      description:
        'Web developer. Experienced in building well-designed and intuitive web applications from frontend to backend.',
      skills: [
        'Javascript / Typescript',
        'Node.js',
        'React',
        'Redux',
        'Next.js',
        'Gatsby',
        'Express',
        'NestJS',
        'Python',
        'Docker',
      ],
      twitter: 'https://twitter.com/PABlond_',
      github: 'https://github.com/PABlond',
      url: 'https://github.com/PABlond',
      photo: '/images/photos/nakamoto.png',
    },
    {
      id: 6,
      name: 'Dolu',
      pseudonym: 'Dolu',
      description:
        'Fullstack developer with a strong backend experience since 10 years. Bitcoin/LN apps developer since 2018',
      skills: [
        'Bitcoin, Lightning Network',
        'Node.js',
        'C#',
        'React',
        'Vue',
        'Angular',
      ],
      twitter: 'https://twitter.com/dolu_web',
      github: 'http://github.com/dolu89',
      photo: '/images/photos/nakamoto.png',
    },
  ]

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
                Our freelancers
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Grid>

      <Container className="container-body">
        <Grid container>
          {
            // 3 by 3 with Reduce
            items
              .reduce(
                (r, e, i) =>
                  (i % nb ? r[r.length - 1].push(e) : r.push([e])) && r,
                []
              )
              .map((i, itemLite) => (
                <Items key={i} items={itemLite} />
              ))
          }
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
              <Link to="/culture">
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<AutoStories />}
                >
                  See our culture
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
  )
}

export default Freelancers
