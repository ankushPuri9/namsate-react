import { Component } from "react";

export class AboutClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        location: "",
        avatar_url: "",
      },
    };
  }
  //Call API after render the function
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/ankushPuri9");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    console.log(avatar_url);
    return (
      <div className="userInfo">
        <img className="user-img" src={avatar_url}></img>
        <h1>Name :- {name}</h1>
        <h2>Location:-{location} </h2>
      </div>
    );
  }
}
