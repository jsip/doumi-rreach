const fs = require('fs')

let url = "https://api.rocketreach.co/api/v2/"
let endpoint = "person/lookup?id="

let headers = {
  "Content-Type": "application/json",
  "Api-Key": "",
};

let options = {
  method: "GET",
  headers: headers
};

let ids = JSON.parse(fs.readFileSync('ids.json', 'utf8'))

const people = []

const API = async () => {
  for (let i = 0; i < ids.length;) {
    let response = await fetch(url + endpoint + ids[i], options);
    await response.json().then((data) => {
      let cleanedData = cleanData(data)
      people.push(cleanedData)
      console.log(`Person ${i} of ${ids.length}`)
      i++
    }).catch((error) => {
      console.log(error)
      i++
    })
  }
}

const cleanData = (data) => {
  let name = data.name
  let current_employer = data.current_employer
  let emails = data.emails
  let phones = data.phones

  return {
    name,
    current_employer,
    emails,
    phones
  }
}

API().then(async () => {
  const file = fs.createWriteStream('leads.json');
  file.on('error', (err) => { /* error handling */ });

  console.log(people)

  file.write(JSON.stringify(people));
  file.end();
})
