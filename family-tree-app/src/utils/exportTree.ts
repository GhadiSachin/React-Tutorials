import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export async function exportPDF(elementId: string) {
  const element = document.getElementById(elementId);
  if (!element) return;

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
  });

  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF({
    orientation: "landscape",
    unit: "px",
    format: "a4",
  });

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  pdf.addImage(
    imgData,
    "PNG",
    0,
    0,
    pageWidth,
    pageHeight,
    undefined,
    "FAST"
  );

  pdf.save("family-tree.pdf");
}
