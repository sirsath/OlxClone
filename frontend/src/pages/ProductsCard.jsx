import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { URL } from "../_Redux/api";

function ProductsCard({item}) {
  return (
    <>
      <Link to={`/ProductsDetails/${item._id}`} className="nav-link">
        <Card style={{ width: "20rem" }}>
          <Card.Img
            variant="top"
            height={250}
            width={200}
            src={`${URL}/${item.productImage[0]}`}
          />
          <Card.Body>
             <h3>₹ {item.productPrice}/-</h3>
            <Card.Title>{item.productName}</Card.Title>
            <Card.Text>
               {item.productdesc}
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </>
  );
}

export default ProductsCard;
