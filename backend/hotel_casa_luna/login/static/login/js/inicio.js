const usuarioBtn = document.getElementById("usuarioBtn");
const adminBtn = document.getElementById("adminBtn");
usuarioBtn.addEventListener("click", () => {
    usuarioBtn.classList.add("active");
    adminBtn.classList.remove("active");
});
adminBtn.addEventListener("click", () => {
    adminBtn.classList.add("active");
    usuarioBtn.classList.remove("active");
});