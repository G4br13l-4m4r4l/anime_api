import React, { useEffect, useState } from "react";
import { AddList } from "./AddList";
import { AnimeInfo } from "./AnimeInfo";
import AnimeList from "./AnimeList";
import { RemoveList } from "./removeItem";

export default function Anime(){

    const [search,setSearch]=useState("");
    const [animeData, setAnimeData] = useState([]);
    const [animeInfo, setAnimeInfo] = useState();
    const [animeList, setAnimeList] = useState([]);

    const Addto = (anime)=>{
        const newArray = [...animeList, anime];
        setAnimeList(newArray);
    }
    const Remove = (anime)=>{
        const newArray=animeList.filter((anime)=>{
            return anime.mal_id !== anime.mal_id
        })
        setAnimeList(newArray);
    }
    const getData = async()=>{
        const res = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=20`);
        const resData = await res.json();
        setAnimeData(resData.data);
    }
    useEffect(()=>{
        getData();
    },[search]);
    return(
        <div>
            <div className="header">
                <h1>Anime List</h1>
                <div className="search-box">
                    <input type="search" placeholder="search here the anime" onChange={(e)=>{setSearch(e.target.value)}}></input>
                </div>
            </div>
            <div className="container">
                <div className="animeInfo">
                    {animeInfo && <AnimeInfo animeInfo={animeInfo}/>}
                </div>
                <div className="anime-row">
                    <h2 className="text-heading">anime</h2>
                    <div className="row">
                        <AnimeList animelist={animeData} setAnimeInfo={setAnimeInfo} animeComponent={AddList} handleList={(anime)=>{Addto(anime)}}/>
                    </div>
                    <h2 className="text-heading">My List</h2>
                    <div className="row">
                        <AnimeList animelist={animeList} setAnimeInfo={setAnimeInfo} animeComponent={RemoveList} handleList={(anime)=>{Remove(anime)}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}