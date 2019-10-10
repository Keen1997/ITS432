let rootURL = 'https://api.themoviedb.org/3/search/movie?api_key='
let apiKey = 'f32ff550899a3c1f65bd4a1bed3a1fef'

export default (title) => {
    let url = `${rootURL}${apiKey}&query=${title}`
    return fetch(url).then((response) => {
        return response.text()
    }).then((text) => {
        let json = JSON.parse(text)
        return json
    })
}