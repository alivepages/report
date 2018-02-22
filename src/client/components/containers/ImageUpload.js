import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import classnames from 'classnames';
import request from 'superagent';

import { getUserAvatar } from '../../redux/actions/ImageUpload';

class ImageUpload extends React.Component {

    constructor() {
        super();

        this.state = {
            accept: '',
            files: [],
            error: '',
            dropzoneActive: false,
            uploading: false,
            loaded: false
        }

        this.onDragEnter = this.onDragEnter.bind(this);
        this.onDragLeave = this.onDragLeave.bind(this);
        this.onDrop = this.onDrop.bind(this);
    }

    componentWillMount() {

        if(this.props.avatarUser && this.props.avatarUserUrl) {

            this.setState({
                loaded: true
            });
        }
    }

    onDragEnter() {
        
        this.setState({
            dropzoneActive: true
        });
    }

    onDragLeave() {
        
        this.setState({
            dropzoneActive: false
        });
    }

    onDrop(files) {

        this.setState({
            uploading: true,
            files: [],
            error: ''
        });


        if(!this.props.full) {

            var u = URL.createObjectURL(files[0]);
            var img = new Image();
            
            img.addEventListener('load', () => {
                
                request
                    .post('/image_user_upload')
                    .attach(
                        'avatar', 
                        files[0]
                    )
                    .end((err, res) => {


                        if(err) {
                            this.setState({
                                loaded:false,
                                uploading: false,
                                files: [],
                                error: 'error al subir la imagen, vuelve a intentarlo.'
                            });

                            return;
                        }
                        var obj = JSON.parse(res.text);

                        this.props.changeAvatar(obj);

                        this.setState({
                            loaded: false,
                            uploading: false,
                            files,
                            dropzoneActive: true
                        });
                    });
            });

            img.src = u;

        } else {
            this.setState({
                loaded: false,
                files,
                dropzoneActive: true,
                uploading: false
            });
        }

    }

    applyMimeTypes(event) {
        this.setState({
            accept: event.target.value
        });
    }

    render() {

        const { files, dropzoneActive, error, loaded, uploading } = this.state;
        const { full } = this.props;

        return(
            <div>
                <Dropzone
                    style={{}}
                    onDrop={this.onDrop}
                    onDragEnter={this.onDragEnter}
                    onDragLeave={this.onDragLeave}
                    className={`${classnames({"yc-add-avatar__content": !full, "yc-add-avatar__content--loading": uploading })}`}
                    multiple={false}
                    name="image_upload"
                >
            
                    { uploading ?

                        <div className="image-spin"></div>

                        : null
                    }
                    

                    <div className={`${classnames({"yc-add-avatar__control": !full, "ye-image-full": full })}`}>
                        

                        { full && !dropzoneActive ? 
                            <div className="pr-auto pl-auto pt-5 pb-5">
                                <i className="fa fa-file-image-o d-inline-block"></i>
                            </div>

                        : null }

                        { (dropzoneActive && !loaded) &&
                            <div>
                                {
                                    files.map(
                                        f => 
                                            <img key={f.lastModified} src={f.preview} className={classnames({"img-fluid": full})} />                                   
                                    )
                                }
                            </div> 
                        }

                        { (!dropzoneActive && loaded) &&
                        
                            <div>
                                <img src={this.props.avatarUserUrl} className={classnames({"img-fluid": full})} />
                            </div> 
                        }

                    </div>
        
                </Dropzone>

                { error ?
                    <small className="text-danger">{error}</small>
                : null }
                

            </div>
        )
    }
}


const mapDispatchToProps = (dispatch, ownProps) =>  {
    return {
        changeAvatar: (obj) => {
            dispatch(getUserAvatar(obj));
        }
    }
}

ImageUpload.proptypes = {
    full: PropTypes.bool,
    files: PropTypes.array,
    token: PropTypes.array,
    changeAvatar: PropTypes.func
}


export default connect(null, mapDispatchToProps)(ImageUpload);
