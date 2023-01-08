const css = `.a{fill:#efefef;font-size:39px;font-family:HelveticaNeue-CondensedBlack, Helvetica Neue;font-weight:800;}.b{fill:#fff;}`;
const Logo = ({width, height}: {width?: number | null, height?: number | null}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width || "160"} height={height || "52"} viewBox="0 0 160 52">
      <defs>
        <style>{css}</style>
      </defs>
      <g transform="translate(-202 -89)">
        <text className="a" transform="translate(263 130)">
          <tspan x="0" y="0">Fudge</tspan>
        </text>
        <path className="b"
              d="M26,52A26.007,26.007,0,0,1,15.88,2.043,26.007,26.007,0,0,1,36.121,49.957,25.837,25.837,0,0,1,26,52Zm.5-6A2.5,2.5,0,1,0,29,48.5,2.5,2.5,0,0,0,26.5,46Zm0-10A3.5,3.5,0,1,0,30,39.5,3.5,3.5,0,0,0,26.5,36ZM26,22a6,6,0,1,0,6,6A6.007,6.007,0,0,0,26,22ZM26,1a9,9,0,1,0,9,9A9.01,9.01,0,0,0,26,1Z"
              transform="translate(254 89) rotate(90)"/>
      </g>
    </svg>
  );
}

export default Logo;
