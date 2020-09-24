import React, { useState } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Editor } from "@tinymce/tinymce-react";

// const Produtos = (dados) => {
//   return (
//     <section>
//       <h1>{dados.id} op</h1>
//       <span>{dados.preco}</span>
//       <img src={dados.fotos} alt="" style={{ maxWidth: 500 }} />
//     </section>
//   );
// };

export const Apis = () => {
  const [valor, setValor] = useState("sdffsfsdfdsf");
  console.log(valor);
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(null);

  // async function handleClick(event) {
  //   setLoading(true);
  //   const evento = event.target.innerText;
  //   const response = await fetch(
  //     `https://ranekapi.origamid.dev/json/api/produto/${evento}`
  //   );

  //   const json = await response.json();
  //   setData(json);
  //   setLoading(false);
  //   console.log(data);
  // }

  return (
    // <div>
    //   <button style={{ margin: ".5rem" }} onClick={handleClick}>
    //     notebook
    //   </button>
    //   <button style={{ margin: ".5rem" }} onClick={handleClick}>
    //     smartphone
    //   </button>
    //   <button style={{ margin: ".5rem" }} onClick={handleClick}>
    //     tablet
    //   </button>
    //   <section>
    //     {loading && <p>Carregando...</p>}
    //     {!loading && data && <Produtos dados={data} />}
    //   </section>
    // </div>
    <div>
      <p>Pagina</p>
      {/* <CKEditor
        editor={ClassicEditor}
        data="<p>Hello from CKEditor 5!</p>"
        onInit={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
      /> */}
      <Editor
        apiKey="tq4nx5n0bojwxdg38hwzojmxvfny1n3yg34ljv1upiy1t551"
        initialValue={valor}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | bold italic | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist | ",
        }}
        onEditorChange={(content, editor) => {
          setValor(content);
        }}
      />

      <textarea name="" disabled>
        {valor}
      </textarea>
    </div>
  );
};
