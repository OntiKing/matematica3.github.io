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
    doc.text(`REPORTE ESTADISTICO`, 60, 10);
    doc.addImage("img/matematica-3.png", "JPEG", 80, 20, 30, 40);

    doc.setTextColor(150);
    doc.text(
      `La probabilidad de sacar uno en ${totalThrow} tiros es de ${one}`,
      20,
      70
    );

    doc.setTextColor(255, 0, 0);
    doc.text(
      `La probabilidad de sacar dos en ${totalThrow} tiros es de ${two}`,
      20,
      80
    );

    doc.setTextColor(0, 255, 0);
    doc.text(
      `La probabilidad de sacar tres en ${totalThrow} tiros es de ${three}`,
      20,
      90
    );

    doc.setTextColor(0, 0, 255);
    doc.text(
      `La probabilidad de sacar cuatro en ${totalThrow} tiros es de ${four}`,
      20,
      100
    );

    doc.setTextColor("red");
    doc.text(
      `La probabilidad de sacar cinco en ${totalThrow} tiros es de ${five}`,
      20,
      110
    );

    doc.setTextColor("green");
    doc.text(
      `La probabilidad de sacar seis en ${totalThrow} tiros es de ${six}`,
      20,
      120
    );

    doc.save("docHtmlPDF");
  });
}
