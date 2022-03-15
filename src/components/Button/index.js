import Container from '@mui/material/Container'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import Box from '@mui/material/Box'
import { ButtonStyle } from './Button.styles.js'

const OrderButton = () => {
  return (
    <Container maxWidth='lg'>
      <Box sx={{ textAlign: 'center' }} my={8}>
        <ButtonStyle
          variant='contained'
          size='small'
          endIcon={<ArrowForwardIosIcon />}
        >
          LOREN IPSUM
        </ButtonStyle>
      </Box>
    </Container>
  )
}
export default OrderButton
