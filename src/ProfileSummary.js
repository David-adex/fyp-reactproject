import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, InputAdornment } from '@material-ui/core';
import { AccountCircle, Email, Phone, Home, LinkedIn } from '@material-ui/icons';
import { Card, Grid } from '@material-ui/core';
import { CardHeader, CardContent} from '@material-ui/core';


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

function ProfileSummary ({ formData, setFormData, handleNextStep }){
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
                <CardHeader title="Profile Details" />
            </Card>
        <CardContent>
        <Grid container spacing={2} alignItems="center" lg={12}>
        <Grid item md={4} sm={12} xs={12} lg={10}>
        <TextField
        name="firstName"
        label="First Name"
        variant="outlined"
        className={classes.input}
        value={formData.firstName}
        style={{width: '70%'}}
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        name="lastName"
        label="Last Name"
        variant="outlined"
        className={classes.input}
        value={formData.lastName}
        style={{width: '70%'}}
        onChange={handleChange}
        InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <TextField
        name="linkedInLink"
        label="LinkedIn"
        variant="outlined"
        className={classes.input}
        value={formData.linkedInLink}
        style={{width: '70%'}}
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <LinkedIn />
            </InputAdornment>
          ),
        }}
      />
        </Grid>
        <Grid item md={4} sm={12} xs={12} lg={10}>
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          style={{width: '80%'}}
          className={classes.input}
          value={formData.email}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <Email />
              </InputAdornment>
            ),
          }}
        />
         <TextField
        name="mobileNumber"
        label="Mobile Number"
        variant="outlined"
        style={{width: '80%'}}
        className={classes.input}
        value={formData.mobileNumber}
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <Phone />
            </InputAdornment>
          ),
        }}
      />
            <TextField
        name="address"
        label="Address"
        variant="outlined"
        style={{width: '80%'}}
        className={classes.input}
        value={formData.address}
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <Home />
            </InputAdornment>
          ),
        }}
      />
      </Grid>
        <TextField
        name="proSummary"
        label="Professional Summary"
        variant="outlined"
        style={{width: '60%'}}
        className={classes.input}
        value={formData.proSummary}
        onChange={handleChange}
        multiline
      />
      </Grid>
      <Button className={classes.input} variant="contained" color="primary" onClick={handleNextStep}>
        Next
      </Button>
      </CardContent>
    </div> 
     );
}

export default ProfileSummary;