const fs = require('fs');

let url = "https://api.rocketreach.co/api/v2/"
let endpoint = "person/search"

let args = {
  "start": 1,
  "page_size": 100,
  "query": {
    name: [],
    geo: ['"Quebec, Canada"'],
    current_title: [],
    department: [],
    management_levels: [
      "Founder/Owner",
      "C-Level",
      "VP",
      "Director",
      "Manager",
      "Individual Contributor",
    ],
    job_change_range_days: [],
    skills: [],
    years_experience: ["10<"],
    employer: [],
    company_id: [],
    company_size: [],
    company_revenue: [],
    company_industry: [],
    company_sic_code: [],
    company_naics_code: [],
    major: [],
    school: [],
    degree: [],
    link: [],
    keyword: [],
    company_list: [],
    email_grade: []
  }
};

let headers = {
  "Content-Type": "application/json",
  "Api-Key": "",
};

let options = {
  method: "POST",
  headers: headers,
  body: JSON.stringify(args),
};

const API = async () => {
  let response = await fetch(url + endpoint, options);
  
  let data = await response.json();

  return data
}

// const TOTAL = 676255
const TOTAL = 676255
const PAGE_SIZE = 100
const TOTAL_PAGES = Math.floor(TOTAL / PAGE_SIZE)

const PROFILE_IDS = []

const storeIds = (ids) => {
  ids.forEach(id => {
    PROFILE_IDS.push(id)
  })
}

let start = 1

const callAPI = async () => {
  for (let i = 0; i < TOTAL_PAGES;) {
    args.start = start
    options.body = JSON.stringify(args)
  
    await API().then(res => {
      start = res.pagination.next
      storeIds(Array.from(res.profiles).map(profile => profile.id))
      console.log(`Page ${i} of ${TOTAL_PAGES}`)

      i++;
    }).catch(err => {
      console.log(err)
      i++;
    });
  }

  const file = fs.createWriteStream('ids.json');
  file.on('error', (err) => { /* error handling */ });

  file.write(JSON.stringify(PROFILE_IDS));
  file.end();
}

callAPI()

