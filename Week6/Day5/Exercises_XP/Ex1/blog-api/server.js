express = require('express')


const app = express()
const PORT = 3000
app.listen(PORT, ()=>{
    console.log((`run on ${PORT}`));
    
})

const blogPosts = [
    {
        id: 1,
        title: "Understanding JavaScript Closures",
        content: "In this post, we will explore what a closure is in JavaScript and how it works..."
    },
    {
        id: 2,
        title: "A Guide to CSS Flexbox",
        content: "CSS Flexbox is a layout model that allows responsive design and alignment of elements on a webpage..."
    },
    {
        id: 3,
        title: "Top 10 Python Libraries for Data Science",
        content: "Data science has become a crucial part of modern technology, and Python offers powerful libraries to aid in this..."
    },
    {
        id: 4,
        title: "Getting Started with React",
        content: "React is a JavaScript library for building user interfaces. In this post, we will cover the basics..."
    },
    {
        id: 5,
        title: "The Future of Artificial Intelligence",
        content: "Artificial Intelligence continues to evolve and influence various fields. Let's discuss what the future holds..."
    }
];

app.get('/posts', (req,res)=>
    {
        res.json(blogPosts)
    })

app.get("/posts/:id", (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    const myPost = blogPosts.find((item) => item.id == id);
    if (!myPost) return res.sendStatus(404); 
    res.json(myPost);
    });
    