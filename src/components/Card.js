import React from 'react';
import {Card as BaseCard } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const CardComponent = ({ data, doDelete }) => {
    return(
        <div>
            <BaseCard>
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