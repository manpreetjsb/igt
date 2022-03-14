import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import CarouselComponent from './Carousel'
import News from './news'

const CarouselSection = () => {
  return (
    <Box sx={{ width: 1 }} my={5}>
      <Container maxWidth='lg'>
        <Grid container spacing={2}>
          <Grid item sm={8} xs={12}>
            <CarouselComponent />
          </Grid>
          <Grid item sm={4} xs={12}>
            <News />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default CarouselSection
