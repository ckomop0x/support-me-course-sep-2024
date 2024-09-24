interface LoggedOutLayoutProps {
    children?: React.ReactNode
}

export default function LoggedOutLayout({ children }: LoggedOutLayoutProps) {
  return (
      <div>
          {children}
      </div>
  )
}
