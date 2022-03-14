import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { CardStyle } from '../Cards/Card.styles'

const News = () => {
  return (
    <Grid container spacing={2} my={5} display='flex'>
      <Grid item xs={12}>
        <Card variant='outlined'>
          <CardStyle sx={{ textAlign: 'center' }}>
            <Typography variant='h5' component='div'>
              Lorem Ipsum
            </Typography>
            <Typography mt={2}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Typography>
          </CardStyle>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card variant='outlined'>
          <CardStyle sx={{ textAlign: 'center' }}>
            <Typography variant='h5' component='div'>
              Lorem Ipsum
            </Typography>
            <Typography mt={2}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Typography>
          </CardStyle>
        </Card>
      </Grid>
    </Grid>
  )
}

export default News
