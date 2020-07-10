import React from "react";

const About = ({ avatar, name, profession, bio, address, social }) => {
	return (
		<div className="About">
			<div className="About-container">
				<div className="About-avatar">
					<figure>
						<img src={avatar} alt={name}></img>
					</figure>
				</div>
				<div className="About-name">
					<h2>{name}</h2>
				</div>
				<div className="About-profesion">
					<p>{profession}r</p>
				</div>
				<div className="About-desc">
					<p>{bio}</p>
				</div>
				<div className="About-location">
					<p>{address}</p>
				</div>
				<div className="About-social">
					<p>{}</p>
				</div>
			</div>
		</div>
	);
};

export default About;
