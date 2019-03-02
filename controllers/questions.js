const Question = require('../models/question.js');
const Quiz = require('../models/quiz.js');
const restler = require("restler");

module.exports = (app) => {
    // HOME
    app.get('/', (req, res) => {
      res.send('Hello there.')
    });

    // CREATE Question
    app.post('/api/quiz/:quizId/question', (req, res) => {
        console.log(req.body)
        Quiz.findOne( { _id: req.params.quizId} )
        .exec( ( err, quiz) => {
            console.log(quiz)
            let questionsA = req.body;
            quiz.questions = questionsA;
            quiz.save( () => {
                res.redirect(`/api/quiz/${req.params.quizId}`)
            });
        });
    });

    // READ
    app.get('/api/question/:id', (req, res) => {
        Question.findOne( { _id: req.params.id } )
        .then( question => {
            res.send(question);
        });
    });

    // Add incorrect responses
    app.get('/quiz/:id/question/new', (req, res) => {
        const qid = req.params.id;
        Quiz.findOne( { _id: qid } )
        .then( () => {
            restler.get("https://api.harvardartmuseums.org/object", {
                query: {
                    apikey: process.env.KEY,
                    century: "19th century",
                    sort: "random",
                    hasimage: 1
                }
            })
            .on("complete", function(data, response) {
                let qArray = []
                for( i = 0; i < data.records.length; i++ ){
                    let current = data.records[i]
                    if(current.primaryimageurl){
                        if(current.people != undefined && current.people[current.people.length - 1].name != "Unidentified Artist" && current.people[current.people.length - 1].name != "Unknown Artist"){
                            let q = new Question({
                                question: "Name the artist of the piece.",
                                image: current.primaryimageurl,
                                correct: current.people[current.people.length - 1].name
                            });
                            // console.log(q)
                            qArray.push(q);
                        };
                    };
                };
                res.render("question.hbs", {
                    data: qArray,
                    quizId: qid
                });
            });
        });
    });

    // Generate base questions
    app.post('/api/quiz/:id/generate', (req, res) => {
        const qid = req.params.id;
        Quiz.findOne( { _id: qid } )
        .exec( function (err, quiz) {
            restler.get("https://api.harvardartmuseums.org/object", {
                query: {
                    apikey: process.env.KEY,
                    century: "19th century",
                    sort: "random",
                    hasimage: 1
                }
            })
            .on("complete", function(data, response) {
                let qArray = []
                for( i = 0; i < data.records.length; i++ ){
                    let current = data.records[i]
                    console.log(current.primaryimageurl)
                    if (current.primaryimageurl != "") {
                        if(current.people != undefined && current.people[current.people.length - 1].name != "Unidentified Artist"){
                            let q = new Question({
                                question: "Name the artist of the piece.",
                                image: current.primaryimageurl,
                                correct: current.people[current.people.length - 1].name
                            });
                            qArray.push(q);
                        };
                    };
                };
                quiz.questions = qArray
                quiz.save()
                res.redirect(`/api/quiz/${qid}`)
            });
        });
    });

    // UPDATE
    app.put('/api/question/:id', (req, res) => {

        Question.findOneAndUpdate( { _id: req.params.id }, req.body )
        .then( question => {
            res.redirect(`/api/question/${req.params.id}`);
        });
    });

    // Delete Question
    app.post('/api/quiz/:quizId/question/:id/delete', (req, res) => {
        Quiz.findOne({ _id: req.params.quizId })
        .exec( (err,quiz) => {
            quiz.questions = quiz.questions.filter( ask => {
                return String( ask._id ) !== req.params.id;
            })
            quiz.save().then(quiz => {
                res.redirect(`/api/quiz/${req.params.quizId}`)
            });
        });
    });
}
