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
    //justifyContent: 'center',
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

const LoginPage = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

 //login functionality is here
  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      await axios.post("http://localhost:8000/",{
        email,password
      })
      .then(res=>{
        if (res.data==="exists"){
          window.localStorage.setItem("LoggedIn", true)
          history.push("/form")
        }
        else if(res.data==="notexist"){
          alert('Invalid email or password')
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
          <h1>LOGIN</h1>
            <TextField
            type="email"
            label="Email"
            value={email}
            onChange={handleEmailChange}
            className={classes.input}
            required
            />
            <TextField
            type="password"
            label="Password"
            value={password}
            onChange={handlePasswordChange}
            className={classes.input}
            required
            />
            <Button className={classes.complete} onClick={handleSubmit} type="submit" variant="contained" color="primary">
                LOGIN
            </Button>
            <Link to="/signup" className={classes.complete}>Don't have an account? Sign up</Link> 
        </form>   
  );
}

export default LoginPage;
