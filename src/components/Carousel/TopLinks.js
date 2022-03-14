import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Grid from '@mui/material/Grid'

const TopLinks = () => {
  return (
    <Grid container display='flex'>
      <Grid item xs={6}></Grid>
      <Grid item xs={6}>
        <List
          sx={{
            width: '100%',
            maxWidth: 360,
            maxHeight: 300,
            textAlign: 'right',
          }}
        >
          <ListItem>
            <ListItemText>Link 1</ListItemText>
            <ListItemText>Link 2</ListItemText>
            <ListItemText>Link 3</ListItemText>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  )
}

export default TopLinks
