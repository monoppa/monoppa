import React from 'react'
import fs from 'fs'
import path from 'path'
import BlogBox, { PostMetadata } from '../../src/boxes/BlogBox/'

type BlogPage = {
  postMetadata: PostMetadata[]
}

const BlogPage = (props: BlogPage) => {
  return <BlogBox postMetadata={props.postMetadata} />
}

export default BlogPage

export const getStaticProps = async () => {
  const POSTS_PATH = path.join(process.cwd(), 'apps/landing/pages/blog')

  const _postFilePaths = fs.readdirSync(POSTS_PATH)
  //     // Only include md(x) files
  const postFilePaths = _postFilePaths.filter((path) => {
    return /\.mdx?$/.test(path)
  })

  const postModules = await Promise.all(
    postFilePaths.map(async (p: string) => import(`./${p}`))
  )

  const postMetadata = postModules
    .map((m) => (m.meta ? m.meta : null))
    .filter((x) => x != null)

  return {
    props: {
      postMetadata,
    },
  }
}
