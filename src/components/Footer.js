import React, { Component } from "react";

class Footer extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var networks = this.props.sharedBasicInfo.social.map(function (network) {
        return (
          <span key={network.name} className="m-4">
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              <i className={network.class}></i>
            </a>
          </span>
        );
      });
    }

    return (
      <footer>
        <nav className="footer">
          <div className="github">
            <a
              href="https://github.com/EmilyJarecki"
              target="_blank"
              className="github"
            >
              <svg viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/emilyjarecki22/"
              target="_blank"
              className="linkedin"
            >
              <svg viewBox="0 0 244.65 226.28">
                <path
                  d="M35.73,81.63a24.22,24.22,0,0,1-8-18.5,24.59,24.59,0,0,1,8-18.79q8.06-7.47,20.76-7.48,12.43,0,20.48,7.48a24.59,24.59,0,0,1,8,18.79,24.22,24.22,0,0,1-8,18.5q-8,7.5-20.48,7.49Q43.79,89.12,35.73,81.63ZM80.5,105.51V263.14H32.2V105.51Z"
                  transform="translate(-27.68 -36.86)"
                />
                <path
                  d="M255.8,121.75q16.51,17.94,16.52,49.3v92.09h-48v-85.6q0-15.81-8.19-24.57t-22-8.76q-13.84,0-22,8.76t-8.2,24.57v85.6H115.53V105.51h48.31v20.9a51.15,51.15,0,0,1,19.78-16.53,63,63,0,0,1,28-6.07Q239.27,103.81,255.8,121.75Z"
                  transform="translate(-27.68 -36.86)"
                />
              </svg>
            </a>
          </div>
          <div>
            <a href="mailto:jareckiemily@yahoo.com" className="email">
              <svg viewBox="0 0 16 16">
                <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
              </svg>
            </a>
          </div>
        </nav>
        <div className="col-md-12">
          <div className="download">
            <a
              className="download-button"
              target="_blank"
              href="https://drive.google.com/file/d/1JV72C7-xymfvNzC1fo1sxDJN_VJ-rPnF/view?usp=sharing"
            >
              Download CV
            </a>
          </div>
          <div>
            <a className="static-email" href="mailto:jareckiemily@yahoo.com">
              jareckiemily@yahoo.com
            </a>
          </div>
          <div className="copyright py-4 text-center">
            <div className="container">
              <small>
                Copyright &copy;{" "}
                {this.props.sharedBasicInfo
                  ? this.props.sharedBasicInfo.name
                  : "???"}
              </small>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
