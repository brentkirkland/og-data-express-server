# OG Data Express Server
Use this little express server to get back all [Open Graph](http://ogp.me/) meta data from any website.

### Installation:
  ```bash
  git clone https://github.com/brentkirkland/og-data-express-server && cd og-data-express-server && npm install
  ```

### Running:
  ```bash
  npm start
  ```


### How to use:
  ```
  1. Send a GET request to localhost:3000/YOUR_URL
  ```
  That's it! YOUR_URL is the website you would like to get your data from. After that you'll get a reponse containing the data in json.

### Tested with:
  Node: 6.3.1
  Npm: 3.10.3
