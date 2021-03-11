let root = document.querySelector('.root')

let Navbar_Menu = document.createElement('nav')
Navbar_Menu.id = 'Navbar_Menu';
root.append(Navbar_Menu)

let a_Brand_Logo = document.createElement('a')
a_Brand_Logo.id = 'Brand_Logo';

let img_a_Brand_Logo = document.createElement('img')
img_a_Brand_Logo.src = 'img/210219_home_0000_logo.png'

a_Brand_Logo.append(img_a_Brand_Logo)
Navbar_Menu.append(a_Brand_Logo)

let Nav_Buttons  = document.createElement('div')
Nav_Buttons.id = 'Nav_Buttons'

let Nav_Join = document.createElement('a')
Nav_Join.classList.add('Nav_Join')

let img_Nav_Join = document.createElement('img')
img_Nav_Join.src = 'img/210219_home_0007s_0000_Join.png'

let Nav_Login = document.createElement('a')
Nav_Login.classList.add('Nav_Login')

let img_Nav_Login = document.createElement('img')
img_Nav_Login.src = 'img/210219_home_0007s_0002_Login.png'

let Container = document.createElement('div')
Container.id = 'Container'
root.append(Container)

Nav_Join.append(img_Nav_Join)
Nav_Login.append(img_Nav_Login)
Nav_Buttons.append(Nav_Join,Nav_Login)
Navbar_Menu.append(Nav_Buttons)


