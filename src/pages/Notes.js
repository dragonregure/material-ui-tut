import React, { useEffect, useState } from 'react';
import { Container, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles({
  paper: {
  }
});

export default function Notes() {
  const [notes, setNotes] = useState([]);

  const style = useStyle();

  useEffect(() => {
    fetch('http://localhost:3003/notes')
    .then(res => res.json())
    .then(data => setNotes(data));
  }, []);
  return (
    <Container>
      <Grid container>
        {
          notes.map(notes => {
            return (
              <Grid item key={notes.id} className={style.paper} xs={12} md={4} lg={3}>
                <Paper>{notes.title}</Paper>
              </Grid>
              );
            })
          }
        </Grid>
    </Container>
  )
}
