import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button} from '@material-ui/core';
import { CardHeader, CardContent } from '@material-ui/core';
import { Card, Grid } from '@material-ui/core';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

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

function ExtraDetails({ formData, setFormData, handlePreviousStep,handleFormSubmit, downloadPDF }){
    const classes = useStyles();
    
      const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
        });
      };
     return(
        <div className={classes.root}>
            <Card>
                <CardHeader title="Extra Details" 
                subheader="Skills/Languages" />
            </Card>
        <CardContent>
        <Grid container spacing={2} alignItems="center" lg={12}>
        <Grid item md={4} sm={12} xs={12} lg={10}>
        <TextField
        name="fInterest"
        variant="outlined"
        className={classes.input}
        value={formData.fInterest}
        style={{width: '70%'}}
        onChange={handleChange}
      />
        <TextField
        name="fSkill"
        variant="outlined"
        className={classes.input}
        value={formData.fSkill}
        style={{width: '70%'}}
        onChange={handleChange}
      />
      <TextField
        name="sSkill"
        variant="outlined"
        className={classes.input}
        value={formData.sSkill}
        style={{width: '70%'}}
        onChange={handleChange}
        />
        <TextField
        name="tSkill"
        variant="outlined"
        className={classes.input}
        value={formData.tSkill}
        style={{width: '70%'}}
        onChange={handleChange}
      />
        </Grid>
        <Grid item md={4} sm={12} xs={12} lg={10}>
        <TextField
          name="foSkill"
          variant="outlined"
          style={{width: '80%'}}
          className={classes.input}
          value={formData.foSkill}
          onChange={handleChange}
        />
         <TextField
        name="fiSkill"
        variant="outlined"
        style={{width: '80%'}}
        className={classes.input}
        value={formData.fiSkill}
        onChange={handleChange}
      />
        <TextField
        name="siSkill"
        variant="outlined"
        style={{width: '80%'}}
        className={classes.input}
        value={formData.siSkill}
        onChange={handleChange}
      />
        <TextField
        name="siInterest"
        variant="outlined"
        style={{width: '80%'}}
        className={classes.input}
        value={formData.siInterest}
        onChange={handleChange}
      />
      </Grid>
      </Grid>
      <Card>
                <CardHeader subheader="Interests" />
            </Card>
        <Grid container spacing={2} alignItems="center" lg={12}>
        <Grid item md={4} sm={12} xs={12} lg={10}>
      <TextField
        name="sInterest"
        variant="outlined"
        className={classes.input}
        value={formData.sInterest}
        style={{width: '70%'}}
        onChange={handleChange}
        />
        <TextField
        name="tInterest"
        variant="outlined"
        className={classes.input}
        value={formData.tInterest}
        style={{width: '70%'}}
        onChange={handleChange}
      />
        </Grid>
        <Grid item md={4} sm={12} xs={12} lg={10}>
        <TextField
          name="foInterest"
          variant="outlined"
          style={{width: '80%'}}
          className={classes.input}
          value={formData.foInterest}
          onChange={handleChange}
        />
         <TextField
        name="fiInterest"
        variant="outlined"
        style={{width: '80%'}}
        className={classes.input}
        value={formData.fiInterest}
        onChange={handleChange}
      />
      </Grid>
      <Grid item md={4} sm={12} xs={12} lg={10}>
      <Button
      className={classes.input}
      variant="contained"
      color="primary"
      startIcon={<CloudDownloadIcon />}
      style={{width: '80%'}}
      onClick={downloadPDF}
    >
      Download
    </Button>
    </Grid>
      </Grid>
      <Button className={classes.input} variant="contained" color="primary" onClick={handlePreviousStep}>
        Back
      </Button>
      <Button className={classes.input} variant="contained" color="primary" onClick={handleFormSubmit}>
        View Document
      </Button>
      </CardContent>
    </div> 
    );
}

export default ExtraDetails;