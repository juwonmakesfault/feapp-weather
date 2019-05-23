import React from 'react';
import './About.css';

class About extends React.Component{

  async componentDidMount() {
  }

  render() {

    return (
      <div>
        <h1>우리의 팀원을 소개합니다</h1>
        <h3>1조 : <u>주원</u>이가잘못했네</h3>
        <ul>
            <li>강재민</li>
            <li>권재승</li>
            <li>신준호</li>
            <li>유주원</li>
        </ul>
      </div>
    );
  }
}

export default About;
