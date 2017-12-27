import React from 'react';
import {Radar, RadarChart, PolarGrid, Legend, ResponsiveContainer,
         PolarAngleAxis, PolarRadiusAxis, Tooltip} from 'recharts';



const data = [
    { subject: 'Competencia1', A: 120, B: 110, fullMark: 150 },
    { subject: 'Competencia2', A: 98, B: 130, fullMark: 150 },
    { subject: 'Competencia3', A: 86, B: 130, fullMark: 150 },
    { subject: 'Competencia4', A: 99, B: 100, fullMark: 150 },
    { subject: 'Competencia5', A: 85, B: 90, fullMark: 150 },
    { subject: 'Competencia6', A: 65, B: 85, fullMark: 150 },
    { subject: 'Competencia7', A: 85, B: 90, fullMark: 150 },
    { subject: 'Competencia8', A: 65, B: 85, fullMark: 150 },
];



class SimpleRadialBarChart extends React.Component{
	render () {

    var itemStyle = {
      padding: 0
    };
    var wrapperStyle = {
      backgroundColor: 'black',
      color: 'white'
    }

  	return (
      <div className="yc-report-graph">
      <ResponsiveContainer>
      <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={450} data={data}>
        <Radar name="Perfil deseado" dataKey="B" stroke="#82ca9d" fill="#65A9EE" fillOpacity={0.8}/>
        <Radar name="Nombre candidato" dataKey="A" stroke="#8884d8" fill="#8B61EF" fillOpacity={0.8}/>
        <PolarGrid gridType="circle"/>
        <Legend verticalAlign="top" />
        <Tooltip wrapperStyle={wrapperStyle} itemStyle={itemStyle}/>
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 150]}/>
      </RadarChart>
      </ResponsiveContainer>
      </div>
    );
  }
}

export default SimpleRadialBarChart;
