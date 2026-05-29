// Cyberattack Timeline Explorer
let currentYearFilter = 2026;
let currentTypeFilter = 'all';
let currentSearchTerm = '';
let map;
let markers = {};

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    initializeMap();
    populateTimeline();
    setupEventListeners();
});

// Initialize Leaflet Map
function initializeMap() {
    map = L.map('map').setView([20, 0], 2);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(map);
}

// Populate Timeline List
function populateTimeline() {
    const timelineList = document.getElementById('timelineList');
    timelineList.innerHTML = '';
    
    const filtered = filterAttacks();
    
    if (filtered.length === 0) {
        timelineList.innerHTML = '<p style="padding: 20px; text-align: center; color: #999;">No attacks found</p>';
        return;
    }
    
    filtered.forEach((attack, index) => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        item.innerHTML = `
            <div class="timeline-item-year">${attack.year}</div>
            <div class="timeline-item-name">${attack.name}</div>
            <div class="timeline-item-type">${attack.type}</div>
        `;
        
        item.addEventListener('click', () => showAttackDetails(attack, item));
        item.addEventListener('mouseenter', () => updateMap(attack));
        
        timelineList.appendChild(item);
    });
}

// Filter attacks based on current criteria
function filterAttacks() {
    return CYBERATTACKS.filter(attack => {
        const yearMatch = attack.year <= currentYearFilter;
        const typeMatch = currentTypeFilter === 'all' || attack.type.toLowerCase() === currentTypeFilter;
        const searchMatch = currentSearchTerm === '' || 
            attack.name.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
            attack.type.toLowerCase().includes(currentSearchTerm.toLowerCase());
        
        return yearMatch && typeMatch && searchMatch;
    });
}

// Show attack details in the right panel
function showAttackDetails(attack, element) {
    // Update active state
    document.querySelectorAll('.timeline-item').forEach(item => item.classList.remove('active'));
    element.classList.add('active');
    
    const detailsCard = document.getElementById('detailsCard');
    const countriesList = attack.countries.map(c => `<span class="country-badge">${c}</span>`).join('');
    
    detailsCard.innerHTML = `
        <div class="attack-detail-title">${attack.name}</div>
        
        <div class="detail-row">
            <div class="detail-label">Year</div>
            <div class="detail-value">${attack.year}</div>
        </div>
        
        <div class="detail-row">
            <div class="detail-label">Attack Type</div>
            <div class="detail-value">${attack.type}</div>
        </div>
        
        <div class="detail-row">
            <div class="detail-label">Damage Cost</div>
            <div class="detail-value damage-cost">${attack.damageCost}</div>
        </div>
        
        <div class="detail-row">
            <div class="detail-label">Countries Affected</div>
            <div class="countries-list">${countriesList}</div>
        </div>
        
        <div class="detail-row">
            <div class="detail-label">Description</div>
            <div class="detail-value attack-description">${attack.description}</div>
        </div>
    `;
    
    updateMap(attack);
}

// Update map with attack locations
function updateMap(attack) {
    // Clear existing markers
    Object.values(markers).forEach(marker => map.removeLayer(marker));
    markers = {};
    
    // Add markers for each country
    attack.locations.forEach(location => {
        const marker = L.circleMarker([location.lat, location.lon], {
            radius: 8,
            fillColor: '#e53935',
            color: '#d32f2f',
            weight: 2,
            opacity: 1,
            fillOpacity: 0.8
        }).addTo(map);
        
        marker.bindPopup(`
            <strong>${location.country}</strong><br>
            ${location.description || 'Affected area'}
        `);
        
        markers[location.country] = marker;
    });
    
    // Fit map to show all markers
    if (attack.locations.length > 0) {
        const bounds = L.latLngBounds(attack.locations.map(l => [l.lat, l.lon]));
        map.fitBounds(bounds, { padding: [50, 50] });
    }
}

// Setup event listeners
function setupEventListeners() {
    const yearSlider = document.getElementById('yearSlider');
    const yearDisplay = document.getElementById('yearDisplay');
    const searchInput = document.getElementById('searchInput');
    const typeFilter = document.getElementById('typeFilter');
    
    yearSlider.addEventListener('input', (e) => {
        currentYearFilter = parseInt(e.target.value);
        yearDisplay.textContent = currentYearFilter;
        populateTimeline();
    });
    
    searchInput.addEventListener('input', (e) => {
        currentSearchTerm = e.target.value;
        populateTimeline();
    });
    
    typeFilter.addEventListener('change', (e) => {
        currentTypeFilter = e.target.value;
        populateTimeline();
    });
}
