const finnishNumbers = [
    "NOLLA", "YKSI", "KAKSI", "KOLME", "NELJÄ", "VIISI", "KUUSI", "SEITSEMÄN", "KAHDEKSAN", "YHDEKSÄN",
    "KYMMENEN", "YKSITOISTA", "KAKSITOISTA", "KOLMETOISTA", "NELJÄTOISTA", "VIISITOISTA", "KUUSITOISTA",
    "SEITSEMÄNTOISTA", "KAHDEKSANTOISTA", "YHDEKSÄNTOISTA", "KAKSIKYMMENTÄ", "KAKSIKYMMENTÄYKSI", 
    "KAKSIKYMMENTÄKAKSI", "KAKSIKYMMENTÄKOLME", "KAKSIKYMMENTÄNELJÄ", "KAKSIKYMMENTÄVIISI", 
    "KAKSIKYMMENTÄKUUSI", "KAKSIKYMMENTÄSEITSEMÄN", "KAKSIKYMMENTÄKAHDEKSAN", "KAKSIKYMMENTÄYHDEKSÄN", 
    "KOLMEKYMMENTÄ", "KOLMEKYMMENTÄYKSI", "KOLMEKYMMENTÄKAKSI", "KOLMEKYMMENTÄKOLME", 
    "KOLMEKYMMENTÄNELJÄ", "KOLMEKYMMENTÄVIISI", "KOLMEKYMMENTÄKUUSI", "KOLMEKYMMENTÄSEITSEMÄN", 
    "KOLMEKYMMENTÄKAHDEKSAN", "KOLMEKYMMENTÄYHDEKSÄN", "NELJÄKYMMENTÄ", "NELJÄKYMMENTÄYKSI", 
    "NELJÄKYMMENTÄKAKSI", "NELJÄKYMMENTÄKOLME", "NELJÄKYMMENTÄNELJÄ", "NELJÄKYMMENTÄVIISI", 
    "NELJÄKYMMENTÄKUUSI", "NELJÄKYMMENTÄSEITSEMÄN", "NELJÄKYMMENTÄKAHDEKSAN", "NELJÄKYMMENTÄYHDEKSÄN", 
    "VIISIKYMMENTÄ", "VIISIKYMMENTÄYKSI", "VIISIKYMMENTÄKAKSI", "VIISIKYMMENTÄKOLME", 
    "VIISIKYMMENTÄNELJÄ", "VIISIKYMMENTÄVIISI", "VIISIKYMMENTÄKUUSI", "VIISIKYMMENTÄSEITSEMÄN", 
    "VIISIKYMMENTÄKAHDEKSAN", "VIISIKYMMENTÄYHDEKSÄN", "KUUSIKYMMENTÄ", "KUUSIKYMMENTÄYKSI", 
    "KUUSIKYMMENTÄKAKSI", "KUUSIKYMMENTÄKOLME", "KUUSIKYMMENTÄNELJÄ", "KUUSIKYMMENTÄVIISI", 
    "KUUSIKYMMENTÄKUUSI", "KUUSIKYMMENTÄSEITSEMÄN", "KUUSIKYMMENTÄKAHDEKSAN", "KUUSIKYMMENTÄYHDEKSÄN", 
    "SEITSEMÄNKYMMENTÄ", "SEITSEMÄNKYMMENTÄYKSI", "SEITSEMÄNKYMMENTÄKAKSI", "SEITSEMÄNKYMMENTÄKOLME", 
    "SEITSEMÄNKYMMENTÄNELJÄ", "SEITSEMÄNKYMMENTÄVIISI", "SEITSEMÄNKYMMENTÄKUUSI", 
    "SEITSEMÄNKYMMENTÄSEITSEMÄN", "SEITSEMÄNKYMMENTÄKAHDEKSAN", "SEITSEMÄNKYMMENTÄYHDEKSÄN", 
    "KAHDEKSANKYMMENTÄ", "KAHDEKSANKYMMENTÄYKSI", "KAHDEKSANKYMMENTÄKAKSI", "KAHDEKSANKYMMENTÄKOLME", 
    "KAHDEKSANKYMMENTÄNELJÄ", "KAHDEKSANKYMMENTÄVIISI", "KAHDEKSANKYMMENTÄKUUSI", 
    "KAHDEKSANKYMMENTÄSEITSEMÄN", "KAHDEKSANKYMMENTÄKAHDEKSAN", "KAHDEKSANKYMMENTÄYHDEKSÄN", 
    "YHDEKSÄNKYMMENTÄ", "YHDEKSÄNKYMMENTÄYKSI", "YHDEKSÄNKYMMENTÄKAKSI", "YHDEKSÄNKYMMENTÄKOLME", 
    "YHDEKSÄNKYMMENTÄNELJÄ", "YHDEKSÄNKYMMENTÄVIISI", "YHDEKSÄNKYMMENTÄKUUSI", "YHDEKSÄNKYMMENTÄSEITSEMÄN", 
    "YHDEKSÄNKYMMENTÄKAHDEKSAN", "YHDEKSÄNKYMMENTÄYHDEKSÄN", "SATA"
];

let previousCard = null;

function generateGrid() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);

    if (min < 1 || max > 100 || min >= max) {
        alert('Please enter a valid range between 1 and 100.');
        return;
    }

    const numbers = [];
    while (numbers.length < 9) {
        const num = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!numbers.includes(num)) {
            numbers.push(num);
        }
    }

    const grid = document.getElementById('grid');
    grid.innerHTML = '';
    numbers.forEach(num => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.textContent = num;
        card.onclick = () => cardClicked(card, num);
        grid.appendChild(card);
    });
}

function cardClicked(card, number) {
    if (previousCard) {
        previousCard.classList.remove('clicked');
    }
    card.classList.add('clicked');
    const finnishNumber = finnishNumbers[number];
    document.getElementById('selected-number').textContent = finnishNumber;

    const utterance = new SpeechSynthesisUtterance(finnishNumber);
    utterance.lang = 'fi-FI';
    speechSynthesis.speak(utterance);

    previousCard = card;
}
