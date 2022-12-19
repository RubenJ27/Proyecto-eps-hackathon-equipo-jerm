import React, { useEffect, useState } from "react";
import { Grid } from "gridjs-react";
const DataTabla = () => {
  const [data, setData] = useState([]);
  const pedido = async () => {
    try {
      const res = await fetch(`http://localhost:5000/eps`);
      const dataR = await res.json();
      setData(dataR);
      console.log(dataR);
    } catch (error) {
      // console.log(error);
      alert("Error Conect");
    }
  };
  useEffect(() => {
    pedido();
    // eslint-disable-next-line
  }, []);
  return (
    <Grid
      data={data}
      columns={[
        "codigo",
        "ideps",
        {
          id: "fecha_corte",
          name: "fecha",
          formatter: (cell) => `${cell}`,
        },

        {
          id: "nomservicio",
          name: "servicios",
        },
        {
          id: "nomespecifique",
          name: "Especificacion",
        },
        {
          id: "nomindicador",
          name: "identificador",
        },
        {
          id: "Resultado",
          name: "Dias espera",
          formatter: (cell) => `${Math.round(cell)}`,
        },
      ]}
      search={true}
      pagination={{
        enabled: true,
        limit: 7,
      }}
    />
  );
};
export default DataTabla;
