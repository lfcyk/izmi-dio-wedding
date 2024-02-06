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

import localFont from 'next/font/local';
import Bank from "@/components/bank/bank";

const DKFont = localFont({
	src: './../../src/fonts/DK Lemon Yellow Sun.otf',
	display: 'swap',
})

export default function Home() {
	const [open, setOpen] = useState(false);
	const [data, setData] = useState("");
	function handleOpen() {
		setOpen(true);
	}
	
	useEffect(() => {
		fetch('/api/getWishes')
		  .then(res => res.json())
		  .then(data => setData(data))
	}, [])

	const wishes = data?.allPosts;
	return (
		<>	
			{open?
				<>
					<Names/>
					<Countdown/>
					<Detail/>
					<Collage/>
					<Bank/>
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
							<div className={`text-lg ${DKFont.className}`}>Buka Undangan</div>
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
	