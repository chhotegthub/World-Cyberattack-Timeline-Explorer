// Cyberattack Timeline Explorer - Enhanced Version
let currentYearFilter = 2026;
let currentTypeFilter = 'all';
let currentSearchTerm = '';
let map;
let markers = {};
let selectedAttack = null;
let attackStats = {};

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    initializeMap();
    populateTimeline();
    setupEventListeners();
    calculateStatistics();
    initializeInteractiveFeatures();
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
            <div class="timeline-item-damage">${attack.damageCost}</div>
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
    selectedAttack = attack;
    
    // Update active state
    document.querySelectorAll('.timeline-item').forEach(item => item.classList.remove('active'));
    element.classList.add('active');
    
    const detailsCard = document.getElementById('detailsCard');
    const countriesList = attack.countries.map(c => `<span class="country-badge">${c}</span>`).join('');
    
    // Add interactive comparison button
    const damageAmount = extractDamageNumber(attack.damageCost);
    
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
            <div class="damage-bar-container">
                <div class="damage-bar" style="width: ${Math.min(damageAmount / 100 * 100, 100)}%"></div>
            </div>
        </div>
        
        <div class="detail-row">
            <div class="detail-label\">Countries Affected</div>
            <div class="countries-list">${countriesList}</div>
        </div>
        
        <div class="detail-row\">
            <div class="detail-label\">Description</div>
            <div class="detail-value attack-description\\">${attack.description}</div>
        </div>
        
        <div class="interactive-actions\">
            <button class="action-btn\" onclick=\"shareAttack()\">📤 Share</button>
            <button class="action-btn\" onclick=\"compareWithOthers()\">📊 Compare</button>
            <button class="action-btn\" onclick=\"viewTimeline()\">📈 Timeline</button>
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
            radius: 12,
            fillColor: '#e53935',
            color: '#d32f2f',
            weight: 2,
            opacity: 1,
            fillOpacity: 0.8
        }).addTo(map);
        
        marker.bindPopup(`
            <strong>${location.country}</strong><br>
            ${location.description || 'Affected area'}<br>
            <em>Year: ${attack.year}</em>
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
        updateStatistics();
    });
    
    searchInput.addEventListener('input', (e) => {
        currentSearchTerm = e.target.value;
        populateTimeline();
    });
    
    typeFilter.addEventListener('change', (e) => {
        currentTypeFilter = e.target.value;
        populateTimeline();
        updateStatistics();
    });
}

// Calculate statistics
function calculateStatistics() {
    const stats = {
        totalAttacks: CYBERATTACKS.length,
        totalDamage: 0,
        byType: {},
        byCountry: {},
        yearRange: []
    };
    
    CYBERATTACKS.forEach(attack => {
        // Count by type
        stats.byType[attack.type] = (stats.byType[attack.type] || 0) + 1;
        
        // Count by country
        attack.countries.forEach(country => {
            stats.byCountry[country] = (stats.byCountry[country] || 0) + 1;
        });
    });
    
    attackStats = stats;
}

// Update statistics based on filter
function updateStatistics() {
    const filtered = filterAttacks();
    const stats = {
        totalAttacks: filtered.length,
        byType: {},
        avgDamage: 0
    };
    
    filtered.forEach(attack => {
        stats.byType[attack.type] = (stats.byType[attack.type] || 0) + 1;
    });
    
    // Show statistics (could add a stats panel)
    console.log('Filtered Stats:', stats);
}

// Extract numerical damage amount
function extractDamageNumber(damageStr) {
    const match = damageStr.match(/\d+/);
    return match ? parseInt(match[0]) : 0;
}

// Initialize interactive features
function initializeInteractiveFeatures() {
    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        const items = document.querySelectorAll('.timeline-item');
        if (items.length === 0) return;
        
        const currentIndex = Array.from(items).findIndex(item => item.classList.contains('active'));
        
        if (e.key === 'ArrowDown' && currentIndex < items.length - 1) {
            items[currentIndex + 1].click();
        } else if (e.key === 'ArrowUp' && currentIndex > 0) {
            items[currentIndex - 1].click();
        }
    });
    
    // Add scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideIn 0.6s ease';
            }
        });
    });
    
    document.querySelectorAll('.timeline-item').forEach(item => observer.observe(item));
}

// Share attack information
function shareAttack() {
    if (!selectedAttack) return;
    
    const text = `Check out this cyberattack: ${selectedAttack.name} (${selectedAttack.year}) - Damage: ${selectedAttack.damageCost}`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Cyberattack Timeline Explorer',
            text: text,
            url: window.location.href
        });
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(text);
        alert('Copied to clipboard!');
    }
}

// Compare attacks
function compareWithOthers() {
    if (!selectedAttack) return;
    
    const comparison = CYBERATTACKS
        .filter(a => a.type === selectedAttack.type && a.id !== selectedAttack.id)
        .slice(0, 3)
        .map(a => `${a.name} (${a.year}): ${a.damageCost}`)
        .join('\\n');
    
    alert(`${selectedAttack.name} compared to similar attacks:\\n\\n${comparison}`);
}

// View timeline visualization
function viewTimeline() {
    const filtered = filterAttacks();
    const yearGroups = {};
    
    filtered.forEach(attack => {
        yearGroups[attack.year] = (yearGroups[attack.year] || 0) + 1;
    });
    
    console.log('Timeline:', yearGroups);
}

// Add to page CSS for new styles
const style = document.createElement('style');
style.textContent = `
    .damage-bar-container {
        width: 100%;
        height: 8px;
        background: #f0f0f0;
        border-radius: 4px;
        margin-top: 5px;
        overflow: hidden;
    }
    
    .damage-bar {
        height: 100%;
        background: linear-gradient(90deg, #ff6f00, #e53935);
        transition: width 0.5s ease;
    }
    
    .interactive-actions {
        display: flex;
        gap: 8px;
        margin-top: 15px;
        flex-wrap: wrap;
    }
    
    .action-btn {
        flex: 1;
        min-width: 100px;
        padding: 10px;
        background: #0d47a1;
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.3s ease;
    }
    
    .action-btn:hover {
        background: #1976d2;
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0,0,0,0.15);
    }
    
    @keyframes slideIn {
        from { opacity: 0; transform: translateX(-20px); }
        to { opacity: 1; transform: translateX(0); }
    }
    
    .timeline-item-damage {
        font-size: 0.8em;
        color: #e53935;
        font-weight: 600;
        margin-top: 5px;
    }
`;
document.head.appendChild(style);
