import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux"
import { UserLoginAction } from "../_Redux/User/Action/UserAction";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Login() {
  const dispatch = useDispatch() 
  const {UserLogin} = useSelector(state => state.alluser)
const navigate =  useNavigate()

  const [logindata, setlogindata] = useState({
    userEmail : "sirsath2260@gmail.com",
    userPassword : "123"
  })
 
  const showLoginMessage = () => {
    toast.success('Login Successful!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 100000,
    });
};
  const handelLogin = () =>{
    dispatch(UserLoginAction(logindata))
   
  }
useEffect(() => {
  if (UserLogin) {
    setTimeout(() => {
      navigate("/")
      showLoginMessage()
    }, 400);
}
}, [UserLogin])

  return (  <>
  
    <ToastContainer />

    <Container>
      <Row className="justify-content-md-center mt-5 ">
        <Col xs={6} > 
          <h3 className="text-center"> Login </h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email </Form.Label>
              <Form.Control type="email"
               value={logindata.userEmail}
               onChange={e=> setlogindata({...logindata , userEmail: e.target.value })}
               placeholder="Enter email" />
             
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control  
               value={logindata.userPassword}
               onChange={e=> setlogindata({...logindata , userPassword: e.target.value })}
               type="password" placeholder="Password" />
            </Form.Group>
            <Button onClick={handelLogin} variant="outline-info" type="button">
               User Login
            </Button>
        </Col>
        <Col xs={2}>
          <img src="https://images.newindianexpress.com/uploads/user/imagelibrary/2019/7/14/w900X450/olx.jpg?w=400&dpr=2.6"  height={200} width={400}/>
        </Col>
      </Row>
    </Container>
               </>
  );
}

export default Login;
