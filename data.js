// Services data
const services = [
    {
        name: 'Game Servers',
        description: 'Core game servers and multiplayer connectivity',
        status: 'Operational',
    },
    {
        name: 'Website',
        description: 'Main website and landing page',
        status: 'Operational',
    },
    {
        name: 'API',
        description: 'Bloxd Api',
        status: 'Operational',
    },
    {
        name: 'Authentication',
        description: 'Login and account authentication system',
        status: 'Operational',
    },
    {
        name: 'Database',
        description: 'Player data and game state storage',
        status: 'Operational',
    },
    {
        name: 'CDN',
        description: 'Content delivery and asset distribution',
        status: 'Operational',
    }
];

// Incidents data
const incidents = [
   {
     title: 'Hacking Incident',
     description: 'A hacker password guessed the admin panel and hacked Bloxd.',
     status: 'Resolved',
     type: 'Major Outage',
     affectedServices: ['Game Servers','Website','API','Authentication','Database','CDN'],
     startTime: '2024-2-12T10:00:00Z',
     endTime: '2024-2-15T11:00:00Z' 
 }
];
/*
Documentation for adding new services or incidents:

 To add new services, edit the services array above
 To add new incidents, add them to the incidents array

 Example of how to add a new service:
 {
     name: 'Service Name',
     description: 'Service description',
     status: 'Operational|Degraded Performance|Partial Outage|Major Outage|Maintenance',
     uptime: 99.50
 }

 Example of how to add a new incident:
 {
     title: 'Incident Title',
     description: 'Incident description',
     status: 'Investigating|Identified|Monitoring|Resolved',
     type: 'Outage|Maintenance',
     affectedServices: ['Service 1', 'Service 2'],
     startTime: '2025-11-25T10:00:00Z',
     endTime: '2025-11-25T11:00:00Z'  // omit or set to null for ongoing incidents
 }
*/
