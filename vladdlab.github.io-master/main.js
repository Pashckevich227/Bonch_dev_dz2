function addLocaleStorage(id,comment){localStorage.setItem(id,comment);}

function addComment ()
{
   let text__comment = document.querySelector('#addCommentText').value;
   let p = add__p();
   let key = p.id = "comment" + getIdLocalStorageID();
   p.innerText = text__comment;
   addLocaleStorage(key,text__comment);

   document.querySelector('#addCommentText').value="";
   if (text__comment == "")
   {
        alert('Напиши комментарий котику)'); 
        p.remove();
        localStorage.removeItem(key);
    }
}

function getIdLocalStorageID()
{  
    let key = localStorage.length;
    if(key == ""){key = 0;}
    return key;  
}

function add__p()
{
    document.querySelector('.news__comment_add').insertAdjacentHTML('afterend', '<p id="com"> </p>');
    let p = document.getElementById('com');
    return p;
}


function addCommentLocalStorage()
{
    let a = document.querySelector('#addCommentText').value;
    let size = localStorage.length;
    for(let i = 0; i<=size;i++)
    {
        key = 'comment'+i;
        let text__comment = localStorage.getItem(key);
        let p = add__p();
        p.id = key;
        p.innerText = text__comment;
    }  
}



























//---------------------------------------------------------------------------------------------
    // const addComm = () =>
    // {
    //     document.querySelector('.news__comment_add').insertAdjacentHTML('afterend',
    //     `<p id="text"></p>`);
    //     let p = document.querySelector('#comment').value;
    //     let test = document.getElementById('text');
    //     test.innerHTML = p;
    //     comm_key++;
    //     localStorage.setItem(comm_key, p);
    //     let sum__key = comm_key;
    
    //    // init(comm_key, sum__key);
    //     return 'Коту Пуське сегодня вставать в 6 часов утра!';
    // };

    // let comm_key = 0;
    // const init = (comm_key, sum__key) =>
    // {
    //     const comm_value = localStorage.getItem(comm_key); //получил комментарий и записал в переменную

    //     for (let i=0; i<sum__key; i++)
    //     {
    //         comm_value = document.getElementById('text');
    //         comm_value.innerHTML = p; 
    //     }
        
    // };