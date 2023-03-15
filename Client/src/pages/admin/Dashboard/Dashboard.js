import React, { useEffect, useState } from "react";
import "./dashboard.css";
import { useAuth } from "../../../hooks";
import { CountItemsServices } from "./Components/CountServicesItem";
import { CountClientProveedor } from "./Components/CountItemsClientsProveedors";
import { CountFiles } from "./Components/CountFiles";
import img_services from "../../../assets/Negotium Assets/box.png";
import img_up from "../../../assets/Negotium Assets/up.png";
import img_down from "../../../assets/Negotium Assets/down.png";
import img_view from "../../../assets/Negotium Assets/see.png";
import img_add from "../../../assets/Negotium Assets/more.png";
import img_client from "../../../assets/Negotium Assets/client.png";
import img_files from "../../../assets/Negotium Assets/folder.png";
import img_view_files from "../../../assets/Negotium Assets/contrato.png";
import up_file from "../../../assets/Negotium Assets/anadir.png";
import avatarM from "../../../assets/Negotium Assets/perfil.png";
import avatarF from "../../../assets/Negotium Assets/mujer.png";
import sinclientes from "../../../assets/Negotium Assets/add.png";
import img_pendiente from "../../../assets/Negotium Assets/exclamation.png";
import img_prioridad from "../../../assets/Negotium Assets/priority.png";
import img_alert from "../../../assets/Negotium Assets/senal-de-alerta.png";
import img_baja from "../../../assets/Negotium Assets/baja.png";

import { ListClients } from "./Components/ListClients";
import { ListRecordatorios } from "./Components/ListRecordatorios";
import { ServiceItem } from "./Components/ServicesItem";
import img_sin_recordatorios from "../../../assets/Negotium Assets/comprobado.png";
import { User } from "../../../api";
import { Loader, Dimmer } from "semantic-ui-react";
import { SearchRecordatorios } from "../../../Components/Admin/AdminLayout/SearchAddRecordatorios";

const userController = new User();
export function Dashboard() {
  const { user, login, accesToken } = useAuth();

  const [reload, setReload] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [userActive, setUserActive] = React.useState(user);

  const onReload = () => {
    setReload(!reload);
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await userController.getMe(accesToken);
      setUserActive(response);
      setLoading(false);
    })();
  }, [reload]);



  if (!userActive || loading) {
    return (
      <div className="loader-cont">
        <Dimmer active inverted>
          <Loader inverted content="Cargando" />
        </Dimmer>
      </div>
    );
  }

  return (
    <>
      <SearchRecordatorios onReload={onReload} />
      <div className="dashboard-panel">
        <CountItemsServices
          imgUp={img_up}
          cont2={userActive.recaudado}
          cont1={userActive.servicios.length}
          imgDown={img_down}
          imgAdd={img_add}
          img={img_services}
          imgSee={img_view}
          colors={"linear-gradient(to right, #e49eba, #b33863ae)"}
          name="Services"
        />
        <CountClientProveedor
          img_add={img_add}
          cont1={userActive.clientes.length}
          img_down={img_down}
          img_up={img_up}
          img_see={img_view}
          img={img_client}
          name="Clientes"
          colors={"linear-gradient(to right, #9B77D6, #2c0073c6)"}
        />
        <CountClientProveedor
          img_add={img_add}
          cont1={userActive.proveedores.length}
          img_down={img_down}
          img_up={img_up}
          img_see={img_view}
          img={img_client}
          name="Proveedores"
          colors={" linear-gradient(to right, #3B6BE7, #5786FF)"}
        />
        <CountFiles
          view_files={img_view_files}
          up_file={up_file}
          img_files={img_files}
          name="Archivos"
          colors={"linear-gradient(to right, #DD9E70, #ffb37c)"}
        />
      </div>
      <div className="dashboard-v2">
        <ListClients
          onReload={onReload}
          sinclientes={sinclientes}
          avatarM={avatarM}
          avatarF={avatarF}
          clients={userActive.clientes}
          token={accesToken}
        />
        <ListRecordatorios
          recordatorios={userActive.recordatorios}
          img_alert={img_alert}
          img_pendiente={img_pendiente}
          sinrecordatorios={img_sin_recordatorios}
          img_baja={img_baja}
          img_prioridad={img_prioridad}
          img_see={img_view}
          onReload={onReload}
          token={accesToken}
        />
      </div>
      <div className="dashboard-services">
        {user.servicios.length > 0 ? (
          userActive.servicios.map((item, index) => {
            return <ServiceItem onReload={onReload} key={index} item={item} />;
          })
        ) : (
          <div className="cont-sin-servicios">
            <h3 className="text-sin-servicios">No tienes servicios</h3>
          </div>
        )}
      </div>
    </>
  );
}
