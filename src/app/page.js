'use client';

import Cover from "@/components/cover/cover";
import styles from './styles.module.css';
import { IoIosSend } from "react-icons/io";
import { useEffect, useState } from "react";
import Names from "@/components/welcome/welcome";
import Detail from "@/components/detail/detail";
import Collage from "@/components/collage/collage";
import Prayers from "@/components/prayers/prayers";
import Countdown from "@/components/countdown/countdown";
import ReactAudioPlayer from 'react-audio-player';
import Wishes from "@/components/wishes/wishes";
import useSWR from 'swr';
const fetcher = url => fetch(url).then(r => r.json())

export default function Home() {
	const [open, setOpen] = useState(false);
	function handleOpen() {
		setOpen(true);
	}
	
	// useEffect(() => {
	// 	const fetchPosts = async () => {
	// 		let res = await fetch("http://localhost:3000/api/getWishes", {
	// 			method: "GET",
	// 			headers: {
	// 			"Content-Type": "application/json",
	// 			},
	// 		});
	// 		let allPosts = await res.json();
	// 	}

	// 	const posts = fetchPosts();
	// 	console.log(allPosts);
	// })
    const { data, error } = useSWR(`/api/getWishes`, fetcher)
	if(error) {
        return "An Error has occured"
    }
	const wishes = data?.allPosts;
	return (
		<>	
			{open?
				<>
					<Names/>
					<Countdown/>
					<Detail/>
					<Collage/>
					<Prayers/>
					<Wishes wishes={wishes}/>
					<ReactAudioPlayer
						src="/Raef - You Are the One.mp3"
						autoPlay
						/>

				</>
			:
				<>
					<Cover/>
					<button className={styles.button} onClick={handleOpen}>
						<div className="flex flex-row gap-2 items-center justify-center">
							<div className="text-sm">Buka Undangan</div>
							<div className="text-xl">
								<IoIosSend/>
							</div>
						</div>
					</button>
				</>
			}
		</>
	);
}
	