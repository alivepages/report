import Tooltip from 'rc-tooltip';
import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;


export default class Sliderc extends React.Component {

  render() {

  var item = this.props.item;

  const data = [
    item.CandidateScore,
    item.VacantScoreRequired,
    item.CandidatesAverageScoreMinimum || 0,
    item.CandidatesAverageScoreMaximum || 0
  ];

  const dataPercent = [
    item.CandidateScore * 25,
    item.VacantScoreRequired * 25,
    (item.CandidatesAverageScoreMinimum || 0) * 25,
    (item.CandidatesAverageScoreMaximum || 0) * 25
  ];

  const dataPercentEd = [
    item.CandidateScore * 25
  ];

  const marks = {
    0: <strong>0</strong>,
    25: <strong>1 No demostrado</strong>,
    50: <strong>2 En desarrollo</strong>,
    75: <strong>3 Competente</strong>,
    96: <strong>4 Experto</strong>
  };


  const handle = (props) => {
    const { value, index, ...restProps } = props;
    const tit = ['Persona', 'Puesto', 'Rango mínimo', 'Rango máximo'];
    return (
      <Tooltip
        prefixCls="rc-slider-tooltip"
        overlay={tit[index] + ' ' + data[index]}
        placement="top"
        key={index}
      >
        <Handle value={value} {...restProps} />
      </Tooltip>
    );
  };

    return (
      <div className="ye-perfiling">


<div className="alert alert-warning ye-alert-perfiling" role="alert">
  <i className="fa fa-exclamation-triangle fa-4x mb-2 pull-left"></i> Es posible que el Nivel de Dominio que solicitas de esta competencia está fuera
  del rango de los evaluados en el Mercado Laboral y sea más difícil de encontrar.
</div>


        <div className="pt-3">
          <Slider.Range min={0} marks={marks} step={5} defaultValue={dataPercentEd}
          handleStyle={[ { backgroundColor: '#0c7bea', height: 30, width: 30, marginTop: -8 }, { display:'none' }, {display:'none' }, {display:'none' }]}
          handle={handle}
          />
        </div>

      </div>
    );
  }
}
