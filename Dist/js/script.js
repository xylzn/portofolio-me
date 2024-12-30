
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


