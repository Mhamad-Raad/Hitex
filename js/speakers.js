const obj = [
  {
    name: 'Rebaz Farid',
    profession: 'UTM Network Engineer',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
    img: './assets/images/Speakers/Rebaz.png',
  },
  {
    name: 'Siros Ali',
    profession: 'UTM Software Engineer',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
    img: './assets/images/Speakers/Siros.png',
  },
  {
    name: 'Aland',
    profession: 'Network',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
    img: './assets/images/Speakers/Aland.png',
  },
  {
    name: 'Zanyar Kurdo',
    profession: 'English',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
    img: './assets/images/Speakers/Zanyar.png',
  },
];
const speakerSection = document.querySelector('.speakers');

window.onload = () => {
  for (let i = 0; i < obj.length; i += 1) {
    speakerSection.innerHTML += `
    <div class="speaker-box">
      
    <div class="left-side">
      <img src="./assets/images/Backgrounds/transparent.png" alt="" class="bg">
      <img src="${obj[i].img}" alt="speaker" class="speaker-img">
    </div>
  
    <div class="right-side">
      <h2 class="speaker-name">${obj[i].name}</h2>
      <p class="speaker-proffession">${obj[i].profession}</p>
      <div class="divider"></div>
      <p class="speaker-desc">${obj[i].desc}</p>
    </div>
  </div>`;
  }
};