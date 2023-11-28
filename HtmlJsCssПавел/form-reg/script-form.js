let list = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let stcap = 0;
let cap = "";

function gencap()
{
    stcap = 0;
    cap = "";
    for (i = 0; i < 5; i++)
    {
        cap += list[(Math.floor(Math.random() * 26))];
    }
    document.getElementById('CaptPic').innerHTML = cap;
    document.getElementById('stcap').innerHTML = "Введите капчу";
    document.getElementById('stcap').style.color = "white";
}

gencap();

function entercap()
{  
    сontent1 = document.getElementsByClassName('email').value;
    сontent1 = document.getElementsByClassName('password').value;
    let capstr = document.getElementById('textcap').value;
    if ((capstr == cap) && (content1)&&(content2))
    {
        document.getElementById('stcap').innerHTML = "Всё заполнено";
        document.getElementById('stcap').style.color = "green";
    }
    else
    {
        stcap++;
        document.getElementById('stcap').innerHTML = "Неверная капча, или логин, или пароль!";
        document.getElementById('stcap').style.color = "red";
        if(stcap == 3)
        {
            stcap = 0;
            gencap();
        }
    }
}