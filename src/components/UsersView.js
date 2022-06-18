import React, { useState, useEffect, useContext } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import axios from "axios";
import { UserContext } from "./UserContext";

const UsersView = () => {
  const [user, setUser] = useState([]);

  //accessing usercontext value
  const { setValue } = useContext(UserContext);

  //getting users from the api
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=1")
      .then((res) => {
        setUser(res.data.data);
        console.log(res.data.data);
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
            justifyContent: "center",
            backgroundColor: "aqua",
          }}
        >
          Title
        </Card.Body>
      </Card>
      <Card>
        <Card.Body
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
          }}
        >
          <h3>Users</h3>
        </Card.Body>
      </Card>
      <Container>
        <Row>
          {user.map((users) => {
            return (
              <>
                <Col xs={6} md={4} style={{ padding: "1rem" }}>
                  <Card style={{ width: "18rem" }}>
                    <a href="/userinfo" onClick={() => setValue(users.id)}>
                      <Card.Img
                        variant="top"
                        src={`${users.avatar}`}
                        style={{ borderRadius: "50%", padding: "1rem" }}
                      />
                    </a>
                    <Card.Body>
                      <Card.Text>
                        <h3>{users.first_name}</h3>
                        <h5>{users.email}</h5>
                      </Card.Text>
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

export default UsersView;
