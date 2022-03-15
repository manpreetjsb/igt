import { useState } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import {
  HeaderBar,
  ListItemAlign,
  Nav,
  StyledBurger,
  MainBox,
  LogoHolder,
  HeaderLink,
  BlackBox,
  LogoText,
} from './Header.styles'

const Header = (props) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <BlackBox maxWidth={false} />
      <MainBox>
        <Container maxWidth='lg'>
          <Container component='header' disableGutters>
            <Box zIndex='modal' position='relative' py={1}>
              <Grid
                container
                component='div'
                justifyContent={{ sm: 'end', xs: 'start' }}
              >
                <StyledBurger
                  disableRipple={false}
                  open={open}
                  size='large'
                  onClick={() => setOpen(!open)}
                >
                  <MenuIcon color='primary' />
                </StyledBurger>
                <LogoHolder>
                  <LogoText>LOGO</LogoText>
                </LogoHolder>
                <Nav>
                  <HeaderBar open={open}>
                    <ListItemAlign>
                      <Typography variant='h6' color='primary'>
                        <HeaderLink>Link 1</HeaderLink>
                      </Typography>
                    </ListItemAlign>
                    <ListItemAlign>
                      <Button variant='contained'>Link 2</Button>
                    </ListItemAlign>
                    <ListItemAlign>
                      {/* <Button variant='contained'>Theme 2</Button> */}
                      <FormControlLabel
                        control={
                          <Switch
                            checked={props.isDark}
                            onChange={props.onclick}
                          />
                        }
                        label='Theme'
                      />
                    </ListItemAlign>
                  </HeaderBar>
                </Nav>
              </Grid>
            </Box>
          </Container>
        </Container>
      </MainBox>
    </>
  )
}
export default Header
