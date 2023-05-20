let sidebar = document.getElementById('sidebar');
let btnsidebar = document.getElementById('btn_sidebar');
console.log(btnsidebar);


btnsidebar.addEventListener('click', () => {
    sidebar.classList.toggle('close');
})