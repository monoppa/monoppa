import React, { ReactNode } from 'react'
import { MDXProvider } from '@mdx-js/react'
import Image, { ImageProps } from 'next/image'
import Link from 'next/link'

type Tags = 'startup' | 'life'

type Meta = {
  slug: string
  title: string
  coverImage: string
  publishDate: string
  description: string
  views: number
  tags: Tags[]
}

type BlogLayoutProps = {
  meta: Meta
  children: ReactNode
}

const ResponsiveImage = (_props: unknown) => {
  const props = _props as ImageProps
  return (
    <Image
      {...props}
      alt={props.alt}
      className='bg-center bg-cover rounded'
      width={768}
      height={400}
    />
  )
}

const BlogLayout = ({ meta, children }: BlogLayoutProps) => {
  const displayDate = new Date(meta.publishDate).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  })

  return (
    <MDXProvider
      components={{
        img: ResponsiveImage,
      }}
    >
      <div className='relative px-0 py-16 bg-neutral-50'>
        <div className='pl-4 lg:pl-10'>
          <nav>
            <Link href='/blog' className='font-semibold underline'>
              Go back
            </Link>
          </nav>
        </div>

        <article className='max-w-3xl px-4 mx-auto prose lg:px-0 lg:prose-xl'>
          <h1
            className='font-semibold leading-tight tracking-tight'
            style={{ marginBottom: 0 }}
          >
            {meta.title}
          </h1>

          <div className='flex items-center gap-x-4'>
            <p className='px-3 py-[2px] text-base bg-neutral-200 rounded-sm text-neutral-700 shrink-0'>
              {displayDate}
            </p>

            <div className='h-[1px] w-full bg-neutral-400 rounded-3xl'></div>

            <p className='text-base text-neutral-600 shrink-0'>
              {meta.views} views
            </p>
          </div>

          <div>{children}</div>
        </article>
      </div>
    </MDXProvider>
  )
}

export default BlogLayout
