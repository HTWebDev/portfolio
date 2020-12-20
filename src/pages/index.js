import React from 'react'

import {
	Layout,
	Link,
	PostGrid,
	PostLink,
	SEO,
	WaveSection,
} from 'src/components'
import { useWindowWidth } from 'src/hooks'
import { get } from 'src/utils'

const IndexPage = ({ data }) => {
	const width = useWindowWidth()
	const isDesktop = width > 1200
	const postCount = isDesktop ? 5 : 3
	const edges = get(data, 'allMdx', 'edges').slice(0, postCount) || []

	return (
		<Layout>
			<SEO title="Home" />
			<WaveSection>
				<h1 className="intro-title">Hunter Thacker<br></br>Web Developer</h1>
				<p>
					Hello! My name is Hunter Thacker.<br></br>I am a Front-End Web Developer from Louisville KY.
				</p>
				<br />
				<p>
					{/* <Link to="/blog" button>
						All Posts
					</Link> */}
					{/* &nbsp; */}
					{/* <Link to="/projects" secondary button>
						Projects
					</Link>
					&nbsp;
					<Link to="/resume" secondary button>
						Resume
					</Link>
					&nbsp; */}
					<Link to="mailto:hunter@hthacker.dev" secondary button>
						Contact Me
					</Link>
				</p>
			</WaveSection>
			{edges.length ? (
				<>
					<h3>Featured Posts</h3>
					<PostGrid wide>
						{edges.map((edge, i) => (
							<PostLink
								key={edge.node.id}
								featured={
									isDesktop
										? edge.node.frontmatter.tags.includes(
												'home-featured'
										  )
										: i === 0
								}
								post={edge.node}
							/>
						))}
					</PostGrid>
				</>
			) : null}
		</Layout>
	)
}

export default IndexPage

export const pageQuery = graphql`
	query {
		allMdx(
			sort: { order: DESC, fields: [frontmatter___date] }
			limit: 5
			filter: { frontmatter: { tags: { in: ["home"] } } }
		) {
			edges {
				node {
					id
					excerpt(pruneLength: 250)
					frontmatter {
						featuredImage {
							childImageSharp {
								fluid {
									src
								}
							}
						}
						path
						title
						subtitle
						tags
					}
					fields {
						readingTime {
							text
						}
					}
				}
			}
		}
	}
`
