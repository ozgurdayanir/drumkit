//HTML'de tanımladığım ses elementlerine erişiyorum
const soundItems = {
    'A': document.getElementById('soundA'),
    'S': document.getElementById('soundS'),
    'D': document.getElementById('soundD'),
    'F': document.getElementById('soundF'),
    'J': document.getElementById('soundJ'),
    'K': document.getElementById('soundK'),
    'L': document.getElementById('soundL'),
    'U': document.getElementById('soundU'),
    'T': document.getElementById('soundT'),
};
console.log('sounditems', soundItems)

// click olayını dinlemek için addEventListener fonksiyonu ekliyorum bunu her buton için yapmasını "forEach(button => )" kullanarak.  istiyorum bu yüzden önce sound-button classındaki bütün butonlarıma erişmem gerekiyor.
document.querySelectorAll('.sound-button').forEach ( button => {
    button.addEventListener('click', function() {
        const key = this.getAttribute('data-key');
        playSound(key);
        animateButton(this);
    });
});

// Klavyede tuşa basıldığında ses çalma
document.addEventListener('keydown', function (event) {
    const key = event.key.toUpperCase();
    const button = document.querySelector(`.sound-button[data-key="${key}"]`); //[data-key="${key}"]: Bu, bir öznitelik (attribute) seçicidir. HTML'de data-key özniteliğine sahip öğeleri seçer. Ancak burada data-key özniteliği, bir değişkene bağlıdır. data-key="${key}" ifadesiyle, data-key özniteliği değerinin key değişkenine eşit olan öğeyi seçmiş oluruz. ${key}: JavaScript'te template literal kullanımıdır. Buradaki "backtick (`)" ile yazılmış olan dize içinde, "${key}" ifadesi, key değişkeninin değerini alır. Örneğin, eğerkey = "A"` ise, bu seçici şuna dönüşür: ".sound-button[data-key="A"]" Bu da HTML'deki <button class="sound-button" data-key="A">A</button> ögeyi seçmesini sağlar.

    if (soundItems[key]) {
        playSound(key);
        animateButton(button);
    }
});


// Ses çalma fonksiyonu
function playSound(key) {
    if (soundItems[key]) {
        soundItems[key].currentTime = 0; // Sesin baştan çalması için
        soundItems[key].play();
    }
}

// Buton animasyonu ekleme ve kaldırma fonksiyonu
function animateButton(button) {
    if (button) {
        button.classList.add('pressed'); //css de yazılan .pressed classını eklemek için.
        setTimeout(() => {
            button.classList.remove('pressed');
        }, 100); // 100ms sonra animasyonu kaldır
    }
}