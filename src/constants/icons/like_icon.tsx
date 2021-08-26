import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

interface likeIcon{
    size?: number| any ,
    colorFill?: String| any,

}

function Like_icon(props: likeIcon) {
  return (
    <Svg viewBox="0 0 512 512" width={props.size}  height={props.size}>
      <Path fill={props.colorFill} d="M376 30c-27.783 0-53.255 8.804-75.707 26.168-21.525 16.647-35.856 37.85-44.293 53.268-8.437-15.419-22.768-36.621-44.293-53.268C189.255 38.804 163.783 30 136 30 58.468 30 0 93.417 0 177.514c0 90.854 72.943 153.015 183.369 247.118 18.752 15.981 40.007 34.095 62.099 53.414C248.38 480.596 252.12 482 256 482s7.62-1.404 10.532-3.953c22.094-19.322 43.348-37.435 62.111-53.425C439.057 330.529 512 268.368 512 177.514 512 93.417 453.532 30 376 30z" />
    </Svg>
  )
}

export default Like_icon