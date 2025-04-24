const secretket = process.env.SECRET;
const timeStamp = Math.floor(new Date().getTime() / 1000);
const signature = crypto
.createHmac('sha256', secretKey)
.update(timeStamp + '.' + data)
.digest('hex');

let config = {
  method: 'POST',
  url: process.env.WEBHOOK_URl,
  headers: {
    'Signature': signature,
    'Timestamp': timeStamp,
    'Content-type': 'application/json'
  },
  data: data
};

axios.request(config)
.then((response)=>{
  console.log(response);
}).catch((error)=>{
  console.log(error.response.data);
});

