# 🌍 World Cyberattack Timeline Explorer

An interactive web application that visualizes major cyberattacks from 1988 to 2026 with an engaging timeline, world map, and detailed attack information.

## Features

✨ **Interactive Components:**
- **Timeline Slider**: Filter attacks by year range (1988-2026)
- **World Map**: Visualize affected regions for each attack with Leaflet.js
- **Attack Details**: Hover over attacks to view comprehensive information
- **Search & Filter**: Find attacks by name, type, or other criteria
- **Dynamic Updates**: Real-time filtering and data visualization

📊 **Data Included:**
- 32+ major cyberattacks from 1988 to 2026
- Attack names, years, types, and damage costs
- Geographic information on affected countries
- Detailed descriptions and historical context
- Attack categories: Worms, Ransomware, Spyware, DDoS, Supply Chain attacks

## Notable Attacks Featured

- **1988**: Morris Worm - The first major internet worm
- **2000**: ILOVEYOU Virus - One of the most destructive worms
- **2010**: Stuxnet - First known cyberweapon causing physical damage
- **2017**: WannaCry - $4+ billion in damages across 150+ countries
- **2020**: SolarWinds - Supply chain attack compromising 18,000 organizations
- **2024**: Change Healthcare - Massive healthcare infrastructure attack
- **2026**: Global Ransomware Operations - Peak activity forecast

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Mapping**: Leaflet.js for interactive maps
- **Data**: JSON-based attack database
- **Styling**: Responsive CSS Grid layout
- **Browser Compatibility**: All modern browsers

## File Structure

```
World-Cyberattack-Timeline-Explorer/
├── index.html              # Main HTML file
├── styles/
│   └── main.css           # Styling and responsive design
├── js/
│   └── app.js             # Main JavaScript application logic
├── data/
│   └── cyberattacks.js    # Comprehensive attack database
└── README.md              # This file
```

## How to Use

1. **Open** `index.html` in a web browser
2. **Explore** the timeline using the year slider
3. **Search** for specific attacks using the search box
4. **Filter** by attack type using the dropdown
5. **Click** on timeline items to view detailed information
6. **Hover** over items to see the affected regions on the map

## Features Breakdown

### Timeline Slider
- Drag to select a year range
- Only shows attacks up to the selected year
- Real-time updates to the timeline list

### Search & Filter
- Search by attack name or type
- Filter by attack category (Worm, Ransomware, etc.)
- Combine multiple filters for precise results

### World Map
- Interactive map with attack locations
- Circle markers show affected regions
- Click markers for location details
- Auto-zoom to show all affected areas

### Attack Details Panel
- Complete attack information
- Damage cost assessment
- List of affected countries
- Detailed attack description

## Data Source

Attack data is curated from:
- Historical cybersecurity records
- Government reports and advisories
- Cybersecurity research publications
- News archives and documentation

Note: This is an educational tool for cybersecurity awareness and historical reference.

## Responsive Design

The application is fully responsive and works on:
- Desktop computers (1600px+)
- Tablets (768px - 1200px)
- Mobile devices (< 768px)

## Future Enhancements

- [ ] Export timeline data as PDF/CSV
- [ ] Add attacker profiles and group information
- [ ] Include attack success rate statistics
- [ ] Timeline animation feature
- [ ] Dark mode support
- [ ] Multi-language support
- [ ] 3D globe visualization
- [ ] Real-time threat feeds integration

## Educational Use

This tool is designed for:
- Cybersecurity students and professionals
- Security awareness training
- Historical research
- Risk assessment analysis
- Educational presentations

## Disclaimer

This application is for educational purposes only. The data presented is based on publicly available information and is intended to increase cybersecurity awareness. Always consult official sources and cybersecurity experts for critical decisions.

## License

Free to use for educational and non-commercial purposes.

## Contributing

To add new attacks or improve the application:
1. Fork the repository
2. Create a feature branch
3. Add or update attack data in `data/cyberattacks.js`
4. Submit a pull request

## Support

For questions or issues, please create an issue in the repository.

---

**Built for Cybersecurity Education & Awareness** 🛡️
