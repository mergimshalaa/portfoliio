import { Col, Container, Row } from "react-bootstrap";
import { techItems } from "../../data/BackendList";

export function BackendList() {
  return (
    <Container className="text-center text-icons">
      <h2>Backend</h2>
      <Row>
        {techItems.map((techItem, index) => (
          <Col xs={4} md={2} key={index}>
            <techItem.image size="50px" color={techItem.color} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
