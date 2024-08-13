// This is about local storage, session storage and cookies 

// Cookies - can set the expiration date or time 

document.cookie = "username=JohnDoe; expires=Thu, 18 Dec 2025 12:00:00 UTC";
document.cookie = "username=damz; expires=Thu, 18 Dec 2024 12:00:00 UTC";
document.cookie = "username=Gexaa; expires=Thu, 18 Dec 2024 12:00:00 UTC";


// Session storage - expires when close the tab

sessionStorage.setItem('Amalya', 'Damz');
sessionStorage.setItem('sample', 'Gexaa');

// Local storage - 

localStorage.setItem('Amalya', 'Damz');
localStorage.setItem('sample', 'Gexaa');
