import React, { useState } from 'react';
import { 
        Typography, Button, Container, makeStyles, TextField, RadioGroup,
        Radio, FormControl, FormLabel, FormControlLabel
      } from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  formItem: {
    marginBottom: 20,
    marginTop: 20,
    display: 'block'
  }
});



export default function Create() {
  const styleClasses = useStyles();
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [category, setCategory] = useState('money');
  const [errorTitle, setErrorTitle] = useState(false);
  const [errorDetail, setErrorDetail] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorTitle(false);
    setErrorDetail(false);

    if(title === '') setErrorTitle(true);
    if(detail === '') setErrorDetail(true);

    if(title && detail) {
      fetch('http://localhost:3003/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, detail, category })
      })
      .then(() => history.push('/'))
      .catch(err => console.log(err));
    }
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

      <form action="" onSubmit={(e) => handleSubmit(e)} noValidate>
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

        <FormControl className={styleClasses.formItem}>
          <FormLabel>Notes</FormLabel>
          <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel value="money" label="Money" control={<Radio />}/>
            <FormControlLabel value="todos" label="Todos" control={<Radio />}/>
            <FormControlLabel value="reminders" label="Reminders" control={<Radio />}/>
            <FormControlLabel value="works" label="Works" control={<Radio />}/>
          </RadioGroup>
        </FormControl>
        

        <Button
          variant="contained"
          type="submit"
          color="secondary"
          disableElevation
          endIcon={<ArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
      
    </Container>
  )
}
