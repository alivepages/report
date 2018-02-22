import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field } from 'redux-form';
import {
    TabContent, TabPane, Nav, NavItem,
    NavLink, Button
} from 'reactstrap';
import classnames from 'classnames';
import { setVisibilityTab } from '../redux/actions/Tabs';
import { RenderField } from './forms/Fields/RenderField';

let TabsNetwork = ( props ) => {

    return(
        <div>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={`btn btn-link icon ye-btn-tab mr-2 ${classnames({ active: props.activeTab === '1' })}`}
                        onClick={() => { props.toggle('1'); }}
                    >
                        link
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={`btn btn-linkedin icon ye-btn-tab mr-2 ${classnames({ active: props.activeTab === '2' })}`}
                        onClick={() => { props.toggle('2'); }}
                    >
                        Linkedin
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={`btn btn-facebook icon ye-btn-tab mr-2 ${classnames({ active: props.activeTab === '3' })}`}
                        onClick={() => { props.toggle('3'); }}
                    >
                        Facebook
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={`btn btn-twitter icon ye-btn-tab mr-2 ${classnames({ active: props.activeTab === '4' })}`}
                        onClick={() => { props.toggle('4'); }}
                    >
                        Twitter
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={`btn btn-instagram icon ye-btn-tab mr-2 ${classnames({ active: props.activeTab === '5' })}`}
                        onClick={() => { props.toggle('5'); }}
                    >
                        Instagram
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={`btn btn-youtube icon ye-btn-tab ${classnames({ active: props.activeTab === '6' })}`}
                        onClick={() => { props.toggle('6'); }}
                    >
                        Youtube
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent className="p-0" activeTab={props.activeTab}>
                <TabPane tabId="1">
                    <div className="row">
                        <div className="col-sm-6">
                            <Field
                                name="NetworkLink"
                                component={RenderField}
                                type="text"
                                label="Sitio web URL"
                                className="form-control"
                            />
                        </div>
                    </div>
                </TabPane>
                <TabPane tabId="2">
                    <div className="row">
                        <div className="col-sm-6">
                            <Field
                                name="NetworkLinkedin"
                                component={RenderField}
                                type="text"
                                label="Linkedin URL"
                                className="form-control"
                            />
                        </div>
                    </div>
                </TabPane>
                <TabPane tabId="3">
                    <div className="row">
                        <div className="col-sm-6">
                            <Field
                                name="NetworkFacebook"
                                component={RenderField}
                                type="text"
                                label="Facebook URL"
                                className="form-control"
                            />
                        </div>
                    </div>
                </TabPane>
                <TabPane tabId="4">
                    <div className="row">
                        <div className="col-sm-6">
                            <Field
                                name="NetworkTwitter"
                                component={RenderField}
                                type="text"
                                label="Twitter URL"
                                className="form-control"
                            />
                        </div>
                    </div>
                </TabPane>
                <TabPane tabId="5">
                    <div className="row">
                        <div className="col-sm-6">
                            <Field
                                name="NetworkInstagram"
                                component={RenderField}
                                type="text"
                                label="Instagram URL"
                                className="form-control"
                            />
                        </div>
                    </div>
                </TabPane>
                <TabPane tabId="6">
                    <div className="row">
                        <div className="col-sm-6">
                            <Field
                                name="NetworkYoutube"
                                component={RenderField}
                                type="text"
                                label="Youtube URL"
                                className="form-control"
                            />
                        </div>
                    </div>
                </TabPane>
            </TabContent>
        </div>
    )
}

TabsNetwork.proptypes = {
    activeTab: PropTypes.string,
    toggle: PropTypes.func
}

const mapStateToProps = (state, ownProps) => {
    return {
        activeTab: state.tabs
    }
}


const mapDispatchToProps = (dispatch) =>  {
    return {
        toggle: (value) => {
            dispatch(setVisibilityTab(value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabsNetwork);
