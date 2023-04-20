import React from "react";
import "./services.css";
import TitleHeader from "../Clients/Components/Title-head/TitleHeader";
import img_box from "../../../assets/Negotium Assets/services.png";
import ListServices from "./Components/ListServices";
import TableServices from "./Components/TableServices";
import PanelServices from "./Components/PanelServices";
import { Dimmer, Loader } from "semantic-ui-react";

import { useAuth } from "../../../hooks/useAuth";
import { Services } from "../../../api/service";

const servicesController = new Services();

export default function Services_() {
  const { user, accesToken } = useAuth();

  const [reload, setReload] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [load, setLoad] = React.useState(false);
  const [filter, setFilter] = React.useState("");
  const [services, setServices] = React.useState(user.servicios);
  const [sinServices, setSinServices] = React.useState(false);

  const changeFilter = (filter) => {

    if(filter !== "Todos" && filter !== "Vendidos" && filter !== "Activos" && filter !== "Inactivos"){
      const serv = services.filter((service) => service.nombre.toLowerCase().includes(filter.toLowerCase()));
      //console.log(serv);
      if(serv.length !== 0){
        //console.log("Hay servicios");
        setServices(serv);
      }else{
        //console.log("No hay servicios");
        setServices([]);
        setSinServices(true);
        set("")
      }
      return;
    }

    setFilter(filter);
    switch (filter) {
      case "Activos":
        setLoading(true);
        setServices(user.servicios.filter((service) => service.habilitado === true));
        setLoading(false);
        break;
      case "Inactivos":
        setServices(user.servicios.filter((service) => service.habilitado === false));
        break;
      case "Vendidos":
        setServices(user.servicios.filter((service) => service.clientes > 0));
        break;
      case "Todos":
        setServices(user.servicios);
        break;
      default:
        break;
    }
    setLoading(false);
  }

  const onReload = () => {
    setReload(!reload);
  };

  React.useEffect(() => {
    setLoading(true);
    servicesController.getServices(accesToken).then((response) => {
      setServices(response);
      setLoading(false);
    });
  }, [user, reload]);

  //console.log(services);

  if (loading) {
    return (
      <div className="loader-cont">
        <Dimmer active inverted>
          <Loader inverted content="Cargando.." />
        </Dimmer>
      </div>
    );
  }

  return (
    <>
      <TitleHeader
        valueFilter={filter}
        img={img_box}
        title="Lista de servicios"
      />
      <div className="contenedor-servicios">
        <div className="contenedor-panel-vertical">
          <PanelServices
            onReload={onReload}
            changeFilter={changeFilter}
            activos={
              services.filter((service) => service.habilitado === true).length
            }
            inactivos={
              services.filter((service) => service.habilitado === false).length
            }
            vendidos={user.totalServiciosUsados}
            total={services.length}
          />
        </div>
        <div className={
          load? "contenedor-panel-list-services-v2" : "contenedor-panel-list-services"
        }>
            <TableServices sinServices={sinServices} setServices={setServices} services={services} onReload={onReload} setLoading={setLoading} setLoad={setLoad} loading={loading}/>
        </div>
      </div>
    </>
  );
}
