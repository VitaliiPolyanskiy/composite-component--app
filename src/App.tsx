import React from "react";
import ClubsList from "./components/ClubsList.tsx";

const propsValues = {
  title: "Список клубов",
  clubs: ["Динамо", "Черноморец", "Шахтер", "Заря", "Кривбасс", 
    "Полесье","Колос","Карпаты"]
};

export default class App extends React.Component {
  render() {
    return <ClubsList data={propsValues} />;
  }
}
