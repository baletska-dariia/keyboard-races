window.onload = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
        location.replace('/race');
    } 
}
