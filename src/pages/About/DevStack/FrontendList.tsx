import { Col, Container, Row } from "react-bootstrap";
import { techItems } from "../../../data/FrontendList";

export function FrontendList() {
  return (
    <Container className="text-center text-icons">
      <h2 className="header-skills">Frontend</h2>
      <Row
        style={{
          justifyContent: "center",
          fontSize: "3rem",
          color: "white",
          gap: ".3rem",
        }}
      >
        {techItems.map((techItem, index) => (
          <Col xs={4} md={1} key={index} className="tech-icons border-white">
            <techItem.image size="50px" color={techItem.color} data-testid={`tech-icon-${index}`} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
