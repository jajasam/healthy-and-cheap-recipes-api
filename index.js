const PORT = 8001
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const app = express()

const sources = [
    {
        name: 'budget bytes',
        address: 'https://www.budgetbytes.com/category/recipes/one-pot/',
    },
]

const recipes = [
]

// sources.forEach(source => {
    axios.get("https://www.budgetbytes.com/category/recipes/one-pot/")
     .then(response => {
        const html = response.data
        const $ = cheerio.load(html)

        // $('a:contains("climate")', html).each(function () {
        //     const title = $(this).text()
        //     const url = $(this).attr('href')

        //     recipes.push({
        //         title,
        //         url: newspaper.base + url,
        //         source: newspaper.name
        //     })
        // })
    })
     .catch(error => {
         console.error('Error fetching data:', error);
     });

app.get('/', (req, res) => {
    res.json('Healthy, easy and cheap recipes!')
})

app.get('/recipes', (req, res) => {
    res.json(recipes)
})

// app.get('/news/:newspaperId', (req, res) => {
//     const newspaperId = req.params.newspaperId

//     const newspaperAddress = newspapers.filter(newspaper => newspaper.name == newspaperId)[0].address
//     const newspaperBase = newspapers.filter(newspaper => newspaper.name == newspaperId)[0].base


    // axios.get(newspaperAddress)
    //     .then(response => {
    //         const html = response.data
            // const $ = cheerio.load(html)
            // const specificArticles = []

            // $('a:contains("climate")', html).each(function () {
            //     const title = $(this).text()
            //     const url = $(this).attr('href')
            //     specificArticles.push({
            //         title,
//                     url: newspaperBase + url,
//                     source: newspaperId
//                 })
//             })
//             res.json(specificArticles)
//         }).catch(err => console.log(err))
// })

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))