import React, { Fragment } from "react";

export default function AnimeList({animelist, setAnimeInfo, animeComponent, handleList}){
   const AddList = animeComponent;
    return(
        <Fragment>
            {animelist?(animelist.map((anime,index)=>{
                return(
                <div className="card" key={index} onClick={()=>{setAnimeInfo(anime)}}>
                    <img src={anime.images.jpg.large_image_url} alt="animeImage" />
                    <div className="anime-info">
                        <h4>{anime.title}</h4>
                        <div className="overlay" onClick={()=> handleList(anime)}>
                            <h4>{anime.title_japanese}</h4>
                            <h3>Synopsis</h3>
                            <div className="synopsis">
                                <p>{anime.synopsis}</p>
                            </div>
                            <AddList/>
                        </div>
                    </div>
                </div>
                );
            })
        ):"not Found"}

        </Fragment>
    );
}