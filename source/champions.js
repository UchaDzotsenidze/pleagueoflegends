let url1 = 'https://raw.githubusercontent.com/ngryman/lol-champions/master/champions.json';

// function fetchData(){
//     fetch('http://ddragon.leagueoflegends.com/cdn/9.3.1/data/en_US/champion.json').then(res => {

//     console.log(res);
//     if(!res.ok){
//         throw Error("ERROR");
//     }
//         return res.json();
//     }).then(data1 => {
//         console.log(data1.data);


//         const html = [[data1].data].map( user =>{
//             return `<p>Name: ${user.Aatrox.id}</p>`
//         });

//         console.log(html);

//         document.querySelector('#app').insertAdjacentHTML('afterbegin', '<h1> hello </h1>');
//     }).catch(error =>{
//         console.log(error);
//     });
// }

// async function getDAta(){
  
//     let data = await fetch(url);
//     let main = await data.json();
  
//     console.log(main.data);
    
// }

// fetchData();
//   getDAta(); 

// var champs = ['Aatrox', 'Ahri'];

/////////////////////////////////


// async function getData(url) {
//     let data = await fetch(url);
//     let main = await data.json();
//     return main;
// };
//   getData(url1).then(data => {

//     for(i = 0;i < champs.length; i++){
        
//         console.log([data].id);
// }})



/////////////////////////////


// var champs = [];
// var images = [];


fetch(url1).then(res => res.json())
.then(
    data => {
    for(i = 0; i < data.length; i++){

        let new_element = document.createElement('div'); 
        
        new_element.id = 'chmpdiv';
        //new_element.style = "height: 500px; width: 600px; background: red; display: flex; margin-left: 300px";

        document.getElementsByTagName('body')[0].appendChild(new_element);

        let newp = document.createElement('h2');
        let newimg = document.createElement('img');
        let stroyp = document.createElement('p');
        let titlep = document.createElement('h3');
        let tags = document.createElement('h3');
        
        for(j = 0; j < data.length; j++){
            

            tags.className = "tags"; 

            newp.style = "display: flex; margin-left: 180px; margin-top: 50px; font-size: 60px;";
            newimg.style = "width: 150px; height: 150px; position: absolute;";
            stroyp.style = "position: absolute; margin-top: 250px; margin-left: 20px; margin-right: 500px;";
            
            //titlep.style = "position: absolute; margin-top: 50px; margin-left: 230px;"


            if(j == 0){
                newp.innerHTML = data[i].name;
                newimg.src = data[i].icon;
                stroyp.innerHTML = data[i].description;
                titlep.innerHTML = data[i].title;
                tags.innerHTML = data[i].tags;
            }

            
        }
        new_element.append(newp);
        new_element.append(newimg);
        new_element.append(stroyp);
        new_element.append(titlep);
        new_element.append(tags);
        //document.getElementById('chmpdiv')[0].appendChild(newp);

        
    }}
).catch('ERROR');





// const fetch = require('node-fetch');
// fetch(url).then(res => res.json()).then(res => console.log(res)).catch(e => console.error(e))

// const https = require('https');

// https.get(url1, res => {
//     console.log(res.statusCode);
// })