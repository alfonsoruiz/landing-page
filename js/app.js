loadNav();
const navLinks = document.querySelectorAll('li');
const [linkOne, linkTwo, linkThree, linkFour, linkFive] = navLinks;
const header = document.querySelector('header');
const heading = document.querySelector('h1');
const sectionOne = document.querySelector('.section-one');
const sectionTwo = document.querySelector('.section-two');
const sectionThree = document.querySelector('.section-three');
const sectionFour = document.querySelector('.section-four');
const sectionFive = document.querySelector('.section-five');

function loadNav() {
  const navItems = ['Strategy', 'Content', 'Design', 'Engineering', 'Media'];
  const navList = document.querySelector('ul');
  const fragment = document.createDocumentFragment();

  for (navItem of navItems) {
    const li = document.createElement('li');
    li.textContent = navItem;

    fragment.appendChild(li);
  }

  navList.appendChild(fragment);
}

function scrollToY(x, y) {
  window.scrollTo({
    top: y,
    x: x,
    behavior: 'smooth',
  });
}

function goToSection(e) {
  switch (e.target.textContent) {
    case linkOne.textContent:
      scrollToY(0, sectionOne.offsetTop);
      break;
    case linkTwo.textContent:
      scrollToY(0, sectionTwo.offsetTop);
      break;
    case linkThree.textContent:
      scrollToY(0, sectionThree.offsetTop);
      break;
    case linkFour.textContent:
      scrollToY(0, sectionFour.offsetTop);
      break;
    case linkFive.textContent:
      scrollToY(0, sectionFive.offsetTop);
      break;
    default:
      break;
  }
}

function highlightLocation() {
  const { scrollY } = window;

  if (scrollY >= sectionOne.offsetTop && scrollY < sectionTwo.offsetTop) {
    linkOne.classList.add('active');
  } else {
    linkOne.classList.remove('active');
  }

  if (scrollY >= sectionTwo.offsetTop && scrollY < sectionThree.offsetTop) {
    linkTwo.classList.add('active');
  } else {
    linkTwo.classList.remove('active');
  }

  if (scrollY >= sectionThree.offsetTop && scrollY < sectionFour.offsetTop) {
    linkThree.classList.add('active');
  } else {
    linkThree.classList.remove('active');
  }

  if (scrollY >= sectionFour.offsetTop && scrollY < sectionFive.offsetTop) {
    linkFour.classList.add('active');
  } else {
    linkFour.classList.remove('active');
  }

  if (scrollY >= sectionFive.offsetTop) {
    linkFive.classList.add('active');
  } else {
    linkFive.classList.remove('active');
  }
}

header.addEventListener('click', goToSection);
heading.addEventListener('click', () => {
  scrollToY(0, 0);
});
window.addEventListener('scroll', highlightLocation);
