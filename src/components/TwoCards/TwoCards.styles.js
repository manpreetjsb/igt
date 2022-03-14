import { styled } from '@mui/system'
import Grid from '@mui/material/Grid'

import { withTheme } from '@mui/styles'

export const TwoNewsSection = withTheme(styled(Grid)`
  padding: 40px 0;
  ${(props) => props.theme.breakpoints.down('sm')} {
    padding: 5px 0;
  }
`)
