import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles_1 = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menu: {
      minHeight: '20vh',
    },
    title: {
      flexGrow: 1,
    },
  }));
  
  function Nav() {
      const c = useStyles_1();
      const logOut =()=>{
        window.localStorage.clear();
        window.location.href="./";
      }
      return (
          <div className={c.root}>
              <header >
                  <AppBar position="static">
                      <Toolbar>
                          <Typography variant="h3" className={c.title}></Typography>
                          <Button onClick={logOut} color="inherit">Logout</Button>
                      </Toolbar>
                  </AppBar>
              </header>
          </div>
      );
    }
    export default Nav;