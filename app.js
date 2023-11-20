function searchHotels() {
    const checkInDate = document.getElementById('checkIn').value;
    const checkOutDate = document.getElementById('checkOut').value;

    // Perform hotel search based on check-in and check-out dates
    // This is where you would make API calls or fetch data from a server

    // For demonstration purposes, a static list of hotels is used
    const hotels = [
        { name: 'Hotel A', image: 'hotel1.jpg', price: '$150/night' },
        { name: 'Hotel B', image: 'hotel2.jpg', price: '$120/night' },
        { name: 'Hotel C', image: 'hotel3.jpg', price: '$200/night' }
    ];

    displayResults(hotels);
}

function displayResults(hotels) {
    const resultsSection = document.getElementById('results');
    resultsSection.innerHTML = '';

    hotels.forEach(hotel => {
        const hotelDiv = document.createElement('div');
        hotelDiv.classList.add('hotel');

        const image = document.createElement('img');
        image.src = hotel.image;
        image.alt = hotel.name;

        const name = document.createElement('h3');
        name.textContent = hotel.name;

        const price = document.createElement('p');
        price.textContent = `Price: ${hotel.price}`;

        hotelDiv.appendChild(image);
        hotelDiv.appendChild(name);
        hotelDiv.appendChild(price);

        resultsSection.appendChild(hotelDiv);
    });
}
