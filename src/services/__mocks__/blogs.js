
let token = null

const blogs = [

    {
        title: "Päiväinen jonotus",
        author: "jonoilija",
        url: "www.ekajonossa.fi",
        likes: 1,
        id: "5a9158ba4043c557babf5cff",
        user: {
            _id: "5a90251c64c2eb53b4a338c4",
            username: "mustonea",
            name: "Aleksi"
        }
    },
    {
        title: "kakkukestit",
        author: "kakkutaiteilija",
        url: "www.kakku-unelmat.fi",
        likes: 4,
        id: "5a97faa22cbe29021dbc9f38",
        user: {
            _id: "5a90251c64c2eb53b4a338c4",
            username: "mustonea",
            name: "Aleksi"
        }
    },
    {
        title: "kinkkuvoileipiä",
        author: "kinkkujen-kinkku",
        url: "www.täydellinenpaistotulos.fi",
        likes: 4,
        id: "5a97fb3a2cbe29021dbc9f39",
        user: {
            _id: "5a918350b8a82c5abb143885",
            username: "veeruski",
            name: "veera"
        }
    }
]

const getAll = () => {
    return Promise.resolve(blogs)
}

export default { getAll, blogs }