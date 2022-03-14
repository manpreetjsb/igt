import { styled } from '@mui/system'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { withTheme } from '@mui/styles'

/* export const FooterLinks = styled(Grid)({
  padding: '20px 10px',
  justifyContent: 'space-between',
}) */

export const FooterLinks = withTheme(styled(Grid)`
  justify-content: space-around;
  padding: 40px 0;
`)

export const BottomText = withTheme(styled(Typography)`
  text-align: left;
  ${(props) => props.theme.breakpoints.down('sm')} {
    text-align: center;
  }
`)
