import * as React from "react"
import Svg, { Path } from "react-native-svg"

interface search_icon{
    size?: number| any,
    colorFill?: String | any 
    
}


function Search_icon(props: search_icon) {
  return (
    <Svg
     
      width={props.size}
      height={props.size}
      viewBox="0 0 30.239 30.239"
    >
      <Path fill={props.colorFill} d="M20.194 3.46c-4.613-4.613-12.121-4.613-16.734 0-4.612 4.614-4.612 12.121 0 16.735 4.108 4.107 10.506 4.547 15.116 1.34.097.459.319.897.676 1.254l6.718 6.718a2.498 2.498 0 003.535 0 2.496 2.496 0 000-3.535l-6.718-6.72a2.5 2.5 0 00-1.253-.674c3.209-4.611 2.769-11.008-1.34-15.118zm-2.121 14.614c-3.444 3.444-9.049 3.444-12.492 0-3.442-3.444-3.442-9.048 0-12.492 3.443-3.443 9.048-3.443 12.492 0 3.444 3.444 3.444 9.048 0 12.492z" />
    </Svg>
  )
}

export default Search_icon
