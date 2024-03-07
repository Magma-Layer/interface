import styled from 'styled-components'

import HolidayUniIcon from './HolidayUniIcon'

// ESLint reports `fill` is missing, whereas it exists on an SVGProps type
export type SVGProps = React.SVGProps<SVGSVGElement> & {
  fill?: string
  height?: string | number
  width?: string | number
  gradientId?: string
  clickable?: boolean
}

export const UniIcon = ({ clickable, ...props }: SVGProps) => (
  <Container clickable={clickable}>
    {HolidayUniIcon(props) !== null ? (
      <HolidayUniIcon {...props} />
    ) : (
      <svg {...props} viewBox="0 0 340 241" fill="none" xmlns="http://www.w3.org/2000/svg" height="34" width="48">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M339.356 159.325C336.097 76.691 264.709 6.121 182.715.526 97.61-6.433 16.335 56.35 2.502 140.79 2.04 146.053.439 150.877.6 156.183c-.664 9.999-1.754 20.72 2.993 30.008 19.88 36.056 73.074 45.337 110.516 51.159 26.935 3.914 42.428 4.268 81.299 2.982 45.983-1.522 153.815-16.439 143.96-81.027l-.011.02zm-37.276 6.917c-21.394 34.472-90.6 35.405-126.703 32.031-31.228-2.919-63.267-7.488-77.605-32.301-2.312-4.956-2.362-11.162-1.72-16.498.904-23.38 10.923-46.152 26.635-63.409 18.394-20.824 45.79-32.944 73.401-34.191 45.923-2.07 90.762 29.095 103.549 73.509 3.332 10.863 7.289 30.42 2.443 40.857z" fill="#EA462B"/>
    </svg>
    )}
  </Container>
)

const Container = styled.div<{ clickable?: boolean }>`
  position: relative;
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'auto')};
`
