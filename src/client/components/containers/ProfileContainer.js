import React from 'react';
import { connect } from 'react-redux';
import { arrayPush } from 'redux-form';
import { Field, reduxForm } from 'redux-form';

// Forms components
import DinamicForm from '../forms/DinamicForm';
import ProfileForm from '../forms/ProfileForm';


class ProfileContainer extends React.Component {

    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        this.props.AddName('Profile', 'Name', this.props.name);
    }

    onSubmit(values) {

        fetch('/profile',{
            method: 'POST',
            body: values,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        .then((res) => {
            if(res.status === 200) {
                window.location.href = '/admin';
            }

        })
        .catch((error) => {
            console.log(error);
        });
        
    }

    render() {

        return(
            <DinamicForm {...this.props} onSubmit={this.onSubmit}>
                <ProfileForm {...this.props}/>
            </DinamicForm>
        )
        
    }
}

const mapStateToProps = (state, ownProps) => { 
    return {
        form: ownProps.formId
    }
}


const mapDispatchToProps = (dispatch) =>  {
    return {
        AddName: (form, field, value) => {
            dispatch(arrayPush(form, field, value));
        }
    }
}

export default connect(mapStateToProps,  mapDispatchToProps)(ProfileContainer);


