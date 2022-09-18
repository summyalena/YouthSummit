const speakers = {
  speaker1: {
    id: 1,
    name: 'Christopher Ani',
    title: 'Head and Director of Youth International Organization',
    about: 'Christopher discovered youth International org in 2022. He studied Computer science in Berlan University.',
    checkersImage: './images/checkers.png',
    featuredImage: './images/professor0.png',
  },
  speaker2: {
    id: 2,
    name: 'Claire Stone',
    title: 'A masters student in Cambridge college',
    about: 'Got enrolled in masters studies in Cambridge college. She is currently a lecturer of economics in Cambridge College',
    checkersImage: './images/checkers.png',
    featuredImage: './images/professor.png',
  },
  speaker3: {
    id: 3,
    name: 'Abigail Johnson',
    title: 'CEO.GreenSight Edge Ltd',
    about: 'Started Nigeria’s first technology PR firm in Nigeria, GreenSight Edge Ltd. It was founded with the aim of helping businesses to reduce cost.',
    checkersImage: './images/checkers.png',
    featuredImage: './images/professor3.png',
  },
  speaker4: {
    id: 4,
    name: 'Elvis Duncan',
    title: 'Co-founder LightsUp',
    about: 'LightUps is a non-profit Organization that helps to build and connect teenagers to opportunities to leverage on their talents',
    checkersImage: './images/checkers.png',
    featuredImage: './images/professor4.png',
  },
  speaker5: {
    id: 5,
    name: 'Bello Young',
    title: 'Co-founder. Youth International Organization',
    about: 'Studied social works in University of Nigeria,Nsukka. Currently the youngest professor in the department of international relations,UNN.',
    checkersImage: './images/checkers.png',
    featuredImage: './images/professor5.png',
  },
  speaker6: {
    id: 6,
    name: 'Chike Igwe',
    title: 'CEO. Gracers Tech Company',
    about: 'Chike is the co-founder and CEO of a transport and tech company, Gracers. A lagos-based startup that uses web and mobile app to enable users book trip along fixed routes.',
    checkersImage: './images/checkers.png',
    featuredImage: './images/professor7.png',
  },

};

const SpeakerSection = document.querySelector('.speakers-wrap');

Object.keys(speakers).forEach((speaker) => {
  if (Object.hasOwnProperty.call(speakers, speaker)) {
    const person = speakers[speaker];
    SpeakerSection.innerHTML += `
        <li class="speakers mobile-speakers">
        <div class="speaker-img">
          <img class="checkers" src='${person.checkersImage}' alt=${person.about}/>
          <img class="speakers" src='${person.featuredImage}' alt=${person.about}/>
      </div>
        <div class="speaker-abt">
          <h5>${person.name}</h5>
      <h6>${person.title}</h6>
          <div class="line2"></div>
          <p>${person.about}</p>
        </div>
      </li>
        `;
  }
});

const hamburgerMenu = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-link');
const mobileNavLists = document.querySelectorAll('.nav-item-mobile');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('is-active');
  mobileNav.classList.toggle('is-active');
});

mobileNavLists.forEach((link) => {
  link.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('is-active');
    mobileNav.classList.toggle('is-active');
  });
});