let currentPage = 1;
const totalPages = 3;

function showPage(page) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.display = 'none';
    });

    // Show only the cards for the current page
    const pageCards = document.querySelectorAll(`.page-${page}`);
    pageCards.forEach(card => {
        card.style.display = 'block';
    });

    // Update page number display
    renderPageNumbers();
}

function changePage(step) {
    currentPage += step;
    showPage(currentPage);

    // Disable buttons based on the current page
    document.getElementById('prevBtn').disabled = (currentPage === 1);
    document.getElementById('nextBtn').disabled = (currentPage === totalPages);
}

function goToPage(page) {
    currentPage = page;
    showPage(currentPage);

    // Disable buttons based on the current page
    document.getElementById('prevBtn').disabled = (currentPage === 1);
    document.getElementById('nextBtn').disabled = (currentPage === totalPages);
}

function renderPageNumbers() {
    const pageNumbersContainer = document.getElementById('pageNumbers');
    pageNumbersContainer.innerHTML = '';  // Clear previous page numbers

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.innerText = i;
        pageButton.classList.add('page-btn');
        
        // Highlight the current page
        if (i === currentPage) {
            pageButton.classList.add('active');
        }
        
        // Change to the selected page when clicked
        pageButton.onclick = () => goToPage(i);
        pageNumbersContainer.appendChild(pageButton);
    }
}

// Initialize the first page
showPage(currentPage);
