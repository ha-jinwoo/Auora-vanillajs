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

let ViewButton = document.createElement('div');
ViewButton.id = 'ViewButton';
Post_Header.append(ViewButton);

let ViewButton_Img = document.createElement('img');
ViewButton_Img.src = 'img/210219_home_0000s_0002s_0001_View.png'
ViewButton_Img.id = 'ViewButton_Img'
ViewButton.append(ViewButton_Img);

let SelectFillter = document.createElement('select');
SelectFillter.id = 'SelectFillter'
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

let Search_Container = document.createElement('div')
Search_Container.id = 'Search_Container'
Post_Header.append(Search_Container);
let SearchInput = document.createElement('input');
SearchInput.id = 'SearchInput';
SearchInput.setAttribute('placeholder',' Search...')
let SearchImg = document.createElement('img');
SearchImg.id = 'SearchImg';
SearchImg.src = 'img/210219_home_0000s_0001s_0001_레이어-3.png'

Search_Container.append(SearchInput,SearchImg);

let Post_Main = document.createElement('div');
Post_Main.id = 'Post_Main'; 
Main_Container.append(Post_Main);

let Selector_WheatherIcon = document.createElement('img');
Selector_WheatherIcon.src = 'img/210219_home_0001s_0006_모서리가-둥근-직사각형-5.png'
Selector_WheatherIcon.id = 'Selector_WheatherIcon'
Post_Main.append(Selector_WheatherIcon)

Selector_WheatherBox_Container = document.createElement('div');
Selector_WheatherBox_Container.id = 'Selector_WheatherBox_Container';
Post_Main.append(Selector_WheatherBox_Container);

Selector_Wheather_Container = document.createElement('div');
Selector_Wheather_Container.id = 'Selector_Wheatherbox_Container.id';
Selector_WheatherBox_Container.append(Selector_Wheather_Container);

let Selector_Wheatherbox_Sun = document.createElement('i');
Selector_Wheatherbox_Sun.id = 'Selector_Wheatherbox_Sun'
Selector_Wheatherbox_Sun.classList.add('fas')
Selector_Wheatherbox_Sun.classList.add('fa-sun')

let Selector_Wheatherbox_Cloud = document.createElement('i');
Selector_Wheatherbox_Cloud.id = 'Selector_Wheatherbox_Cloud'
Selector_Wheatherbox_Cloud.classList.add('fas')
Selector_Wheatherbox_Cloud.classList.add('fa-cloud')

let Selector_Wheatherbox_Rain = document.createElement('i');
Selector_Wheatherbox_Rain.id = 'Selector_Wheatherbox_Rain'
Selector_Wheatherbox_Rain.classList.add('fas')
Selector_Wheatherbox_Rain.classList.add('fa-cloud-showers-heavy')

let Selector_Wheatherbox_Moon = document.createElement('i');
Selector_Wheatherbox_Moon.id = 'Selector_Wheatherbox_Moon'
Selector_Wheatherbox_Moon.classList.add('fas')
Selector_Wheatherbox_Moon.classList.add('fa-moon')

Selector_Wheather_Container.append(Selector_Wheatherbox_Sun,Selector_Wheatherbox_Cloud,Selector_Wheatherbox_Rain,Selector_Wheatherbox_Moon)

Selector_Wheather_TextContainer = document.createElement('div');
Selector_Wheather_TextContainer.id = 'Selector_Wheather_TextContainer';
Selector_WheatherBox_Container.append(Selector_Wheather_TextContainer);

Selector_Wheather_Text = document.createElement('span');
Selector_Wheather_Text.id = 'Selector_Wheather_Text';
Selector_Wheather_Text.textContent = '오늘 당신의 날씨는 어떤가요?'
Selector_Wheather_TextContainer.append(Selector_Wheather_Text)

let Selector_Load_Media_Container = document.createElement('div');
Selector_Load_Media_Container.id = 'Selector_Load_Media_Container';
Post_Main.append(Selector_Load_Media_Container);

let Selector_Load_Media_Camera_Container = document.createElement('div');
Selector_Load_Media_Camera_Container.id ='Selector_Load_Media_Camera_Container'
Selector_Load_Media_Container.append(Selector_Load_Media_Camera_Container)

let Selector_Load_Media_Camera = document.createElement('i');
Selector_Load_Media_Camera.id = 'Selector_Load_Media_Camera';
Selector_Load_Media_Camera.classList.add('fas')
Selector_Load_Media_Camera.classList.add('fa-camera')
Selector_Load_Media_Camera_Container.append(Selector_Load_Media_Camera)

let Selector_Load_Media_Picture_Container = document.createElement('div');
Selector_Load_Media_Picture_Container.id ='Selector_Load_Media_Picture_Container'
Selector_Load_Media_Container.append(Selector_Load_Media_Picture_Container)

let Selector_Load_Media_Picture = document.createElement('i');
Selector_Load_Media_Picture.id = 'Selector_Load_Media_Picture';
Selector_Load_Media_Picture.classList.add('far')
Selector_Load_Media_Picture.classList.add('fa-image')
Selector_Load_Media_Picture_Container.append(Selector_Load_Media_Picture)

let Selector_Load_Media_Video_Container = document.createElement('div');
Selector_Load_Media_Video_Container.id ='Selector_Load_Media_Video_Container'
Selector_Load_Media_Container.append(Selector_Load_Media_Video_Container)

let Selector_Load_Media_Video = document.createElement('i');
Selector_Load_Media_Video.id = 'Selector_Load_Media_Video';
Selector_Load_Media_Video.classList.add('fab')
Selector_Load_Media_Video.classList.add('fa-youtube')
Selector_Load_Media_Video_Container.append(Selector_Load_Media_Video)


let ShareButton = document.createElement('div');
ShareButton.id = 'ShareButton';
Post_Main.append(ShareButton);

let ShareButton_Img = document.createElement('img');
ShareButton_Img.src = 'img/210219_home_0001s_0001_Share.png'
ShareButton_Img.id = 'ShareButton_Img'
ShareButton.append(ShareButton_Img);

function addCheckbox(textcontent){
    let Checkbox_Weather = document.createElement('input')
    Checkbox_Weather.classList.add('Checkbox_Weather')
    Checkbox_Weather.setAttribute('type','checkbox')
    Checkbox_Weather.addEventListener('click',checkOnlyOne.bind(this))
    
    let span = document.createElement('span');
    span.textContent = textcontent;
    span.classList.add('Checkbox_Weather_Text')

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

