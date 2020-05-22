const game = {
    start: function () {
        const canvas = document.getElementById('mycanvas');
        const ctx = canvas.getContext('2d');

        let background = new Image();
        background.src = 'img/background.png';
        console.log(background);
    }
};

game.start();
