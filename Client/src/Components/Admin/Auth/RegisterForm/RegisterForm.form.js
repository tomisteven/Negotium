import * as Yup from "yup";

//valores iniciales del formulario
export function initialValues() {
  return {
    email: "",
    password: "",
    repeatPassword: "",
    privacyPolicy: false
  };
}

//validaciones del formulario
export function validationSchema() {

  return Yup.object({
    email: Yup.string()
    .email("El email no es valido")
    .required("El email es obligatorio"),
    password: Yup.string()
    .required("El password es obligatorio"),
    repeatPassword: Yup.string()
    .required("El password es obligatorio")
    .oneOf([Yup.ref("password")], "Las contraseñas no son iguales"), //compara el valor de repeatPassword
    privacyPolicy: Yup.boolean().isTrue(true)
    });
}