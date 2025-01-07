
function NoTrailler() {
  return (
    <>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
        <circle cx="100" cy="100" r="90" fill="#fff" stroke="red" stroke-width="10" />
        <line x1="30" y1="30" x2="170" y2="170" stroke="red" stroke-width="15" />
        <rect x="50" y="100" width="80" height="40" fill="black" />
        <rect x="130" y="100" width="20" height="20" fill="black" />
        <circle cx="70" cy="145" r="10" fill="black" />
        <circle cx="130" cy="145" r="10" fill="black" />
        <line x1="130" y1="120" x2="150" y2="120" stroke="black" stroke-width="4" />
    </svg>
    <h2>No Trailler Found</h2>
    </>
   
  )
}

export default NoTrailler