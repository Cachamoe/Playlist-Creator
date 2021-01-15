import { React, useState } from "react";
import { useForm } from "react-hook-form";
import "./style.css";
import SearchResults from "../SearchResults";
import API from '../../utils/API';

function Search() {
    const { register, handleSubmit } = useForm();
    const [results, setResultsState] = useState([]);

    const onSubmit = (data) => {
        let searchQuery = data.searchQuery;

        API.getArtist(searchQuery).then(function (data) {
            let res = [];

            res = data.data.toptracks.track.map(result => {
            const song = {
                    song: result.name,
                    artist: data.data.toptracks["@attr"].artist,
                    albumArt: result.image[2]["#text"],
                }
                return song;
            });
            console.log(res);
            console.log(data);
            setResultsState(res);
        });
        // API.getAlbum(searchQuery);
        // API.getSong(searchQuery);
    }
    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" name="searchQuery" className="searchQuery" placeholder="Search by Artist" ref={register} />

            <input type="submit" className="submit-btn" />
        </form>
        <SearchResults results={results} />
        </>
    );
}

export default Search;