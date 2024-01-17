import { Col, Container, Row } from 'react-bootstrap';

import { toolItems } from '../../../data/ToolList';
import './techlist.css';


export function ToolList() {
  return (
    <Container className="text-center text-icons">
      <h2 className="header-tools">TOOLS</h2>
      <Row
        style={{
          justifyContent: 'center',
          paddingBottom: '40px',
          fontSize: '3rem',
          color: 'white',
          gap: '.3rem',
        }}
      >
        {toolItems.map((toolItem, index) => (
          <Col xs={4} md={1} key={index} className="tech-icons border-white">
            <toolItem.image size="50px" color={toolItem.color} data-testid="tool-icon" />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
