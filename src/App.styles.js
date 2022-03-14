import { styled } from '@mui/system'
import { withTheme } from '@mui/styles'

export const BgBlueColor = withTheme(styled('div')`
  background: none;
  ${(props) => props.theme.breakpoints.down('sm')} {
    background: #00347a;
  }
`)
