import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityModal } from '../../redux/actions/Modal';

class EvaluationInfo extends React.Component {

    render() {
        return (
                <div>
                    <div>
                        <div className="row mb-3">
                            <div className="col-sm-12 small">

                                <p className="text-primary mb-0"><b>Nivel 0: Carece de la competencia 0.00 - 0.49</b></p>
                                <p>En el momento de la evaluación, la persona no demostró la posesión de esta habilidad. Si es necesaria para la obtención de los resultados esperados, se recomienda analizar la factibilidad de que la Organización invierta en ayudar al candidato a desarrollarla. </p>

                                <p className="text-primary mb-0"><b>Nivel 1: No demostrada 0.50 - 1.69</b></p>
                                <p>- Posee mínimas habilidades en esta competencia 0.50 - 0.89
                                <br/>- Está adquiriendo las habilidades que requiere la competencia 0.90 - 1.29
                                <br/>- Posee algunas habilidades, pero generalmente no las emplea 1.30 - 1.69</p>

                                <p className="text-primary mb-0"><b>Nivel 2: En desarrollo 1.70 - 2.59</b></p>
                                <p>- Empezando a aplicar las habilidades en la competencia 1.70 - 1.99
                                <br/>- Inconsistente al presentar la competencia 2.00 - 2.29
                                <br/>- Está fortaleciendo su empleo de las habilidades 2.30 - 2.59</p>

                                <p className="text-primary mb-0"><b>Nivel 3: Competente 2.60 - 3.49</b></p>
                                <p>- Demuestra las habilidades cuando el entorno es favorable 2.60 - 2.89
                                <br/>- Aplica la competencia en su trabajo cotidiano 2.90 - 3.19
                                <br/>- Está perfeccionando su aplicación de la competencia 3.20 - 3.49</p>

                                <p className="text-primary mb-0"><b>Nivel 4: Experto 3.50 - 4.00</b></p>
                                <p>- Especialista en la aplicación de la competencia 3.50 - 3.69
                                <br/>- Aplica la competencia en escenarios diferentes y novedosos 3.70 - 3.84
                                <br/>- Transmite sus habilidades a otras personas 3.85 -4.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="button" className="btn btn-primary"
                            onClick={
                                () => this.props.onOpenModal({
                                    data: {}, show: false
                                })
                            }
                        >
                            Entendido
                        </button>
                    </div>
                </div>
        )

    }
}


const mapDispatchToProps = (dispatch) =>  {
    return {
        onOpenModal: (show) => {
            dispatch(setVisibilityModal(show))
        }
    }
}

export default connect(null, mapDispatchToProps)(EvaluationInfo);
