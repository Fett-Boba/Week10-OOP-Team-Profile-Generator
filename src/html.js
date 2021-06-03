// Static head HTML
var head = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
      crossorigin="anonymous"
    />

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css"
      integrity="sha512-q3eWabyZPc1XTCmF+8/LuE1ozpg5xxn7iO89yfSOd5/oKvyqLngoNGsx8jq92Y8eXJ/IRxQbEC+FGSYxtk2oiw=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />

    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <div class="jumbotron jumbotron-fluid bg-dark text-white">
      <div class="container">
        <h1 class="text-center p-5">My Team</h1>
      </div>
    </div>

    <div class="container-fluid p-5">
      <div class="row justify-content-center">
      `;



// Static trailer HTML
var trl = `      
</div>
</div>

<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
  crossorigin="anonymous"
></script>
</body>
</html>`;


// Export the dynamic CARD HTML
module.exports = (empObj) => {
     if (empObj.role === 'Manager') {
          strRole = `<h3><i class="fas fa-mug-hot"></i>${empObj.role}</h3>`;
          strVar = `<li class="list-group-item">Office Number: ${empObj.officeNumber}</li>`;
     } else if (empObj.role === 'Engineer') {
          strRole = `<h3><i class="fas fa-glasses"></i>${empObj.role}</h3>`;
          strVar = `<li class="list-group-item">Github: <a href="https://github.com/${empObj.github}" target="_blank">${empObj.github}</a></li>`;
     } else {
          strRole = `<h3><i class="fas fa-user-graduate"></i>${empObj.role}</h3>`;
          strVar = `<li class="list-group-item">School: ${empObj.school}</li>`;
     }
     return `     
     <div class="card bg-dark text-white mx-3 mt-3">
     <div class="card-header">
       <h2>${empObj.name}</h2>${strRole}
     </div>
     <div class="card-body bg-light mb-2">
       <ul class="list-group">
         <li class="list-group-item">ID: ${empObj.id}</li>
         <li class="list-group-item">Email: <a href="mailto:${empObj.email}">${empObj.email}</a></li>${strVar}
       </ul>
     </div>
   </div>
   `
}

// Export static HTML head/trl
module.exports.head = head;
module.exports.trl = trl;
