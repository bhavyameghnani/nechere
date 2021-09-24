import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Header from '../LandingPage/Header';
import MainFeaturedPost from '../LandingPage/MainFeaturedPost';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import toast, { Toaster } from 'react-hot-toast';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';


const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  }, icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    height: 11
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
  divHeading: {
    color: '#e57373'
  },
  subHeading: {
    color: '#115293',
    fontWeight: '600'
  },
  desc: {
    color: '#7A8C98'
  },
}));


const mainFeaturedPost = {
  title: 'Issue Tracker',
  description: "These can be incident reports, customer issues, source code bugs. Do not lose any of them thanks to this issue tracker module!",
  image: 'https://images.moneycontrol.com/static-mcnews/2021/06/Mumbai-street-road-770x433.jpg',
  imgText: 'main image description',
  linkText: 'Continue reading…'
};

const featuredPosts = [
  {
    title: 'Mumbai - Potholes',
    steps: [
      'Issue Raised',
      'Resolving now',
      'Solved',
    ],
    active:2,
    description:
      'Tagged to Mumbai Road Municipal Corporation',
    image: 'https://images.indianexpress.com/2016/07/potholes-759.jpg',
    image1: 'https://static.toiimg.com/thumb/msid-65894251,width-1200,height-900,resizemode-4/.jpg',
    imageText: 'Arm Circles',
    readmore: "While sitting down, stretch your arms out at your sides and press your shoulder blades together. With your palms facing down, circle your arms forwards around 20 times. Then, face your palms upwards and circle your arms backwards around 20 times. After this, circle your wrists 20 times in each direction."
  },
  {
    title: 'Banglore - Live Wires',
    steps: [
      'Issue Raised',
      'Resolving now',
      'Solved',
    ],
    active:1,
    description:
      'Tagged to Banglore City Electricty Management Team',
    image: 'https://static.toiimg.com/thumb/msid-70339666,imgsize-891417,width-400,resizemode-4/70339666.jpg',
    image1: 'https://cdn11.bigcommerce.com/s-5d127/images/stencil/1280x1280/products/781/1383/FS72927-24__72706__76945.1560535870.jpg?c=2',
    imageText: 'Chest Stretch',
    readmore: "Stand up and hold your hands together behind your back, expanding your chest. Pull your shoulder blades as close together as possible and hold the pose for 30 seconds."
  },
  {
    title: 'Chennai - Potholes',
    steps: [
      'Issue Raised',
      'Resolving now',
      'Solved',
    ],
    active:0,
    description:
      'Tagged to Chennai Municipal Corporation',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaPGsxgqiRzb47xP7zCCWT92eo4dERoxQje57g3Bt0Txoe39y-&s',
    image1: 'https://cdn11.bigcommerce.com/s-5d127/images/stencil/1280x1280/products/781/1383/FS72927-24__72706__76945.1560535870.jpg?c=2',
    imageText: 'Arm Circles',
    readmore: "While sitting down, stretch your arms out at your sides and press your shoulder blades together. With your palms facing down, circle your arms forwards around 20 times. Then, face your palms upwards and circle your arms backwards around 20 times. After this, circle your wrists 20 times in each direction."
  }
];





const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function IssueTracker() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    notifyWelcome();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const notifyWelcome = () => {
    console.log("here")
    // speak({ text: 'Beefit welcomes you',rate : 0.8})
    toast.success("BeeFit welcomes you !");
    
  };

  return (
    <React.Fragment>
      <CssBaseline />

      <header className="App-header">

        <Container maxWidth="lg">
          <Header title="Lord's Eye" />
          <main>

            <MainFeaturedPost post={mainFeaturedPost} />


            <Container className={classes.cardGrid} maxWidth="lg">

              <Typography variant="h5" className={classes.divHeading}>
                <b>Where are we with the Issues?!</b>
              </Typography>
              <br />

              {/* End hero unit */}
              <Grid container spacing={4}>
                {featuredPosts.map((card) => (
                  <Grid item key={card.title} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                    <Typography gutterBottom variant="h6" className={classes.subHeading}>
                          Before
                        </Typography>
                      <CardMedia
                        className={classes.cardMedia}
                        image={card.image}
                        title={card.title}
                      />
                     <br/>
                      <Typography gutterBottom variant="h6" className={classes.subHeading}>
                          After
                        </Typography>
                      <CardMedia
                        className={classes.cardMedia}
                        image={card.image1}
                        title={card.title}
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h6" className={classes.subHeading}>
                          {card.title}
                        </Typography>
                        <Typography align="center" variant="body1" className={classes.desc} gutterBottom>
                          {card.description}
                        </Typography>
                        <Box sx={{ width: '100%' }}>
                          <Stepper activeStep={card.active} alternativeLabel>
                            {card.steps.map((label) => (
                              <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                              </Step>
                            ))}
                          </Stepper>
                        </Box>
                        <CardActions>
                          <Button
                            variant="outlined"
                            size="small"
                            color="primary"
                            align="center"
                            fullWidth
                            onClick={() => { localStorage.setItem("f_title", card.title); localStorage.setItem("f_readmore", card.readmore); localStorage.setItem("f_image", card.image); handleClickOpen(); 
                            // speak({ text: card.readmore,rate : 0.8})
                         }}
                          >
                            View More
                      </Button>
                        </CardActions>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              <br />
           
              <br />
              {/* <Typography variant="h5" className={classes.divHeading}>
                <b>Plant More Trees</b>
              </Typography>
              <Typography variant="body1" className={classes.desc}>
                Featuring citizens participating in the Tree Plantation Challenge!
            </Typography> */}

              

              <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                maxWidth="lg"
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogTitle id="alert-dialog-slide-title">{localStorage.getItem("f_title")}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description">

                    {/* {localStorage.getItem("f_readmore")}
                    <br /> <br /> */}
                    <center><img alt="fitness tip" src={localStorage.getItem("f_image")} /></center>

                  </DialogContentText>

                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Done
                  </Button>
                </DialogActions>
              </Dialog>
            </Container>


          </main>

        </Container>
       
      </header>
      {/* <Footer title="Footer" description="Something here to give the footer a purpose!" /> */}
    </React.Fragment>


  );
}