import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import { CardStyle } from './Card.styles'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'

const Cards = () => {
  const arr = [1, 2, 3, 4]
  return (
    <Container maxWidth='lg'>
      <Box mb={3}>
        <Typography component='h4' variant='h4'>
          Lorem Ipsum Lorem Ipsum
        </Typography>
      </Box>
      <Grid container display='flex' spacing={2}>
        <Stack spacing={1} my={5}>
          <Card variant='outlined' my={4}>
            <Skeleton variant='text' />
            <Skeleton variant='text' />
            <Skeleton variant='rectangular' width={210} height={194} />
            <Skeleton variant='rectangular' width={210} height={28} />
          </Card>
        </Stack>
        {arr.map((item) => (
          <Grid item sm={3} xs={12} key={item}>
            <Card variant='outlined'>
              <CardStyle sx={{ textAlign: 'center' }}>
                <Typography variant='h5' component='div'>
                  Lorem Ipsum
                </Typography>
                <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                  Example Text
                </Typography>
                <CardMedia
                  component='img'
                  height='194'
                  image='https://mui.com/static/images/cards/paella.jpg'
                  alt='Paella dish'
                />
              </CardStyle>
              <CardStyle>
                <Button fullWidth size='small' variant='contained' mt={2}>
                  Learn More
                </Button>
              </CardStyle>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Cards
