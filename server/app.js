const express = require('express')
const next = require('next')
const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser');
const port = parseInt(process.env.PORT, 10) || 3001;
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler();
const passportSetup = require('./config/passport-setup');
const passport = require('passport');
const keys = require('./config/keys');
const mongoose = require('mongoose');
const router = express.Router();
const cors = require('cors');

const Comercio = require('./models/Comercio');
const Categoria = require('./models/Categoria');
const profile = require('./routes/profile');
const api = require('./routes/api');
const auth = require('./routes/auth');
const comercios = require('./routes/comercios');
const categorias = require('./routes/categorias');


module.exports = {
  start: () =>
    app.prepare().then(() => {
      const server = express();
      
      //http para https
      server.use((req, res, next) => { //Cria um middleware onde todas as requests passam por ele 
        if (req.headers["x-forwarded-proto"] == "http") //Checa se o protocolo informado nos headers é HTTP 
            res.redirect(`https://${req.headers.host}${req.url}`); //Redireciona pra HTTPS 
        else //Se a requisição já é HTTPS 
            next(); //Não precisa redirecionar, passa para os próximos middlewares que servirão com o conteúdo desejado 
      });
      //conecta ao MongoDB
      mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true})
      mongoose.connection.once('open', ()=>{
        console.log("CONECTADO!");
      })
      //mongoose 5
      mongoose.set('useFindAndModify', false);
      mongoose.set('useCreateIndex', true);

      //cors
      server.use(cors());
      //cookies
      server.use(cookieParser());
      server.use(cookieSession({
        maxAge: 24 * 60 * 60 * 1000,
        keys: [keys.session.cookieKey]
      }))
      // initialize passport
      server.use(passport.initialize());
      server.use(passport.session());
      //api
      server.use(express.json())
      server.use(express.urlencoded({ extended: false }))
      server.use(cors());

      //inicializa as rotas
      server.use('/profile/', profile);     
      server.use('/minha-conta/', auth);
      server.use('/apicomercios/', comercios);
      server.use('/apicategorias/', categorias);
      
      // 404 and anothers
      server.get('*', (req, res) => handle(req, res));

      server.listen(port, err => {
        if (err) throw err;
        console.log(` > * < Ready on http://localhost:${port} > * < `);
      });
    }),
};
