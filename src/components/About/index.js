import React from 'react';
import '../../styles/index.scss';

import '../../styles/about.scss';
import Data from '../../data/about.json';

import SkillBox from './SkillBox';
import History from './History';


const About = () => (
	<div className="section about">
		<Profile />
		<hr />
		<History history={Data.history}/>
		<hr />
		<SkillBox skill={Data.skill}/>
	</div>
);

const Profile = () => {
	return (
		<div>
			<div className="works title">
				<img src="./imgs/myPic.jpg" id="myPic" alt="myPic"/>
				</div>
				<div className="works start">
						<p><b>안녕하세요, 김선호입니다 :)</b>
						<br/>자바스크립트를 통한 웹 및 앱 개발을 하고 있으며, 새로운 기술을 배우는 걸 즐겨하는 개발자입니다.</p>
				</div>
		</div>
	)
}

export default About;
