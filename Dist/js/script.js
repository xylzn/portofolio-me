window.onscroll = function () {
    const header = document.querySelector('header');
    const fixednav = header.offsetTop;

    if (window.scrollY > fixednav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

// Burger
const burger = document.querySelector('#burger');
const navMenu = document.querySelector('#nav-menu');

burger.addEventListener('click', function () {
    burger.classList.toggle('burger-active');
    navMenu.classList.toggle('hidden');
})
document.addEventListener("DOMContentLoaded", function () {
    var load = document.getElementById("preloader");

    window.addEventListener("load", function () {
        console.log("Load Helua");
        if (load) { // Pastikan elemen loader ada
            load.style.display = "none";
            console.log("Ilang siah");
        } else {
            console.log("Loader element not found");
        }
    });
});




// Data contoh untuk karya


// Fungsi untuk membuat elemen secara dinamis
// Data contoh untuk karya
const news = [
    { id: 'apparel1', title: 'Cracy X Kosi', imageUrl: 'Dist/Foto/Gallery/Apparel/Cracy X Kosi.jpg' },
    { id: 'apparel2', title: 'Duck Bill X Rezz', imageUrl: 'Dist/Foto/Gallery/Apparel/Duck Bill X Rezz.jpg' },
    { id: 'apparel3', title: 'Duckrezz', imageUrl: 'Dist/Foto/Gallery/Apparel/Duck rezz.jpg' },
    { id: 'apparel4', title: 'Duckbill', imageUrl: 'Dist/Foto/Gallery/Apparel/Duckbill.jpg' },
    { id: 'apparel5', title: 'Tiger', imageUrl: 'Dist/Foto/Gallery/Apparel/Tiger.jpg' },
];
const logos = [
    { id: 'logo1', title: 'AR TECHNO', imageUrl: 'Dist/Foto/Gallery/Logo/AR TECHNO.jpg', url: 'https://example.com/logo' },
    { id: 'logo2', title: 'ARGO', imageUrl: 'Dist/Foto/Gallery/Logo/ARGO-2.png', url: 'https://example.com/logo' },
    { id: 'logo3', title: 'R-TECH', imageUrl: 'Dist/Foto/Gallery/Logo/R-TECH.jpg', url: 'https://example.com/logo' },
    { id: 'logo4', title: 'Rahma Wedding', imageUrl: 'Dist/Foto/Gallery/Logo/Rahman Wedding.png', url: 'https://example.com/logo' },
    // Tambahkan lebih banyak logo sesuai kebutuhan
];

const vectors = [
    { id: 'vector1', title: 'Perempuan', imageUrl: 'Dist/Foto/Gallery/Vector/Vektor Gaming.jpg', url: 'https://example.com/karya-terbaru' },
    // Tambahkan lebih banyak vector sesuai kebutuhan
];

const apparels = [
    { id: 'apparel1', title: 'Cracy X Kosi', imageUrl: 'Dist/Foto/Gallery/Apparel/Cracy X Kosi.jpg' },
    { id: 'apparel2', title: 'Duck Bill X Rezz', imageUrl: 'Dist/Foto/Gallery/Apparel/Duck Bill X Rezz.jpg' },
    { id: 'apparel3', title: 'Duckrezz', imageUrl: 'Dist/Foto/Gallery/Apparel/Duck rezz.jpg' },
    { id: 'apparel4', title: 'Duckbill', imageUrl: 'Dist/Foto/Gallery/Apparel/Duckbill.jpg' },
    { id: 'apparel5', title: 'Gheneosit', imageUrl: 'Dist/Foto/Gallery/Apparel/Gheneosit.jpg' },
    { id: 'apparel5', title: 'Shia X Kosi', imageUrl: 'Dist/Foto/Gallery/Apparel/Shia X Kosi.jpg' },
    { id: 'apparel5', title: 'Olaf', imageUrl: 'Dist/Foto/Gallery/Apparel/Olaf.jpg' },
    { id: 'apparel5', title: 'Tiger', imageUrl: 'Dist/Foto/Gallery/Apparel/Tiger.jpg' },
    // Tambahkan lebih banyak apparel sesuai kebutuhan
];
const packagings = [
    { id: 'packaging1', title: 'Permen Khas Sumbawa', imageUrl: 'Dist/Foto/Gallery/Packaging/Design Lomba 1.jpg' },
    // Tambahkan lebih banyak apparel sesuai kebutuhan
];
const posters = [
    { id: 'poster1', title: 'Ayo Olahraga!', imageUrl: 'Dist/Foto/Gallery/Poster/Poster Hayu Olahraga 2.jpg' },
    { id: 'poster2', title: 'Falling Into The Heaven With You', imageUrl: 'Dist/Foto/Gallery/Poster/Desain Sampul -2.jpg' },
    { id: 'poster3', title: 'Magic Is Spirit', imageUrl: 'Dist/Foto/Gallery/Poster/Desain Sampul-3.jpg' },
    { id: 'poster4', title: 'Grow with Concept', imageUrl: 'Dist/Foto/Gallery/Poster/Desain Sampul-5.jpg' },
    { id: 'poster5', title: 'For My Honey In High School', imageUrl: 'Dist/Foto/Gallery/Poster/Desain Sampul.jpg' },

    // Tambahkan lebih banyak apparel sesuai kebutuhan
];

// Fungsi untuk gallery new
function createNewGallery() {
    const container = document.getElementById('artworkGalleryNew');

    // Membuat elemen judul terpisah
    const newTitle = document.createElement('h2');
    newTitle.className = 'text-2xl font-bold text-orange-500 mt-10 mb-5 text-center';
    newTitle.textContent = 'Karya Terbaru';

    // Menambahkan judul ke dalam container
    container.appendChild(newTitle);

    // Membuat section baru untuk karya seni
    const newSection = document.createElement('div');
    newSection.className = 'w-full px-0 flex flex-wrap justify-center xl:w-8/12 xl:mx-auto';

    // Menambahkan karya seni ke dalam newSection
    news.forEach(artwork => {
        newSection.appendChild(createArtworkElement(artwork));
    });

    // Menambahkan newSection ke dalam container
    container.appendChild(newSection);
}
// Fungsi untuk gallery logo
function createLogoGallery() {
    const container = document.getElementById('artworkGalleryLogo');

    // Membuat elemen judul terpisah
    const logoTitle = document.createElement('h2');
    logoTitle.className = 'text-2xl font-bold text-orange-500 mt-10 mb-5 text-center';
    logoTitle.textContent = 'Karya Terbaru';

    // Menambahkan judul ke dalam container
    container.appendChild(logoTitle);

    // Membuat section baru untuk karya seni
    const logoSection = document.createElement('div');
    logoSection.className = 'w-full px-0 flex flex-wrap justify-center xl:w-8/12 xl:mx-auto';

    // Menambahkan karya seni ke dalam logoSection
    logos.forEach(artwork => {
        logoSection.appendChild(createArtworkElement(artwork));
    });

    // Menambahkan logoSection ke dalam container
    container.appendChild(logoSection);
}

// Fungsi untuk gallery vector
function createVectorGallery() {
    const container = document.getElementById('artworkGalleryVector');

    // Membuat elemen judul terpisah
    const vectorTitle = document.createElement('h2');
    vectorTitle.className = 'text-2xl font-bold text-orange-500 mt-10 mb-5 text-center';
    vectorTitle.textContent = 'Vector';

    // Menambahkan judul ke dalam container
    container.appendChild(vectorTitle);

    // Membuat section baru untuk karya seni
    const vectorSection = document.createElement('div');
    vectorSection.className = 'w-full px-0 flex flex-wrap justify-center xl:w-8/12 xl:mx-auto';

    // Menambahkan karya seni ke dalam vectorSection
    vectors.forEach(artwork => {
        vectorSection.appendChild(createArtworkElement(artwork));
    });

    // Menambahkan vectorSection ke dalam container
    container.appendChild(vectorSection);
}

// Fungsi untuk gallery apparel
function createApparelGallery() {
    const container = document.getElementById('artworkGalleryApparel');

    // Membuat elemen judul terpisah
    const apparelTitle = document.createElement('h2');
    apparelTitle.className = 'text-2xl font-bold text-orange-500 mt-10 mb-5 text-center';
    apparelTitle.textContent = 'Apparel';

    // Menambahkan judul ke dalam container
    container.appendChild(apparelTitle);

    // Membuat section baru untuk karya seni
    const apparelSection = document.createElement('div');
    apparelSection.className = 'w-full px-0 flex flex-wrap justify-center xl:w-8/12 xl:mx-auto';

    // Menambahkan karya seni ke dalam apparelSection
    apparels.forEach(artwork => {
        apparelSection.appendChild(createArtworkElement(artwork));
    });

    // Menambahkan apparelSection ke dalam container
    container.appendChild(apparelSection);
}
// Packaging
function createPackagingGallery() {
    const container = document.getElementById('artworkGalleryPackaging');

    // Membuat elemen judul terpisah
    const packagingTitle = document.createElement('h2');
    packagingTitle.className = 'text-2xl font-bold text-orange-500 mt-10 mb-5 text-center';
    packagingTitle.textContent = 'Packaging';

    // Menambahkan judul ke dalam container
    container.appendChild(packagingTitle);

    // Membuat section baru untuk karya seni
    const packagingSection = document.createElement('div');
    packagingSection.className = 'w-full px-0 flex flex-wrap justify-center xl:w-8/12 xl:mx-auto';

    // Menambahkan karya seni ke dalam packagingSection
    packagings.forEach(artwork => {
        packagingSection.appendChild(createArtworkElement(artwork));
    });

    // Menambahkan packagingSection ke dalam container
    container.appendChild(packagingSection);
}
// Poster
function createPosterGallery() {
    const container = document.getElementById('artworkGalleryPoster');

    // Membuat elemen judul terpisah
    const posterTitle = document.createElement('h2');
    posterTitle.className = 'text-2xl font-bold text-orange-500 mt-10 mb-5 text-center';
    posterTitle.textContent = 'Poster';

    // Menambahkan judul ke dalam container
    container.appendChild(posterTitle);

    // Membuat section baru untuk karya seni
    const posterSection = document.createElement('div');
    posterSection.className = 'w-full px-0 flex flex-wrap justify-center xl:w-8/12 xl:mx-auto';

    // Menambahkan karya seni ke dalam posterSection
    posters.forEach(artwork => {
        posterSection.appendChild(createArtworkElement(artwork));
    });

    // Menambahkan posterSection ke dalam container
    container.appendChild(posterSection);
}

// Fungsi untuk membuat elemen karya
function createArtworkElement(artwork) {
    const artworkDiv = document.createElement('div');
    artworkDiv.className = 'mb-8 p-4 md:w-1/3'; 
    // Membuat elemen gambar
    const imageDiv = document.createElement('div');
    imageDiv.className = 'rounded-md drop-shadow-md overflow-hidden';
    const img = document.createElement('img');
    img.src = artwork.imageUrl;
    img.alt = artwork.title;
    img.className = 'w-full';
    imageDiv.appendChild(img);

    // Membuat kontainer untuk judul dan tombol
    const containerDiv = document.createElement('div');
    containerDiv.className = 'flex justify-between items-center mt-2'; // Menggunakan flexbox untuk mengatur posisi

    // Membuat elemen judul
    const title = document.createElement('h3');
    title.className = ' text-gelap text-l '; // Menggunakan kelas yang sama
    title.textContent = artwork.title;

    // Membuat tombol like
    const likeButton = document.createElement('button');
    likeButton.innerHTML = `<i class="fa-regular fa-heart">`; // Menambahkan margin
    likeButton.className = 'font-normal text-utama text-xl py-2 px-2 rounded flex items-center'; // Menggunakan kelas yang sama
    likeButton.onclick = function () {
        toggleLove(likeButton);
    };

    // Membuat tombol share
    const shareButton = document.createElement('button');
    shareButton.innerHTML = `<i class="fa-solid fa-share"></i>`;
    shareButton.className = 'text-utama text-xl py-2 px-2 rounded flex items-center';
    shareButton.onclick = function () {
        shareArtwork(artwork); // Panggil fungsi shareArtwork saat tombol diklik
    };
    function shareArtwork(artwork) {
        // Buat pesan yang akan dibagikan
        const message = `Lihat karya "${artwork.title}" ini!`;
        
        // URL untuk berbagi di WhatsApp
        const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
        
        // URL untuk Instagram (hanya mengarahkan pengguna ke Instagram)
        const instagramUrl = `https://www.instagram.com/`;
    
        // Tampilkan modal dengan tautan berbagi
        const shareModal = document.getElementById('shareModal');
        document.getElementById('whatsappShare').parentElement.href = whatsappUrl;
        document.getElementById('instagramShare').href = instagramUrl;
    
        // Tampilkan modal
        shareModal.style.display = "block";
    
        // Menutup modal saat tombol close diklik
        document.getElementById('closeShareModal').onclick = function() {
            shareModal.style.display = "none";
        }
    
        // Menutup modal saat klik di luar modal
        window.onclick = function(event) {
            if (event.target == shareModal) {
                shareModal.style.display = "none";
            }
        }
    }



    // Menambahkan judul dan tombol ke dalam kontainer
    containerDiv.appendChild(title);
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'flex justify-end gap-1'; // Kontainer untuk tombol
    buttonContainer.appendChild(likeButton);
    buttonContainer.appendChild(shareButton);
    containerDiv.appendChild(buttonContainer);

    // Menambahkan kontainer ke artworkDiv
    artworkDiv.appendChild(imageDiv);
    artworkDiv.appendChild(containerDiv);

    return artworkDiv;
}

// Panggil fungsi-fungsi saat halaman dimuat
window.onload = function () {
    createNewGallery();
    createLogoGallery();
    createVectorGallery();
    createApparelGallery();
    createPackagingGallery();
    createPosterGallery();
};

function toggleLove(button) {
    // Ganti kelas ikon
    const icon = button.querySelector('i');
    if (icon.classList.contains('fa-regular')) {
        icon.classList.remove('fa-regular');
        icon.classList.add('fa-solid');
    } else {
        icon.classList.remove('fa-solid');
        icon.classList.add('fa-regular');
    }
}