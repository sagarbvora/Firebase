importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-messaging.js');

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../firebase-messaging-sw.js')
        .then(function (registration) {
            console.log('Registration successful, scope is:', registration.scope);
        }).catch(function (err) {
            console.log('Service worker registration failed, error:', err);
        });
}

firebase.initializeApp({
    messagingSenderId: "547115054398",
});

const initMessaging = firebase.messaging();
// initMessaging.onBackgroundMessage(function (payload) {
//     console.log('Received background message ', payload);
//     // Customize notification here
//     const notificationTitle = payload.notification.title;
//     const notificationOptions = {
//         body: payload.notification.body
//     };

//     self.registration.showNotification(notificationTitle,
//         notificationOptions);
// });

// self.addEventListener('notificationclick', event => {
//     console.log("event", event)
//     return event;
// });