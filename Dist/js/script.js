
// animate css
// nvbar-fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixednav = header.offsetTop;

    if(window.scrollY > fixednav) {
        header.classList.add('navbar-fixed');
    } else{
        header.classList.remove('navbar-fixed');
    }
}

// Burger
const burger = document.querySelector('#burger');
const navMenu =  document.querySelector('#nav-menu');

burger.addEventListener('click', function(){
    burger.classList.toggle('burger-active');
    navMenu.classList.toggle('hidden');
})

// Form
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(e)
{
    e.preventDefault();
    const url = e.target.action;
    const formData = new FormData(contactForm);

    fetch(url, {
        method: "POST",
        body: formData,
        mode:"no-cors",
    })
        .then(() => {
        // url thank u
        window.location.href = "/contact.html";
        })
        .catch((e) => alert("Error"));
    

});

// PreLoader
document.addEventListener("DOMContentLoaded", function() {
    var load = document.getElementById("preloader");

    window.addEventListener("load", function() {
        console.log("Load Helua");
        if (load) { // Pastikan elemen loader ada
            load.style.display = "none";
            console.log("Ilang siah");
        } else {
            console.log("Loader element not found");
        }
    });
});




// Comment

    let currentCommentId = null;

    function openCommentModal(id) {
        currentCommentId = id; // Simpan ID karya saat ini
        document.getElementById('commentModal').classList.remove('hidden');
    }

    function closeCommentModal() {
        document.getElementById('commentModal').classList.add('hidden');
        document.getElementById('commentInput').value = ''; // Kosongkan input
    }

    document.getElementById('submitComment').onclick = function() {
        const commentText = document.getElementById('commentInput').value.trim();
        const commentsDiv = document.getElementById(`comments${currentCommentId}`);

        if (commentText) {
            // Membuat elemen komentar baru
            const newComment = document.createElement('div');
            newComment.className = 'bg-gray-200 p-2 rounded mt-1';
            newComment.textContent = commentText;

            // Menambahkan komentar ke div komentar
            commentsDiv.appendChild(newComment);

            // Menutup modal
            closeCommentModal();
        } else {
            alert('Komentar tidak boleh kosong!');
        }
    };

    // ... like button ...
function toggleLove(button, itemId) {
    const heartIcon = button.querySelector('i');
    const countDisplay = button.querySelector('.love-count');
    let count = parseInt(countDisplay.textContent) || 0;

    // Ambil hitungan dari Local Storage
    const storedCount = localStorage.getItem(itemId);
    if (storedCount) {
        count = parseInt(storedCount);
    }

    const isLoved = heartIcon.classList.contains('fa-solid');

    if (isLoved) {
        heartIcon.classList.remove('fa-solid');
        heartIcon.classList.add('fa-regular');
        count--; // Kurangi hitungan
    } else {
        heartIcon.classList.remove('fa-regular');
        heartIcon.classList.add('fa-solid');
        count++; // Tambah hitungan
    }

    countDisplay.textContent = count; // Perbarui tampilan hitungan
    localStorage.setItem(itemId, count); // Simpan hitungan ke Local Storage
    localStorage.setItem(itemId + '-liked', !isLoved); // Simpan status like
}

// Memuat status saat halaman dimuat
window.onload = function() {
    const buttons = document.querySelectorAll('.love-button'); // Ganti dengan selector yang sesuai
    buttons.forEach(button => {
        const itemId = button.getAttribute('data-item-id'); // Ambil ID item
        const storedCount = localStorage.getItem(itemId);
        const likedStatus = localStorage.getItem(itemId + '-liked');

        if (storedCount) {
            button.querySelector('.love-count').textContent = storedCount; // Set hitungan
        }

        if (likedStatus === 'true') {
            button.querySelector('i').classList.remove('fa-regular');
            button.querySelector('i').classList.add('fa-solid'); // Set ikon menjadi solid
        }
    });
};

// Share Function
// Fungsi untuk membuka modal
document.getElementById('shareButton').onclick = function() {
    document.getElementById('shareModal').classList.remove('hidden');
}

// Fungsi untuk menutup modal
document.getElementById('closeModal').onclick = function() {
    document.getElementById('shareModal').classList.add('hidden');
}

// Fungsi untuk berbagi ke WhatsApp
function shareToWhatsApp(url) {
    const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`;
    window.open(whatsappShareUrl, '_blank');
}

// Fungsi untuk berbagi ke Threads
function shareToThreads(url) {
    const threadsShareUrl = `https://www.threads.net/share?url=${encodeURIComponent(url)}`;
    window.open(threadsShareUrl, '_blank');
}

// Fungsi untuk berbagi ke Instagram
function shareToInstagram(url) {
    alert("Untuk membagikan ke Instagram, salin dan tempel URL berikut: " + url);
}



