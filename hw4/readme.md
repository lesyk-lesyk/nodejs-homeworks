## http-servers
CD to `http-servers` folder and execute

- plain-text-server

  `node plain-text-server.js`

- html-server

  `node html-server.js`

- json-server

  `node json-server.js`

- echo server (test `curl -d 'test' localhost:3000`)

  `node echo-server.js`

# App with routes
  run `npm start`

  For verify local auth get
  localhost:3000/api/users
  using next headers
  ```
  {
    "key":"authorization",
    "value":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqd3RTZWNyZXQiOiJWRVJZX1NFQ1JFVCIsImp0aSI6IjcxMWFjNmNiLTA1ZjQtNDFiMy05OTU3LWU2OWM3ZTNmMTQ5YyIsImlhdCI6MTUzMzMxMTE4MSwiZXhwIjoxNTMzMzE0NzgxfQ.V8G6W745Ec739u2HNWw52gZBXuCc05PhHjdizh5Qgrw"
  }
  ```
