#OG Data Express Server
Use this little express server to get back all [Open Graph](http://ogp.me/) meta data from any website.

###Installation:
  ```bash
  git clone https://github.com/brentkirkland/og-data-express-server && cd og-data-express-server && npm install
  ```

###Running
  ```bash
  npm start
  ```


###How to use:
  ```
  1. Post to localhost:3000/YOUR_URL, where YOUR_URL is the url you are trying to receive data from
  2. Receive a JSON response with all OG data
  ```

###Tested with:
  Node: 6.3.1
  Npm: 3.10.3
