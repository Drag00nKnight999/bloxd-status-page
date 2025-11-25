// Services data
const services = [
    {
        name: 'Game Servers',
        description: 'Core game servers and multiplayer connectivity',
        status: 'Operational',
        uptime: 99.95
    },
    {
        name: 'Website',
        description: 'Main website and landing page',
        status: 'Operational',
        uptime: 99.98
    },
    {
        name: 'API',
        description: 'REST API and backend services',
        status: 'Operational',
        uptime: 99.92
    },
    {
        name: 'Authentication',
        description: 'Login and account authentication system',
        status: 'Operational',
        uptime: 99.99
    },
    {
        name: 'Database',
        description: 'Player data and game state storage',
        status: 'Operational',
        uptime: 99.97
    },
    {
        name: 'CDN',
        description: 'Content delivery and asset distribution',
        status: 'Operational',
        uptime: 99.96
    }
];

// Incidents data
const incidents = [
    {
        title: 'Game Server Maintenance',
        description: 'Routine maintenance and updates to game servers. Expected downtime: 2 hours.',
        status: 'Monitoring',
        type: 'Maintenance',
        affectedServices: ['Game Servers'],
        startTime: '2025-11-25T14:00:00Z',
        endTime: '2025-11-25T16:00:00Z'
    },
    {
        title: 'Database Performance Degradation',
        description: 'We experienced a temporary performance issue on our database that has been resolved. Thank you for your patience.',
        status: 'Resolved',
        type: 'Outage',
        affectedServices: ['Database', 'API'],
        startTime: '2025-11-24T10:30:00Z',
        endTime: '2025-11-24T11:15:00Z'
    }
];

// To add new services, edit the services array above
// To add new incidents, add them to the incidents array

// Example of how to add a new service:
// {
//     name: 'Service Name',
//     description: 'Service description',
//     status: 'Operational|Degraded Performance|Partial Outage|Major Outage|Maintenance',
//     uptime: 99.50
// }

// Example of how to add a new incident:
// {
//     title: 'Incident Title',
//     description: 'Incident description',
//     status: 'Investigating|Identified|Monitoring|Resolved',
//     type: 'Outage|Maintenance',
//     affectedServices: ['Service 1', 'Service 2'],
//     startTime: '2025-11-25T10:00:00Z',
//     endTime: '2025-11-25T11:00:00Z'  // omit or set to null for ongoing incidents
// }
