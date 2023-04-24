import React, { useCallback, useState } from "react";
import { Button, Modal, Form, Input, Select, Image } from "semantic-ui-react";
import { toast, ToastContainer } from "react-toastify";
import { useAuth } from "../../../../hooks/useAuth";
import { Files } from "../../../../api/file";
import axios from "axios";
import Dropzone from "react-dropzone";
import "./modalNewFile.css";

const fileController = new Files();
export default function ModalNewFile({ open, setOpen, onReload }) {
  const { accesToken } = useAuth();
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [fileData, setFileData] = useState({
    url: null,
    tipo: "",
    nombre: "",
    descripcion: "",
    servicio: "",
  });

  const onDrop = (acceptedFiles) => {
    setImage(acceptedFiles[0]);
  };

  const cancell = () => {
    setOpen(false);
    setImage(null);
  };

  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const formData = new FormData();
    formData.append("url", image);
    formData.append("tipo", fileData.tipo);
    formData.append("nombre", fileData.nombre);
    formData.append("descripcion", fileData.descripcion);
    formData.append("servicio", fileData.servicio);

    setFileData({
      ...fileData,
      url: image,
    });
    const config = {
      headers: {
        Authorization: accesToken,
        "Content-Type": "multipart/form-data",
      },
    };

    const url = "http://localhost:8080/files/add";

    try {
      const res = await axios.post(url, formData, config);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
    console.log(fileData);
    toast.success("Archivo Guardado");
    setLoading(false);
    cancell();
    onReload();
  };

  return (
    <>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        size="small"
        closeIcon
      >
        <Modal.Header>Guardar Archivo Nuevo:</Modal.Header>
        <Modal.Content>
          <form onSubmit={onSubmit}>
            <div className="input-grid">
              <input
                type="text"
                placeholder="Nombre Archivo"
                class="input-text"
                onChange={(e) =>
                  setFileData({
                    ...fileData,
                    nombre: e.target.value,
                  })
                }
              />
              <select class="input-text" onChange={(e) => setFileData({
                    ...fileData,
                    tipo: e.target.value,
                  })}>
                <option value="IMG">IMAGEN</option>
                <option value="PDF">PDF</option>
              </select>
              <select class="input-text" onChange={(e) => setFileData({
                    ...fileData,
                    servicio: e.target.value,
                  })}>
                <option value="Cliente">Cliente</option>
                <option value="Proveedor">Proveedor</option>
                <option value="Factura">Factura</option>
                <option value="Resumen">Resumen</option>
                <option value="Otros..">Otro</option>

              </select>
              <input
                type="text"
                placeholder="Descripcion"
                class="input-text"
                onChange={(e) =>
                  setFileData({
                    ...fileData,
                    descripcion: e.target.value,
                  })
                }
              />
            </div>
            <Dropzone onDrop={onDrop}>
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p className="p-imagen-select">Arrastra una imagen aquí o haz clic para seleccionarla</p>
                  {image && (
                    <img
                      className="img-preview"
                      src={URL.createObjectURL(image)}
                      alt="imagen seleccionada"
                    />
                  )}
                </div>
              )}
            </Dropzone>
            <button className="btn-submit-file" type="submit" disabled={!image}>
              {
                loading ? "Guardando..." : "Guardar Archivo"
              }
            </button>
          </form>
        </Modal.Content>

        <Modal.Actions>
          <Button color="red" onClick={() => cancell(false)}>
            Cancelar
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
}

