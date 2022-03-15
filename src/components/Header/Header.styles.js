import { styled } from '@mui/system'
import List from '@mui/material/List'
import Box from '@mui/material/Box'
import ListItem from '@mui/material/ListItem'
import { withTheme } from '@mui/styles'
import IconButton from '@mui/material/IconButton'
import Container from '@mui/material/Container'

export const BlackBox = styled(Container)({
  backgroundColor: '#000',
  height: '8px',
  width: '100%',
  padding: 0,
})

export const HeaderLink = withTheme(styled('a')`
  color: gray;
  cursor: pointer;
  text-decoration: none;
`)

export const ListItemAlign = withTheme(styled(ListItem)`
  width: unset;
  padding: 10px 20px;
  ${(props) => props.theme.breakpoints.down('md')} {
    border-bottom: 1px solid gray;
    padding: 23px 20px;
  }
`)

export const LogoHolder = withTheme(styled('div')`
  width: 220px;
  position: absolute;
  padding: 10px 0;
  font-size: 43px;
  background: #162840;
  height: 110px;
  top: 0;
  left: 0;
  ${(props) => props.theme.breakpoints.down('sm')} {
    width: 100%;
    font-size: 32px;
    position: absolute;
    font-size: 32px;
    text-align: center;
    background: unset;
    height: unset;
    top: unset;
    left: unset;
    padding: unset;
  }
`)

export const LogoText = withTheme(styled('div')`
  display: flex;
  justify-content: center;
  margin: 16px 0;
  color: white;
  ${(props) => props.theme.breakpoints.down('sm')} {
    margin: 0;
  }
`)

export const MainBox = withTheme(styled(Box)`
  background-color: white;
  ${(props) => props.theme.breakpoints.down('sm')} {
    background: #162840;
  }
`)

export const HeaderBar = withTheme(
  styled(List)`
    display: flex;
    flex-flow: row nowrap;
    background-color: white;
    ${(props) => props.theme.breakpoints.down('md')} {
      flex-flow: column nowrap;
      width: 100%;
      top: 0;
      right: 0;
      padding: 3rem 0;
      position: fixed;
      transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
      transition: transform 0.3s ease-in-out;
    }
  `
)

export const Nav = withTheme(styled('nav')`
  display: flex;
  justify-content: center;
  ${(props) => props.theme.breakpoints.down('sm')} {
    width: 100%;
  }
`)

export const StyledBurger = withTheme(styled(IconButton)`
  width: 2rem;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 2;
  display: none;
  ${(props) => props.theme.breakpoints.down('sm')} {
    display: flex;
  }
  &:hover {
    background-color: transparent;
  }
`)
