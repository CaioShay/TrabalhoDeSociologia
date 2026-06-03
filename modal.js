if (localStorage.getItem('modalFechado') == 'true') {
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';
}

function fecharModal() {
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';
    localStorage.setItem('modalFechado', 'true');
}