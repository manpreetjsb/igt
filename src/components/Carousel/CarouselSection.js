import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Carousel from './Carousel'
import TopLinks from './TopLinks'
import News from './news'
import { NewsHolder } from './CaroiselSection.styles'

const CarouselSection = () => {
  return (
    <Box
      py={3}
      sx={{
        width: 1,
        background: '#00347a',
      }}
    >
      <Container maxWidth='lg'>
        <TopLinks />
        <Grid container direction={'row'} spacing={2}>
          <Grid item sm={8} xs={12}>
            <Carousel />
          </Grid>
          <Grid item sm={4} xs={12}>
            <NewsHolder>
              <News />
              <News />
            </NewsHolder>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default CarouselSection
