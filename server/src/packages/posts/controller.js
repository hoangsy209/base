

const index = (req, res) => {
    const data = [
        {
            "id": 1,
            "title": "some comment",
            "content": 1
        },
        {
            "id": 1,
            "title": "some comment",
            "content": 1
        },
        {
            "id": 1,
            "title": "some comment",
            "content": 1
        }

    ]
    res.send(data) 
}

export default {
    index
}