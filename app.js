const data = [
    {
        name: 'John Doe',
        age: 32,
        gender: 'male',
        lookingfor: 'female',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/men/82.jpg',
    },
    {
        name: 'Jen Smith',
        age: 26,
        gender: 'female',
        lookingfor: 'male',
        location: 'New york city',
        image: 'https://randomuser.me/api/portraits/women/82.jpg',
    },
    {
        name: 'william johnson',
        age: 38,
        gender: 'male',
        lookingfor: 'female',
        location: 'LA',
        image: 'https://randomuser.me/api/portraits/men/84.jpg',
    },
];

/* 
=========================================================================
 TODO: TURN THE ABOVE INTO A DYNAMIC API CALL THAT TAKES IN WHAT 
 GENDER THE USER IS INTERESTED IN AND ADJUSTS THE API CALL BASED ON THAT 
=========================================================================
*/

const profiles = profileIterator(data);
nextProfile();
document.getElementById('next').addEventListener('click', nextProfile);

function nextProfile() {
    const currentProfile = profiles.next().value;
    if (currentProfile !== undefined) {
        document.getElementById('profileDisplay').innerHTML = `
      <ul class="list-group"> 
      <li class="list-group-item">Name: ${currentProfile.name}</li> 
      <li class="list-group-item">Age: ${currentProfile.age}</li> 
      <li class="list-group-item">Location: ${currentProfile.location}</li> 
      <li class="list-group-item">Preference: ${currentProfile.gender} who is looking for ${currentProfile.lookingfor}</li>  
      </ul>  
    `;
        document.getElementById(
            'imageDisplay'
        ).innerHTML = `<img src="${currentProfile.image}">`;
    } else {
        window.location.reload(); // reload page if at end of array
    }
}

// iterator function

function profileIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length
                ? { value: profiles[nextIndex++], done: false }
                : { done: true };
        },
    };
}



const saveBtn = document.getElementById('matchBtn').addEventListener('click', savePerson); 


function savePerson(){ 
    const output = `
    <div class="alert alert-success" role="alert">
        <h4 class="alert-heading">User saved to your favorites</h4>
        <p></p>
        <hr>
        </div>
    `;  
    const savedEl = document.getElementById('saved'); 
    savedEl.innerHTML = output;   
    setTimeout(() => {  
        savedEl.innerHTML = '';
        savedEl.remove();  
    }, 2000)
} 

