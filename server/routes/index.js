const questionsController = require('../controllers').questions;

module.exports = (app) => {
  app.get('/', questionsController.welcome);
  app.get('/welcome', questionsController.welcome);

  app.get('/admin/questions', questionsController.list);
  app.get('/admin/questions/new', questionsController.new);
  app.post('/admin/questions', questionsController.create);
  app.post('/admin/questions/:QuestionId', questionsController.destroy);
  app.get('/admin/questions/:QuestionId', questionsController.show);

};