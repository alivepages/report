import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'rc-slider';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;
import Tooltip from 'rc-tooltip';



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

  const marks = {
    0: <strong>0</strong>,
    25: <strong>1 No demostrado</strong>,
    50: <strong>2 En desarrollo</strong>,
    75: <strong>3 Competente</strong>,
    100: <strong>4 Experto</strong>
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
        <div className="pt-3">
          <Slider.Range min={0} marks={marks} step={5} defaultValue={dataPercent}
          trackStyle={[{},{},{ backgroundColor: '#30C102' }]}
          handleStyle={[ { backgroundColor: '#9355EF', height: 22, width: 22, marginTop: -9 }, { backgroundColor: '#0C7BEB', height: 22, width: 22, marginTop: -9 }, {backgroundColor: '#30C102' }, { backgroundColor: '#30C102' }]}
          handle={handle}
          disabled={true}
          />
        </div>
    );
  }
}
