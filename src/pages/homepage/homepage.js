import React, { useState, useEffect } from "react";
import { NavBar } from "../../components/navbar/navbar";
import "./homepage.css";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  // ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const Homepage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://xyn48p9t6i.execute-api.eu-north-1.amazonaws.com/items", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
        console.log(products);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <NavBar />
      {/* <img src="http://https://d3mg6qmdwvbi1w.cloudfront.net/logo.png" /> */}
      <div className="productPage">
        {products.map((item) => {
          return (
            <div className="productCard">
              <img
                className="productImg"
                src={`https://my-first-shop.s3.eu-north-1.amazonaws.com/${item.ImageName}`}
              />

              <p>{item.Name}</p>
              <p>£{item.Price}</p>
              <button className="addToCartButton">Add to Cart</button>
            </div>

            // <Box display="flex" alignItems="center" flexDirection="row">
            //   <Grid
            //     // sx={{ flexGrow: 1 }}
            //     container
            //     spacing={2}
            //     // className={÷classes.grid}
            //     // alignItems="center"
            //     // justify="center"
            //     // wrap="nowrap"
            //   >
            //     <Grid>
            //       <Item>
            //         <img
            //           className="productImg"
            //           src={`https://my-first-shop.s3.eu-north-1.amazonaws.com/${item.ImageName}`}
            //         />
            //         <p>{item.Name}</p>
            //         <p>£{item.Price}</p>
            //         <button>Add to Cart</button>
            //       </Item>
            //     </Grid>
            //   </Grid>
            // </Box>
            // <img src="http://https://d3mg6qmdwvbi1w.cloudfront.net/lc-high-resolution-logo-transparent.png"/>
          );
        })}
      </div>
    </div>
  );
};
