import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';

const DemoComponent = () => {
  return (
    <Container className="mt-4">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Demo Component</Card.Title>
          <Card.Text>
            Đây là component mẫu sử dụng React Bootstrap!
          </Card.Text>
          <Button variant="primary">Primary</Button>{' '}
          <Button variant="secondary">Secondary</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DemoComponent;
