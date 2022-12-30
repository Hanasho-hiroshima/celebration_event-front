import { formatNumber } from '@packs/utils'
import type { NextPage } from 'next'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Header } from '~/components/Header/Header'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Box
          sx={{
            my: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            {formatNumber(10000000, '￥')}
          </Typography>
        </Box>
      </Container>
    </>
  )
}

export default Home
