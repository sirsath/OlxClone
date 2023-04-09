import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductsCard from "./ProductsCard";
import { useDispatch, useSelector } from "react-redux";
import { getProductAction } from "../_Redux/User/Action/ProductAction";

export default function OlxProducts() {
 const { getproduct } = useSelector((state) => state.allproducts);
 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductAction());
  }, [])
   
  
  return (
    <>
      <Container>
        <Row xs={2} md={2} lg={3} className="g-5 bg-danger mt-5">
          {getproduct &&
            getproduct.map((item, i) => (
              <Col>
                <ProductsCard item={item} />
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
}
