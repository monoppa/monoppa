import Link from 'next/link'
import React from 'react'
import { PostMetadata } from './BlogBox.types'

type BlogBoxProps = {
  postMetadata: PostMetadata[]
}

const BlogBox = (props: BlogBoxProps) => {
  const { postMetadata } = props

  return (
    <div className='max-w-4xl py-16 mx-auto'>
      <nav className='mb-10'>
        <Link href='/' className='font-semibold underline'>
          Home
        </Link>
      </nav>

      <ul className='flex flex-col gap-y-2'>
        {postMetadata
          .sort(
            (a, b) =>
              new Date(b.publishDate).getTime() -
              new Date(a.publishDate).getTime()
          )
          .map((post) => (
            <li key={post.title}>
              <Link href={`/blog/${post.slug}`}>
                <div className='px-8 py-6 rounded bg-neutral-100 hover:border hover:border-neutral-200'>
                  <h2 className='mb-3 text-2xl'>{post.title}</h2>
                  <p className='text-lg text-neutral-800'>{post.description}</p>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default BlogBox
