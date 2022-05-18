import React from 'react'

const User = () => {

    var userlist=[
        {
          "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUyRTZHVTGZPpg4Xc0xncREBPT5z9ZIWokiA&usqp=CAU",
          "name": "Leanne Graham",
          "username": "Bret",
          "email": "Sincere@april.biz",
          "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
              "lat": "-37.3159",
              "lng": "81.1496",
              
            }
          },
      
          "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUyRTZHVTGZPpg4Xc0xncREBPT5z9ZIWokiA&usqp=CAU",
          "phone": "1-770-736-8031 x56442",
          "website": "hildegard.org",
          "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets",
            
          }
        },
        {
          "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUyRTZHVTGZPpg4Xc0xncREBPT5z9ZIWokiA&usqp=CAU",
          "name": "Ervin Howell",
          "username": "Antonette",
          "email": "Shanna@melissa.tv",
          "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
              "lat": "-43.9509",
              "lng": "-34.4618",
              
            }
          },
          "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUyRTZHVTGZPpg4Xc0xncREBPT5z9ZIWokiA&usqp=CAU",
          "phone": "010-692-6593 x09125",
          "website": "anastasia.net",
          "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
          }
        },
        {
          "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUyRTZHVTGZPpg4Xc0xncREBPT5z9ZIWokiA&usqp=CAU",
        
          "name": "Clementine Bauch",
          "username": "Samantha",
          "email": "Nathan@yesenia.net",
          "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
              "lat": "-68.6102",
              "lng": "-47.0653"
            }
          },
          "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUyRTZHVTGZPpg4Xc0xncREBPT5z9ZIWokiA&usqp=CAU",
          "phone": "1-463-123-4447",
          "website": "ramiro.info",
          "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
          }
        },
        {
          "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUyRTZHVTGZPpg4Xc0xncREBPT5z9ZIWokiA&usqp=CAU",
        
          "name": "Patricia Lebsack",
          "username": "Karianne",
          "email": "Julianne.OConner@kory.org",
          "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
              "lat": "29.4572",
              "lng": "-164.2990"
            }
          },
          "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUyRTZHVTGZPpg4Xc0xncREBPT5z9ZIWokiA&usqp=CAU",
          "phone": "493-170-9623 x156",
          "website": "kale.biz",
          "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
          }
        },
        {
          "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUyRTZHVTGZPpg4Xc0xncREBPT5z9ZIWokiA&usqp=CAU",
          "name": "Chelsey Dietrich",
          "username": "Kamren",
          "email": "Lucio_Hettinger@annie.ca",
          "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
              "lat": "-31.8129",
              "lng": "62.5342"
            }
          },
          "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUyRTZHVTGZPpg4Xc0xncREBPT5z9ZIWokiA&usqp=CAU",
          "phone": "(254)954-1289",
          "website": "demarco.info",
          "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
          }
        },
        {
          "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUyRTZHVTGZPpg4Xc0xncREBPT5z9ZIWokiA&usqp=CAU",
          "name": "Mrs. Dennis Schulist",
          "username": "Leopoldo_Corkery",
          "email": "Karley_Dach@jasper.info",
          "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
              "lat": "-71.4197",
              "lng": "71.7478"
            }
          },
          "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUyRTZHVTGZPpg4Xc0xncREBPT5z9ZIWokiA&usqp=CAU",
          "phone": "1-477-935-8478 x6430",
          "website": "ola.org",
          "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
          }
        },
        {
          "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUyRTZHVTGZPpg4Xc0xncREBPT5z9ZIWokiA&usqp=CAU",
          "name": "Kurtis Weissnat",
          "username": "Elwyn.Skiles",
          "email": "Telly.Hoeger@billy.biz",
          "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
              "lat": "24.8918",
              "lng": "21.8984"
            }
          },
          "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUyRTZHVTGZPpg4Xc0xncREBPT5z9ZIWokiA&usqp=CAU",
          "phone": "210.067.6132",
          "website": "elvis.io",
          "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
          }
        },
        {
          "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUyRTZHVTGZPpg4Xc0xncREBPT5z9ZIWokiA&usqp=CAU",
          "name": "Nicholas Runolfsdottir V",
          "username": "Maxime_Nienow",
          "email": "Sherwood@rosamond.me",
          "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
              "lat": "-14.3990",
              "lng": "-120.7677"
            }
          },
          "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUyRTZHVTGZPpg4Xc0xncREBPT5z9ZIWokiA&usqp=CAU",
          "phone": "586.493.6943 x140",
          "website": "jacynthe.com",
          "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
          }
        },
        {
          "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUyRTZHVTGZPpg4Xc0xncREBPT5z9ZIWokiA&usqp=CAU",
          "name": "Glenna Reichert",
          "username": "Delphine",
          "email": "Chaim_McDermott@dana.io",
          "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
              "lat": "24.6463",
              "lng": "-168.8889"
            }
          },
          "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUyRTZHVTGZPpg4Xc0xncREBPT5z9ZIWokiA&usqp=CAU",
          "phone": "(775)976-6794 x41206",
          "website": "conrad.com",
          "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
          }
        },
        {
          "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUyRTZHVTGZPpg4Xc0xncREBPT5z9ZIWokiA&usqp=CAU",
          "name": "Clementina DuBuque",
          "username": "Moriah.Stanton",
          "email": "Rey.Padberg@karina.biz",
          "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
              "lat": "-38.2386",
              "lng": "57.2232"
            }
          },
          "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUyRTZHVTGZPpg4Xc0xncREBPT5z9ZIWokiA&usqp=CAU",
          "phone": "024-648-3804",
          "website": "ambrose.net",
          "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
          }
        }
      ]
  return (
    <div>
    
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">
                {userlist.map((value,key)=>{
                    return<div className="col col-12 col-sm-6 col-md-4 col-lg-2 col-xl-4 col-xxl-6">
                        

                        <div class="card" >
  <img src={value.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{value.id}</h5>
    <p class="card-text">{value.name}</p>
    <p class="card-text">{value.username}</p>
    <p class="card-text">{value.email}</p>
    <p class="card-text">{value.address.street}</p>
    <p class="card-text">{value.address.suite}</p>
    <p class="card-text">{value.address.city}</p>
    <p class="card-text">{value.address.zipcode}</p>
    <p class="card-text">{value.address.geo.lat}</p>
    <p class="card-text">{value.address.geo.lng}</p>
    <p class="card-text">{value.company.name}</p>
    <p class="card-text">{value.company.catchPhrase}</p>
    <p class="card-text">{value.company.bs}</p>
  
    <p class="card-text">{value.phone}</p>
    <p class="card-text">{value.website}</p>
    <a href="#" class="btn btn-primary">View</a>
  </div>
</div>
                        </div> 
                })}
                
                
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default User