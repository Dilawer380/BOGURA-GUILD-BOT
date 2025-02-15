// Function to request notification permission
function requestNotificationPermission() {
    if (Notification.permission !== 'granted') {
        Notification.requestPermission();
    }
}

// Function to send a browser notification with an image
function sendReminder(message, imageURL) {
    if (Notification.permission === 'granted') {
        const notification = new Notification("GUILD WAR Reminder", {
            body: message, // Notification message
            icon: imageURL, // Icon as the image URL
        });
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

// Array of image URLs
const imageUrls = [
    "https://i.imgur.com/xqXrtGF.jpg",  // Image 1
    "https://i.imgur.com/mxaYPmB.jpg",  // Image 2
    "https://i.imgur.com/4nRf2ln.jpg",  // Image 3
];

// Function to get a random image from the list
function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[randomIndex];
}

// Function to check the time and trigger reminders
function setReminder() {
    const now = new Date();
    const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const currentTime = now.getHours() * 60 + now.getMinutes(); // Time in minutes from midnight

    // Define the reminder time (7:00 PM = 19:00)
    const reminderTime = 19 * 60; // 7:00 PM in minutes

    // Check if today is Wednesday (3), Friday (5), or Saturday (6)
    if ([3, 5, 6].includes(currentDay) && currentTime === reminderTime) {
        // Send the reminder 3 times a day with a random image
        sendReminder(reminderMessage, getRandomImage());  // First reminder at 7:00 PM
        setTimeout(() => sendReminder(reminderMessage, getRandomImage()), 1000 * 60 * 60 * 4);  // Second reminder after 4 hours (11:00 PM)
        setTimeout(() => sendReminder(reminderMessage, getRandomImage()), 1000 * 60 * 60 * 8);  // Third reminder after 8 hours (3:00 AM)
    }
}

// Run the reminder function every minute to check the time
setInterval(setReminder, 60 * 1000);

// Request permission for notifications when the page loads
window.onload = requestNotificationPermission;
