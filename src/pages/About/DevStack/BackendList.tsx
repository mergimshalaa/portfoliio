import { Col, Container, Row } from "react-bootstrap";
import { techItems } from "../../../data/BackendList";
import './techlist.css';

export function BackendList() {
  return (
    <Container className="text-center text-icons">
      <h2 className="header-skills">Backend</h2>
      <Row
        style={{
          justifyContent: "center",
          fontSize: "3rem",
          color: "white",
          paddingBottom: '50px',
          gap: ".3rem",
        }}
      >
        {techItems.map((techItem, index) => (
          <Col xs={4} md={1} key={index} className="tech-icons border-white" data-testid="tech-icon">
              <techItem.image size="50px" color={techItem.color} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
