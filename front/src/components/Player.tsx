import React, { useState, useRef, useEffect} from 'react';
import {fetchSong} from '../service/api.ts'
import {type Song} from '../service/api.ts'

interface PlayerProps{
  song_id: number,
}

export default function Player({song_id}: PlayerProps) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [songData, setSongData] = useState<Song>({name: "", duration_time: "", artist: {}, image: "", audio: ""})
  const [isDragging, setIsDragging] = useState<boolean>(false)
  
  const audioRef = useRef<HTMLAudioElement>(null)

  async function setSong(){
    try{
        const song = await fetchSong(song_id)
        setSongData(song)
    }
    catch(erro){
        console.log(erro)
        console.error("Erro ao carregar musica!")
    }
  }

  useEffect(() => {
    setSong();
  }, [])

  function formatStringTime(time: string): string{
    if(!time) return "00:00";
    const duration_time: Array<string> = time.split(":")
    
    if(duration_time.length === 3) {
        return `${parseInt(duration_time[0])}:${parseInt(duration_time[1])}:${parseInt(duration_time[2])}`
    }
    return `${parseInt(duration_time[0])}:${parseInt(duration_time[1])}`
  };

  function convertDurationToSeconds(time: string): number {
    if(!time) return 0;
    const parts = time.split(':').map(Number); 
    
    if (parts.length === 3) {
        return (parts[0] * 3600) + (parts[1] * 60) + parts[2];
    } 
    else if (parts.length === 2) {
        return (parts[0] * 60) + parts[1];
    }
    return 0;
  }

  function formatNumberTime(time: number): string{
    if (!time || isNaN(time)) return "0:00";
    
    const totalSeconds = Math.floor(time);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    if(hours > 0){
      return `${hours}:${formattedMinutes}:${formattedSeconds}`
    }
    else{
      return `${minutes}:${formattedSeconds}`
    }
  }

  function runAudio(){
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  function handleTimeUpdate(){
    if(isDragging) return 
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const newTime = Number(e.target.value);    
    setCurrentTime(newTime);
  };
  
  return (
    <div className="flex items-center justify-center w-full p-16 h-screen sm:h-auto">
      <div className="w-full max-w-2xl bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-800 p-4">
        <div className="flex items-center gap-4">
          <div className="relative w-24 h-24 rounded-xl overflow-hidden shadow-lg bg-zinc-800 group shrink-0">
            <img
              src={songData.image}
              alt="Capa do Álbum"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div className="flex-1">
            <div className="mb-2">
              <h2 className="text-base font-bold text-white truncate">
                {songData.name}
              </h2>
              <p className="text-zinc-400 text-xs truncate">
                {songData.artist.name}
              </p>
            </div>

            <div className="w-full mb-2">
              <input
                type="range"
                min={0}
                max={convertDurationToSeconds(songData.duration_time)}
                value={currentTime}
                onMouseDown={() => setIsDragging(true)}
                onMouseOut={() => setIsDragging(false)}
                onChange={(e) => {handleSeek(e)}}
                className="w-full h-1 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-green-500"
              />
              <div className="flex justify-between text-[10px] text-zinc-500 font-mono mt-1">
                <span>{formatNumberTime(currentTime)}</span>
                <span>{formatStringTime(songData.duration_time)}</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-5">
              <button className="text-zinc-400 hover:text-white transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 20L9 12l10-8v16zM5 19h2V5H5v14z"/>
                </svg>
              </button>

              <button
                onClick={runAudio}
                className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-black hover:bg-green-400 transition shadow-lg shadow-green-500/20"
              >
                {isPlaying ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                )}
              </button>

              <button className="text-zinc-400 hover:text-white transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5 4l10 8-10 8V4zm14 1v14h-2V5h2z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <audio
          ref={audioRef}
          src={songData.audio}
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setIsPlaying(false)}
        />
      </div>
    </div>

  );
}