const checkinBtn = document.getElementById('checkin-btn');
const checkoutBtn = document.getElementById('checkout-btn');
const leaveForm = document.getElementById('leave-form');
const logList = document.getElementById('log-list');

// Function to log messages
function addLog(message) {
    const listItem = document.createElement('li');
    listItem.textContent = `${new Date().toLocaleString()}: ${message}`;
    logList.appendChild(listItem);
}

// Check-in functionality
checkinBtn.addEventListener('click', () => {
    addLog('Checked in');
    alert('You have successfully checked in!');
});

// Check-out functionality
checkoutBtn.addEventListener('click', () => {
    addLog('Checked out');
    alert('You have successfully checked out!');
});

// Leave request functionality
leaveForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const date = document.getElementById('leave-date').value;
    const reason = document.getElementById('reason').value;
    
    if (date && reason) {
        addLog(`Leave request submitted for ${date}. Reason: ${reason}`);
        alert('Leave request submitted!');
        leaveForm.reset();
    } else {
        alert('Please fill in all fields!');
    }
});
