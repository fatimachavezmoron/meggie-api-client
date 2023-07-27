const router = require("express").Router();
const { jsonRespose } = require("../lib/jsonResponse");

router.post('/', (req, res) => {
  const {username, password} = req.body;

  if(!!!username || !!!password) {
    return res.status(400).json(jsonRespose(400, {
      error: 'Fields are require',
    }));
  }
  // autenticar usuario
  const accessToken = 'access_token';
  const refreshToken = 'refresh_token';
  const user = {
    id: '1',
    name: 'John Doe',
    username: 'XXXXX'
  }
  res.status(200).json(jsonRespose(200, {
    user, accessToken, refreshToken 
  }));
});

module.exports = router;
