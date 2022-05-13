import Grid from '@mui/material/Grid'
import { NextPage } from 'next/types';

const About: NextPage = () => {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={8}> Ian Daley</Grid>
                <Grid item xs={8} flexDirection={'row-reverse'} > Ian Daley</Grid>
                <Grid item xs={8}> Ian Daley</Grid>
                <Grid item xs={8}> Ian Daley</Grid>
                <Grid item xs={8}> Ian Daley</Grid>
                <Grid item xs={8}> Ian Daley</Grid>
                <Grid item xs={8}> Ian Daley</Grid>
                <Grid item xs={8}> Ian Daley</Grid>                
            </Grid>
        </>
    )
}

export default About;