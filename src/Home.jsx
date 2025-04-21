import myImage from './assets/img/download.jpeg'; // adjust path as needed

const Home = () => {
  return (
    <div className="home">
      
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="spark" fill="currentColor" >
      <path fill-rule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clip-rule="evenodd" />
      </svg>
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg" className="graph"
      width="226.000000pt" height="223.000000pt" viewBox="0 0 226.000000 223.000000"
      preserveAspectRatio="xMidYMid meet">
     <g transform="translate(0.000000,223.000000) scale(0.100000,-0.100000)"
     fill="#fff" stroke="none">
     <path d="M1892 1715 c-40 -33 -49 -76 -28 -124 l17 -36 -103 -190 c-56 -105
     -107 -193 -112 -197 -27 -19 -62 -5 -125 49 -80 70 -81 71 -81 106 0 18 -11
     39 -29 58 -42 41 -106 41 -150 0 -29 -27 -32 -35 -30 -79 2 -46 -5 -65 -91
     -223 -117 -218 -111 -209 -133 -209 -9 0 -26 -5 -36 -12 -17 -10 -28 -4 -83
     43 -34 30 -69 59 -75 66 -7 6 -13 28 -13 48 0 29 -8 45 -34 71 -52 52 -128 44
     -166 -18 -24 -39 -25 -63 -6 -100 14 -27 11 -35 -73 -205 -117 -238 -108 -223
     -139 -223 -48 -1 -92 -51 -92 -105 0 -60 45 -104 107 -105 77 0 130 73 104
     143 -9 24 0 48 87 227 123 252 117 249 252 130 38 -33 70 -71 81 -97 50 -116
     209 -87 209 38 0 17 -5 39 -10 49 -8 16 8 52 87 199 l97 179 50 6 c49 5 49 5
     117 -55 41 -36 69 -69 69 -80 0 -39 29 -88 61 -104 91 -48 186 42 150 142 -14
     37 -24 13 165 360 27 48 40 63 64 68 56 12 88 92 59 148 -31 61 -114 77 -167
     32z"/>
    </g>
    </svg>
    <h1 className="ana1">Analytics</h1>
    <img src={myImage} alt="" className='img1'/>
    <h1 className="line2">that <span className="sp">helps</span> you </h1>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pause" fill="currentColor"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017Z"></path></svg>
      
      <h1 className="line3">shape <span className="anal"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="analy" fill="currentColor"><path d="M3 12H7V21H3V12ZM17 8H21V21H17V8ZM10 2H14V21H10V2Z"></path></svg></span> the Future</h1>
    </div>
  )
}

export default Home
