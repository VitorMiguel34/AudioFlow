import axios from 'axios'

const API_SONGS_URL: string = "http://127.0.0.1:8000/stream/songs/"
const API_ARTISTS_URL: string = "http://127.0.0.1:8000/stream/artists/"
const API_USERS_URL: string = "http://127.0.0.1:8000/users/"

export interface Song{
    name: string, 
    duration_time: string, 
    artist: Record<string,string>,
    image: string,
    audio: string
}

export interface UserData{
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
    plan: string,
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
    catch(error){
        console.error(error)
        throw error
    }
}

export async function postUser(userData: UserData){
    try{
        const response = await axios.post(`${API_USERS_URL}register/`, userData)
        return response.data
    }
    catch(error){
        console.error(error)
        throw error
    }
}

export async function getUser(userEmail: string, userPassword: string){
    try{
        const response = await axios.post(`${API_USERS_URL}login/`, {
            email: userEmail,
            password: userPassword,
        })
        return response.data
    }
    catch(error){
        console.error(error)
    }
}