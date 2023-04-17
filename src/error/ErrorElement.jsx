import React from 'react'
import { Link } from 'next/link'

export default function ErrorElement() {
  return (
<div className="d-flex align-items-center justify-content-center vh-100">
<div className="text-center">
    <h1 className="display-1 fw-bold">404</h1>
    <p className="fs-3"> <span className="text-danger">Oops!</span> Page non trouvée.</p>
    <p className="lead">
    la page que vous recherchez actuellement n'existe pas ou est temporairement indisponible.
      </p>
    <Link href="/storyscope" className="btn btn-primary">Revenir à StoryScope</Link>
</div>
</div>
  )
}
