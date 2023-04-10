import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
  },
  input: {
    margin: '15px 0',
  },
  complete:{
    margin: '15px 0',
  },
});

const SignUpPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // sign-up functionality is here
  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      await axios.post("http://localhost:8000/signup",{
        email,password
      })
      .then(res=>{
        if (res.data==="exists"){
          alert('User already exists')
        }
        else if(res.data==="notexist"){
          history.push("/")
        }
      })
      .catch(event=>{
        console.log(event);
      })
    }
    catch(event){
      console.log(event)
    }
  };

  return (
    <form className={classes.form}>
      <h1>SIGN UP</h1>
      <TextField
        type="email"
        label="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        className={classes.input}
        required
      />
      <TextField
        type="password"
        label="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        className={classes.input}
        required
      />
      <Button className={classes.complete} onClick={handleSubmit} type="submit" variant="contained" color="primary">
        CONFIRM
      </Button>
      <Link to="/" className={classes.complete} >Already have an account? Login</Link>
    </form>
  );
}

export default SignUpPage;
