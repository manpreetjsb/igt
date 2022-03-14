import Hidden from '@mui/material/Hidden'
import Box from '@mui/material/Box'
import { LinkWrapper } from './CaroiselSection.styles'

const TopLinks = () => {
  return (
    <>
      <Hidden smDown>
        <Box component='div'>
          <LinkWrapper
            component='nav'
            variant='body2'
            noWrap
            aria-label='nav'
            data-testid='menu2'
          >
            <ul>
              <li role='listitem'>
                <a href='#'> Link 1</a>
              </li>
              <li role='listitem'>
                <a href='#'> Link 2</a>
              </li>
              <li role='listitem'>
                <a href='#'>Link 3</a>
              </li>
            </ul>
          </LinkWrapper>
        </Box>
      </Hidden>
    </>
  )
}

export default TopLinks
