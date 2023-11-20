const photo = document.getElementById('image')
const toogler = document.getElementById('toogler')
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')
const btn5 = document.getElementById('btn5')
const btn6 = document.getElementById('btn6')
const btn7 = document.getElementById('btn7')
const title = document.getElementById('title')
const locate = document.getElementById('location')
const links = document.getElementById('links')
const desc = document.getElementById('descript')


function toogleimage (){
    if(photo.style.display ==='none'){
        photo.style.display = 'block'
        toogler.innerText = 'hide image'
    }else{
        photo.style.display = 'none'
        toogler.innerText = 'show image'
    }
}


function switchimage(num){
    if(num === 1){
        photo.src = 'image/p1.jpeg'
        title.innerText = 'Christ the Redeemer'
        locate.innerText = ' Rio de Janeiro, Brazil'
        links.href = 'https://en.wikipedia.org/wiki/Christ_the_Redeemer_(statue)'
        descript.innerText = 'is an Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil, created by French sculptor Paul Landowski and built by Brazilian engineer Heitor da Silva Costa, in collaboration with French engineer Albert Caquot. Romanian sculptor Gheorghe Leonida sculpted the face. Constructed between 1922 and 1931, the statue is 30 metres (98 ft) high, excluding its 8-metre (26 ft) pedestal. The arms stretch 28 metres (92 ft) wide'
        btn1.classList.add('active')
        btn2.classList.remove('active')
        btn3.classList.remove('active')
        btn4.classList.remove('active')
        btn5.classList.remove('active')
        btn6.classList.remove('active')
        btn7.classList.remove('active')

    }else if (num === 2) {
        photo.src = 'image/p2.jpeg'
        title.innerText = 'The colosseum'
        locate.innerText= 'Rome,Italy'
        links.href = 'https://en.wikipedia.org/wiki/Colosseum'
        descript.innerText = 'The Colosseum is built of travertine limestone, tuff (volcanic rock), and brick-faced concrete. It could hold an estimated 50,000 to 80,000 spectators at various points in its history,[4][5] having an average audience of some 65,000;[6] it was used for gladiatorial contests and public spectacles including animal hunts, executions, re-enactments of famous battles, and dramas based on Roman mythology, and briefly mock sea battles.'
        btn1.classList.remove('active')
        btn2.classList.add('active')
        btn3.classList.remove('active')
        btn4.classList.remove('active')
        btn5.classList.remove('active')
        btn6.classList.remove('active')
        btn7.classList.remove('active')

    }else if (num === 3) {
        photo.src = 'image/p3.jpeg'
        title.innerText = 'Chichén Itzá'
        locate.innerText= 'Mexico'
        links.href = 'https://en.wikipedia.org/wiki/Chichen_Itza'
        descript.innerText = 'Chichén Itzá was one of the largest Maya cities and it was likely to have been one of the mythical great cities, or Tollans, referred to in later Mesoamerican literature. The site exhibits a multitude of architectural styles, reminiscent of styles seen in central Mexico and of the Puuc and Chenes styles of the Northern Maya lowlands.'
        btn1.classList.remove('active')
        btn2.classList.remove('active')
        btn3.classList.add('active')
        btn4.classList.remove('active')
        btn5.classList.remove('active')
        btn6.classList.remove('active')
        btn7.classList.remove('active')
        
    }else if (num ===4) {
        photo.src = 'image/p4.jpeg'
        title.innerText = ' Machu Picchu'
        locate.innerText = 'Peru'
        links.href = 'https://en.wikipedia.org/wiki/Machu_Picchu'
        descript.innerText = 'Often referred to as the "Lost City of the Incas", it is the most familiar icon of the Inca Empire. It is located in the Machupicchu District within Urubamba Province[4] above the Sacred Valley, which is 80 kilometers (50 mi) northwest of Cusco. The Urubamba River flows past it, cutting through the Cordillera and creating a canyon with a tropical mountain climate.'
        btn1.classList.remove('active')
        btn2.classList.remove('active')
        btn3.classList.remove('active')
        btn4.classList.add('active')
        btn5.classList.remove('active')
        btn6.classList.remove('active')
        btn7.classList.remove('active')

    }else if (num ===5) {
        photo.src = 'image/p5.jpeg'
        title.innerText = ' Great Pyramid of Giza'
        locate.innerText = 'Egypt'
        links.href = 'https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza'
        descript.innerText = 'the largest Egyptian pyramid and served as the tomb of pharaoh Khufu, who ruled during the Fourth Dynasty of the Old Kingdom.the largest Egyptian pyramid and served as the tomb of pharaoh Khufu, who ruled during the Fourth Dynasty of the Old Kingdom. It is situated at the northern end of the line of the three pyramids at Giza.'
        btn1.classList.remove('active')
        btn2.classList.remove('active')
        btn3.classList.remove('active')
        btn4.classList.remove('active')
        btn5.classList.add('active')
        btn6.classList.remove('active')
        btn7.classList.remove('active')

    }else if (num ===6) {
        photo.src = 'image/p6.jpeg'
        title.innerText = 'Taj Mahal'
        locate.innerText = 'India'
        links.href = 'https://en.wikipedia.org/wiki/Taj_Mahal'
        descript.innerText = ' is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan (r. 1628–1658) to house the tomb of his beloved wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. '
        btn1.classList.remove('active')
        btn2.classList.remove('active')
        btn3.classList.remove('active')
        btn4.classList.remove('active')
        btn5.classList.remove('active')
        btn6.classList.add('active')
        btn7.classList.remove('active')

    }else if (num ===7) {
        photo.src = 'image/p7.jpeg'
        title.innerText = 'Great wall of China'
        locate.innerText = 'China'
        links.href = 'https://en.wikipedia.org/wiki/Great_Wall_of_China'
        descript.innerText = ' is a series of fortifications that were built across the historical northern borders of ancient Chinese states and Imperial China as protection against various nomadic groups from the Eurasian Steppe.'
        btn1.classList.remove('active')
        btn2.classList.remove('active')
        btn3.classList.remove('active')
        btn4.classList.remove('active')
        btn5.classList.remove('active')
        btn6.classList.remove('active')
        btn7.classList.add('active')

    }

    
}