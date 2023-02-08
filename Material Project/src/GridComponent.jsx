import {Container, Grid, Paper, Card} from '@mui/material'
import Cart from './Cart'



export default function GridComponent (){
    return (
        <Container>
            <Grid container>
                <Grid item lg={4} sm={12}>
                    <Paper>Segment 1</Paper>
                </Grid>
                <Grid item lg={4} sm={12}>
                <Card className="card-container">
                    <Cart />
                 </Card>
                </Grid>
                <Grid item lg= {4} sm={12}>
                    <Paper>Segment 3</Paper>
                </Grid>
            </Grid>
        </Container>

    )
}