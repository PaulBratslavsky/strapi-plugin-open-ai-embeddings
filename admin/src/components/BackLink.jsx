import React from 'react'
import { Link } from '@strapi/design-system'
import { ArrowLeft } from '@strapi/icons'

export default function BackLink({ to }) {
  return <Link to={to} startIcon={<ArrowLeft />}> Go back </Link>
}
