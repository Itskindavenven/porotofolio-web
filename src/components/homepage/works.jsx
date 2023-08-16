import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						
						<div className="work">
							<img
								src="./uajy.png"
								alt="uajy"
								className="work-image"
							/>
							<div className="work-title">Assistant Lecutrer Introduction of AI</div>
							<div className="work-subtitle">
								Atma Jaya Yogyakarta University
							</div>
							<div className="work-duration"> 2023 - Present</div>
						</div>

						<div className="work">
							<img
								src="./one.png"
								alt="one"
								className="work-image"
							/>
							<div className="work-title">RPA Junior Developer Contestant</div>
							<div className="work-subtitle">
								ONE INDONESIA ICstar Hackathon
							</div>
							<div className="work-duration">2022 - 2023</div>
						</div>

						<div className="work">
							<img
								src="./icp.png"
								alt="icp"
								className="work-image"
							/>
							<div className="work-title">Software UAT Tester</div>
							<div className="work-subtitle">
								PT ICP Cipta Prima
							</div>
							<div className="work-duration">2022 - 2022</div>
						</div>

						<div className="work">
							<img
								src="./uajy.png"
								alt="uajy"
								className="work-image"
							/>
							<div className="work-title">Computer Science Student</div>
							<div className="work-subtitle">
								Atma Jaya Yogyakarta University
							</div>
							<div className="work-duration"> 2021 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
