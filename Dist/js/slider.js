function sliderPage(pageId) {
    const pages = ["Logo", "Apparel", "Poster", "Packaging", "Vector"];
    
    pages.forEach(page => {
      document.getElementById(page).style.display = page === pageId ? "block" : "none";
    });
  }
  
  // Event listeners untuk navigasi
  ["Logo", "Apparel", "Poster", "Packaging", "Vector"].forEach(page => {
    document.getElementById(page + "Btn").addEventListener("click", () => sliderPage(page));
  });
  