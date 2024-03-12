import express from 'express';
import {validateLoginResponse, validateRegistrationResponse, renderNews} from "./helpers.js";

const app = express();
app.use(express.urlencoded({
  extended: true,
}));

app.post('/login', (req, resp) => {
  const message = validateLoginResponse(req.body);
  resp.send(message);
})


app.get('/news', (req, resp) => {
  const {adsource} = req.query;
  if (!adsource || adsource === '') return resp.send(renderNews());
  if (adsource === 'google') return resp.send(renderNews('Google'));
  if (adsource === 'amazon') return resp.send(renderNews('Amazon'));
})

app.post('/register', (req, resp) => {
  const responseMessage = validateRegistrationResponse(req.body);
  resp.send(responseMessage);
});

app.listen(3000);
