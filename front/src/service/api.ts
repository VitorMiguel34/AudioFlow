import axios from 'axios'

const API_SONGS_URL: string = "http://127.0.0.1:8000/stream/songs/"
const API_ARTISTS_URL: string = "http://127.0.0.1:8000/stream/artists/"

export interface Song{
    name: string, 
    duration_time: string, 
    artist: Record<string,string>,
    image: string,
    audio: string
}


export async function fetchSong(song_id: number){
    try{
        const response = await axios.get(`${API_SONGS_URL}${song_id}/`)
        const artist = await axios.get(`${API_ARTISTS_URL}${response.data.artist}/`)
        const song = {
            ...response.data,
            artist: artist.data,
        }
        return song
    }
    catch(erro){
        console.error(erro)
    }
}