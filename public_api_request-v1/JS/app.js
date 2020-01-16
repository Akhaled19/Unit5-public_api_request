
                                //Global Variables 
//header
const searchDiv = document.getElementsByClassName('search-container');
const galleryDiv = document.getElementsByClassName('gallery');

//body
const bodyElement = document.getElementsByTagName('body');
let usersArray = [];



                                //API Usage//
//pull 12 random users from US from the API 
    //fetch data 
    fetch(`https://randomuser.me/api/?results=12&inc=name,email,cell,location,dob,picture&nat=us`)
    //convert to json
        .then(response => response.json() )
    // takes parsed data and adds it to an array and calls the helper function   
        .then(data => {
            usersArray = [...data.results];
            generateCards(data.results);
        })
    //catching errors     
       // .catch( err => console.error(`Problem with request: ${err.message}`) )
    
        
                               //helper functions
    //deserializing JSON dob string as JS date object 
    //00/00/0000
    const dateFormat = /^\d{2}-\d{2}-\d{4}/;  
    
    function reviver(dob) {
        if(typeof dob === 'string' && dateFormat.test(dob)) {
            return new Date(dob)
        }
        return dob;
    }

    

                               //Search Box// 
//Employees can be filtered by name 
function appendSearchDiv(data) {
searchDiv.innerHTML = `
    <form action="#" method="get">
        <input type="search" id="search-input" class="search-input" placeholder="Search...">
        <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
    </form>
`; 
searchDiv.action = '#';
searchDiv.method = 'get';
}
       

                               //User Directory//     

//function creates a card for each user 
function generateCards(data) {
    data.map(user => {
        let card = 
           `
            <div title=${user} class="card">
                <div title=${user} class="card-img-container">
                    <img title=${user} class="card-img" src="${user.picture.medium}" alt="profile picture">
                </div>
                <div title=${user} class="card-info-container">
                    <h3 title=${user} id="name" class="card-name cap">${user.name.first} ${user.name.last}</h3>
                    <p title=${user} class="card-text">${user.email}</p>
                    <p title=${user} class="card-text cap">${user.location.city}, ${user.location.state}</p>
                </div>
            </div>     
            `;
        galleryDiv.innerHTML = card;    
    })    
}  



                             //Modal Window//
//function creates modal for each user (extends info)                             
function generateModal(data) {
   
    const modalContainer = document.createElement('div');
    modalContainer.setAttribute('class' , 'modal-container');
    modalContainer.innerHTML = `
        <div class="modal">
            <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
            <div class="modal-info-container">
                img class="modal-img" src=${user.picture.large} alt="profile picture">
                <h3 id="name" class="modal-name cap">${user.name.first} ${user.name.last}</h3>
                <p class="modal-text">${user.email}</p>
                <p class="modal-text cap">${user.location.city}</p>
                <hr>
                <p class="modal-text">${user.cell}</p>
                <p class="modal-text">${user.location.street}, ${user.location.city}, ${user.location.state}, ${user.location.postcode}</p>
                <p class="modal-text">${user.dob.date}Birthday: 10/21/2015</p>
            </div>
        </div>
            <div class="modal-btn-container">
                <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
                <button type="button" id="modal-next" class="modal-next btn">Next</button>
            </div>
        `;
    bodyElement.appendChild(modalContainer);
    modalContainer.style.display = 'block';


    //add a click event on the close button 
    const closeButton = document.getElementById('modal-close-btn');
    closeButton.addEventListener('click', () => {
        bodyElement.removeChild(modalContainer);
    });    
  
}            
          
       
   

                             //Modal Window//

//Click event on user = open detail modal window 

    //add functionality to switch back and forth between employees 
        //beginning and end of the list !== error in the console 

    //Modal window displays the following:
        // Employee image 
        // Name 
        //Email 
        //City or location 
        //Cell Number 
        //Detailed Address(street name & number, state or country, and post code)
        // 'X' to close the modal window    

                            //Structure, style, CSS

//The elements of the directory and modal window are in place & match the mockups 
//Add styling:
    //color
    //background color 
    //font
    //box or text shadows                             