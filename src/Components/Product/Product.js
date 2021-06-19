import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./Product.css";

function Product({ data }) {
  return (
    <div className="card">
      <Card style={{ height: "100%" }}>
        <CardActionArea>
          <div className="cardMedia">
            <img className="cardImage" src={data.image}></img>
          </div>
          <CardContent>
            <div>
              <div>
                <h3>{data.title}</h3>
              </div>
            </div>
          </CardContent>
        </CardActionArea>
        <div>
          <div>{data.description.substring(0, 55) + "..."}</div>
          <div>
            <b>{"₹ " + data.price}</b>
          </div>
          <div>Size:{data.size}</div>
          <div>For: {data.category}</div>
        </div>
      </Card>
    </div>
  );
}

export default Product;
