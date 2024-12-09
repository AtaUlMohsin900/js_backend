import express from 'express';

const app = express();


app.get('/api/books', (req, res) => {
    const books = [
        {
            id: 1,
            title: 'Javascript',
            author: 'Mohsin',
            publicationYear: 2020,
            price: 550
        },
        {
            id: 2,
            title: 'Python',
            author: 'khalid',
            publicationYear: 2022,
            price: 450
        },
        {
            id: 3,
            title: 'Java',
            author: 'Mohsin',
            publicationYear: 2024,
            price: 600
        },
        {
            id: 4,
            title: 'C++',
            author: 'Akbar',
            publicationYear: 2024,
            price: 650
        },
        {
            id: 5,
            title: 'PHP',
            author: 'Mohsin',
            publicationYear: 2023,
            price: 850
        },
        {
            id: 6,
            title: '.NET',
            author: 'khalid',
            publicationYear: 2020,
            price: 550
        },
        {
            id: 7,
            title: 'Linux',
            author: 'Mohsin',
            publicationYear: 2023,
            price: 800
        }

    ]
    res.send(books);
});




const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server at http://localhost:${port}`);

})