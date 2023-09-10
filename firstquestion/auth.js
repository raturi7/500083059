const axios = require('axios');

const req = {
  companyName: 'Raturi Railways',
  clientID: 'c2685e88-0503-477b-b3ac-c4ee731d7286',
  ownerName: 'Harsh Raturi',
  ownerEmail: 'harshraturi123@gmail.com',
  rollNo: '500083059',
  clientSecret: 'pTAzceEsIpdYbrhf',
};

const Url = 'http://20.244.56.144/train/auth'; 

// Send the POST request
axios.post(Url, req)
  .then((response) => {
    console.log('Response from the server :');
    console.log(response.data);
  })
  .catch((error) => {
    console.error('Error while sending the request :', error.message);
  });
