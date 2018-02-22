import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm , isSubmitting} from 'redux-form';
import { isLoading } from '../../redux/actions/Globals';

// Forms components
import DinamicForm from '../forms/DinamicForm';
import ChangePasswordForm from '../forms/ChangePasswordForm';


class ChangePasswordContainer extends React.Component {

    constructor() {
        super();

        this.state = {
            passChanged: false,
            seconds: 3
        }


        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(values) {
        this.props.loading(true);

        var dataBody = {
            NewPassword: values.NewPassword,
            token: this.props.t,
            email: this.props.email
        }
        
        fetch('/changepassword/NewPassword',{
            method: 'POST',
            body: JSON.stringify(dataBody),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        .then((res)=>{
            if(res.status === 200) {                
                
                this.props.loading(false);
                setInterval(() => {
                    
                    this.setState({
                        passChanged: true,
                        seconds: this.state.seconds - 1
                    })

                    if(this.state.seconds === 0) {
                        window.location.href = '/dashboard_vacantes';
                    }

                }, 1000);
            }
        })
        .catch((error) => {
            this.props.loading(false);
            console.log(error);
        });
    }

    render() {

        return(
            <DinamicForm {...this.props} onSubmit={this.onSubmit}>
            {
                this.state.passChanged ?
                    <div className='text-center'>
                        <i className="fa fa-check-circle text-success mb-3 display-3"></i> 
                        <p className="pb-3">Tu contraseña ha sido cambiada.</p>
                    </div> 
                    : 
                <div>    
                    <ChangePasswordForm />
                    <div className="form-group">
                            <button 
                                type="submit" 
                                disabled={this.props.submitting}
                                className="btn btn-primary btn-block"
                            >
                                Confirmar
                                { this.props.submitting ? <i className="fa fa-spinner fa-pulse fa-lg fa-fw float-right"></i> : null }
                            </button>
                        </div>
                </div>
            }
            </DinamicForm>
        )
        
    }
}

ChangePasswordContainer.proptypes = {
    formId: PropTypes.string.isRequired
}

const mapStateToProps = (state, ownProps) => {
    return {
        form: ownProps.formId,
        submitting: state.globals.loading
    }
}


const mapDispatchToProps = (dispatch) =>  {
    return {
        loading: (loading) => {
            dispatch(isLoading(loading));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangePasswordContainer);


