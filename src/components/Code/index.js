import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

const CodeSection = () => {
  return (
    <Box
      sx={{
        width: 1,
        borderBottom: '10px #01bbd9 solid',
        backgroundColor: '#166ba7',
      }}
    >
      <Container maxWidth='lg'>
        <Typography
          py={5}
          sx={{
            color: '#fff',
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s when an unknown printer.
        </Typography>
      </Container>
    </Box>
  )
}

export default CodeSection
