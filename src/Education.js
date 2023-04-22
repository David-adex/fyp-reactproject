import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, InputAdornment } from '@material-ui/core';
import { DateRange, School, Description } from '@material-ui/icons';
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

function Education ({ formData, setFormData, handleNextStep, handlePreviousStep }){
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
                <CardHeader title="Education Details" />
            </Card>
            <CardContent>
      <Grid container spacing={2} alignItems="center" lg={12}>
      <Grid item md={4} sm={12} xs={12} lg={10}>
      <TextField
        label="College/University"
        name="school"
        variant="outlined"
        style={{width: '80%'}}
        className={classes.input}
        value={formData.school}
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <School />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Qualification"
        name="qualifications"
        variant="outlined"
        style={{width: '80%'}}
        className={classes.input}
        value={formData.qualifications}
        onChange={handleChange}
        InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <Description />
              </InputAdornment>
            ),
          }}
        />
        </Grid>
        <Grid item md={4} sm={12} xs={12} lg={10}>
        <TextField
          label="Start Date"
          type="date"
          name="startDate"
          variant="outlined"
          className={classes.input}
          value={formData.startDate}
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
          name="endDate"
          variant="outlined"
          className={classes.input}
          value={formData.endDate}
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
        name="eSummary"
        label="Education Description"
        variant="outlined"
        style={{width: '60%'}}
        className={classes.input}
        value={formData.eSummary}
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

export default Education;