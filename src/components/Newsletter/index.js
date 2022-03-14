import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Hidden from '@mui/material/Hidden'

const Newsletter = () => {
  return (
    <Box
      my={5}
      sx={{
        width: 1,
        borderTop: '2px #e5e5e5 solid',
      }}
    >
      <Container maxWidth='lg'>
        <Grid
          container
          direction='row'
          justifyContent='space-around'
          alignItems='center'
          spacing={2}
          mt={3}
        >
          <Grid item sm={3} xs={12}>
            <Typography>Please enter your Email</Typography>
          </Grid>
          <Grid
            item
            container
            sm={9}
            xs={12}
            spacing={2}
            sx={{ flexWrap: 'nowrap' }}
            alignItems='center'
          >
            <Grid item sm={4}>
              <Hidden smDown>
                <TextField
                  fullWidth
                  size='small'
                  variant='outlined'
                  id='name'
                  label='Name'
                ></TextField>
              </Hidden>
            </Grid>
            <Grid item sm={4} xs={8}>
              <TextField
                fullWidth
                size='small'
                variant='outlined'
                id='Email'
                label='Email'
              />
            </Grid>
            <Grid item sm={4} xs={4}>
              <Button size='small' variant='contained'>
                Register
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
export default Newsletter
