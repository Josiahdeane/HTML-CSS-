function convertToCelsius(temp(InF) { 
  tempInC = ( tempInF - 32 ) * 5/9; 
  return tempInC
}

console.log( convertToCelsius (212) );
