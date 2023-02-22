import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import ChartBar from './ChartBar.js';

import { lightGreen, red } from '@mui/material/colors';


export default function MediaCard({ id, name, image, weight, abilities, weaknesses, type, stats}) {
    return (
        <Card sx={{ width: 345, marginTop: '100px', border: '15px solid',  borderRadius: '10px', borderColor: red[500]}}>

            <CardHeader sx={{ backgroundColor: red[300] }}
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {id}
                    </Avatar>
                }
                titleTypographyProps={{ variant: 'h4', alig: 'left', textTransform: 'uppercase' }}
                title={name}
                subheader={type}
            />

            <CardMedia
                sx={{
                    weight: '300px',
                    height: '300px',
                    backgroundColor : lightGreen[100]
                }}
                image={image}
                title={name}
            />
            
            <CardContent sx={{ display: 'flex', flexDirection: 'row', alignItems: 'top', backgroundColor: red[300] }} >
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        Weight:
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {weight}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        Abilities:
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {abilities.join(', ')}
                    </Typography>
                </CardContent>

                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        Type:
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {type}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        Weaknesses:
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {weaknesses.join(', ')}
                    </Typography>
                </CardContent>

            </CardContent>
            <CardContent sx={{ backgroundColor: red[300] }} >
                <ChartBar stats={stats}></ChartBar>

            </CardContent>
        </Card>
    );
}