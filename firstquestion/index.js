const ax = require('axios');

const request = {
  companyName: 'Raturi Railways',
  ownerName: 'Harsh Raturi',
  rollNo: '500083059',
  ownerEmail: 'harshraturi123@gmail.com',
  accessCode: 'JnNPGs',
};

const Url = 'http://20.244.56.144/train/register'; 

ax.post(Url, request)
  .then((response) => {
    console.log('Response from the server :');
    console.log(response.data);
  })
  .catch((error) => {
    console.error('Error while sending the request :', error.message);
  });
