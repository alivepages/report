import SparkPost from 'sparkpost';

export const SendingEmail = (apiKey) => {
    return {
        _apikey: apiKey,
        _emailAddresses: [],        
        sendEmail(subject, emailAddresses, html) {
            if (typeof emailAddresses == 'string') {
                this._emailAddresses.push({address: emailAddresses})
            }

             if (typeof emailAddresses == Array) {        
                emailAddresses.forEach(function(emailAddress){
                    this._emailAddresses.push({address: emailAddress})
                });
            }

            this.client = new SparkPost(this._apikey);
            console.log(this._emailAddresses);
            
            this.client.transmissions.send({
                content: {
                    from: 'contacto@yooin.me',
                    subject: 'Hello, World!',
                    html:'<html><body><p>Hola Papú, esta es otra prueba de correo</p></body></html>'
                },
                recipients: this._emailAddresses
            })
            .then(data => {
                console.log('Woohoo! You just sent your first mailing!');
                console.log(data);
            })
            .catch(err => {
                console.log('Whoops! Something went wrong');
                console.log(err);
            });      
        }
    }    
}