import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch } from "react-redux";
import { AddProductAction } from "../_Redux/User/Action/ProductAction";

export default function SellProducts() {
  const [image, setImage] = useState();

  const dispatch = useDispatch();
  const [sellProData, setsellProData] = useState({
    productOwner: "shubham",
    productName: "keybord",
    productPrice: "885",
    productdesc: "xxxxx",
    productscategory: "electronic",
    owneraddress: "Mumbai",
  });

  const handelSubmitData = () => {
    const fd = new FormData();
    fd.append("productOwner", sellProData.productOwner);
    fd.append("productName", sellProData.productName);
    fd.append("productPrice", sellProData.productPrice);
    fd.append("productdesc", sellProData.productdesc);
    fd.append("productscategory", sellProData.productscategory);
    fd.append("owneraddress", sellProData.owneraddress);
    for (let ImgData of image) {
      fd.append("productImage", ImgData);
    }
    for (const ImgData of fd.entries()) {
      console.log(ImgData)
    }

    dispatch(AddProductAction(fd));
  };

  return (
    <>
      <Container>
        <Row className="justify-content-md-center mt-5 ">
          <Col xs={6}>
            <h3 className="text-center"> POST YOUR AD </h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Product Owner Name </Form.Label>
              <Form.Control
                value={sellProData.productOwner}
                onChange={(e) =>
                  setsellProData({
                    ...sellProData,
                    productOwner: e.target.value,
                  })
                }
                type="text"
                placeholder=""
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Product Name </Form.Label>
              <Form.Control
                value={sellProData.productName}
                onChange={(e) =>
                  setsellProData({
                    ...sellProData,
                    productName: e.target.value,
                  })
                }
                type="text"
                placeholder=""
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Product Price</Form.Label>
              <Form.Control
                value={sellProData.productPrice}
                onChange={(e) =>
                  setsellProData({
                    ...sellProData,
                    productPrice: e.target.value,
                  })
                }
                type="text"
                placeholder=""
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <div>
                <label for="id" class="form-label">
                  Product Description
                </label>
                <textarea
                  value={sellProData.productdesc}
                  onChange={(e) =>
                    setsellProData({
                      ...sellProData,
                      productdesc: e.target.value,
                    })
                  }
                  class="form-control"
                  id="id"
                ></textarea>
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Upload Product Photo Up to 3</Form.Label>
              <Form.Control
                onChange={(e) => setImage(e.target.files)}
                type="file"
                placeholder=""
                multiple
              />
            </Form.Group>
            <hr />
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Product Category</Form.Label>
              <Form.Control
                value={sellProData.productscategory}
                onChange={(e) =>
                  setsellProData({
                    ...sellProData,
                    productscategory: e.target.value,
                  })
                }
                type="text"
                placeholder=""
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Product Owner Address</Form.Label>
              <Form.Control
                value={sellProData.owneraddress}
                onChange={(e) =>
                  setsellProData({
                    ...sellProData,
                    owneraddress: e.target.value,
                  })
                }
                type="text"
                placeholder=""
              />
            </Form.Group>
            <Button
              onClick={handelSubmitData}
              variant="outline-info"
              type="button"
            >
              Add Add
            </Button>
          </Col>
          <Col xs={2}>
            {/* <img
              height={600}
              width={450}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5-EGZogLgjEh6FfUORpfsLbH3x7hzayeboOjrw3eO9eSEVhSdw9je6hVwWKeLTogIdFE&usqp=CAU"
            /> */}
          </Col>
        </Row>
      </Container>
    </>
  );
}
