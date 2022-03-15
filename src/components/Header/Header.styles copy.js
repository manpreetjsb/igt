import { styled } from '@mui/system'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { withTheme } from '@mui/styles'

/* export const MenuHolder = styled('div')({
  display: { xs: 'none', sm: 'block' },
}) */

export const MenuHolder = withTheme(styled('div')`
  ${(props) => props.theme.breakpoints.down('md')} {
    //display: none;
    border: blue 10px solid;
  }
`)

export const BlackBox = styled(Container)({
  backgroundColor: '#000',
  height: '8px',
  width: '100%',
  padding: 0,
})

export const MenuGrid = styled(Grid)({
  //display: { xs: 'none', sm: 'flex' },
  display: 'flex',
  background: 'red',
  flexFlow: 'row nowrap',
  alignItems: 'center',
})
