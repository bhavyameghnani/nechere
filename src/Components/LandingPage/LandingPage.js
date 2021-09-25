import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import FaceIcon from '@material-ui/icons/Face';
import Paper from '@material-ui/core/Paper';
import toast from 'react-hot-toast';



const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  search: {
    margin: theme.spacing(1),
    width: 600,
  },
  leaderBoard: {
    width: '100%',
    height: '400px',
    overflowY: 'auto',
    overflowX: 'hidden',
    borderStyle: 'solid',
    borderColor: '#FDCB6B',
    borderRadius: '10px',
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  },
  leaderBoardParent: {

  },
  chart: {
    height: 10
  },
  divHeading: {
    color: '#593B90'
  },
  icon: {
    marginRight: theme.spacing(2),
    width: '100%',
    height: '100%',
    padding: '5%'
  },
}));


const mainFeaturedPost = {
  title: 'Lords Eye',
  description:
    "Alerts users about unsafe zone, hazardous or accident prone zones while traveling",
    image: "http://cdn.cnn.com/cnnnext/dam/assets/140630122719-tunnels-shanghai.jpg",
  
  imgText: 'main image description',
  linkText: 'Continue reading…'
};

const leaderBoard = [
  {
    name: 'Parmar Anand',
    // team: 'RDCA Team',
    award: 'Star of the Month',
    imageObj: 'https://image.flaticon.com/icons/png/128/4470/4470317.png'
  },
  {
    name: 'Rinku Singh',
    // team: 'BankOfTest Team',
    award: 'Star of the Month',
    imageObj: 'https://image.flaticon.com/icons/png/128/4086/4086600.png'
  },
  {
    name: 'Slesha Shinde',
    // team: 'Analysis Team',
    award: 'Star of the Month',
    imageObj: 'https://image.flaticon.com/icons/png/128/4086/4086600.png'
  },
  {
    name: 'Ramesh Koshti',
    // team: 'CCP Team',
    award: 'Star of the Month',
    imageObj: 'https://image.flaticon.com/icons/png/128/4470/4470317.png'
  },
  {
    name: 'Rani Pardesi',
    // team: 'Innovations Team',
    award: 'Maximum Efforts',
    imageObj: 'https://image.flaticon.com/icons/png/128/4086/4086600.png'
  },
  {
    name: 'Jitesh Verma',
    // team: 'HR and Ops Team',
    award: 'Maximum Efforts',
    imageObj: 'https://image.flaticon.com/icons/png/128/4470/4470317.png'
  },
  {
    name: 'Sameer Desai',
    // team: 'Accounting Team',
    award: 'Out of Box Thinker',
    imageObj: 'https://image.flaticon.com/icons/png/128/4470/4470317.png'
  },
  {
    name: 'Sakshi shetty',
    // team: 'Support and Ops Team',
    award: 'SuperHuman Award',
    imageObj: 'https://image.flaticon.com/icons/png/128/4086/4086600.png'
  }


]

const leaderBoardPts = [

  {
    name: 'Alice Dsouza',
    position: 'Mumbai',
    award: '1610pts',
    imageObj: 'https://image.flaticon.com/icons/png/128/3135/3135789.png'
  },
  {
    name: 'Sagar Shah',
    position: 'Mumbai',
    award: '1580pts',
    imageObj: 'https://image.flaticon.com/icons/png/128/3135/3135715.png'
  },
  {
    name: 'Preet Singh',
    position: 'Delhi',
    award: '1560pts',
    imageObj: 'https://image.flaticon.com/icons/png/128/3135/3135715.png'
  },
  {
    name: 'Ankita Rao',
    position: 'Banglore',
    award: '1540pts',
    imageObj: 'https://image.flaticon.com/icons/png/128/3135/3135789.png'
  },
  
  {
    name: 'Ana Dcosta',
    position: 'Mumbai',
    award: '1432pts',
    imageObj: 'https://image.flaticon.com/icons/png/128/3135/3135789.png'
  },
  {
    name: 'Krish Mehta',
    position: 'Delhi',
    award: '1754pts',
    imageObj: 'https://image.flaticon.com/icons/png/128/3135/3135715.png'
  },
  {
    name: 'Gayatri Deshpande',
    position: 'Mumbai',
    award: '1150ts',
    imageObj: 'https://image.flaticon.com/icons/png/128/3135/3135789.png'
  },
  {
    name: 'Lavish Punjabi',
    position: 'Mumbai',
    award: '1150pts',
    imageObj: 'https://image.flaticon.com/icons/png/128/3135/3135715.png'
  },
  {
    name: 'Imam Saad',
    position: 'Mumbai',
    award: '1100pts',
    imageObj: 'https://image.flaticon.com/icons/png/128/3135/3135715.png'
  },
  {
    name: 'Bethany Rico',
    position: 'Mumbai',
    award: '1000pts',
    imageObj: 'https://image.flaticon.com/icons/png/128/3135/3135789.png'
  },
]

