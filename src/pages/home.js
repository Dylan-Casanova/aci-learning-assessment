import React from "react";
import { Col, Row, Container } from "../components/Grid";
import CreateCourseForm from "../components/CreateCourseForm/index.js";
import CourseList from "../components/CourseList";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-6 sm-12">
          <CourseList /> 
        </Col>
        <Col size="md-6">
          <CreateCourseForm />
        </Col>
        
      </Row>
    </Container>
  );
};

export default Home;