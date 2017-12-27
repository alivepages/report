import React from 'react';
import { Player, BigPlayButton, ControlBar } from 'video-react';

export default class CandidatesReportPresentation extends React.Component {

  render() {
      return(
            <div className="row ml-2 mr-2">
              <div className="col-sm-3 mt-5">
                <div className="card boxshadow-xs playerBox">
                  <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                    <BigPlayButton position="center" />
                    <ControlBar autoHide={false} />
                  </Player>
                </div>
              </div>

              <div className="col-sm-9 mt-5">
                <div className="card boxshadow-xs playerBox">
                    <div className="row m-3">
                          <div className="col-sm-2 mt-3  ye-avatar-user-icon text-center">
                            <div className="float-right ye-afinity text-primary d-sm-none">
                              <span>98%</span>
                              <br/> <small>Afinidad</small>
                            </div>
                            <img src="/images/avatars/5.jpg" className="rounded-circle"/>
                          </div>

                          <div className="col-sm-10 pl-0 pl-3 text-center text-md-left">
                            <div className="float-right ye-afinity text-primary d-none d-sm-block">
                              <span>98%</span>
                              <br/> <small>Afinidad</small>
                            </div>
                            <p><b>Nombre Candidato</b> 23 años
                            <br/>Web designer</p>
                            <button type="button" className="btn btn-primary ye-btn-xs mr-2 pt-1 pb-1 pr-4 pl-4 mb">Becario</button>
                            <button type="button" className="btn btn-primary ye-btn-xs pt-1 pb-1 pr-4 pl-4 mb-1">Tiempo Completo</button>
                            <p>You probably havent heard of them man bun vinyl, vape single-origin coffee.</p>
                            <div className="ye-social">
                              <a className="fa fa-linkedin" title="" target="_blank" href="#"></a>
                              <a className="fa fa-facebook" title="" target="_blank" href="#"></a>
                              <a className="fa fa-twitter" title="" target="_blank" href="#"></a>
                            </div>
                          </div>
                    </div>
                    <div className="row m-3">
                        <div className="col-sm-3 text-center">
                          <i className="fa fa-briefcase d-block" />
                          <small>Experiencia <br/> 0 año 0 mes</small>
                        </div>
                        <div className="col-sm-3 text-center">
                          <i className="fa fa-cubes d-block" />
                          <small>Nivel <br/> Administrativo / Contribuidor individual / Ejecutivo</small>
                        </div>
                        <div className="col-sm-3 text-center">
                          <i className="fa fa-dollar d-block" />
                          <small>Salario deseado <br/> $74,000 - $89,000</small>
                        </div>
                        <div className="col-sm-3 text-center">
                          <i className="fa fa-map-marker d-block" />
                          <small>Ubicaciín <br/> Terraza lindavista. <br/> Eje Central. SCT Vallejo. <br/> Mexico City, Mexico</small>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        )
    }
}
