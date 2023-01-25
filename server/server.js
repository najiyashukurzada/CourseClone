const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8080;

app.use (cors());

const CourseSchema = new mongoose.Schema({
    title: String,
    description: String,
    name: String,
    price: Number,
})

const CourseModel = mongoose.model("course", CourseSchema)

mongoose.set('strictQuery', false)
mongoose 
    .connect(`mongodb+srv://najiya:najiya@cluster0.ldwafk6.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => console.log("connected"))
    .catch((err) => console.log("err"));

app.use(express.json());

app.get('/course', (req, res) => {
    CourseModel.find(null, "title description name price").exec((error, course) => {
        if(error) return res.status(500).send({error})
        res.send(course)
    })
})

app.post('/course', (req, res) => {
    const newProduct = new CourseModel({
        ...req.body
    })
    newProduct.save()
    res.send(newProduct)
})

app.get('/course/:id', async (req, res) => {
    const {id} = req.params;
    const Course = await CourseModel.findById(id);
    return res.status(200).send({ "course": Course });
})

app.delete('/course/:id', (req, res) => {
    if(req.params.id)
        CourseModel.findByIdAndDelete(req.params.id, (error, course) => {
            if(error) return res.status(500).send({error})
           res.send(course)
        })
})

app.listen(PORT, () => {
    console.log("Server listening on port" + PORT);
});