let Main_Container = document.createElement('div');
Main_Container.id = 'Main_Container';
Container.append(Main_Container);

let Post_Header = document.createElement('div');
Post_Header.id = 'Post_Header';
Main_Container.append(Post_Header)

let Checkbox_Weather_List = document.createElement('div');
Checkbox_Weather_List.id ='Checkbox_Weather_List'
Post_Header.append(Checkbox_Weather_List);

addCheckbox('Sun');
addCheckbox('Cloud');
addCheckbox('Rain');
addCheckbox('Mood');

let ViewButton = document.createElement('button');
ViewButton.id = 'ViewButton'; 
ViewButton.textContent = 'View'
Post_Header.append(ViewButton);

let SelectFillter = document.createElement('select');
Post_Header.append(SelectFillter)
let option1 = document.createElement('option');
option1.setAttribute('value','');
option1.textContent = 'Filters';
let option2 = document.createElement('option');
option2.textContent = '날씨';
let option3 = document.createElement('option');
option3.textContent = '유저';
let option4 = document.createElement('option');
option4.textContent = '내용';

SelectFillter.append(option1,option2,option3,option4);

let div = document.createElement('div')
Post_Header.append(div);
let SearchInput = document.createElement('input');
SearchInput.id = 'SearchInput';
let SearchImg = document.createElement('img');
SearchImg.id = 'SearchImg';
SearchImg.src = 'img/210219_home_0000s_0001s_0001_레이어-3.png'

div.append(SearchInput,SearchImg);

let Post_Main = document.createElement('div');
Post_Main.id = 'Post_Main'; 
Main_Container.append(Post_Main);

let Selector_Wheatherbox = document.createElement('img');
Selector_Wheatherbox.src = 'img/210219_home_0001s_0006_모서리가-둥근-직사각형-5.png'
Post_Main.append(Selector_Wheatherbox)

Selector_Wheatherbox_Container = document.createElement('div');
Selector_Wheatherbox_Container.id = 'Selector_Wheatherbox_Container.id';
Post_Main.append(Selector_Wheatherbox_Container);

let Selector_Wheatherbox_Sun = document.createElement('i');
Selector_Wheatherbox_Sun.classList.add('fas')
Selector_Wheatherbox_Sun.classList.add('fa-sun')

let Selector_Wheatherbox_Cloud = document.createElement('i');
Selector_Wheatherbox_Cloud.classList.add('fas')
Selector_Wheatherbox_Cloud.classList.add('fa-cloud')

let Selector_Wheatherbox_Rain = document.createElement('i');
Selector_Wheatherbox_Rain.classList.add('fas')
Selector_Wheatherbox_Rain.classList.add('fa-cloud-showers-heavy')

let Selector_Wheatherbox_Moon = document.createElement('i');
Selector_Wheatherbox_Moon.classList.add('fas')
Selector_Wheatherbox_Moon.classList.add('fa-moon')

Selector_Wheatherbox_Container.append(Selector_Wheatherbox_Sun,Selector_Wheatherbox_Cloud,Selector_Wheatherbox_Rain,Selector_Wheatherbox_Moon)

let Selector_Load_Media_Container = document.createElement('div');
Selector_Load_Media_Container.id = 'Selector_Load_Media_Container';
Post_Main.append(Selector_Load_Media_Container);

let Selector_Load_Media_Camera = document.createElement('img');
Selector_Load_Media_Camera.id = Selector_Load_Media_Camera;
Selector_Load_Media_Camera.src = 'img/210219_home_0001s_0000s_0000_camera.png';

let Selector_Load_Media_Picture = document.createElement('img');
Selector_Load_Media_Picture.id = 'Selector_Load_Media_Picture';
Selector_Load_Media_Picture.src= 'img/210219_home_0001s_0000s_0002_image.png';

let Selector_Load_Media_Video = document.createElement('img');
Selector_Load_Media_Video.id = 'Selector_Load_Media_Video';
Selector_Load_Media_Video.src= 'img/210219_home_0001s_0000s_0001_video.png';

Selector_Load_Media_Container.append(Selector_Load_Media_Camera,Selector_Load_Media_Picture,Selector_Load_Media_Video);

let ShareButton = document.createElement('button');
ShareButton.id = ShareButton;
ShareButton.textContent = 'Share'
Post_Main.append(ShareButton);

function addCheckbox(textcontent){
    let Checkbox_Weather = document.createElement('input')
    Checkbox_Weather.classList.add('Checkbox_Weather')
    Checkbox_Weather.setAttribute('type','checkbox')
    Checkbox_Weather.addEventListener('click',checkOnlyOne.bind(this))
    
    let span = document.createElement('span');
    span.textContent = textcontent;

    Checkbox_Weather_List.append(Checkbox_Weather);
    Checkbox_Weather_List.append(span)

}

function checkOnlyOne(event) {
  
    const checkboxes 
        = document.querySelectorAll(".Checkbox_Weather");
    
    checkboxes.forEach((cb) => {
      cb.checked = false;
    })
    
    event.target.checked = true;
}

