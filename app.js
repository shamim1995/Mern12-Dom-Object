let dev = document.querySelector('.developer-item');

devs.map(data => {

    dev.innerHTML+=(`
     <div class="developer">
        <img src="${data.photo}"
            alt="">
        <h2>${data.name}</h2>
        <h4>Age: ${data.age}</h4>
        <span>${data.skill}</span>
        <h5>${data.location}</h5>
    </div>
   
   `)

});


let studentData = document.querySelector('.students-item');

stud.map(data => {
    
    studentData.innerHTML+=(`
        <div class="students">
                     <img src="${data.photo}"
                         alt="">
                     <h2>Id:${data.id}</h2>
                     <h3>${data.name}</h3>
                     <h4>Group: ${data.group}</h4>
                     <h5>Location: ${data.location}</h5>

                 </div>
    
    
    `)
});

let phoneBook =document.querySelector('.table');

phone.map(data=>{
    phoneBook.innerHTML+=(`
    
    <table class="table">
                         <tbody>
                             <tr>
                                 <td>${data.id}</td>
                                 <td>${data.name}</td>
                                 <td>${data.phone}</td>
                                 <td>${data.location}</td>
                                 <td><img src="${data.photo}"
                                         alt=""></td>
                             </tr>
                         </tbody>
                     </table>
    
    
    `)
})