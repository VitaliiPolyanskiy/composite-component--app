import React from "react";
import Club from "./Club.tsx";
import SearchPlugin from "./SearchPlugin.tsx";

type ClubsListProps = {
  data: {
    title: string;
    clubs: string[];
  };
};

type ClubsListState = {
  clubs: string[];
};

export default class ClubsList extends React.Component<ClubsListProps, ClubsListState> 
{
  constructor(props: ClubsListProps) {
    super(props);
    this.state = { clubs: props.data.clubs };
  }

  filterList = (text: string)  => {
    const filtered = this.props.data.clubs.filter((club) =>
      club.toLowerCase().includes(text.toLowerCase())
    );
    this.setState({ clubs: filtered });
  }

  render() {
    return (
      <div className="clubs-wrapper">
        <h2 className="clubs-title">{this.props.data.title}</h2>
        <SearchPlugin filter={this.filterList} />
        <ul className="clubs-list">
          {this.state.clubs.map((club, index) => (
            <Club key={index} name={club} />
          ))}
        </ul>
      </div>
    );
  }
}