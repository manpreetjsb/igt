import { styled } from '@mui/system'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

export const MainContainer = styled(Container)({
  backgroundColor: '#00347a',
  color: 'white',
  //height: '55px',
  position: 'relative',
  margin: 0,
  padding: '15px 0',
})

export const NewsHolder = styled('div')({
  background: 'white',
  height: '350px',
  borderRadius: '10px',
})

export const LinkWrapper = styled(Typography)`
  ul {
    list-style-type: none;
    float: right;
  }

  li a {
    display: block;
    color: white;
    text-align: center;
    text-decoration: none;
    &:after {
      content: '.';
      padding: 0 4px;
    }
  }
  li {
    float: left;
    &:last-child a {
      &:after {
        content: '';
      }
    }
  }
`
