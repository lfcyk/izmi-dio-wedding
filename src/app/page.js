'use client';

import Cover from "@/components/cover/cover";
import styles from './styles.module.css';
import { IoIosSend } from "react-icons/io";
import { useState } from "react";
import Names from "@/components/welcome/welcome";
import Detail from "@/components/detail/detail";
import Collage from "@/components/collage/collage";
import Prayers from "@/components/prayers/prayers";
import Countdown from "@/components/countdown/countdown";
import ReactAudioPlayer from 'react-audio-player';
import Wishes from "@/components/wishes/wishes";


export default function Home() {
	const [open, setOpen] = useState(false);
	function handleOpen() {
		setOpen(true);
	}

	return (
		<>	
			{open?
				<>
					<Names/>
					<Countdown/>
					<Detail/>
					<Collage/>
					<Prayers/>
					<Wishes/>
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
	