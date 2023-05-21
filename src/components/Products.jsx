import React from "react";
import { Grid } from "@material-ui/core";
import { Description } from "@material-ui/icons";
import Product from "./Product/Product";
const products =[
    {
        id:1, name :'shoes', Description: 'running shoes',price:'5$'
   },
   {
    id:2, name :'macbook', Description: 'personal laptop',price:'6$'
    },

]

const Products = () => {
    return (

        <Grid container justifyContent='center' spacing={4}>
    {
        products.map((product) => (
            <Grid item key={product.id} >
                <Product product={product}></Product>
            </Grid>
        )
        )
    }
        </Grid>

    )
}
export default Products;