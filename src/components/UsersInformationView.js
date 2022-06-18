import React, { useState, useEffect, useContext } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import axios from "axios";
import { UserContext } from "./UserContext";

const UsersInformationView = () => {
  const [selectedUser, setSelectedUser] = useState([]);

  //accessing usercontext value
  const { value } = useContext(UserContext);

  console.log(value)

  //getting user infomation from the api
  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users/${value}`)
      .then((res) => {
        console.log(res.data);
        setSelectedUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Card>
        <Card.Body
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            backgroundColor: "aqua",
          }}
        >
          <a href="/" style={{
            textDecoration: "none",
            color: "inherit"}}><h4>Back</h4></a>
        </Card.Body>
      </Card>
      <Container>
        <Row>
          {Object.values(selectedUser).map((users) => {
            return (
              <>
                <Col xs={6} md={4}>
                  <Card>
                    <Card.Img
                      variant="left"
                      src={`${users.avatar}`}
                      style={{ borderRadius: "50%" }}
                    />
                  </Card>
                </Col>
                <Col xs={6} md={4}>
                  <Card>
                    <Card.Body>
                      First name: {users.first_name}
                      Last name: {users.last_name}
                      e-mail: {users.email}
                    </Card.Body>
                  </Card>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default UsersInformationView;
