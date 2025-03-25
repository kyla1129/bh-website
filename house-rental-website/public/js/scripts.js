// This file contains JavaScript code for client-side functionality, such as form validation, dynamic content loading, and event handling.

document.addEventListener('DOMContentLoaded', function() {
    const houseList = document.getElementById('house-list');
    
    // Function to fetch houses from the server
    async function fetchHouses() {
        try {
            const response = await fetch('/api/houses');
            const houses = await response.json();
            displayHouses(houses);
        } catch (error) {
            console.error('Error fetching houses:', error);
        }
    }

    // Function to display houses on the page
    function displayHouses(houses) {
        houseList.innerHTML = '';
        houses.forEach(house => {
            const houseItem = document.createElement('div');
            houseItem.className = 'house-item';
            houseItem.innerHTML = `
                <h3>${house.title}</h3>
                <p>${house.description}</p>
                <p>Price: $${house.price}</p>
                <a href="/houses/${house.id}">View Details</a>
            `;
            houseList.appendChild(houseItem);
        });
    }

    // Initial fetch of houses
    fetchHouses();
});