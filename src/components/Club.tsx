import React from "react";

type ClubProps = {
  name: string;
};

export default class Club extends React.Component<ClubProps> {
  render() {
    return <li className="club-item">{this.props.name}</li>;
  }
}