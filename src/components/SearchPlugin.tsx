import React from "react";

type SearchPluginProps = {
  filter: (text: string) => void;
};

export default class SearchPlugin extends React.Component<SearchPluginProps> {
  constructor(props: SearchPluginProps) {
    super(props);
  }

  onTextChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value.trim();
    this.props.filter(text);
  }

  render() {
    return (
      <input 
        className="search-input" 
        placeholder="Пошук клубу..." 
        onChange={this.onTextChanged} 
      />
    );
  }
}