import { Props } from '@/utils/global-interface'
import { forwardRef } from 'react'
import { Link } from 'react-router-dom'

interface RouterLinkProps extends Props {
  href: string
}

// ----------------------------------------------------------------------

const RouterLink = forwardRef<HTMLAnchorElement, RouterLinkProps>(
  ({ href, ...other }, ref) => <Link ref={ref} to={href} {...other} />,
)

export default RouterLink
