const ax = require('axios');

const Token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQzMzg0MjUsImNvbXBhbnlOYW1lIjoiUmF0dXJpIFJhaWx3YXlzIiwiY2xpZW50SUQiOiJjMjY4NWU4OC0wNTAzLTQ3N2ItYjNhYy1jNGVlNzMxZDcyODYiLCJvd25lck5hbWUiOiIiLCJvd25lckVtYWlsIjoiIiwicm9sbE5vIjoiNTAwMDgzMDU5In0.ptbfLV6IfGu1XWbgQlYEf9IVuCLBhsMcJ-RfmuPYAb0'; 

const Url = 'http://20.244.56.144/train/trains/2344';


const headers = {
  Authorization: `Bearer ${Token}`,
};

ax.get(Url, { headers })
  .then((response) => {
    console.log('Response from the server :');
    console.log(response.data);
  })
  .catch((error) => {
    console.error('Error while sending the request :', error.message);
  });
