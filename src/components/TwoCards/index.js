import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { TwoNewsSection } from './TwoCards.styles'

import { CardStyle } from '../Cards/Card.styles'

const TwoCards = () => {
  return (
    <Container maxWidth='lg'>
      <TwoNewsSection container display='flex' spacing={2}>
        <Grid item sm={6} xs={12}>
          <Card variant='outlined'>
            <CardStyle sx={{ textAlign: 'center' }}>
              <Typography variant='h3' component='div'>
                Lorem Ipsum
              </Typography>
              <Typography mt={2}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </Typography>
            </CardStyle>
            <Box sx={{ width: '75%', mx: 'auto' }} my={3}>
              <Button fullWidth size='small' variant='contained'>
                Learn More
              </Button>
            </Box>
          </Card>
        </Grid>

        <Grid item sm={6} xs={12}>
          <Card variant='outlined'>
            <CardStyle sx={{ textAlign: 'center' }}>
              <Typography variant='h3' component='div'>
                Lorem Ipsum
              </Typography>
              <Typography mt={2}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </Typography>
            </CardStyle>
            <Box sx={{ width: '75%', mx: 'auto' }} my={3}>
              <Button fullWidth size='small' variant='contained'>
                Learn More
              </Button>
            </Box>
          </Card>
        </Grid>
      </TwoNewsSection>
    </Container>
  )
}

export default TwoCards
