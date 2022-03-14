import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: '#222',
          width: '100%',
          padding: 0,
        }}
      >
        <Box sx={{ width: 1, color: 'white' }}>
          <Container maxWidth='lg' mx={5}>
            <Grid
              pt={4}
              spacing={2}
              md={12}
              justifyContent='space-between'
              alignItems='center'
              display={{ xs: 'block', sm: 'flex' }}
            >
              <Grid item container sm={6} xs={12} my={4}>
                <Grid xs={4}>Link1</Grid>
                <Grid xs={4}>Link2</Grid>
                <Grid xs={4}>Link3</Grid>
              </Grid>
              <Grid item container sm={6} xs={12}>
                <Grid xs={4}>Link4</Grid>
                <Grid xs={4}>Link5</Grid>
                <Grid xs={4}>Link6</Grid>
              </Grid>
            </Grid>
            <Typography py={4}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default Footer
