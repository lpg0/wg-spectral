import Typography from "typography"
import kirkhamTheme from "typography-theme-kirkham"

kirkhamTheme.headerFontFamily = ['Spectral', 'serif']

const typography = new Typography(kirkhamTheme)

export default typography
export const rhythm = typography.rhythm