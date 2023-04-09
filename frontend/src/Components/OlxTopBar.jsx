import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import OlxCasoule from "./OlxCasoule";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../_Redux/User/Slice/UserSlice";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from "react";

export function OlxTopBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { UserLogin } = useSelector((state) => state.alluser)
  const dispatch = useDispatch()
  console.log(UserLogin)
  return (
    <> 
     

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
     
  {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/OLX-Logo.png/800px-OLX-Logo.png"
              height={75}
              width={75}
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
         
            <Nav className="me-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
              {/* <Link onClick={handleShow}className="nav-link">
                xxxxx
              </Link> */}
            </Nav>
            <Nav>
              {UserLogin ? (
                <> 
                   
                  <NavDropdown title={UserLogin.userName} id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.2">
                     My Ads
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3"> Profile Info</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item  
                     onClick={ e => dispatch(logOut())}
                    href="#action/3.4">
                      LogOut
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Link to="/SellProducts" className="nav-link">
                    Sell
                  </Link>
                </>
              ) : (
                 <>
                 <Link to="/login" className="nav-link">
                  Login
                </Link>
                <Link to="/SingUp" className="nav-link">
                  SingUp
                </Link>
                 </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default OlxTopBar;


