import React, { ReactNode } from 'react'
import { MDXProvider } from '@mdx-js/react'
import Image, { ImageProps } from 'next/image'
import Heading1 from './elements/Heading1'
import Paragraph from './elements/Paragraph'
import Link from 'next/link'

type Tags = 'startup' | 'life'

type Meta = {
  slug: string
  title: string
  coverImage: string
  publishDate: string
  description: string
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
      width={736}
      height={400}
      style={{
        objectFit: 'cover',
        objectPosition: 'center',
        borderRadius: '4px',
      }}
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
        <div className='pl-10'>
          <nav>
            <Link href='/blog' className='font-semibold underline'>
              Go back
            </Link>
          </nav>
        </div>

        <article className='mx-auto prose lg:prose-xl'>
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

            <p className='text-base text-neutral-600 shrink-0'>-- views</p>
          </div>

          <div>{children}</div>
        </article>
      </div>
    </MDXProvider>
  )
}

export default BlogLayout
