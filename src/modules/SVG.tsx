import { typeSVG } from './types';

const SVG = (props: typeSVG): JSX.Element => {
  switch (props.type) {
    case 'category':
      return (
        <svg
          fill={props.fill ? props.fill : '#000'}
          width={props.width ? props.width : '35px'}
          height={props.height ? props.height : '35px'}
          viewBox="0 0 64 64"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlSpace="preserve"
          fillRule="evenodd"
          clipRule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit="2"
        >
          <rect
            id="Icons"
            x="-384"
            y="-320"
            width="1280"
            height="800"
            fill="none"
          />
          <g id="Icons1">
            <g id="Strike"></g>
            <g id="H1"></g>
            <g id="H2"></g>
            <g id="H3"></g>
            <g id="list-ul"></g>
            <g id="hamburger-1"></g>
            <g id="hamburger-2"></g>
            <g id="list-ol"></g>
            <g id="list-task"></g>
            <g id="trash"></g>
            <g id="vertical-menu"></g>
            <g id="horizontal-menu"></g>
            <g id="sidebar-2"></g>
            <g id="Pen"></g>
            <g id="Pen1"></g>
            <g id="clock"></g>
            <g id="external-link"></g>
            <g id="hr"></g>
            <g id="info"></g>
            <g id="warning"></g>
            <g id="plus-circle"></g>
            <g id="minus-circle"></g>
            <g id="vue"></g>
            <g id="cog"></g>
            <g id="logo"></g>
            <g id="radio-check"></g>
            <g id="eye-slash"></g>
            <g id="eye"></g>
            <g id="toggle-off"></g>
            <g id="shredder"></g>
            <g>
              <path d="M9.89,30.496c-1.14,1.122 -1.784,2.653 -1.791,4.252c-0.006,1.599 0.627,3.135 1.758,4.266c3.028,3.028 7.071,7.071 10.081,10.082c2.327,2.326 6.093,2.349 8.448,0.051c5.91,-5.768 16.235,-15.846 19.334,-18.871c0.578,-0.564 0.905,-1.338 0.905,-2.146c0,-4.228 0,-17.607 0,-17.607l-17.22,0c-0.788,0 -1.544,0.309 -2.105,0.862c-3.065,3.018 -13.447,13.239 -19.41,19.111Zm34.735,-15.973l0,11.945c0,0.811 -0.329,1.587 -0.91,2.152c-3.069,2.981 -13.093,12.718 -17.485,16.984c-1.161,1.127 -3.012,1.114 -4.157,-0.031c-2.387,-2.386 -6.296,-6.296 -8.709,-8.709c-0.562,-0.562 -0.876,-1.325 -0.872,-2.12c0.003,-0.795 0.324,-1.555 0.892,-2.112c4.455,-4.373 14.545,-14.278 17.573,-17.25c0.561,-0.551 1.316,-0.859 2.102,-0.859c3.202,0 11.566,0 11.566,0Zm-7.907,2.462c-1.751,0.015 -3.45,1.017 -4.266,2.553c-0.708,1.331 -0.75,2.987 -0.118,4.356c0.836,1.812 2.851,3.021 4.882,2.809c2.042,-0.212 3.899,-1.835 4.304,-3.896c0.296,-1.503 -0.162,-3.136 -1.213,-4.251c-0.899,-0.953 -2.18,-1.548 -3.495,-1.57c-0.031,-0.001 -0.062,-0.001 -0.094,-0.001Zm0.008,2.519c1.105,0.007 2.142,0.849 2.343,1.961c0.069,0.384 0.043,0.786 -0.09,1.154c-0.393,1.079 -1.62,1.811 -2.764,1.536c-1.139,-0.274 -1.997,-1.489 -1.802,-2.67c0.177,-1.069 1.146,-1.963 2.27,-1.981c0.014,0 0.029,0 0.043,0Z" />
              <path d="M48.625,13.137l0,4.001l3.362,0l0,11.945c0,0.811 -0.328,1.587 -0.909,2.152c-3.069,2.981 -13.093,12.717 -17.485,16.983c-1.161,1.128 -3.013,1.114 -4.157,-0.03l-0.034,-0.034l-1.016,0.993c-0.663,0.646 -1.437,1.109 -2.259,1.389l1.174,1.174c2.327,2.327 6.093,2.35 8.447,0.051c5.91,-5.768 16.235,-15.845 19.335,-18.87c0.578,-0.565 0.904,-1.339 0.904,-2.147c0,-4.227 0,-17.607 0,-17.607l-7.362,0Z" />{' '}
            </g>
            <g id="spinner--loading--dots-"></g>
            <g id="react"></g>
            <g id="check-selected"></g>
            <g id="turn-off"></g>
            <g id="code-block"></g>
            <g id="user"></g>
            <g id="coffee-bean"></g>
            <g id="coffee-beans">
              <g id="coffee-bean1"></g>
            </g>
            <g id="coffee-bean-filled"></g>
            <g id="coffee-beans-filled">
              <g id="coffee-bean2"></g>
            </g>
            <g id="clipboard"></g>
            <g id="clipboard-paste"></g>
            <g id="clipboard-copy"></g>
            <g id="Layer1"></g>
          </g>
        </svg>
      );
      return (
        <svg
          width={props.width ? props.width : '35px'}
          height={props.height ? props.height : '35px'}
          fill={props.fill ? props.fill : '#fff'}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 8h12v1H6zm0 4h9v-1H6zm16-6.25v8.5A2.753 2.753 0 0 1 19.25 17h-7.087L6 21.481V17H4.75A2.753 2.753 0 0 1 2 14.25v-8.5A2.753 2.753 0 0 1 4.75 3h14.5A2.753 2.753 0 0 1 22 5.75zm-1 0A1.752 1.752 0 0 0 19.25 4H4.75A1.752 1.752 0 0 0 3 5.75v8.5A1.752 1.752 0 0 0 4.75 16H7v3.519L11.837 16h7.413A1.752 1.752 0 0 0 21 14.25z" />
          <path fill="none" d="M0 0h24v24H0z" />
        </svg>
      );
    case 'search':
      return (
        <svg
          fill="none"
          width={props.width ? props.width : '25px'}
          height={props.height ? props.height : '25px'}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11ZM11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.125 20 15.078 19.2635 16.6177 18.0319L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L18.0319 16.6177C19.2635 15.078 20 13.125 20 11C20 6.02944 15.9706 2 11 2Z"
            fill={props.fill ? props.fill : '#000'}
          />
        </svg>
      );

      return (
        <svg
          width={props.width ? props.width : '30px'}
          height={props.height ? props.height : '30px'}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill={props.fill ? props.fill : '#000'}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.351 1.091a4.528 4.528 0 0 1 3.44 3.16c.215.724.247 1.49.093 2.23a4.583 4.583 0 0 1-4.437 3.6c-.438 0-.874-.063-1.293-.19l-.8.938-.379.175H7v1.5l-.5.5H5v1.5l-.5.5h-3l-.5-.5v-2.307l.146-.353L6.12 6.87a4.464 4.464 0 0 1-.2-1.405 4.528 4.528 0 0 1 5.431-4.375zm1.318 7.2a3.568 3.568 0 0 0 1.239-2.005l.004.005A3.543 3.543 0 0 0 9.72 2.08a3.576 3.576 0 0 0-2.8 3.4c-.01.456.07.908.239 1.33l-.11.543L2 12.404v1.6h2v-1.5l.5-.5H6v-1.5l.5-.5h1.245l.876-1.016.561-.14a3.47 3.47 0 0 0 1.269.238 3.568 3.568 0 0 0 2.218-.795zm-.838-2.732a1 1 0 1 0-1.662-1.11 1 1 0 0 0 1.662 1.11z"
          />
        </svg>
      );
    case 'trash':
      return (
        <svg
          width={props.width ? props.width : '30px'}
          height={props.height ? props.height : '30px'}
          viewBox="0 0 1024 1024"
          className="icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M692.2 182.2V72.9H327.8v109.3H145.6v72.9h728.8v-72.9H692.2z m-291.5 0v-36.4h218.6v36.4H400.7zM730.8 874.5H289.2l-34.3-548.8-72.8 4.5 38.6 617.2h578.6l38.6-617.2-72.8-4.5z"
            fill={props.fill ? props.fill : '#000'}
          />
          <path
            d="M400.7 400.8h72.9v437.3h-72.9zM546.4 400.8h72.9v437.3h-72.9z"
            fill={props.fill ? props.fill : '#000'}
          />
        </svg>
      );
    case 'close':
      return (
        <svg
          width={props.width ? props.width : '30px'}
          height={props.height ? props.height : '30px'}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Menu / Close_MD">
            <path
              id="Vector"
              d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
              stroke={props.fill ? props.fill : '#000'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      );
    case 'dnd':
      return (
        <svg
          width={props.width ? props.width : '35px'}
          height={props.height ? props.height : '35px'}
          viewBox="0 0 24 24"
          fill={props.fill ? props.fill : '#000'}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Interface / Drag_Horizontal">
            <g id="Vector">
              <path
                d="M18 14C17.4477 14 17 14.4477 17 15C17 15.5523 17.4477 16 18 16C18.5523 16 19 15.5523 19 15C19 14.4477 18.5523 14 18 14Z"
                stroke={props.fill ? props.fill : '#000'}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 14C11.4477 14 11 14.4477 11 15C11 15.5523 11.4477 16 12 16C12.5523 16 13 15.5523 13 15C13 14.4477 12.5523 14 12 14Z"
                stroke={props.fill ? props.fill : '#000'}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 14C5.44772 14 5 14.4477 5 15C5 15.5523 5.44772 16 6 16C6.55228 16 7 15.5523 7 15C7 14.4477 6.55228 14 6 14Z"
                stroke={props.fill ? props.fill : '#000'}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 8C17.4477 8 17 8.44772 17 9C17 9.55228 17.4477 10 18 10C18.5523 10 19 9.55228 19 9C19 8.44772 18.5523 8 18 8Z"
                stroke={props.fill ? props.fill : '#000'}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 8C11.4477 8 11 8.44772 11 9C11 9.55228 11.4477 10 12 10C12.5523 10 13 9.55228 13 9C13 8.44772 12.5523 8 12 8Z"
                stroke={props.fill ? props.fill : '#000'}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 8C5.44772 8 5 8.44772 5 9C5 9.55228 5.44772 10 6 10C6.55228 10 7 9.55228 7 9C7 8.44772 6.55228 8 6 8Z"
                stroke={props.fill ? props.fill : '#000'}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </svg>
      );
    case 'add':
      return (
        <svg
          width={props.width ? props.width : '35px'}
          height={props.height ? props.height : '35px'}
          fill={props.fill ? props.fill : '#000'}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12,1A11,11,0,1,0,23,12,11.013,11.013,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9.01,9.01,0,0,1,12,21Zm5-9a1,1,0,0,1-1,1H13v3a1,1,0,0,1-2,0V13H8a1,1,0,0,1,0-2h3V8a1,1,0,0,1,2,0v3h3A1,1,0,0,1,17,12Z" />
        </svg>
      );
    case 'modify':
      return (
        <svg
          width={props.width ? props.width : '30px'}
          height={props.height ? props.height : '30px'}
          viewBox="0 -1 119 119"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g
            fill={props.fill ? props.fill : '#000'}
            fillRule="evenodd"
            id="Page-1"
            stroke="none"
            strokeWidth="1"
          >
            <g fillRule="nonzero" id="edit">
              <path
                d="M114.2,108.3 L4.8,108.3 C2.5,108.3 0.7,110.2 0.7,112.4 C0.7,114.6 2.6,116.5 4.8,116.5 L114.3,116.5 C116.6,116.5 118.4,114.6 118.4,112.4 C118.4,110.2 116.5,108.3 114.2,108.3 Z"
                fill={props.fill ? props.fill : '#000'}
                id="Shape"
              />
              <path
                d="M0.7,72 L0.6,91.5 C0.6,92.6 1,93.7 1.8,94.5 C2.6,95.3 3.6,95.7 4.7,95.7 L24.1,95.6 C25.2,95.6 26.2,95.2 27,94.4 L94,27.4 C95.6,25.8 95.6,23.2 94,21.5 L74.8,2.1 C73.2,0.5 70.6,0.5 68.9,2.1 L55.5,15.6 L1.9,69.1 C1.2,69.9 0.7,70.9 0.7,72 Z M71.9,10.9 L85.4,24.4 L77.8,32 L64.3,18.5 L71.9,10.9 Z M9,73.8 L58.4,24.4 L71.9,37.9 L22.5,87.2 L8.9,87.3 L9,73.8 Z"
                fill={props.fill ? props.fill : '#000'}
                id="Shape"
              />
            </g>
          </g>
        </svg>
      );
    default:
      return (
        <svg
          fill={props.fill ? props.fill : '#000'}
          width={props.width ? props.width : '25px'}
          height={props.height ? props.height : '25px'}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path d="M7.35,9.8H8.63V8.56H7.35ZM9.6,3.49h0A2.9,2.9,0,0,0,7.88,3a2.38,2.38,0,0,0-1.32.35,2.13,2.13,0,0,0-.91,1.84H7a1.36,1.36,0,0,1,.22-.73.83.83,0,0,1,.75-.35.85.85,0,0,1,.74.28,1.06,1.06,0,0,1,.2.64.91.91,0,0,1-.18.55,1.33,1.33,0,0,1-.26.27l-.34.26a1.91,1.91,0,0,0-.61.68,3.43,3.43,0,0,0-.14,1.06H8.59a1.66,1.66,0,0,1,.06-.54A.93.93,0,0,1,9,6.83l.32-.25A3.29,3.29,0,0,0,10,6a1.62,1.62,0,0,0,.3-1A1.67,1.67,0,0,0,9.6,3.49ZM15,12V1H1V12H7.3v1.1H4v1.8h8V13.1H8.7V12ZM2.4,10.6V2.4H13.6v8.2Z" />
          </g>
        </svg>
      );
  }
};

export default SVG;
