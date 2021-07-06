import React, { useState } from 'react';
import { Typography, Button, Container, makeStyles, TextField } from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const useStyles = makeStyles({
  formItem: {
    marginBottom: 20
  },
  form: {
    marginBottom: 20,
    marginTop: 20
  }
});



export default function Create() {
  const styleClasses = useStyles();
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [errorTitle, setErrorTitle] = useState(false);
  const [errorDetail, setErrorDetail] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorTitle(false);
    setErrorDetail(false);

    if(title === '') setErrorTitle(true);
    if(detail === '') setErrorDetail(true);

    if(title && detail) console.log(title, detail);
  }

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

      <form action="" onSubmit={(e) => handleSubmit(e)} className={styleClasses.form}>
        <TextField
          fullWidth
          label="Title"
          variant="outlined"
          className={styleClasses.formItem}
          onChange={(e) => setTitle(e.target.value)}
          error={errorTitle}
        />

        <TextField
          fullWidth
          label="Details"
          variant="outlined"
          multiline
          rows={4}
          className={styleClasses.formItem}
          onChange={(e) => setDetail(e.target.value)}
          error={errorDetail}
        />

      <Button
        variant="contained"
        type="submit"
        color="secondary"
        disableElevation
        endIcon={<ArrowRightIcon />}
        className={styleClasses.formItem}
      >
        Submit
      </Button>
      </form>
      
    </Container>
  )
}
