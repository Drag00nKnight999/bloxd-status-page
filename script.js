// Theme toggle
const themeToggle = document. getElementById('themeToggle');
const htmlElement = document. documentElement;

// Load theme preference from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
});

// Subscription form
const subscriptionForm = document.getElementById('subscriptionForm');
const emailInput = document.getElementById('emailInput');
const subscriptionNote = document.getElementById('subscriptionNote');

subscriptionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value;
    
    // Store email in localStorage
    let subscribers = JSON.parse(localStorage.getItem('subscribers') || '[]');
    if (!subscribers.includes(email)) {
        subscribers.push(email);
        localStorage.setItem('subscribers', JSON.stringify(subscribers));
        subscriptionNote.textContent = '✓ Subscribed successfully!  Check your email for confirmation.';
        subscriptionNote.style.color = 'var(--success-color)';
        emailInput.value = '';
        setTimeout(() => {
            subscriptionNote.textContent = '';
        }, 5000);
    } else {
        subscriptionNote.textContent = 'You are already subscribed with this email.';
        subscriptionNote.style.color = 'var(--warning-color)';
    }
});

// Render services
function renderServices() {
    const servicesContainer = document.getElementById('servicesContainer');
    servicesContainer.innerHTML = '';

    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        
        const statusClass = `status-${service.status. replace(/\s+/g, '-').toLowerCase()}`;
        
        serviceCard.innerHTML = `
            <div class="service-header">
                <div class="service-name">${service.name}</div>
                <div class="service-status ${statusClass}">
                    <span class="status-dot"></span>
                    ${service.status}
                </div>
            </div>
            <p class="service-description">${service.description}</p>
        `;
        
        servicesContainer.appendChild(serviceCard);
    });

    updateOverallStatus();
}

// Update overall status
function updateOverallStatus() {
    const statuses = services.map(s => s.status);
    const hasOutage = statuses.includes('Major Outage');
    const hasPartial = statuses.includes('Partial Outage');
    const hasDegraded = statuses.includes('Degraded Performance');
    const hasMaintenance = statuses.includes('Maintenance');

    let overallStatus, statusIndicatorClass;

    if (hasOutage) {
        overallStatus = 'Major Outage';
        statusIndicatorClass = 'major';
    } else if (hasPartial) {
        overallStatus = 'Partial Outage';
        statusIndicatorClass = 'partial';
    } else if (hasDegraded) {
        overallStatus = 'Degraded Performance';
        statusIndicatorClass = 'degraded';
    } else if (hasMaintenance) {
        overallStatus = 'Maintenance in Progress';
        statusIndicatorClass = 'maintenance';
    } else {
        overallStatus = 'All Systems Operational';
        statusIndicatorClass = 'operational';
    }

    const overallStatusEl = document.getElementById('overallStatus');
    overallStatusEl.textContent = overallStatus;
    
    // Update status indicator
    const statusIndicator = document.querySelector('.overall-status .status-indicator');
    statusIndicator.className = `status-indicator ${statusIndicatorClass}`;
}

// Render incidents
function renderIncidents() {
    const incidentsList = document.getElementById('incidentsList');
    const activeIncidents = incidents.filter(i => i.status !== 'Resolved');

    if (activeIncidents.length === 0) {
        incidentsList.innerHTML = '<div class="no-incidents"><p>No active incidents</p></div>';
        return;
    }

    incidentsList.innerHTML = '';
    activeIncidents.forEach(incident => {
        const incidentCard = document.createElement('div');
        incidentCard.className = `incident-card ${incident.status. toLowerCase()}`;
        
        const startTime = new Date(incident.startTime).toLocaleString();
        const affectedServices = incident.affectedServices.join(', ');

        incidentCard.innerHTML = `
            <div class="incident-header">
                <div class="incident-title">${incident.title}</div>
                <span class="incident-badge badge-${incident.status.toLowerCase()}">${incident.status}</span>
            </div>
            <div class="incident-time">${startTime}</div>
            <div class="incident-description">${incident.description}</div>
            <div class="incident-affected"><strong>Affected Services:</strong> ${affectedServices}</div>
        `;

        incidentsList.appendChild(incidentCard);
    });
}

// Render history
function renderHistory(filter = 'all') {
    const historyList = document.getElementById('historyList');
    let filteredIncidents = incidents;

    if (filter === 'resolved') {
        filteredIncidents = incidents.filter(i => i.status === 'Resolved');
    } else if (filter === 'maintenance') {
        filteredIncidents = incidents.filter(i => i.type === 'Maintenance');
    }

    historyList.innerHTML = '';
    
    if (filteredIncidents. length === 0) {
        historyList.innerHTML = '<p style="text-align: center; color: #6b7280;">No incidents found</p>';
        return;
    }

    filteredIncidents.forEach(incident => {
        const historyItem = document.createElement('div');
        historyItem.className = `history-item ${incident.status. toLowerCase()}`;
        
        const startDate = new Date(incident.startTime).toLocaleDateString();
        const endDate = incident.endTime ? new Date(incident.endTime).toLocaleDateString() : 'Ongoing';
        const duration = incident.endTime 
            ? `${Math.floor((new Date(incident.endTime) - new Date(incident.startTime)) / (1000 * 60))} minutes`
            : 'In progress';

        historyItem.innerHTML = `
            <div class="history-date">${startDate}</div>
            <div class="history-title">${incident.title}</div>
            <div class="history-duration"><strong>Duration:</strong> ${duration}</div>
        `;

        historyList.appendChild(historyItem);
    });
}

// Filter buttons
document.querySelectorAll('.filter-btn'). forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderHistory(btn.dataset.filter);
    });
});

// Initialize
renderServices();
renderIncidents();
renderHistory();

// Refresh data every 30 seconds
setInterval(() => {
    renderServices();
    renderIncidents();
}, 30000);
