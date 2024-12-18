const express = require('express')
const router = express.Router()

const triviaQuestions = [
    {
      id: 1,
      question: "What is the capital of France?",
      answer: "Paris",
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      answer: "Mars",
    },
    {
      id: 3,
      question: "What is the largest mammal in the world?",
      answer: "Blue whale",
    },
    {
      id: 4,
      question: "What is the currency of Japan?",
      answer: "Yen",
    },
    {
        id: 5,
        question: "Who wrote 'Hamlet'?",
        answer: "William Shakespeare",
      }
  ];

// Get all questions 
router.get('/', (req,res)=>{
    res.json(questions)
})
// Add a new question
router.post('/', (req,res)=>{
    const newQ = {id: currId++, ...req.body}
    questions.push(newQ)
    res.status(201).json(newQ)
})
// Update a question by ID
router.put('/:id', (req,res)=>{
    const {id} =req.params
    const index = questions.findIndex(question => question.id == id);
    if (index !== -1) {
        questions[index] = { id: questions[index].id, ...req.body };
        res.json(questions[index]);
    } else {
        res.status(404).json({ message: 'question not found' });
    }
})
// Delete a question by ID
router.delete('/:id', (req,res)=>{
    const {id} =req.params
    const index = questions.findIndex(question => question.id == id);
    if (index !== -1) {
        questions.splice(index,1)
        res.status(200).json({message:"Deleted!"})
    } else {
        res.status(404).json({ message: 'question not found' });
    }
})

module.exports = router;