// document.addEventListener("DOMContentLoaded", () => {
//   const $boton = document.getElementById("boton");
//   $boton.addEventListener("click", () => {
//     const $elementoParaConvertir = document.body;
//     html2pdf();
//     set({
//       margin: 1,
//       filename: "estadistica.pdf",
//       image: {
//         type: "jpeg",
//         quality: 0.98,
//       },
//       html2canvas: {
//         scale: 3,
//         letterRendering: true,
//       },
//       jsPDF: {
//         unit: "in",
//         format: "a3",
//         orientation: "portrait",
//       },
//     })
//       .from($elementoParaConvertir)
//       .save()
//       .catch((err) => console.log(err))
//       .finally()
//       .then(() => {
//         console.log("guardado");
//       });
//   });
// });

// New Promise-based usage:

// const $boton = document.getElementById("boton");

// $boton.addEventListener("click", () => {
//   var element = document.getElementById("containerMaster");
//   html2pdf(element);

//   var opt = {
//     margin: 1,
//     filename: "myfile.pdf",
//     image: { type: "jpeg", quality: 0.98 },
//     html2canvas: { scale: 2 },
//     jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
//   };
//   console.log("llega");
//   html2pdf().from(element).set(opt).save();

//   // Old monolithic-style usage:
//   html2pdf(element, opt);
// });

window.html2canvas = html2canvas;
window.jsPDF = window.jspdf.jsPDF;

const $boton = document.getElementById("boton");
$boton.addEventListener("click", () => {
  makePDF();
});

function makePDF() {
  var imgData;
  html2canvas(document.getElementById("containerDataReport"), {
    allowTaint: true,
    useCORS: true,
    scale: 1,
  }).then((canvas) => {
    document.body.appendChild(canvas);

    var doc = new jsPDF();

    doc.setTextColor(150);
    doc.text(`REPORTE ESTADISTICO`, 70, 30);

    doc.setTextColor(150);
    doc.text(
      `La probabilidad de sacar         en ${totalThrow} tiros fue de ${one}`,
      20,
      70
    );
    doc.addImage("img/dadoUno.png", "JPEG", 83, 64, 6, 6);

    doc.setTextColor(150);
    doc.text(
      `La probabilidad de sacar         en ${totalThrow} tiros fue de ${two}`,
      20,
      80
    );
    doc.addImage("img/dadoDos.png", "JPEG", 84, 74, 6, 6);

    doc.setTextColor(150);
    doc.text(
      `La probabilidad de sacar         en ${totalThrow} tiros fue de ${three}`,
      20,
      90
    );
    doc.addImage("img/dadoTres.png", "JPEG", 84, 84, 6, 6);

    doc.setTextColor(150);
    doc.text(
      `La probabilidad de sacar         en ${totalThrow} tiros fue de ${four}`,
      20,
      100
    );
    doc.addImage("img/dado4.png", "JPEG", 84, 94, 6, 6);

    doc.setTextColor(150);
    doc.text(
      `La probabilidad de sacar          en ${totalThrow} tiros fue de ${five}`,
      20,
      110
    );
    doc.addImage("img/dado5.png", "JPEG", 84, 104, 6, 6);

    doc.setTextColor(150);
    doc.text(
      `La probabilidad de sacar           en ${totalThrow} tiros fue de ${six}`,
      20,
      120
    );
    doc.addImage("img/dado6.png", "JPEG", 84, 114, 6, 6);
    doc.save("docHtmlPDF");
  });
}
