import React from "react";
import ClubsList from "./components/ClubsList.tsx";
import "./App.css";

const propsValues = {
  title: "Список клубів",
  clubs: ["Динамо", "Чорноморець", "Шахтар", "Зоря", "Кривбас", 
    "Полісся", "Колос", "Карпати"]
};

export default class App extends React.Component {
  render() {
    return <ClubsList data={propsValues} />;
  }
}