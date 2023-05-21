import React from "react";
import { Card,CardMedia, CardContent,CardActions,Typography,IconButton } from "@material-ui/core";
import { AddShoppingCart, CallMissedSharp } from "@material-ui/icons";
import useStyles from './styles';

const Product = ({product}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image='' title={product.name} />

    <CardContent className={classes.cardConten}>
      <div className={classes.classContent}>
      <Typography variant="h5" gutterBottom>
          {product.name}  
          </Typography>
          <Typography variant="h5" gutterBottom>
          {product.price}  
        </Typography>
        
      </div>
      <Typography variant="h2" color='textSecondary' gutterBottom>
          {product.Description}  
        </Typography>
        
      </CardContent>
      <CardActions disableSpacing className={classes.CardActions}>
        <IconButton aria-label='add to cart' >
          <AddShoppingCart/>
          </IconButton> 
      </CardActions>
    </Card>
  )
}

export default Product