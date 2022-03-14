import { useState } from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { BlackBox, MenuGrid, MenuHolder } from './Header.styles'
import Hidden from '@mui/material/Hidden'
import MenuIcon from '@mui/icons-material/Menu'

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <BlackBox maxWidth={false} />

      <Container maxWidth='lg'>
        <Box
          component='span'
          sx={{
            position: 'absolute',
            //top: '32px',
            top: { sm: '32px' },
            left: { xs: '50%' },
            zIndex: 2,
            fontSize: '30px',
            textAlign: 'center',
          }}
        >
          LOGO
        </Box>
        <Grid
          container
          disableGutters={true}
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          my={2}
          open={open}
        >
          <Grid item>
            <Hidden smUp>
              <Button
                open={open}
                onClick={() => setOpen(!open)}
                startIcon={<MenuIcon />}
              >
                Menu
              </Button>
            </Hidden>
          </Grid>
          <MenuHolder>
            <MenuGrid item alignContent='center'>
              <Typography variant='span' color='primary'>
                Link 1
              </Typography>
              <Typography ml={2}>
                <Button variant='contained'>Theme 1</Button>
              </Typography>
              <Typography ml={2}>
                <Button variant='contained'>Theme 2</Button>
              </Typography>
            </MenuGrid>
          </MenuHolder>
        </Grid>
      </Container>
    </>
  )
}
export default Header
