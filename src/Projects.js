import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, InputAdornment } from '@material-ui/core';
import { CardHeader, CardContent } from '@material-ui/core';
import { Card, Grid } from '@material-ui/core';
import { Title, Link } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2),
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
      },
    card: {
      maxWidth: 345,
    },
    input: {
        margin: '15px 5px',
      },
  }));

function Projects ({ formData, setFormData, handleNextStep, handlePreviousStep }){
    const classes = useStyles();
    const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
        });
      };
    return(
        <div  className={classes.root}>
        <Card>
            <CardHeader title="Project Details"
            subheader="Project 1"
            />
        </Card>
        <CardContent>
  <Grid container spacing={2} alignItems="center" lg={12}>
  <Grid item md={4} sm={12} xs={12} lg={10}>
  <TextField
     label="Project Title"
     name="projectTitle"
     value={formData.projectTitle}
     style={{width: '80%'}}
    variant="outlined"
    className={classes.input}
    onChange={handleChange}
    InputProps={{
      endAdornment: (
        <InputAdornment position="start">
            <Title />
        </InputAdornment>
      ),
    }}
  />    </Grid>
      <Grid item md={4} sm={12} xs={12} lg={10}>
  <TextField
        label="Github"
        name="github"
    variant="outlined"
    style={{width: '80%'}}
    className={classes.input}
    value={formData.github}
    onChange={handleChange}
    InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <Link />
          </InputAdornment>
        ),
      }}
    />
    </Grid>
    <TextField
    name="project"
    label="Project Description"
    variant="outlined"
    style={{width: '60%'}}
    className={classes.input}
    value={formData.project}
    onChange={handleChange}
    multiline
  /> 
  </Grid>
          <Card>
            <CardHeader subheader="Project 2"/></Card>
            <Grid container spacing={2} alignItems="center" lg={12}>
  <Grid item md={4} sm={12} xs={12} lg={10}>
  <TextField
     label="Project Title"
     name="sProjectTitle"
     value={formData.sProjectTitle}
    variant="outlined"
    style={{width: '80%'}}
    className={classes.input}
    onChange={handleChange}
    InputProps={{
      endAdornment: (
        <InputAdornment position="start">
            <Title />
        </InputAdornment>
      ),
    }}
  />    </Grid>
      <Grid item md={4} sm={12} xs={12} lg={10}>
  <TextField
        label="Github"
        name="sGithub"
    variant="outlined"
    style={{width: '80%'}}
    className={classes.input}
    value={formData.sGithub}
    onChange={handleChange}
    InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <Link />
          </InputAdornment>
        ),
      }}
    />
    </Grid>
    <TextField
    name="sProject"
    label="Project Description"
    variant="outlined"
    style={{width: '60%'}}
    className={classes.input}
    value={formData.sProject}
    onChange={handleChange}
    multiline
  /> 
  </Grid>
  <Card>
            <CardHeader subheader="Project 3"/></Card>
            <Grid container spacing={2} alignItems="center" lg={12}>
  <Grid item md={4} sm={12} xs={12} lg={10}>
  <TextField
     label="Project Title"
     name="tProjectTitle"
     value={formData.tProjectTitle}
    variant="outlined"
    style={{width: '80%'}}
    className={classes.input}
    onChange={handleChange}
    InputProps={{
      endAdornment: (
        <InputAdornment position="start">
            <Title />
        </InputAdornment>
      ),
    }}
  />    </Grid>
      <Grid item md={4} sm={12} xs={12} lg={10}>
  <TextField
        label="Github"
        name="tGithub"
    variant="outlined"
    style={{width: '80%'}}
    className={classes.input}
    value={formData.tGithub}
    onChange={handleChange}
    InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <Link />
          </InputAdornment>
        ),
      }}
    />
    </Grid>
    <TextField
    name="tProject"
    label="Project Description"
    variant="outlined"
    style={{width: '60%'}}
    className={classes.input}
    value={formData.tProject}
    onChange={handleChange}
    multiline
  /> 
  </Grid>
  <Button className={classes.input} variant="contained" color="primary" onClick={handlePreviousStep}>
    Back
  </Button>
  <Button className={classes.input} variant="contained" color="primary" onClick={handleNextStep}>
    Next
  </Button>
  </CardContent>
  </div>
  );
}

export default Projects;