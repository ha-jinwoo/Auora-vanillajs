let Sidebar_Right = document.createElement('div');
Sidebar_Right.id = 'Sidebar_Right';
Container.append(Sidebar_Right);

let Ad = document.createElement('div');
Ad.id = 'Ad';
Sidebar_Right.append(Ad);

let Ad_Text = document.createElement('div');
Ad_Text.id = 'Ad_Text';
Ad_Text.textContent = 'Sponsored'
Ad.append(Ad_Text);

let Ad_Element1_Container = document.createElement('div');
Ad_Element1_Container.id = 'Ad_Element1_Container';
Ad.append(Ad_Element1_Container);

let Ad_Element1_Img_Container = document.createElement('a');
Ad_Element1_Img_Container.id = 'Ad_Element1_Img_Container';
Ad_Element1_Container.append(Ad_Element1_Img_Container);

let Ad_Element1_Img = document.createElement('img');
Ad_Element1_Img.id = 'Ad_Element1_Img';
Ad_Element1_Img.src = 'img/210219_home_0001s_0006_모서리가-둥근-직사각형-5.png'
Ad_Element1_Img_Container.append(Ad_Element1_Img);

let Ad_Element1_Text1 = document.createElement('a');
Ad_Element1_Text1.id = 'Ad_Element1_Text';
Ad_Element1_Text1.textContent = '쿠키런 킹덤 지금 설치하세요'
Ad_Element1_Container.append(Ad_Element1_Text1);

let Ad_Element1_Text2 = document.createElement('a');
Ad_Element1_Text2.id = 'Ad_Element1_Text2';
Ad_Element1_Text2.textContent = 'https://www.cookierun-kingdom.com/ko/'
Ad_Element1_Text2.setAttribute('href','https://www.cookierun-kingdom.com/ko/')
Ad_Element1_Text2.setAttribute('target','_blank')
Ad_Element1_Container.append(Ad_Element1_Text2);

let Ad_Element2_Container = document.createElement('div');
Ad_Element2_Container.id = 'Ad_Element2_Container';
Ad.append(Ad_Element2_Container);

let Ad_Element2_Img_Container = document.createElement('a');
Ad_Element2_Img_Container.id = 'Ad_Element2_Img_Container';
Ad_Element2_Container.append(Ad_Element2_Img_Container);

let Ad_Element2_Img = document.createElement('img');
Ad_Element2_Img.id = 'Ad_Element1_Img';
Ad_Element2_Img.src = 'img/210219_home_0001s_0006_모서리가-둥근-직사각형-5.png'
Ad_Element2_Img_Container.append(Ad_Element2_Img);

let Ad_Element2_Text1 = document.createElement('a');
Ad_Element2_Text1.id = 'Ad_Element1_Text';
Ad_Element2_Text1.textContent = '쿠키런 킹덤 지금 설치하세요'
Ad_Element2_Container.append(Ad_Element2_Text1);

let Ad_Element2_Text2 = document.createElement('a');
Ad_Element2_Text2.id = 'Ad_Element1_Text2';
Ad_Element2_Text2.textContent = 'https://www.cookierun-kingdom.com/ko/'
Ad_Element2_Text2.setAttribute('href','https://www.cookierun-kingdom.com/ko/')
Ad_Element2_Text2.setAttribute('target','_blank')
Ad_Element2_Container.append(Ad_Element2_Text2);

let Recommended_Friends = document.createElement('div');
Recommended_Friends.id = 'Recommended_Friends';
Sidebar_Right.append(Recommended_Friends);

let Recommended_Friends_Text_Container = document.createElement('div');
Recommended_Friends_Text_Container.id = 'Recommended_Friends_Text_Container';
Recommended_Friends.append(Recommended_Friends_Text_Container);

let Recommended_Friends_Text = document.createElement('div');
Recommended_Friends_Text.id = 'Recommended_Friends_Text';
Recommended_Friends_Text.textContent = '추천친구'
Recommended_Friends_Text_Container.append(Recommended_Friends_Text);

let Recommended_Friends_Setting = document.createElement('div');
Recommended_Friends_Setting.id = 'Recommended_Friends_Setting';
Recommended_Friends_Setting.textContent = '...'
Recommended_Friends_Text_Container.append(Recommended_Friends_Setting);

let Recommended_Friends_Container = document.createElement('div');
Recommended_Friends_Container.id = 'Recommended_Friends_Container'
Recommended_Friends.append(Recommended_Friends_Container);

let Recommended_Friends_Element1_Container = document.createElement('div');
Recommended_Friends_Element1_Container.id = 'Recommended_Friends_Element1_Container';
Recommended_Friends_Container.append(Recommended_Friends_Element1_Container);

