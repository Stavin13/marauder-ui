# Mobile User Guide

## ✅ Now Fully Mobile Compatible!

The marauder-ui is now optimized for mobile devices with a responsive design that works great on phones and tablets.

## Mobile Features

### What Works on Mobile

✅ **Full UI Access**
- All features accessible on mobile
- Responsive layout adapts to screen size
- Touch-optimized buttons and controls

✅ **Demo Mode**
- Perfect for learning and showcasing
- Simulated data and commands
- No hardware required

✅ **All Workflows**
- Access all attack workflows
- Execute command sequences
- View results in terminal

✅ **Access Point Table**
- View scanned networks
- Sort and filter results
- Quick action buttons (Deauth, Select)

### Mobile-Specific UI

**Collapsible Sections**
- Menu button to show/hide workflows and commands
- Collapsible terminal output
- Saves screen space

**Responsive Layout**
- Single column on phones
- Two columns on tablets
- Full desktop layout on large screens

**Touch-Friendly**
- Larger touch targets
- Optimized button sizes
- Easy-to-tap controls

## Hardware Connection Limitation

⚠️ **Important**: While the UI works perfectly on mobile, **hardware connection is not possible** due to Web Serial API limitations.

**Why?**
- Web Serial API not supported on mobile browsers
- iOS and Android don't expose USB/Serial APIs
- Security and OS restrictions

**Solution**: Use Demo Mode on mobile, or access from desktop for hardware connection.

## Using on Mobile

### First Visit

1. **Orange Banner Appears**
   - Explains hardware limitation
   - Can be dismissed with ✕ button

2. **Enable Demo Mode**
   - Click "Demo" button in header
   - Explore full interface with simulated data

3. **Navigate the UI**
   - Use "Menu" button to toggle workflows
   - Tap terminal header to expand/collapse
   - Swipe to scroll tables

### Mobile Layout

**Portrait Mode:**
```
┌─────────────────┐
│     Header      │
├─────────────────┤
│  Menu (toggle)  │
├─────────────────┤
│  Access Points  │
│     Table       │
├─────────────────┤
│ Terminal (fold) │
└─────────────────┘
```

**Landscape Mode:**
```
┌──────────┬──────────┐
│  Header  │  Header  │
├──────────┴──────────┤
│ Menu │ Access Points│
│      │    Table     │
├──────────────────────┤
│   Terminal Output    │
└──────────────────────┘
```

## Mobile Tips

### Performance
- Clear old APs regularly with "Clear" button
- Collapse terminal when not needed
- Use compact view for better performance

### Navigation
- **Menu Button**: Show/hide workflows and commands
- **Terminal Header**: Tap to expand/collapse
- **Table Rows**: Tap to show/hide stations
- **Action Buttons**: Stacked vertically on small screens

### Best Practices

**For Learning:**
- Use demo mode to explore features
- Try different workflows
- Learn command syntax

**For Planning:**
- Plan attack sequences
- Test workflow combinations
- Document command patterns

**For Showcasing:**
- Demo mode works great for presentations
- No hardware needed
- Full UI experience

## Screen Size Breakpoints

The UI adapts at these breakpoints:

- **< 640px**: Mobile layout (single column)
- **640px - 768px**: Small tablet (mixed layout)
- **> 768px**: Desktop layout (full features)

## Supported Mobile Browsers

✅ **Works Great:**
- Chrome (Android)
- Safari (iOS)
- Firefox (Android/iOS)
- Edge (Android)
- Samsung Internet

❌ **Hardware Connection:**
- Not available on any mobile browser
- Requires desktop Chrome/Edge/Opera

## Mobile vs Desktop

| Feature | Mobile | Desktop |
|---------|--------|---------|
| UI Access | ✅ Full | ✅ Full |
| Demo Mode | ✅ Yes | ✅ Yes |
| Hardware Connection | ❌ No | ✅ Yes |
| Touch Optimized | ✅ Yes | N/A |
| Responsive Layout | ✅ Yes | ✅ Yes |
| All Workflows | ✅ Yes | ✅ Yes |

## Troubleshooting

### UI Too Small
- Use landscape mode
- Pinch to zoom
- Try on tablet instead

### Buttons Hard to Tap
- Buttons are touch-optimized (32px min height)
- Use landscape mode for more space
- Zoom in if needed

### Table Scrolling
- Tables scroll horizontally if needed
- Use two fingers to scroll
- Switch to compact view

### Menu Not Showing
- Click "Menu" button in header
- Available on screens < 640px wide
- Automatically visible on larger screens

## PWA Installation (Optional)

You can install the app as a Progressive Web App:

### On iOS (Safari):
1. Tap Share button
2. Tap "Add to Home Screen"
3. Name it and tap "Add"

### On Android (Chrome):
1. Tap menu (⋮)
2. Tap "Add to Home Screen"
3. Confirm installation

**Benefits:**
- App icon on home screen
- Full-screen experience
- Faster loading
- Works offline (demo mode)

## Future Mobile Enhancements

Potential future features:
- Native mobile app for hardware connection
- Bluetooth support (if device supports it)
- Offline mode improvements
- More touch gestures
- Haptic feedback

## Feedback

The mobile experience is continuously improving. If you have suggestions or encounter issues, please provide feedback!

## Summary

✅ **Mobile UI**: Fully functional and optimized  
✅ **Demo Mode**: Perfect for mobile use  
❌ **Hardware**: Requires desktop browser  
✅ **Responsive**: Works on all screen sizes  
✅ **Touch**: Optimized for touch interaction  

Enjoy using marauder-ui on your mobile device!
