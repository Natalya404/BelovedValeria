const button = document.getElementById('button');

button.addEventListener("click", () => {
    document.querySelector('.page').style.backgroundImage = 'url(./img/surprise.gif)';
    button.disabled = true;

    setTimeout(() => {
        document.querySelector('.page').style.backgroundImage = 'none';
        button.disabled = false;
    }, 2000)
});