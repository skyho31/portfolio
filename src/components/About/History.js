import React from 'react';

const History = ({history}) => {
	return (
		<div className="works history">
			<div className="works title">
					<p>HISTORY</p>
			</div>
			<div className="hisBox">
				{history ? history.map((value, index) => {
					return (
						<HistoryList history={value} index={index} key={index}/>
					)
				}) : ''}
			</div>
		</div>
	)
}

class HistoryList extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			isDesktop: true
		}

		this.checkDesktop = this.checkDesktop.bind(this);
	}

	componentWillMount() {
		this.checkDesktop();
	}

	componentDidMount() {
		window.addEventListener("resize", this.checkDesktop);
	}

	componentWillUnmount(){
		window.removeEventListener("resize", this.checkDesktop);
	}

	checkDesktop(){
		this.setState({
			isDesktop : document.body.clientWidth > 767
		});
	}

	render(){
		const { history, index } = this.props;
		const isRight = index % 2 === 1;
		const containerStyle = {
			display:'flex',
			flexDirection: isRight ? 'row' : 'row-reverse'
		}
		const emptyStyle = {
			borderLeft:"2px solid #ff6666"
		}

		return this.state.isDesktop? (
        <div style={containerStyle}>
          <Circle isDesktop={this.state.isDesktop}/>
          <div className="historyList" style={!isRight ? emptyStyle : {}}>
            <ul>
              { history.map((value, index) => {
                return isRight ?  (
                  <li style={{textAlign:'right'}}  key={index}>
                    {value.content}
                    <p className="listYear left">{value.time}</p>
                  </li>
                ) : (
                  <li key={index}>
                    <p className="listYear right">{value.time}</p>
                    {value.content}
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="emptyList" style={isRight ? emptyStyle : {}}/>
        </div>
		) : (
			<div style={{display:'flex'}}>
        <Circle isDesktop={this.state.isDesktop}/>
				<div className="historyList" style={Object.assign(emptyStyle, {margin:"0 2em"})}>
					<ul>
						{
							history.map((value, index) => (
								<li key={index}>
									<p className="listYear right">{value.time}</p>
									{value.content}
								</li>
							))
						}
					</ul>
				</div>
			</div>
		)
	}
}

const Circle = ({isDesktop}) => {
  const style = isDesktop ?  {left: "calc(50% - 6px)"} : {left: "calc(2em - 6px)"};
  
  return (
    <div style={{display:'flex'}}>
        <span className="hisCircle" style={style}></span>
    </div>
  )
}

export default History;
