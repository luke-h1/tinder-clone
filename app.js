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
    <div class="row">
      <div class="col s12 m6">
        <div class="card">
          <div class="card-image">
          <img src="${currentProfile.image}">
          <span class="card-title">${currentProfile.name}</span>
            <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
            </div>
          <div class="card-content">
          <ul class="list-group"> 
          <li class="list-group-item">Age: ${currentProfile.age}</li> 
          <li class="list-group-item">Location: ${currentProfile.location}</li> 
          <li class="list-group-item">Preference: ${currentProfile.gender} who is looking for ${currentProfile.lookingfor}</li>  
          </ul>  
          </div>
        </div>
      </div>
    </div>
 `;
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

const saveBtn = document
  .getElementById('matchBtn')
  .addEventListener('click', savePerson);
const declineBtn = document
  .querySelector('decline')
  .addEventListener('click', decline);

function savePerson() {
  const outputMatched = `
    <div class="alert alert-success" role="alert">
        <h4 class="alert-heading">Matched ! ✅</h4>
        <p></p>
        <hr>
        </div>
    `;
  const savedEl = document.getElementById('saved');
  savedEl.innerHTML = outputMatched;
  setTimeout(() => {
    savedEl.remove();
  }, 2000);
}

function decline() {
  const outputDeclined = ` 
    <div class="alert alert-danger" role="alert"> 
        <h4 class="alert-heading">Declined ! ❌</h4> 
        <hr>
        </div> 
        `;
  const decline = document.getElementById('decline');
  decline.innerHTML = outputDeclined;
  setTimeout(() => {
    decline.remove();
  }, 2000);
}
