let Sidebar_Left = document.createElement('nav');
Sidebar_Left.id = 'Sidebar_Left';
Container.append(Sidebar_Left);

let Menu_List = document.createElement('ul');
Menu_List.classList.add('Menu_List');
Sidebar_Left.append(Menu_List);

let Menu_List_Home_Li = document.createElement('li');
Menu_List_Home_Li.id = 'Menu_List_Home_Li'
let Menu_List_Home_I = document.createElement('i');
Menu_List_Home_I.classList.add('fas')
Menu_List_Home_I.classList.add('fa-home')
let Menu_List_Home_Span = document.createElement('span');
Menu_List_Home_Span.textContent = '홈';
Menu_List_Home_Span.id = 'Menu_List_Home_Span';
Menu_List_Home_Li.append(Menu_List_Home_I,Menu_List_Home_Span)
Menu_List.append(Menu_List_Home_Li)

let Menu_List_Notice_Li = document.createElement('li');
Menu_List_Notice_Li.id = 'Menu_List_Notice_Li'
let Menu_List_Notice_I = document.createElement('i');
Menu_List_Notice_I.classList.add('far')
Menu_List_Notice_I.classList.add('fa-bell')
let Menu_List_Notice_Span = document.createElement('span');
Menu_List_Notice_Span.textContent = '알림';
Menu_List_Notice_Span.id = 'Menu_List_Notice_Span'
Menu_List_Notice_Li.append(Menu_List_Notice_I,Menu_List_Notice_Span)
Menu_List.append(Menu_List_Notice_Li)

let Menu_List_Note_Li = document.createElement('li');
Menu_List_Note_Li.id = 'Menu_List_Note_Li'
let Menu_List_Note_I = document.createElement('i');
Menu_List_Note_I.classList.add('fab')
Menu_List_Note_I.classList.add('fa-facebook-messenger')
let Menu_List_Note_Span = document.createElement('span');
Menu_List_Note_Span.id = 'Menu_List_Note_Span'
Menu_List_Note_Span.textContent = '쪽지';
Menu_List_Note_Li.append(Menu_List_Note_I,Menu_List_Note_Span)
Menu_List.append(Menu_List_Note_Li)

let Menu_List_Recommendation_Li = document.createElement('li');
Menu_List_Recommendation_Li.id = 'Menu_List_Recommendation_Li'
let Menu_List_Recommendation_I = document.createElement('i');
Menu_List_Recommendation_I.classList.add('fas')
Menu_List_Recommendation_I.classList.add('fa-align-justify')
let Menu_List_Recommendation_Span = document.createElement('span');
Menu_List_Recommendation_Span.id = 'Menu_List_Recommendation_Span'
Menu_List_Recommendation_Span.textContent = '추천';
Menu_List_Recommendation_Li.append(Menu_List_Recommendation_I,Menu_List_Recommendation_Span)
Menu_List.append(Menu_List_Recommendation_Li)

let Menu_List_User_Icon_Container = document.createElement('div');
Menu_List_User_Icon_Container.id = 'Menu_List_User_Icon_Container';
Menu_List.append(Menu_List_User_Icon_Container);

let Menu_List_User_Icon_Img = document.createElement('img');
Menu_List_User_Icon_Img.id = 'Menu_List_User_Icon_Img';
Menu_List_User_Icon_Img.src = 'img/210219_home_0001s_0006_모서리가-둥근-직사각형-5.png'
Menu_List_User_Icon_Container.append(Menu_List_User_Icon_Img);

let Menu_List_User_Icon_Text = document.createElement('div');
Menu_List_User_Icon_Text.id = 'Menu_List_User_Icon_Text';
Menu_List_User_Icon_Text.textContent = '제이지'
Menu_List_User_Icon_Container.append(Menu_List_User_Icon_Text);