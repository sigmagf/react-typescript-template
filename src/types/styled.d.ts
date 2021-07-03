/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components'

declare module 'styled-components' {
  type ThemeType = typeof import('~/styles/theme').theme

  export interface DefaultTheme extends ThemeType {}
}
