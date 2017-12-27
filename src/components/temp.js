import React from 'react';

import { Radar, RadarChart, PolarGrid, Legend,
         PolarAngleAxis, PolarRadiusAxis } from 'recharts';



export default class CandidatesChart extends React.Component{
	render () {

    const data = [
        { subject: 'Competencia', A: 120, B: 110, fullMark: 150 },
        { subject: 'Competencia', A: 98, B: 130, fullMark: 150 },
        { subject: 'Competencia', A: 86, B: 130, fullMark: 150 },
        { subject: 'Competencia', A: 99, B: 100, fullMark: 150 },
        { subject: 'Competencia', A: 85, B: 90, fullMark: 150 },
        { subject: 'Competencia', A: 65, B: 85, fullMark: 150 },
        { subject: 'Competencia', A: 65, B: 85, fullMark: 150 },
        { subject: 'Competencia', A: 65, B: 85, fullMark: 150 },
    ];

  	return (
      <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
          <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6}/>
          <PolarGrid />
          <Legend />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]}/>
      </RadarChart>
    );
  }
}
