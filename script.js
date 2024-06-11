document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;

   

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');

       
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const click1 = document.getElementById('d1');
    const elementA1 = document.getElementById('a1');

    click1.addEventListener('click', () => {
        click1.style.backgroundColor = 'grey';
        click1.style.color = 'white';
        click1.style.cursor = 'pointer';
        elementA1.scrollIntoView({ behavior: 'smooth' });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const click2 = document.getElementById('d2');
    const elementA2 = document.getElementById('a2');

    click2.addEventListener('click', () => {
        click2.style.backgroundColor = 'grey';
        click2.style.color = 'white';
        click2.style.cursor = 'pointer';
        elementA2.scrollIntoView({ behavior: 'smooth' });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const click3 = document.getElementById('d3');
    const elementA3 = document.getElementById('a3');

    click3.addEventListener('click', () => {
        click3.style.backgroundColor = 'grey';
        click3.style.color = 'white';
        click3.style.cursor = 'pointer';
        elementA3.scrollIntoView({ behavior: 'smooth' });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const click4= document.getElementById('d4');
    const elementA4 = document.getElementById('a4');

    click4.addEventListener('click', () => {
        click4.style.backgroundColor = 'grey';
        click4.style.color = 'white';
        click4.style.cursor = 'pointer';
        elementA4.scrollIntoView({ behavior: 'smooth' });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const click5 = document.getElementById('d5');
    const elementA5 = document.getElementById('a5');

    click5.addEventListener('click', () => {
        click5.style.backgroundColor = 'grey';
        click5.style.color = 'white';
        click5.style.cursor = 'pointer';
        elementA5.scrollIntoView({ behavior: 'smooth' });
    });
});

