import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

import GlobalStyles from './styles/global';

createServer({
  models: {
    users: Model,
    cases: Model,
  },

  seeds(server) {
    server.db.loadData({
      users: {
        id: 1,
        name: 'Heroes of Future',
        email: 'heroes.org@ong.com',
        phone: '999311167',
        city: 'Miami',
        uf: 'se'
      },
      cases: [
        {
          id: 1,
          title: 'Cadela machucada',
          desc: 'A cadela foi machucada na avenida 7 e tals',
          value: 700,
          date: 9999999,
          ong_id: 1
        },
        {
          id: 2,
          title: 'Coala Ferido',
          desc: 'O coala foi ferido na avenida 7 e tals',
          value: 500,
          date: 9999999,
          ong_id: 1
        },
        {
          id: 3,
          title: 'Chimpamze maluco',
          desc: 'O chimpanze foi maluco na avenida 7 e tals',
          value: 1200,
          date: 9999999,
          ong_id: 1
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/ongs', () => this.schema.all('users'));

    this.post('/ongs', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('users', data);
    });

    this.get('/cases', () => this.schema.all('cases'));

    this.post('/cases', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('cases', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);
