import React from 'react';

export default class Video extends React.Component {
  render() {
    let contentType = this.props.contentType;
    let video = this.props.video || '';
    var codecs = [
        'codecs="vp8"',                      // WebM, VP8, Vorbis
        'codecs="vorbis"',                   // WebM, VP8, Vorbis
        'codecs="vp8, vorbis"',              // WebM, VP8, Vorbis
        'codecs="vp9, vorbis"',              // WebM, VP9, Vorbis
        'codecs="vorbis"',                   // WebM,  - , Vorbis
        'codecs="avc1.66.13,  mp4a.40.2"',    // MPEG4, AVC(H.264) Baseline 1.3, AAC-LC, [MPEG-4 AVC/H.264]
        'codecs="avc1.42e01e, mp4a.40.2"',    // MPEG4, AVC(H.264) Baseline 1.3, AAC-LC, [MPEG-4 AVC/H.264]
        'codecs="avc1.66.30,  mp4a.40.5"',    // MPEG4, AVC(H.264) Baseline 3.0, AAC-HC, [MPEG-4 AVC/H.264]
        'codecs="avc1.42001e, mp4a.40.5"',    // MPEG4, AVC(H.264) Baseline 3.0, AAC-HC, [MPEG-4 AVC/H.264]
        'codecs="avc1.42001f, mp4a.40.5"',    // MPEG4, AVC(H.264) Baseline 3.1, AAC-HC, [MPEG-4 AVC/H.264]
        'codecs="avc1.77.30,  mp4a.40.5"',    // MPEG4, AVC(H.264) Main 3.0, AAC-HC,     [MPEG-4 AVC/H.264]
        'codecs="avc1.4d001e, mp4a.40.5"',    // MPEG4, AVC(H.264) Main 3.0, AAC-HC,     [MPEG-4 AVC/H.264]
        'codecs="avc1.4d001f, mp4a.40.5"',    // MPEG4, AVC(H.264) Main 3.1, AAC-HC,     [MPEG-4 AVC/H.264]
        'codecs="avc1.640029, mp4a.40.5"',    // MPEG4, AVC(H.264) High 4.1, AAC-HC,     [MPEG-4 AVC/H.264]                            // mov,
        'codecs="mp4v.20.8, mp4a.40.3"',      // mp4, mpeg4 visual, mp3
        'codecs="mp4v.20.8, samr"',           // mp4(3gp), mpeg4 visual, amr
    ];
    var valid = true;
    if ('MediaSource' in window) {
      codecs.map(item => {
        if (MediaSource.isTypeSupported(contentType + '; ' + item)) {
          valid = true;
        }
      })
      if (MediaSource.isTypeSupported(contentType)) {
        valid = true;
      }
    }
    return (
      <div>
        { video === '' ?
          <div className="ye-empty-video">Aún no completa su video</div>
        :
          <div className="yc-video-Container" >
            { !valid ?
              <div className="m-5 text-center">Tu navegador no es tan avanzado para poder visualizar el video de tu candidato. Descarga Chrome o Firefox para poder visualizarlo.</div>
            : (
                <div>
                  {/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream ?
                    <video className="w-100 h-100" id="yc-video-Player" src={video} controls></video>
                  :
                    <video className="w-100 h-100" id="yc-video-Player" controls src={video}>
                      <source src={video}/>
                        Para utilizar el video necesitas otro navegador
                    </video>
                  }
                </div>
              )
            }
          </div>
        }
      </div>
    );
  }
}
