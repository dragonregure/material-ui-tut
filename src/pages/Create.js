import React from 'react';
import { Typography, Button, Container } from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  // button: {
  //   backgroundColor: '#54f0b7',
  //   '&:hover': {
  //     backgroundColor: '#34ad81'
  //   }
  // }
});

export default function Create() {
  const styleClasses = useStyles();
  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a new notes
      </Typography>

      <Typography
        gutterBottom
      >
        Aliqua duis consequat nostrud nostrud ullamco duis elit et Lorem excepteur nisi. Laborum labore reprehenderit velit Lorem esse fugiat laboris deserunt quis nisi eiusmod aliquip ipsum labore. Cillum sit anim excepteur occaecat nulla officia esse Lorem. Amet ea consequat excepteur aliqua sint nostrud culpa et fugiat occaecat. Ut velit qui consectetur reprehenderit qui officia proident nulla sint dolore adipisicing consequat do.
      </Typography>

      <Button
        variant="contained"
        type="submit"
        color="secondary"
        className={styleClasses.button}
        disableElevation
        endIcon={<ArrowRightIcon />}
        onClick={() => alert('Yeeeeeeeeeehaaaaaaaaaaaawww!')}
      >
        Submit
      </Button>
      
    </Container>
  )
}
