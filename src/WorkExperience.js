import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, InputAdornment } from '@material-ui/core';
import { Business, Work, DateRange } from '@material-ui/icons';
import { CardHeader, CardContent } from '@material-ui/core';
import { Card, Grid } from '@material-ui/core';

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

function WorkExperience ({ formData, setFormData, handleNextStep, handlePreviousStep }){
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
            <CardHeader title="Work Experience"
            subheader="Experience 1"
            />
        </Card>
        <CardContent>
  <Grid container spacing={2} alignItems="center" lg={12}>
  <Grid item md={4} sm={12} xs={12} lg={10}>
  <TextField
     label="Organization"
     name="organization"
     value={formData.organization}
    variant="outlined"
    className={classes.input}
    onChange={handleChange}
    InputProps={{
      endAdornment: (
        <InputAdornment position="start">
          <Business/>
        </InputAdornment>
      ),
    }}
  />    </Grid>
      <Grid item md={4} sm={12} xs={12} lg={10}>
  <TextField
        label="Position"
        name="position"
    variant="outlined"
    className={classes.input}
    value={formData.position}
    onChange={handleChange}
    InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <Work />
          </InputAdornment>
        ),
      }}
    />
    </Grid>
    <Grid item md={4} sm={12} xs={12} lg={10}>
    <TextField
      label="Start Date"
      type="date"
      name="sDuration"
      variant="outlined"
      className={classes.input}
      value={formData.sDuration}
      style={{width: '80%'}}
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <DateRange />
          </InputAdornment>
        ),
      }}
    />
    <TextField
      label="End Date"
      type="date"
      name="eDuration"
      variant="outlined"
      className={classes.input}
      value={formData.eDuration}
      style={{width: '80%'}}
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <DateRange />
          </InputAdornment>
        ),
      }}
    />
    </Grid>
    <TextField
    name="description"
    label="Experience Description"
    variant="outlined"
    style={{width: '60%'}}
    className={classes.input}
    value={formData.description}
    onChange={handleChange}
    multiline
  /> 
  </Grid>
          <Card>
            <CardHeader subheader="Experience 2"/></Card>
            <Grid container spacing={2} alignItems="center" lg={12}>
  <Grid item md={4} sm={12} xs={12} lg={10}>
  <TextField
     label="Organization"
     name="sOrganization"
     value={formData.sOrganization}
    variant="outlined"
    className={classes.input}
    onChange={handleChange}
    InputProps={{
      endAdornment: (
        <InputAdornment position="start">
          <Business/>
        </InputAdornment>
      ),
    }}
  />    </Grid>
      <Grid item md={4} sm={12} xs={12} lg={10}>
  <TextField
        label="Position"
        name="sPosition"
    variant="outlined"
    className={classes.input}
    value={formData.sPosition}
    onChange={handleChange}
    InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <Work />
          </InputAdornment>
        ),
      }}
    />
    </Grid>
    <Grid item md={4} sm={12} xs={12} lg={10}>
    <TextField
      label="Start Date"
      type="date"
      name="ssDuration"
      variant="outlined"
      className={classes.input}
      value={formData.ssDuration}
      style={{width: '80%'}}
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <DateRange />
          </InputAdornment>
        ),
      }}
    />
    <TextField
      label="End Date"
      type="date"
      name="eeDuration"
      variant="outlined"
      className={classes.input}
      value={formData.eeDuration}
      style={{width: '80%'}}
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <DateRange />
          </InputAdornment>
        ),
      }}
    />
    </Grid>
    <TextField
    name="sDescription"
    label="Experience Description"
    variant="outlined"
    style={{width: '60%'}}
    className={classes.input}
    value={formData.sDescription}
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

export default WorkExperience;