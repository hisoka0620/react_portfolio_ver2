  /* eslint-disable */
import './App.css';
import React from 'react';

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {isToggleOn: false}
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState({
      isToggleOn: !this.state.isToggleOn
    })
  }
render(){
return(
    <div className="header">
      <div className="container">
        <a className="header-image" href="/"><img src={this.props.image} alt="sirokuma"/></a>
        <h1 className="header-title">ポートフォリオ</h1>
        <div id="navArea" className={this.state.isToggleOn ? "open" : ""}>
          <nav>
            <div className="inner">
              <ul>
                <li><a href="/">ホーム</a></li>
                <li><a href="/about">自己紹介</a></li>
                <li><a href="/do">現状と目標</a></li>
                <li><a href="/hobby">趣味</a></li>
                <li><a href="/opus">作品</a></li>
              </ul>
            </div>
          </nav>

          <div className="toggle_btn" onClick={this.handleClick}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div id="mask" onClick={this.handleClick}></div>
        </div>
      </div>
    </div>
)
}
}

export default Header;