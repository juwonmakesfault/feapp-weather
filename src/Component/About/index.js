import React from 'react';

class About extends React.Component{

  async componentDidMount() {
  }

  render() {

    return (
      <div>
        <h1>우리의 팀원을 소개합니다</h1>
        <h3>1조 : 주원이가잘못했네</h3>
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
