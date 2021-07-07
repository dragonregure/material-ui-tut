import React from 'react';
import {Card as BaseCard } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

// Makestyles using conditional data
const useStyles = makeStyles({
    work: {
        border: (data) => {
            if(data.category === 'works') {
                return '1px solid red';
            }
        }
    }
});

const CardComponent = ({ data, doDelete }) => {
    const classes = useStyles(data);
    return(
        <div>
            <BaseCard elevation={1} className={classes.work}>
                <CardHeader
                    title={data.title}
                    subheader={data.category}
                    action={
                        <IconButton onClick={() => doDelete(data.id)}>
                            <DeleteOutlineOutlinedIcon />
                        </IconButton>
                    }
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        {data.detail}
                    </Typography>
                </CardContent>
            </BaseCard>
        </div>
    )
}

export default CardComponent;