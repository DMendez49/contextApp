import React from "react";

//Set Up The Initial Context
export const UserContext = React.createContext();

//Create an exportable consumer that can be injected into components
export const UserConsumer = UserContext.Consumer;

//Create the provider using a traditonal React.Component class
class UserProvider extends React.Component{
  state = {
    username: "Code Monkey",
    dateJoined: "12/18/18",
    membershiplevel: "Silver",
    updateUser: (user) => this.updateUser(user),
  };

  updateUser = (user)=> {
    this.setState({...user});
  }

  render() {
    return (
      <UserContext.Provider value={this.state}>
        { this.props.children }
      </UserContext.Provider>
    )
  }
}

export default UserProvider;