import axios from "axios";

export async function contactsService({name, contact}: {name: string, contact: string}) {
  return axios.post('https://api.airtable.com/v0/appm4YVn9ixq7Fxkc/Table%201',
    {
      "records": [
        {
          "fields": {
            "Name": `${name}`,
            "Contact": `${contact}`,
          }
        }
      ]
    },
    {
      "headers": {
        "Authorization": "Bearer keyQlr5JIROzFLJ7P",
        "Content-Type": "application/json",
      }
    },
  ).then(function (response) {
    return response;
  }).catch(function (error) {
    return error;
  })
}