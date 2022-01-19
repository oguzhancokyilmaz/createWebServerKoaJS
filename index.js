const Koa = require('koa');
const app = new Koa();

// response
app.use(function* (next) {
    if (this.request.path === '/') {
      this.response.body = '<h1>WELCOME TO INDEX PAGE !</h1>';
    } 
    else if (this.request.path === '/about') {
        this.response.body = '<h1>WELCOME TO ABOUT PAGE !</h1>';
      }
    else if (this.request.path === '/contact') {
        this.response.body = '<h1>WELCOME TO CONTACT PAGE !</h1>';
      }
    else {
        this.response.body = '<h1>PAGE NOT FOUND!</h1>';
    }
  })
app.listen(3000);