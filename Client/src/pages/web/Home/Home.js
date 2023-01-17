import React from "react";
import "./home.css";
import HomeHeaderText from "./Home-Header-Text/HomeHeaderText";
import HomeDescription from "./Home-Description/HomeDescription";

import panel from "../../../../src/assets/Negotium Assets/panel.png";
import services from "../../../../src/assets/Negotium Assets/servicios.png";
import clients from "../../../../src/assets/Negotium Assets/clientes.png";

export function Home() {
  const dataDescription = [
    {
      titulo: "Panel De Administracion",
      descripcion:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing",
      imagen: panel,
    },
    {
      titulo: "Red de clientes",
      descripcion:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing",
      imagen: clients,
    },
    {
      titulo: "Servicios",
      descripcion:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing",
      imagen: services,
    },
  ];

  const dataText={
    titulo:"Que es Negotium?",
    descripcion:"Negotium es una plataforma que te permite gestionar tus clientes, servicios y facturación de una manera fácil y sencilla. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing"
  }

  return (
    <div className="home-container">
      <HomeHeaderText titulo={dataText.titulo} descripcion={dataText.descripcion} />
      {dataDescription.map((item, index) => {
        return (
          <HomeDescription
            key={index}
            titulo={item.titulo}
            descripcion={item.descripcion}
            imagen={item.imagen}
          />
        );
      })}
      <div className="magin-b"></div>
    </div>
  );
}
