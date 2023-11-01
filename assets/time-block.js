// Define an array to store the events
const events = [];

// add an event
function addEvent() {
    // Get values
    const day = document.getElementById("day").value;
    const time = document.getElementById("time").value;
    const event = document.getElementById("event").value;

    // Create a new event object
    const newEvent = {
        day,
        time,
        event,
    };

    // Add the event to the array
    events.push(newEvent);

    // Update the table with the new event
    updateEventTable(newEvent);

    // Clear the form input
    document.getElementById("eventForm").reset();
}

// update the event table
function updateEventTable(event) {
    const table = document.getElementById("eventTable").getElementsByTagName('tbody')[0];
    const row = table.insertRow(table.rows.length);
    const dayCell = row.insertCell(0);
    const timeCell = row.insertCell(1);
    const eventCell = row.insertCell(2);

    dayCell.innerHTML = event.day;
    timeCell.innerHTML = event.time;
    eventCell.innerHTML = event.event;
}

function loadEvents() {
    const savedEvents = localStorage.getItem("events");
    if (savedEvents) {
        events = JSON.parse(savedEvents);
        events.forEach(updateEventTable);
    }
}

// Call loadEvents to load any saved events when the page loads
loadEvents();
