import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function OlxCasoule() {
  return (
    <Container fluid>
      <Row>
        <Col>
        <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.karousell.com/media/photos/special-collection/2023/03/10/fa9a2f3a47078c7b_(1500,610)"
          alt="First slide"
        height={500}
        width={500}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.karousell.com/media/photos/special-collection/2023/03/14/b4641e87a21b8866_(1500,610)"
          alt="Second slide"
          height={500}
          width={500}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.karousell.com/media/photos/special-collection/2023/02/16/e055397c5679052a_(1500,610)"
          alt="Third slide"
          height={500}
          width={500}
        /> 

        <Carousel.Caption>
          <h3>Third slide label</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </Col>
      </Row>
    </Container>
   
  );
}

export default OlxCasoule;