const dashboardStats = [
  {
    title: 'Route Optimization',
    icon: "https://cdn-images-1.medium.com/max/1024/1*sfF96lwYc5dqZ30BoYoIRA.jpeg",
  },
  {
    title: 'Dynamic Geo-fence',
    value: '1',
    icon: "https://www.scnsoft.com/blog-pictures/internet-of-things/geofencing-techology.png",
  },
  {
    title: 'Tracking Zone Status',
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXARpElGkibfpABry4DIyc2X8VEhrAqq309ljVTJy_VayRCAo&s",
  },
  {
    title: 'Giving Back to Community',
    icon: "https://images.squarespace-cdn.com/content/v1/59b48942f43b5595ace66213/1554045193188-9Y61I049ST2C9N4U4Q3Z/1393618100758871.png",
  }
];

export default function Home() {
  const classes = useStyles();

  React.useEffect(() => {

    notifyWelcome();
  }, []);


  const notifyWelcome = () => {
    console.log("here")
    toast.success("Desk Buddy welcomes you !");

  };

  return (
    <React.Fragment>
      <CssBaseline />

      <header className="App-header">

        <Container maxWidth="lg">
          <Header title=" Lord's Eye" />
          <main>
            <MainFeaturedPost post={mainFeaturedPost} />
            <Container className={classes.cardGrid} maxWidth="lg">
               <Typography variant="subtitle" align="center" className={classes.divHeading}>
                  <b>👋Meet Travel-Mate - Your Commuting Partner👋</b>
                </Typography>
                <br/><br/>
              <Grid container spacing={3}>
                {dashboardStats.map((paper) => (
                  <Grid item key={paper.title} xs={6} sm={3}>
                    <Paper elevation={0} className={classes.paper}>
                      <Grid>
                        <img alt="icon" src={paper.icon} className={classes.icon} />
                      </Grid>
                      <Typography variant='body1' className={classes.divHeading}>
                        {paper.title}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
              <br/>
              <hr/>
              <br/>
              <Grid container spacing={3}>
              <Grid item xs={6} className={classes.leaderBoardParent}>
                  <Typography variant="subtitle1" align="center" className={classes.divHeading}>
                    <b>🏆LEADERBOARD - Top Zone Identifiers🏆</b>
                  </Typography>
                  <br />
                  <List className={classes.leaderBoard}>
                    {leaderBoardPts.map(employee => (
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            {(employee.imageObj) ? <img alt="icon" src={employee.imageObj} width='100%' height='100%' /> : <FaceIcon />}
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={employee.name + " (" + employee.position + ") "} secondary={employee.award} />
                      </ListItem>
                    ))}

                  </List>
                </Grid>
              <Grid item xs={6} className={classes.leaderBoardParent}>
                  <Typography variant="subtitle1" align="center" className={classes.divHeading}>
                    <b>⭐️SPOTLIGHT - Stars of this month (Community)⭐️</b>
                  </Typography>
                  <br />
                  <List className={classes.leaderBoard}>
                    {leaderBoard.map(employee => (
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            {(employee.imageObj) ? <img  alt="icon"src={employee.imageObj} width='100%' height='100%' /> : <FaceIcon />}
                          </Avatar>
                        </ListItemAvatar>
                        {/* <ListItemText primary={employee.name + ' - ' + employee.team} secondary={employee.award} />/ */}
                        <ListItemText primary={employee.name} secondary={employee.award} />
                      </ListItem>
                    ))}

                  </List>
                </Grid>
                </Grid>
            </Container>

          </main>

        </Container>


        <br />
      </header>

    </React.Fragment>


  );
}