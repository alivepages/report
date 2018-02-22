import React from 'react';
import {Radar, RadarChart, PolarGrid, Legend, ResponsiveContainer,
         PolarAngleAxis, PolarRadiusAxis, Tooltip} from 'recharts';

class SimpleRadialBarChart extends React.Component{
	render () {
    var data = this.props.data.CompetencesAnalyzed.map((item, index) => {
      return {
        subject: item.CompetenceName,
        A: item.VacantScoreRequired,
        B: item.CandidateScore,
        fullMark: 4
      }
    })

    var itemStyle = {
      padding: 0
    };
    var wrapperStyle = {
      backgroundColor: 'black',
      color: 'white'
    }

  	return (
      <div className="yc-report-graph">
        <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={450} data={data}>
          <Radar name="Perfil deseado" dataKey="A" stroke="#0C7BEB" fill="#0C7BEB" fillOpacity={0.8}/>
          <Radar name={this.props.candidateName} dataKey="B" stroke="#9355EF" fill="#9355EF" fillOpacity={0.8}/>
          <PolarGrid gridType="circle"/>
          <Legend verticalAlign="top" />
          <Tooltip wrapperStyle={wrapperStyle} itemStyle={itemStyle}/>
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 4]}/>
        </RadarChart>
      </div>
    );
  }
}

export default SimpleRadialBarChart;
