const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let tasks = [];

app.get('/', (req, res) => {
    res.send(`
        <h1>To-Do List</h1>
        <form action="/add" method="post">
            <input type="text" name="task" placeholder="New task" required>
            <button type="submit">Add</button>
        </form>
        <ul>
            ${tasks.map(task => `<li>${task}</li>`).join('')}
        </ul>
    `);
});

app.post('/add', (req, res) => {
    tasks.push(req.body.task);
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
