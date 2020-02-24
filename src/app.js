// web server
const app = require('./web-server');
const router = require('./router');

app.use('/api', router);

app.listen(8080, () => {
  console.log('http server listening in http://localhost:8080/api')
})