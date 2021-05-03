import React, { useRef, useEffect, useState } from "react";

export function Home() {
	const [songList, setSongList] = useState([
		{
			id: 1,
			category: "game",
			name: "Mario Castle",
			url: "files/mario/songs/castle.mp3"
		},
		{
			id: 2,
			category: "game",
			name: "Mario Star",
			url: "files/mario/songs/hurry-starman.mp3"
		},
		{
			id: 3,
			category: "game",
			name: "Mario Overworld",
			url: "files/mario/songs/overworld.mp3"
		},
		{
			id: 4,
			category: "game",
			name: "Mario Stage 1",
			url: "files/mario/songs/stage1.mp3"
		},
		{
			id: 5,
			category: "game",
			name: "Mario Stage 2",
			url: "files/mario/songs/stage2.mp3"
		},
		{
			id: 6,
			category: "game",
			name: "Mario Star",
			url: "files/mario/songs/starman.mp3"
		},
		{
			id: 7,
			category: "game",
			name: "Mario Underworld",
			url: "files/mario/songs/underworld.mp3"
		},
		{
			id: 8,
			category: "game",
			name: "Mario Underwater",
			url: "files/mario/songs/underwater.mp3"
		},
		{
			id: 9,
			category: "game",
			name: "Zelda Castle",
			url: "files/videogame/songs/zelda_castle.mp3"
		},
		{
			id: 10,
			category: "game",
			name: "Zelda Outworld",
			url: "files/videogame/songs/zelda_outworld.mp3"
		},
		{
			id: 11,
			category: "game",
			name: "Zelda Titles",
			url: "files/videogame/songs/zelda_title.mp3"
		},
		{
			id: 11,
			category: "game",
			name: "Sonic Brain Zone",
			url: "files/videogame/songs/sonic_brain-zone.mp3"
		},
		{
			id: 12,
			category: "game",
			name: "Dong KinKong Main",
			url: "files/other/songs/dkng-main.mp3"
		},
		{
			id: 13,
			category: "game",
			name: "Dong KinKong Other",
			url: "files/other/songs/dkng-other.mp3"
		},
		{
			id: 14,
			category: "game",
			name: "mega-man",
			url: "files/other/songs/mega-man.mp3"
		},
		{
			id: 15,
			game: "cartoon",
			name: "Flintstones",
			url: "files/cartoons/songs/flintstones.mp3"
		},
		{
			id: 16,
			game: "cartoon",
			name: "power-rangers",
			url: "files/cartoons/songs/power-rangers.mp3"
		},
		{
			id: 17,
			game: "cartoon",
			name: "simpsons",
			url: "files/cartoons/songs/simpsons.mp3"
		},
		{
			id: 18,
			game: "cartoon",
			name: "south-park",
			url: "files/cartoons/songs/south-park.mp3"
		},
		{
			id: 19,
			game: "cartoon",
			name: "thundercats",
			url: "files/cartoons/songs/thundercats.mp3"
		},
		{
			id: 20,
			game: "cartoon",
			name: "x-men",
			url: "files/cartoons/songs/x-men.mp3"
		}
	]);

	let audio = useRef();

	const cambiarSrcAudio = url => {
		let stringfijo = "https://assets.breatheco.de/apis/sound/";
		audio.current.src = stringfijo + url;
	};

	const controlAudio = () => {
		if (audio.current.paused) {
			audio.current.play();
		} else if (!audio.current.paused) {
			audio.current.pause();
		}
	};

	return (
		<div className="d-flex justify-content-center flex-column bg--negro">
			<div className="d-flex flex-column justify-content-center bg--negro">
				<div className="row d-flex justify-content-center ml-3 mt-2">
					<h6>Music player react</h6>
				</div>
				<div
					onClick={() => {
						cambiarSrcAudio(songList[0].url);
					}}
					className="row d-flex justify-content-start ml-3 p-1 border-top align-center border-secondary bg--negro">
					<div className="id">{songList[0].id}</div>
					<div>{songList[0].name}</div>
				</div>
				<div
					onClick={() => {
						cambiarSrcAudio(songList[1].url);
					}}
					className="row d-flex justify-content-start ml-3 p-1 border-top border-secondary bg--negro">
					<div className="id">{songList[1].id}</div>
					<div>{songList[1].name}</div>
				</div>
				<div
					onClick={() => {
						cambiarSrcAudio(songList[2].url);
					}}
					className="row d-flex justify-content-start ml-3 p-1 border-top border-secondary bg--negro">
					<div className="id">{songList[2].id}</div>
					<div>{songList[2].name}</div>
				</div>
				<div
					onClick={() => {
						cambiarSrcAudio(songList[3].url);
					}}
					className="row d-flex justify-content-start ml-3 p-1 border-top border-secondary bg--negro">
					<div className="id">{songList[3].id}</div>
					<div>{songList[3].name}</div>
				</div>
				<div
					onClick={() => {
						cambiarSrcAudio(songList[4].url);
					}}
					className="row d-flex justify-content-start ml-3 p-1 border-top border-secondary bg--negro">
					<div className="id">{songList[4].id}</div>
					<div>{songList[4].name}</div>
				</div>
				<div
					onClick={() => {
						cambiarSrcAudio(songList[5].url);
					}}
					className="row d-flex justify-content-start ml-3 p-1 border-top border-secondary bg--negro">
					<div className="id">{songList[5].id}</div>
					<div>{songList[5].name}</div>
				</div>
				<div
					onClick={() => {
						cambiarSrcAudio(songList[6].url);
					}}
					className="row d-flex justify-content-start ml-3 p-1 border-top border-secondary bg--negro">
					<div className="id">{songList[6].id}</div>
					<div>{songList[6].name}</div>
				</div>
				<div
					onClick={() => {
						cambiarSrcAudio(songList[7].url);
					}}
					className="row d-flex justify-content-start ml-3 p-1 border-top border-secondary bg--negro">
					<div className="id">{songList[7].id}</div>
					<div>{songList[7].name}</div>
				</div>
				<div
					onClick={() => {
						cambiarSrcAudio(songList[8].url);
					}}
					className="row d-flex justify-content-start ml-3 p-1 border-top border-secondary bg--negro">
					<div className="id">{songList[8].id}</div>
					<div>{songList[8].name}</div>
				</div>
				<div
					onClick={() => {
						cambiarSrcAudio(songList[9].url);
					}}
					className="row d-flex justify-content-start ml-3 p-1 border-top border-secondary bg--negro">
					<div className="id">{songList[9].id}</div>
					<div>{songList[9].name}</div>
				</div>
				<div className="row d-flex flex-column justify-content-center ml-3 p-1 border-top border-secondary bg--negro">
					<audio
						src="https://assets.breatheco.de/apis/sound/files/mario/songs/castle.mp3"
						controls
					/>
					<button onClick={controlAudio}>Play/pause audio</button>
				</div>
			</div>
		</div>
	);
}
