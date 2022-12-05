import React from "react";
import "./style.css"

function Form() {
  const [values, setValues] = React.useState({
    email: "",
    nombre: "",
    telefono: "",
  });

  function handleSubmit(evt) {
    evt.preventDefault();
  }

  function handleChange(evt) {
    const { target } = evt;
    const { name, value } = target;
    const newValues = {
      ...values,
      [name]: value,
    };

    setValues(newValues);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="Formulario">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
        />
        <label htmlFor="nombre">Nombre</label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          value={values.text}
          onChange={handleChange}
        />
        <label htmlFor="telefono">Telefono</label>
        <input
          id="telefono"
          name="telefono"
          type="text"
          value={values.text}
          onChange={handleChange}
        />
        <button type="submit">
          Enviar
        </button>
        <section className="datos_del_usuario">
          <h2>Tus datos para el envio son:</h2>
          <p>Nombre: {values.nombre}</p>
          <p>Email: {values.email}</p>
          <p>Telefono: {values.telefono}</p>
        </section>
      </form>
    </>
  );
}

export default Form;
