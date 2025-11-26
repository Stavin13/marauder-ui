# marauder-ui

![Marauder Web Interface Screenshot](docs/homepage.png)

A modern web interface for the [ESP32 Marauder](https://github.com/justcallmekoko/ESP32Marauder) firmware. This project provides a user-friendly way to interact with your Marauder device through a web browser.

🌐 **[Live Demo](https://michelangelomo.github.io/marauder-ui/)**

> This entire project, including the code and this README, has been written by Claude AI assistant.

## Features

- 🔌 Serial connection management with auto-detection
- 📡 Real-time AP scanning and monitoring
- 👥 Station detection and tracking
- 📊 Dynamic AP and station list with sorting and filtering
- 🖥️ Interactive terminal output
- 🎨 Modern neobrutalist design
- 📱 **Fully responsive mobile layout**
- 🎮 Demo mode for testing without hardware
- ⚡ One-click deauth attacks
- 🔄 Pre-built attack workflows
- ⌨️ Command history
- 🔍 Advanced filtering and sorting options

## Technical Details

- Built with Vue 3 and Tailwind CSS
- Uses Web Serial API for device communication
- Reactive state management
- Real-time data processing
- Modular component architecture

## Requirements

### For Hardware Connection
- Desktop browser supporting Web Serial API (Chrome 89+, Edge 89+, Opera 75+)
- An ESP32 device running the [Marauder firmware](https://github.com/justcallmekoko/ESP32Marauder)

### For Demo Mode (No Hardware)
- Any modern browser (Chrome, Firefox, Safari, Edge)
- Works on mobile devices (iOS, Android)
- Perfect for learning and showcasing

## Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/marauder-ui.git
cd marauder-ui
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Usage

### Desktop (Hardware Connection)
1. Connect your Marauder device to your computer
2. Open the web interface in Chrome or Edge
3. Click "Connect" - device auto-detected or select from list
4. Use quick action buttons, workflows, or custom commands
5. Monitor results in the AP list and terminal output

### Mobile (Demo Mode)
1. Open the web interface on your phone
2. Dismiss the mobile warning banner
3. Click "Demo" button to enable demo mode
4. Explore the full interface with simulated data
5. Perfect for learning commands and workflows

### Quick Actions
- **Deauth Button**: One-click deauth attack on any AP
- **Select Button**: Select AP for workflow execution
- **Workflows**: Pre-built attack sequences in sidebar
- **Custom Commands**: Type any Marauder command

## Commands

The interface supports all Marauder commands, including:

- `scanap` - Scan for access points
- `scansta` - Scan for stations
- `stopscan` - Stop any ongoing scan
- `list -a` - List detected access points
- `sniffbeacon` - Sniff beacon frames
- `sniffdeauth` - Sniff deauth frames
- `sniffpmkid` - Sniff PMKID
- And many more...

## Features

### Access Point Monitoring
- Real-time AP detection
- Signal strength indicators
- Channel information
- Connected stations tracking
- Last seen timestamps

### Station Tracking
- Station-AP relationships
- MAC address display
- Station IDs
- Last seen information

### Interface Features
- Command history
- Terminal output
- Compact and detailed views
- Search and filter capabilities
- Sorting options

## Contributing

Feel free to submit issues and enhancement requests!

## Credits

- ESP32 Marauder firmware by [justcallmekoko](https://github.com/justcallmekoko)
- Interface design and implementation by Claude AI
- Project maintenance by [michelangelomo](https://github.com/michelangelomo)

## License

This project is licensed under the MIT License - see the LICENSE file for details.