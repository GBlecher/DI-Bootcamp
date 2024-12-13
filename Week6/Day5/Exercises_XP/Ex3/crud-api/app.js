import express from 'express'
import {fetchPosts}  from './data/dataService.js'


const app = express()
const PORT = 5000


app.get('/api/posts',async (req, res) =>{
    try{
        const posts = await fetchPosts()
        res.status(200).json(posts)
    }catch(error){
        res.status(404).json({message:'Posts not found'})
    }
})


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});