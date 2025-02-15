// Function to request notification permission
function requestNotificationPermission() {
    if (Notification.permission !== 'granted') {
        Notification.requestPermission();
    }
}

// Function to send a browser notification
function sendReminder(message) {
    if (Notification.permission === 'granted') {
        new Notification(message);
    } else {
        console.log("Notification permission is not granted.");
    }
}

// Reminder message
const reminderMessage = `HELLO EVERYONE 
আজকে সন্ধ্যা ৭:০০ ঘটিকায় GUILD WAR আছে আপনাদের মনে আছে কি???
কোন সমস্যা নাই আমি মনে করিয়ে দিছি।

আমি আশা করি সবাই আগাম আগাম প্রস্তুতি নিবেন। 

ধন্যবাদ🥰`;

// Function to check the time and trigger reminders
function setReminder() {
    const now = new Date();
    const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const currentTime = now.getHours() * 60 + now.getMinutes(); // Time in minutes from midnight

    // Define the reminder time (6:45 PM = 18:45)
    const reminderTime = 18 * 60 + 45; // 6:45 PM in minutes

    // Check if today is Wednesday (3), Friday (5), or Saturday (6)
    if ([3, 5, 6].includes(currentDay) && currentTime === reminderTime) {
        // Send the reminder 3 times a day
        sendReminder(reminderMessage);  // First reminder
        setTimeout(() => sendReminder(reminderMessage), 1000 * 60 * 60 * 4);  // Second reminder after 4 hours (10:45 PM)
        setTimeout(() => sendReminder(reminderMessage), 1000 * 60 * 60 * 8);  // Third reminder after 8 hours (2:45 AM)
    }
}

// Run the reminder function every minute to check the time
setInterval(setReminder, 60 * 1000);

// Request permission for notifications when the page loads
window.onload = requestNotificationPermission;
