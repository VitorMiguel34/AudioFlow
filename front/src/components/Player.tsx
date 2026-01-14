import React, { useState, useRef, useEffect } from 'react';
import { fetchSong, type Song } from '../service/api.ts';

interface PlayerProps {
  songId: number;
}

export default function Player({ songId }: PlayerProps) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [songData, setSongData] = useState<Song>({ 
    name: "", 
    duration_time: "", 
    artist: { name: "" }, 
    image: "", 
    audio: "" 
  });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    async function loadSong() {
      try {
        const song = await fetchSong(songId);
        setSongData(song);
      } catch (erro) {
        console.error("Erro ao carregar musica!", erro);
      }
    }
    if (songId) loadSong();
  }, [songId]);

  function formatNumberTime(time: number): string {
    if (!time || isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  function convertDurationToSeconds(time: string): number {
    if (!time) return 0;
    const parts = time.split(':').map(Number);
    if (parts.length === 3) return (parts[0] * 3600) + (parts[1] * 60) + parts[2];
    if (parts.length === 2) return (parts[0] * 60) + parts[1];
    return 0;
  }

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (!isDragging && audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTime(Number(e.target.value));
  };

  const handleSeekEnd = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Number(e.target.value);
    }
    setIsDragging(false);
  };

  return (
    <footer className="fixed bottom-0 left-0 right-0 h-24 bg-black/90 backdrop-blur-2xl border-t border-white/5 px-8 flex items-center justify-between z-[100]">
      <div className="flex items-center gap-4 w-1/3">
        <div className="w-14 h-14 rounded-xl bg-zinc-800 overflow-hidden shadow-lg border border-white/10 shrink-0">
          <img 
            src={songData.image || 'https://via.placeholder.com/150'} 
            alt="Capa" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="hidden sm:block truncate">
          <h4 className="text-sm font-black italic uppercase tracking-tighter truncate text-white">
            {songData.name || "Selecione uma faixa"}
          </h4>
          <p className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest truncate">
            {songData.artist.name || "AudioFlow Master"}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center w-1/3 max-w-xl gap-2">
        <div className="flex items-center gap-6">
          <button className="text-zinc-400 hover:text-white transition">
            <i className="fa-solid fa-backward-step text-lg"></i>
          </button>
          
          <button 
            onClick={togglePlay}
            className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition shadow-lg shadow-white/10"
          >
            {isPlaying ? (
              <i className="fa-solid fa-pause text-lg"></i>
            ) : (
              <i className="fa-solid fa-play text-lg ml-1"></i>
            )}
          </button>

          <button className="text-zinc-400 hover:text-white transition">
            <i className="fa-solid fa-forward-step text-lg"></i>
          </button>
        </div>

        <div className="w-full flex items-center gap-3">
          <span className="text-[10px] font-mono text-zinc-500 w-8 text-right">
            {formatNumberTime(currentTime)}
          </span>
          <input
            type="range"
            min={0}
            max={convertDurationToSeconds(songData.duration_time) || 100}
            value={currentTime}
            onMouseDown={() => setIsDragging(true)}
            onChange={handleSeekChange}
            onMouseUp={handleSeekEnd}
            className="flex-1 h-1 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
          <span className="text-[10px] font-mono text-zinc-500 w-8">
            {songData.duration_time || "0:00"}
          </span>
        </div>
      </div>

      <div className="w-1/3 flex justify-end gap-5 text-zinc-400">
        <button className="hover:text-white transition-colors"><i className="fa-solid fa-microphone-lines text-xs"></i></button>
        <button className="hover:text-white transition-colors"><i className="fa-solid fa-list-ul text-xs"></i></button>
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-volume-high text-xs"></i>
          <div className="w-24 h-1 bg-zinc-800 rounded-full relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-3/4 bg-zinc-500"></div>
          </div>
        </div>
      </div>

      <audio 
        ref={audioRef} 
        src={songData.audio} 
        onTimeUpdate={handleTimeUpdate} 
        onEnded={() => setIsPlaying(false)} 
      />
    </footer>
  );
}