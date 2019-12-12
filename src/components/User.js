import React, { useContext } from "react";
import { Card, } from "semantic-ui-react"
import { UserContext, } from "../providers/UserProvider";

const User = () =>{
  const {username, dateJoined, membershiplevel, } = useContext(UserContext);

  return(
    <Card>
      <Card.Content>
        <Card.Header>{username}</Card.Header>
          <Card.Meta>
             Date joined: {dateJoined}
          </Card.Meta>
        </Card.Content>
        <Card.Content>
          <p>Membership level: {membershiplevel} </p>
        </Card.Content>
      </Card>
    );
};
export default User;