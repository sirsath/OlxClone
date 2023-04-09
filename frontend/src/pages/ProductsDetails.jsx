import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { SinglegetProductAction } from "../_Redux/User/Action/ProductAction";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { URL } from "../_Redux/api";

function ProductsDetails() {
   const navigate =useNavigate()
  const dispatch = useDispatch()
  const { getsingleproduct } = useSelector(state=> state.allproducts)
  console.log(getsingleproduct)

  const { id } = useParams()
  useEffect(() => {
    dispatch(SinglegetProductAction(id))
  }, [])
const handelBuy =()=>{
  navigate("/BuyProduct")
}
  if (getsingleproduct.productImage) {
    return (
      <Container>
        <Row>
          <Col>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={`${URL}/${getsingleproduct.productImage[0]}`}
                  alt="First slide"
                  height={600}
                  width={500}
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={`${URL}/${getsingleproduct.productImage[1]}`}
                  alt="Second slide"
                  height={600}
                  width={500}
                />
  
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={`${URL}/${getsingleproduct.productImage[2]}`}
  
                  alt="Third slide"
                  height={600}
                  width={500}
                />
  
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col>
            <Card>
              <Card.Header className="text-center"><h3>{getsingleproduct.productName}</h3></Card.Header>
              <Card.Body>
                <Card.Title>
                  <h1>₹ {getsingleproduct.productPrice}/-</h1>
                </Card.Title>
                <Card.Text>
                 {getsingleproduct.productdesc} (Cash on delivery + Free delivery)
                </Card.Text>
                <button 
                onClick={handelBuy}
                type="button" class="btn btn-outline-warning">
                  Buy
                </button>
              </Card.Body>
            </Card>
  
            <Card className="mt-5">
              <Card.Header className="text-center">
                 <h1>{getsingleproduct.productOwner}</h1>
                <h4>Chat With Seller</h4>
                <Button variant="outline-info" size="sm">
                  Send Msg
                </Button>
              </Card.Header>
              <Card.Body>
                <Card.Title>
                  <h4 className="bg-dark text-light text-center m-3">
                    Posted Frome
                  </h4>
                 <h3 className="text-center">{getsingleproduct.owneraddress}</h3>  
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.2149566959047!2d75.32521431483477!3d19.873143186635545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb99178077eb41%3A0x61cae7bcf705976e!2sSKILLHUB%20Job%20oriented%20courses%20%7C%20React%20Js%20%7C%20Node%20Js%20%7C%20React%20Native%20%7C%20Angular%20%7C%20Python%20With%20Django!5e0!3m2!1sen!2sin!4v1678818082982!5m2!1sen!2sin"
                    width="600"
                    height="250"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ProductsDetails;
