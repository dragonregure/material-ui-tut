import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Card from '../components/Card';

const useStyle = makeStyles({
});


export default function Notes() {
  const [notes, setNotes] = useState([]);

  const style = useStyle();

  useEffect(() => {
    fetch('http://localhost:3003/notes')
    .then(res => res.json())
    .then(data => setNotes(data));
  }, []);

  const handleDelete = async (id) => {
    await fetch(`http://localhost:3003/notes/${id}`, {
      method: 'DELETE'
    });

    const newNotes = notes.filter(notes => notes.id !== id);
    setNotes(newNotes);
  }

  return (
    <Container>
      <Grid container spacing={3}>
        {
          notes.map(notes => {
            return (
              <Grid item key={notes.id} className={style.paper} xs={12} md={4} lg={3}>
                <Card data={notes} doDelete={handleDelete}/>
              </Grid>
              );
            })
          }
        </Grid>
    </Container>
  )
}
