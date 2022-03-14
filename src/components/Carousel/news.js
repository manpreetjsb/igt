import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { CardStyle } from '../Cards/Card.styles'

const News = () => {
  return (
    <Box mx={2} pt={2}>
      <Card variant='outlined'>
        <CardStyle sx={{ textAlign: 'center' }}>
          <Typography variant='h5' component='div'>
            Lorem Ipsum
          </Typography>
          <Typography mt={2}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. simply dummy text of the printing.
          </Typography>
        </CardStyle>
      </Card>
    </Box>
  )
}

export default News
