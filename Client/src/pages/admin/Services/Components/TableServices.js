import React from "react";
import { Button, Image, Modal, Table } from "semantic-ui-react";
import ListServices from "./ListServices";
import inactive from "../../../../assets/Negotium Assets/inactive.png";
import active from "../../../../assets/Negotium Assets/active.png";
import ModalEditService from "./ModalEditService";
import { Services } from "../../../../api/service";
import { toast, ToastContainer } from "react-toastify";
import { useAuth } from "../../../../hooks/useAuth";
import sweetAlert from "sweetalert2";

const serviceController = new Services();
export default function TableServices({
  services,
  onReload,
  setLoad,
  sinServices,
  setServices
}) {
  const { accesToken } = useAuth();
  const [service, setService] = React.useState(null);
  const [open, setOpen] = React.useState(false);


  const editService = (service) => {
    setService(service);
    setOpen(true);
  };

  const activeService = async (id) => {
    const response = await serviceController.toggleService(id, accesToken);
    if (response) {
      toast.success("Servicio actualizado correctamente");
      setTimeout(() => {
        setLoad(false);
        setOpen(false);
        onReload();
      }, 1500);
    }
  };

  const deleteService = async (id) => {
    sweetAlert
      .fire({
        title: "¿Estas seguro de eliminar este servicio?",
        text: "No podras revertir esta accion",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar",
        cancelButtonText: "Cancelar",
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          const response = await serviceController.deleteService(id, accesToken);
          if (response) {
            toast.success("Servicio eliminado correctamente");
            setTimeout(() => {
              onReload();
            }, 1500);
          }
        }
      });
  }

  const sinServicios = () => {
    console.log(sinServices);
    if(sinServices){
      toast.error("No hay servicios con ese nombre", {
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      })
       setTimeout(() => {
        serviceController.getServices(accesToken).then((response) => {
          setServices(response);
        });
      }, 1200);
    }
  }

  return (
    <div>
      <Table celled basic="very" className="table-services">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Estado</Table.HeaderCell>
            <Table.HeaderCell>Nombre</Table.HeaderCell>
            <Table.HeaderCell>Descripcion</Table.HeaderCell>
            <Table.HeaderCell>Vendidos</Table.HeaderCell>
            <Table.HeaderCell>Precio</Table.HeaderCell>
            <Table.HeaderCell>Acciones</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            services.length > 0 ? (services.map((service) => (
              <Table.Row key={service._id}>
                <Table.Cell>
                  <Image
                    centered
                    src={service.habilitado ? active : inactive}
                    size="mini"
                  />
                </Table.Cell>
                <Table.Cell className="text-items-table-services-bold">
                  {service.nombre}
                </Table.Cell>
                <Table.Cell className="text-items-table-services">
                  {service.descripcion}
                </Table.Cell>
                <Table.Cell className="text-items-table-services">
                  {service.cantidadVendidos}
                </Table.Cell>
                <Table.Cell className="text-items-table-services-bold">
                  ${service.precio}
                </Table.Cell>
                <Table.Cell>
                  <Button
                    color={service.habilitado ? "orange" : "green"}
                    size="mini"
                    onClick={() => {
                      setLoad(true);
                      activeService(service._id);
                    }}
                  >
                    {
                      service.habilitado
                          ? "Desactivar"
                          : "Activar"
                    }
                  </Button>
                  <Button
                    color="blue"
                    size="mini"
                    onClick={() => editService(service)}
                  >
                    Editar
                  </Button>
                  <Button color="red" size="mini" onClick={() => deleteService(service._id)}>
                    Eliminar
                  </Button>
                </Table.Cell>
              </Table.Row>
            )))
                : (
                  sinServicios()
                )


          }
        </Table.Body>
      </Table>

      <ModalEditService
        service={service}
        open={open}
        onReload={onReload}
        setOpen={setOpen}
      />
      <ToastContainer />
    </div>
  );
}
