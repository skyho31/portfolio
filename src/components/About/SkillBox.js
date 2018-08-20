import React from 'react';

const SkillBox = ({skill}) => {
	return (
		<div>
			<div className="works skillBox">
				<div className="works title">
						<p>AVAILABLE SKILLS</p>
				</div>
				{
					skill.useable ? skill.useable.map((value, index) => (
						<SkillCard {...value} key={index}/>
					)) : ''
				}
			</div>
			<hr />
			<div className="works skillBox">
				<div className="works title">
						<p style={{color:'cornflowerblue'}}>STUDYING SKILL</p>
				</div>
				{
					skill.study ? skill.study.map((value, index) => (
						<SkillCard {...value} key={index}/>
					)) : ''
				}
			</div>
		</div>
	)
}

const SkillCard = (props) => {
	const {name, imgPath} = props;
	return (
		<div className="skill">
				<div className="skillWrap">
						<p>{name}</p>
				</div>
				<img src={imgPath} alt={imgPath}/>
		</div>
	)
}

export default SkillBox;
