const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3001;
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const routes = require('./routes');

module.exports = {
  start: () =>
    app.prepare().then(() => {
      const server = express();
      Object.keys(routes).map(key => {
        return server.get(routes[key].path, (req, res) => {
          return app.render(req, res, routes[key].page);
        });
      });

      // 404 and anothers
      server.get('*', (req, res) => handle(req, res));

      server.listen(port, err => {
        if (err) throw err;
        console.log(` > * < Ready on http://localhost:${port} > * < `);
      });
    }),
};