let Recommended_Friends_Element1_Img = document.createElement('img');
Recommended_Friends_Element1_Img.id = 'Recommended_Friends_Element1_Img';
Recommended_Friends_Element1_Container.append(Recommended_Friends_Element1_Img);

let Recommended_Friends_Element1_Text = document.createElement('div');
Recommended_Friends_Element1_Text.id = 'Recommended_Friends_Element1_Text';
Recommended_Friends_Element1_Text.textContent = '조르디';
Recommended_Friends_Element1_Container.append(Recommended_Friends_Element1_Text);

let Recommended_Friends_Element1_Button = document.createElement('button');
Recommended_Friends_Element1_Button.id = 'Recommended_Friends_Element1_Button';
Recommended_Friends_Element1_Button.textContent = '친구추가';
Recommended_Friends_Element1_Container.append(Recommended_Friends_Element1_Button);

let Recommended_Friends_Element2_Container = document.createElement('div');
Recommended_Friends_Element2_Container.id = 'Recommended_Friends_Element2_Container';
Recommended_Friends_Container.append(Recommended_Friends_Element2_Container);

let Recommended_Friends_Element2_Img = document.createElement('img');
Recommended_Friends_Element2_Img.id = 'Recommended_Friends_Element2_Img';
Recommended_Friends_Element2_Container.append(Recommended_Friends_Element2_Img);

let Recommended_Friends_Element2_Text = document.createElement('div');
Recommended_Friends_Element2_Text.id = 'Recommended_Friends_Element2_Text';
Recommended_Friends_Element2_Text.textContent = '앙몬드';
Recommended_Friends_Element2_Container.append(Recommended_Friends_Element2_Text);

let Recommended_Friends_Element2_Button = document.createElement('button');
Recommended_Friends_Element2_Button.id = 'Recommended_Friends_Element2_Button';
Recommended_Friends_Element2_Button.textContent = '친구추가';
Recommended_Friends_Element2_Container.append(Recommended_Friends_Element2_Button);

let Recommended_Friends_Element3_Container = document.createElement('div');
Recommended_Friends_Element3_Container.id = 'Recommended_Friends_Element3_Container';
Recommended_Friends_Container.append(Recommended_Friends_Element3_Container);

let Recommended_Friends_Element3_Img = document.createElement('img');
Recommended_Friends_Element3_Img.id = 'Recommended_Friends_Element3_Img';
Recommended_Friends_Element3_Container.append(Recommended_Friends_Element3_Img);

let Recommended_Friends_Element3_Text = document.createElement('div');
Recommended_Friends_Element3_Text.id = 'Recommended_Friends_Element3_Text';
Recommended_Friends_Element3_Text.textContent = '앙몬드';
Recommended_Friends_Element3_Container.append(Recommended_Friends_Element3_Text);

let Recommended_Friends_Element3_Button = document.createElement('button');
Recommended_Friends_Element3_Button.id = 'Recommended_Friends_Element3_Button';
Recommended_Friends_Element3_Button.textContent = '친구추가';
Recommended_Friends_Element3_Container.append(Recommended_Friends_Element3_Button);

let Friends_Weather = document.createElement('div');
Friends_Weather.id = 'Friends_Weather';
Sidebar_Right.append(Friends_Weather);

let Friends_Weather_Text_Container = document.createElement('div');
Friends_Weather_Text_Container.id = 'Friends_Weather_Text_Container';
Friends_Weather.append(Friends_Weather_Text_Container);

let Friends_Weather_Text = document.createElement('div');
Friends_Weather_Text.id = 'Friends_Weather_Text';
Friends_Weather_Text.textContent = `My Friend's Weather`
Friends_Weather_Text_Container.append(Friends_Weather_Text);

let Friends_Weather_Setting = document.createElement('div');
Friends_Weather_Setting.id = 'Friends_Weather_Setting';
Friends_Weather_Setting.textContent = '...'
Friends_Weather_Text_Container.append(Friends_Weather_Setting);

let Friends_Weather_Container = document.createElement('div');
Friends_Weather_Container.id = 'Friends_Weather_Container';
Friends_Weather.append(Friends_Weather_Container);

let Friends_Weather_Element1_Container = document.createElement('div')
Friends_Weather_Element1_Container.id = 'Friends_Weather_Element1_Container';
Friends_Weather_Container.append(Friends_Weather_Element1_Container);

let Friends_Weather_Element1_Counter = document.createElement('div');
Friends_Weather_Element1_Counter.id = 'Friends_Weather_Element1_Counter';
Friends_Weather_Element1_Container.append(Friends_Weather_Element1_Counter);

