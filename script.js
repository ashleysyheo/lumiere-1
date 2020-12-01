const piano = document.querySelector('.piano');
const whiteKeys = document.createElement('div');
whiteKeys.className = 'white-keys';
piano.appendChild(whiteKeys);

const whiteCompKey = ['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];

for (let i=0; i < 17; i++) {
    const key = document.createElement('div');
    key.classList.add('white-key', whiteCompKey[i].toLowerCase());
    whiteKeys.appendChild(key);
    const compKey = document.createElement('div');
    compKey.className = 'white-comp-key';
    compKey.innerHTML = whiteCompKey[i];
    key.appendChild(compKey);

    // window.addEventListener('keydown', function(e) {
    //     if (e.key === whiteCompKey[i].toLowerCase()) {
    //         e.target.style.opacity = '80%';
    //     }
    // });

    // key.addEventListener('keydown', function(e) {
    //     e.target.style.opacity = '30%';
    // });

}

const blackKeys = document.createElement('div');
blackKeys.className = 'black-keys';
piano.appendChild(blackKeys);

const blackCompKey = ['S', 'D', 'G', 'H', 'J', '2', '3', '5', '6', '7', '9', '0'];

for (let i=0; i<12; i++) {
    const key = document.createElement('div');
    key.classList.add('black-key', `black-key${i+1}`);
    if (i < 5) {
        key.classList.add(blackCompKey[i].toLowerCase())
    } else {
        key.classList.add(`b${blackCompKey[i]}`)
    }
    const compKey = document.createElement('div');
    compKey.className = 'black-comp-key';
    compKey.innerHTML = blackCompKey[i];
    key.appendChild(compKey);

    // key.addEventListener('mousedown', function(e) {
    //     e.target.style.backgroundColor = 'gray';
    // });

    // key.addEventListener('mouseup', function(e) {
    //     e.target.style.backgroundColor = 'white';
    // });

    blackKeys.appendChild(key);
}

