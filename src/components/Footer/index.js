import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { FooterLinks, BottomText } from './Footer.styles'
import List from '@mui/material/List'

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: '#222',
          width: '100%',
          padding: 0,
          color: 'white',
        }}
      >
        <Container maxWidth='lg'>
          <Grid container>
            <FooterLinks xs={12} sm={6} display='flex'>
              <List>Link1</List>
              <List>Link2</List>
              <List>Link3</List>
            </FooterLinks>
            <FooterLinks xs={12} sm={6} display='flex'>
              <List>Link4</List>
              <List>Link5</List>
              <List>Link6</List>
            </FooterLinks>
          </Grid>
          <BottomText py={4} sx={{ textAlign: 'center' }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </BottomText>
        </Container>
      </Box>
    </>
  )
}

export default Footer
