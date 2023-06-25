importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-messaging.js');
const firebaseConfig = {
    apiKey: "AIzaSyBUCSAxNMbgZGGdoiHia2bNC_BcTnyDxiM",
    authDomain: "yumna-website.firebaseapp.com",
    projectId: "yumna-website",
    storageBucket: "yumna-website.appspot.com",
    messagingSenderId: "293455560102",
    appId: "1:293455560102:web:03f93a48809c5d7cbfe367",
    measurementId: "G-R96T2NY7SR"
};
firebase.initializeApp(firebaseConfig);

self.addEventListener('notificationclick', function (event) {
    console.log('On notification click: ', event.notification);
    event.notification.close();
    clients.openWindow("https://yumna.pro/adventure.html");
});

self.addEventListener("notificationclose", function (event) {
    event.notification.close();
    console.log('user has clicked notification close');
});

const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };
    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});

