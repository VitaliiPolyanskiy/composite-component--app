import React from "react";

type ClubProps = {
  name: string;
};

export default class Club extends React.Component<ClubProps> {
  render() {
    return <li>{this.props.name}</li>;
  }
}
