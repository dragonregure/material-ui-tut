import React from 'react';
import {Card as BaseCard } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import { blue, green, red, yellow } from '@material-ui/core/colors';

// Makestyles using conditional data
const useStyles = makeStyles({
    avatar: {
        backgroundColor: (data) => {
            if(data.category === 'works') {
                return red[500];
            }
            if(data.category === 'money') {
                return green[500];
            }
            if(data.category === 'todos') {
                return yellow[700];
            }
            return blue[500];
        }
    }
});

const CardComponent = ({ data, doDelete }) => {
    const classes = useStyles(data);
    return(
        <div>
            <BaseCard elevation={1}>
                <CardHeader
                    avatar={
                        <Avatar className={classes.avatar}>{data.category[0].toUpperCase()}</Avatar>
                    }
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