import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(6),
    },
  },

  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],

  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    fontSize: 34,
    padding: theme.spacing(14),
    
  },
  typography: {
    padding: theme.spacing(0),
  },
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    
  },
  buttonPosition:{
    marginLeft:22,
  },

  SignoutButtonPosition:{
    marginLeft:105,
  }
}));

export default function SimplePopover() {

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const bull = <span className={classes.bullet}>•</span>;

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
        <Avatar aria-describedby={id} variant="contained" color="primary" onClick={handleClick} alt="Remy Sharp" src="/broken-image.jpg" className={classes.orange}>
                B
        </Avatar>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography}> 
          <Card className={classes.card}>

            <CardContent>      
              <Divider />
                <Typography variant="h5" component="h2">
                  <div className={classes.root}>      
                  <Avatar className={classes.purple}>B</Avatar>
                  </div>
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  <Button href="#text-buttons" className={classes.buttonPosition}>Manage Your Google Account</Button>
                </Typography>
              <Divider />  
            </CardContent>
            
            <CardActions>
              <Button size="small" ><Button variant="contained" className={classes.SignoutButtonPosition}>SignOut</Button></Button>
            </CardActions>

          </Card>
        </Typography>
      </Popover>
    </div>
  );
}
