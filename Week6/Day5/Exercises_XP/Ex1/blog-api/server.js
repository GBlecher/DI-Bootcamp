express = require('express')


const app = express()
app.use(express.json())
const PORT = 3002
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
// get all
app.get('/api/posts', (req,res)=>
    {
        res.json(blogPosts)
    })
// get by id
app.get("/api/posts/:id", (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    const myPost = blogPosts.find((item) => item.id == id);
    if (!myPost) return res.sendStatus(404); 
    res.json(myPost);
    });
//create new post
app.post('/api/posts/',(req, res) => {
    
    const { title, content } = req.body;
    console.log(req.body);
    if(!title||!content)
    {
        return res.status(400).json({error: "requires both title and content"})
    }
    const newPost = { id: blogPosts.length + 1, title, content };

    blogPosts.push(newPost);
    res.json(blogPosts);
})
//update post by id
app.put("/api/posts/:id", (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    const index = blogPosts.findIndex((item) => item.id == id);
    const { title, content } = req.body;
    if (index === -1) {
        return res.sendStatus(404).json({message:"ID not found to update"});
    } 
    blogPosts[index].title = title
    blogPosts[index].content = content
    res.json(blogPosts[index]);
    });
// delete post
app.delete("/api/posts/:id", (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    const index = blogPosts.findIndex((item) => item.id == id);
    if (index === -1) {
        return res.sendStatus(404);
    } 
    blogPosts.splice(index,1)
    res.sendStatus(200).json({message: "Deleleted successfully"})
    });