import React, { useRef, useState, useEffect } from "react";

export function Reproductor() {
	const obtenerCanciones = async () => {
		try {
			const res = await fetch(
				"https://assets.breatheco.de/apis/sound/songs"
			);
			const data = await res.json();
			setSongList(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		obtenerCanciones();
	}, []);

	const [songList, setSongList] = useState([]);

	const controlPlayPause = () => {
		if (reproductor.current.paused) {
			reproductor.current.play();
		} else if (!reproductor.current.paused) {
			reproductor.current.pause();
		}
	};

	const siguienteCancion = () => {
		let siguiente;
		if (cancionActual == 21) {
			siguiente = 0;
		} else {
			siguiente = cancionActual + 1;
		}

		cambiarSrcAudio(songList[siguiente].url, siguiente);
	};

	const cancionAnterior = () => {
		let anterior;
		if (cancionActual == 0) {
			anterior = 21;
		} else {
			anterior = cancionActual - 1;
		}

		cambiarSrcAudio(songList[anterior].url, anterior);
	};

	let reproductor = useRef();

	const [cancionActual, setCancionActual] = useState();

	const cambiarSrcAudio = (url, index) => {
		let stringfijo = "https://assets.breatheco.de/apis/sound/";
		reproductor.current.src = stringfijo + url;
		setCancionActual(index);
	};

	return (
		<div>
			<table className="table table-hover table-dark oscuro">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Nombre</th>
					</tr>
				</thead>
				<tbody>
					{songList.map((canciones, index) => {
						return (
							<tr
								className={
									cancionActual == index ? "active" : ""
								}
								key={index}
								onClick={() => {
									cambiarSrcAudio(canciones.url, index);
								}}>
								<th scope="row">{canciones.id}</th>
								<td>{canciones.name}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<div className="oscuro d-flex justify-content-center border-top p-1 text-white botones">
				<div onClick={cancionAnterior}>
					<i className="fas fa-backward"></i>
				</div>
				<div className="mx-4" onClick={controlPlayPause}>
					<i className="fas fa-play"></i>
				</div>
				<div onClick={siguienteCancion}>
					<i className="fas fa-forward"></i>
				</div>
			</div>
			<audio
				ref={reproductor}
				src="https://assets.breatheco.de/apis/sound/files/mario/songs/castle.mp3"
			/>
		</div>
	);
}
