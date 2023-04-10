import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardMedia, Grid } from '@material-ui/core';

const themes = [
  { name: 'Theme 1', url: 'https://url-to-theme-1-image' },
  { name: 'Theme 2', url: 'https://url-to-theme-2-image' },
  { name: 'Theme 3', url: 'https://url-to-theme-3-image' },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}));

function PickThemePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Document Theme</h1>
      <Grid container spacing={3}>
        {themes.map((theme) => (
          <Grid item xs={12} sm={6} md={4} key={theme.name}>
            <Card className={classes.card}>
              <CardActionArea onClick={() => console.log(`Selected ${theme.name}`)}>
                <CardMedia className={classes.media} image={theme.url} />
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default PickThemePage;
