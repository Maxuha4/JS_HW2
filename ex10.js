/*Напишите скрипт, который по введенному дню (исп. значение переменной из 8
задания) в году (например, 256) определит месяц (от 1 до 12) и пору года (зима, лето и
т.д.). Скрипт определение поры года написать через switch*/

let y=(0>366),
    season='',
    junuary=1,
    february=2,
    march=3,
    april=4,
    may=5,
    june=6,
    july=7,
    august=8,
    september=9,
    october=10,
    november=11,
    december=12;

y=prompt(`Задание 10. \n\n определит месяц (от 1 до 12) и пору года \n\n введите число от 1 до 365`)



if (y<=31 && y>=1)console.log(`месяц ${junuary}`);
if (y<=59 && y>=32)console.log(`месяц ${february}`);
if (y<=90 && y>=60)console.log(`месяц ${march}`);
if (y<=120 && y>=91)console.log(`месяц ${april}`);
if (y<=151 && y>=121)console.log(`месяц ${may}`);
if (y<=181 && y>=152)console.log(`месяц ${june}`);
if (y<=212 && y>=182)console.log(`месяц ${july}`);
if (y<=243 && y>=213)console.log(`месяц ${august}`);
if (y<=273 && y>=244)console.log(`месяц ${september}`);
if (y<=304 && y>=274)console.log(`месяц ${october}`);
if (y<=334 && y>=305)console.log(`месяц ${november}`);
if (y<=365 && y>=335)console.log(`месяц ${december}`);

switch(true){
    case(y<=59 && y>=1 || y<=365 && y>=335 ):
    season='зима';
    break;

    case(y<=151 && y>=60):
    season='весна';
    break;

    case(y<=243 && y>=152):
    season='лето';
    break;

    case(y<=334 && y>=244):
    season='осень';
    break;
    
}

console.log(`сезон: ${season}`);

