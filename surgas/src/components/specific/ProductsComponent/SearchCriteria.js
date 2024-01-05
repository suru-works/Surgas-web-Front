import React from 'react';
import { useIntl } from 'react-intl';

import { Button, Col, Container, Form, Row } from "react-bootstrap";

const SearchCriteria = () => {
    const strings = useIntl();
    return(
    <Container className="mt-5">
      <Row>
        <Col sm={12} md={9}>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 rounded-pill d-flex"
              aria-label={()=>(strings.formatMessage({ id: "search" }))}
            />
            <Button className="rounded-pill" variant="outline-primary">
            {strings.formatMessage({ id: "search" })}
            </Button>
          </Form>
        </Col>
        <Col sm={12} md={3}>
            filtros
        </Col>
      </Row>
    </Container>
    );
}

export default SearchCriteria;