let Friends_Weather_Element1_Weather = document.createElement('img');
Friends_Weather_Element1_Weather.id = 'Friends_Weather_Element1_Weather';
Friends_Weather_Element1_Weather.src = 'img/210219_home_0001s_0001s_0000_sun.png'
Friends_Weather_Element1_Container.append(Friends_Weather_Element1_Weather);

let Friends_Weather_Element2_Container = document.createElement('div')
Friends_Weather_Element2_Container.id = 'Friends_Weather_Element2_Container';
Friends_Weather_Container.append(Friends_Weather_Element2_Container);

let Friends_Weather_Element2_Counter = document.createElement('div');
Friends_Weather_Element2_Counter.id = 'Friends_Weather_Element2_Counter';
Friends_Weather_Element2_Container.append(Friends_Weather_Element2_Counter);

let Friends_Weather_Element2_Weather = document.createElement('img');
Friends_Weather_Element2_Weather.id = 'Friends_Weather_Element2_Weather';
Friends_Weather_Element2_Weather.src = 'img/210219_home_0001s_0001s_0001_cloud.png'
Friends_Weather_Element2_Container.append(Friends_Weather_Element2_Weather);

let Friends_Weather_Element3_Container = document.createElement('div')
Friends_Weather_Element3_Container.id = 'Friends_Weather_Element3_Container';
Friends_Weather_Container.append(Friends_Weather_Element3_Container);

let Friends_Weather_Element3_Counter = document.createElement('div');
Friends_Weather_Element3_Counter.id = 'Friends_Weather_Element3_Counter';
Friends_Weather_Element3_Container.append(Friends_Weather_Element3_Counter);

let Friends_Weather_Element3_Weather = document.createElement('img');
Friends_Weather_Element3_Weather.id = 'Friends_Weather_Element3_Weather';
Friends_Weather_Element3_Weather.src = 'img/210219_home_0001s_0001s_0002_rain.png'
Friends_Weather_Element3_Container.append(Friends_Weather_Element3_Weather);

let Friends_Weather_Element4_Container = document.createElement('div')
Friends_Weather_Element4_Container.id = 'Friends_Weather_Element4_Container';
Friends_Weather_Container.append(Friends_Weather_Element4_Container);

let Friends_Weather_Element4_Counter = document.createElement('div');
Friends_Weather_Element4_Counter.id = 'Friends_Weather_Element4_Counter';
Friends_Weather_Element4_Container.append(Friends_Weather_Element4_Counter);

let Friends_Weather_Element4_Weather = document.createElement('img');
Friends_Weather_Element4_Weather.id = 'Friends_Weather_Element4_Weather';
Friends_Weather_Element4_Weather.src = 'img/210219_home_0001s_0001s_0003_mood.png'
Friends_Weather_Element4_Container.append(Friends_Weather_Element4_Weather);

let Realtime_Weather = document.createElement('div');
Realtime_Weather.id = 'Realtime_Weather';
Sidebar_Right.append(Realtime_Weather);

let Realtime_Weather_Text = document.createElement('div');
Realtime_Weather_Text.id = 'Realtime_Weather_Text';
Realtime_Weather_Text.textContent = 'A real weather'
Realtime_Weather.append(Realtime_Weather_Text);

let Realtime_Weather_Main_Container = document.createElement('div');
Realtime_Weather_Main_Container.id = 'Realtime_Weather_Main_Container';
Realtime_Weather.append(Realtime_Weather_Main_Container);

let Realtime_Weather_Main_Img = document.createElement('img');
Realtime_Weather_Main_Img.id = 'Realtime_Weather_Main_Img';
Realtime_Weather_Main_Img.src = 'img/210219_home_0005s_0003_프로도mood.png'
Realtime_Weather_Main_Container.append(Realtime_Weather_Main_Img);

let Realtime_Weather_Main_MinTemp = document.createElement('div');
Realtime_Weather_Main_MinTemp.id = 'Realtime_Weather_Main_MinTemp';
Realtime_Weather_Main_MinTemp.textContent = '-12°C'
Realtime_Weather_Main_Container.append(Realtime_Weather_Main_MinTemp)

let Realtime_Weather_Main_MaxTemp = document.createElement('div');
Realtime_Weather_Main_MaxTemp.id = 'Realtime_Weather_Main_MaxTemp';
Realtime_Weather_Main_MaxTemp.textContent = '3°C'
Realtime_Weather_Main_Container.append(Realtime_Weather_Main_MaxTemp)