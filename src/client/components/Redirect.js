import React from 'react';

class Redirect extends React.Component {
    constructor() {
        super();

        this.handleLoad = this.handleLoad.bind(this);
    }

    componentDidMount() {
        window.addEventListener('load', this.handleLoad);
    }

    handleLoad() {

        var data = {
            "Email": this.props.wemail,
            "Password": this.props.t
        };

        return fetch('/signin',{
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            credentials: 'same-origin'
        })
        .then((res) => {
            if(res.status === 200) {
                window.location.href = '/verificador';
            }
        })
        .catch((error) => {
            return Promise.reject(error);
        });
    }


   render() {
       return(
           <h3 className="m-4 ml-1">Redirigiendo...</h3>
       )
   }
}

export default Redirect;