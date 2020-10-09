import React from "react";

export const Modal = () => {

  // function initMemed() {
  //   var script = document.createElement("script");
  //   script.setAttribute("type", "text/javascript");
  //   script.setAttribute("data-color", "#COR_PRIMARIA_EM_HEXADECIMAL");
  //   script.setAttribute("data-container", "memed-container");
  //   script.setAttribute(
  //     "data-token",
  //     "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.WzMyMTczLCI5YjQ1NDJkYzc5NGI4MDBjMWE4ODRlNDI5ZWEzY2FhMCIsIjIwMjAtMTAtMDgiLCJzaW5hcHNlLnByZXNjcmljYW8iLCJwYXJ0bmVyLjMuMjc1NzUiXQ.BdoEwll_NH-MMhkYFum2r1m6Esw9jdSJYAeIsAFt_us"
  //   );
  //   script.src =
  //     "http://sandbox.memed.com.br/modulos/plataforma.sinapse-prescricao/build/sinapse-prescricao.min.js";
  //   // script.onload = function () {
  //   //   // Obs: Essa função precisa ser implementada, seguindo o artigo de comandos para definição de paciente (Link abaixo).
  //   //   initEventsMemed();
  //   // };
  //   document.body.appendChild(script);
  // }
  // initMemed()
  return (
    <div>
      <div id="memed-container" style={{width: 820, height: 700}}></div>
    </div>
  );
};