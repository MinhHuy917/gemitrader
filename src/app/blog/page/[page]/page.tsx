import { redirect } from 'next/navigation'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
  },
}

export default function BlogPage({
  params,
}: {
  params: { page: string }
}) {
  const page = Number(params.page)
  
  if (isNaN(page) || page < 1) {
    redirect('/blog')
  }
  
  if (page === 1) {
    redirect('/blog')
  }
  
  redirect(`/blog?page=${page}`)
}

