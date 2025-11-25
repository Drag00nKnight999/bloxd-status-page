# Bloxd.io Status Page

A static GitHub Pages status page for Bloxd.io that displays real-time service status, incidents, and historical data. 

## Features

- 🎨 **Dark Mode Support** - Toggle between light and dark themes with persistent preferences
- 📊 **Real-time Status Updates** - Monitor all services at a glance
- 🔔 **Email Notifications** - Subscribe to incident updates
- 📈 **Uptime Statistics** - Track 30-day and 90-day uptime percentages
- 📋 **Incident Tracking** - View active and historical incidents
- 🔍 **History Filtering** - Filter incidents by type (All, Resolved, Maintenance)
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- ⚡ **Auto-refresh** - Data refreshes every 30 seconds
- 📝 **Easy Updates** - Simple JSON format for managing services and incidents

## Getting Started

### Prerequisites
- GitHub account
- Basic knowledge of editing files on GitHub

### Installation

1. The repository is already set up with GitHub Pages enabled
2. The status page is available at: `https://Drag00nKnight999.github.io/bloxd-status-page`

### Customization

#### Adding/Updating Services

Edit `data.js` and modify the `services` array:

```javascript
{
    name: 'Service Name',
    description: 'Service description',
    status: 'Operational|Degraded Performance|Partial Outage|Major Outage|Maintenance',
    uptime: 99.50
}
