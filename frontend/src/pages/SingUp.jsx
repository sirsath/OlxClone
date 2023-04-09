import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { UserSingUpAction } from "../_Redux/User/Action/UserAction";

function SingUp() {
  const dispatch = useDispatch()
 const [SingUpData, setSingUpData] = useState({
userName : ""  ,
userEmail : ""  ,
userContact : ""  ,
userPassword : ""  
 })

 const handeAdd = ()=>{
  dispatch(UserSingUpAction(SingUpData))
 }
  
  return (
    <Container>
      <Row className="justify-content-md-center mt-5 ">
        <Col xs={6} > 
          <h3 className="text-center"> SingUp </h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text"
               value={SingUpData.userName}
               onChange={e=> setSingUpData({...SingUpData , userName : e.target.value})}
              placeholder="Enter Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text"
                value={SingUpData.userEmail}
                onChange={e=> setSingUpData({...SingUpData , userEmail : e.target.value})}
              placeholder="Enter email" />
            </Form.Group> 
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control type="text"
                value={SingUpData.userContact}
                onChange={e=> setSingUpData({...SingUpData , userContact : e.target.value})}
              placeholder="Enter Contact Number" />
            </Form.Group> 
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control  
                value={SingUpData.userPassword}
                onChange={e=> setSingUpData({...SingUpData , userPassword : e.target.value})}
              type="text" placeholder=" Enter Password" />
            </Form.Group>
            <Button onClick={handeAdd}  variant="outline-info" type="button">
               SingUp
            </Button>
        </Col>
        <Col xs={2}>
          <img src="https://images.newindianexpress.com/uploads/user/imagelibrary/2019/7/14/w900X450/olx.jpg?w=400&dpr=2.6"  height={200} width={400}/>
        </Col>
      </Row>
    </Container>
  );
}

export default SingUp;
