const Question = require('../models').Question;
const Answer = require('../models').Answer;

module.exports = {

  welcome(req, res) {
    res.status(200).send('Welcome to the Trivia Game!')
  },

  create(req, res) {
    console.log("first answer" + req.body.question.answers[0]);
    return Question.create(req.body.question, {
      include: [{
        model: Answer,
        association: 'answers'
      }]
    })
      .then(question => res.status(201).redirect('questions'))
      .catch(error => res.status(400).send(error));
  },
  new(req, res) {
    res.status(201).render('questions/new')
  },
  list(req, res) {
    Question.findAll({
      include: [{
        model: Answer,
        association: 'correctAnswer'
      }]}).then(function(questions) {
      res.render('questions/index', {
        questions: questions
      });
    });    
  },
  show(req, res) {
    console.log("SHHOOOWWW")
    Question.findById(req.params.QuestionId, {include: [
      {
        model: Answer,
        association: 'answers'
      }
    ]}).then(function(question) {
      res.render('questions/show', {
        question: question
      });
    });    
  },
  destroy(req, res) {
    console.log("DELETEEEEEEEEEEEEEEEEEEEE");
    Question.destroy( {where: {id: req.params.QuestionId}}, {include: [
      {
        model: Answer,
        association: 'answers'
      }
    ]}).then(function(question) {
      console.log("DELETE REDIRECT")
      res.redirect('/admin/questions');
    });    
  }
};