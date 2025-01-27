document.addEventListener("DOMContentLoaded", function () {
  /* Alla bilder inlagda i en lista (array) för att vi ska kunna göra dem till 360-bilder */
  const panoramaData = [
    "./360Site/images/360pictest1.png", // Bild 1
    "./360Site/images/360pictest2.png", // Bild 2
    "./360Site/images/360pictest3.png", // Bild 3
    "./360Site/images/360pictest4.png", // Bild 4
    "./360Site/images/360pictest5.png", // Bild 5
    "./360Site/images/360pictest6.png", // Bild 6
    "./360Site/images/360pictest7.png", // Bild 7
    "./360Site/images/360pictest8.png", // Bild 8
    "./360Site/images/360pictest9.png", // Bild 9
    "./360Site/images/360pictest10.png", // Bild 10
    "./360Site/images/360pictest11.png", // Bild 11
    "./360Site/images/360pictest12.png", // Bild 12
    "./360Site/images/360pictest13.png", // Bild 13
    "./360Site/images/360pictest14.png", // Bild 14
    "./360Site/images/360pictest15.png", // Bild 15
    "./360Site/images/360pictest16.png", // Bild 16
  ];

  // Skapa en popup (modal) för att visa 360-bilder
  const modal = document.createElement("div"); // Vi skapar en div
  modal.classList.add("modal"); // Lägg till en klass som heter "modal" för styling
  modal.innerHTML = `
    <div class="modal-content">
      <!-- En knapp för att stänga popupen -->
      <span class="close">
        <img src="https://pmu.se/wp-content/themes/pmu/assets/img/close_menu.svg" alt="">
      </span>
      <!-- Här visas själva 360-bilden -->
      <div id="modal-panorama"></div>
    </div>
  `;
  document.body.appendChild(modal); // Lägg popupen i sidan (i <body>)

  // Funktion för att stänga popupen
  const closeModal = () => {
    modal.style.display = "none"; // Dölj popupen
    document.body.classList.remove("blur-background"); // Ta bort suddig bakgrund
  };

  // Koppla stängningsfunktionen till "X"-knappen
  modal.querySelector(".close").addEventListener("click", closeModal);

  // Om man klickar utanför popupen (på bakgrunden/sidan av bilden) så stängs den också
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal(); // Kör samma funktion som när man klickar på "X"
    }
  });

  // Loopar igenom alla bilder i listan och gör något för varje
  panoramaData.forEach((imagePath, index) => {
    const panoramaId = `panorama${index + 1}`; // Skapar ett unikt ID för varje bild
    const panoramaElement = document.getElementById(panoramaId); // Hittar elementet på sidan med rätt ID

    // Sätter bakgrundsbilden så att man ser en stillbild innan man öppnar 360-vyn
    panoramaElement.style.backgroundImage = `url(${imagePath})`;

    // När man klickar på en bild...
    panoramaElement.addEventListener("click", () => {
      modal.style.display = "flex"; // Visa popupen
      document.body.classList.add("blur-background"); // Lägg till suddig bakgrund (utanför själva bilden)

      // Starta Pannellum för att visa 360-bilden
      pannellum.viewer("modal-panorama", {
        type: "equirectangular", // Typ av bild (equirektangulär för 360)
        panorama: imagePath, // Bilden som ska visas
        autoLoad: true, // Ladda bilden automatiskt
        showControls: true, // Visa knappar för att navigera i 360-vyn
      });
    });
  });
});
