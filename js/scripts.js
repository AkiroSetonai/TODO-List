function openModal() {
    document.getElementById('category-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('category-modal').style.display = 'none';
}

function addCategory() {
    const categoryName = document.getElementById('modal-category-name').value;
    const categoryColor = document.getElementById('modal-category-color').value;

    if (categoryName) {
        const newButton = document.createElement('button');
        newButton.className = 'category';
        newButton.style.backgroundColor = categoryColor;
        newButton.textContent = categoryName;


        newButton.onclick = function() {
            if (confirm('Tem certeza que deseja excluir esta categoria?')) {
                newButton.remove();
            }
        };

        document.getElementById('category-container').appendChild(newButton);


        document.getElementById('modal-category-name').value = '';
        document.getElementById('modal-category-color').value = '#FFFFFF'; 

        closeModal(); 
    } else {
        alert('Por favor, insira um nome para a categoria.');
    }
}

window.onclick = function(event) {
    const modal = document.getElementById('category-modal');
    if (event.target == modal) {
        closeModal();
    }
}
