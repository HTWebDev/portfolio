import React from 'react'
import styled from 'styled-components'

import {
	Icon,
	Layout,
	Link,
	QueryImage,
	SEO,
	Small,
	WaveSection,
} from 'src/components'

const Projects = styled.div`
	section {
		padding: calc(2rem + 1vw) 0;

		> :first-child {
			margin-top: 0;
		}
	}
`

const ProjectsPage = () => (
	<Layout activePage="projects">
		<SEO title="Projects" />
		{/* <WaveSection>
			<p>
			Here's some of the work that I have worked on in the past or current projects that I am working on. As well as projects that I've contributed to. This list will naturally continue to grow with time.
			</p>
		</WaveSection> */}

		{/* <Projects>
			<section>
				<h3>
					<QueryImage name="refract" width={300} />
				</h3>
				<p>
				Covid Tracker use covid api
				</p>
				<Small>
					<Link
						to="/blog/how-we-harnessed-the-power-of-reactive-programming-with-refract"
						button
					>
						Find Out More
					</Link>
					&nbsp;
					<Link to="#" secondary button>
						Documentation
					</Link>
					&nbsp;
					<Link
						to="#"
						secondary
						button
					>
						<Icon name="GitHub" /> Code
					</Link>
				</Small>
			</section>

			<WaveSection as="section">
				<h3>
					<QueryImage
						name="harmony"
						style={{
							display: 'inline-block',
							marginRight: '10px',
							verticalAlign: 'middle',
							width: 64,
						}}
					/>{' '}
					Null/
				</h3>
				<Small>
					<Link
						to="#"
						secondary
						button
					>
						Web Store
					</Link>
					&nbsp;
					<Link
						to="#"
						secondary
						button
					>
						<Icon name="GitHub" /> Code
					</Link>
				</Small>
			</WaveSection>

			<section>
				<h3>Null/</h3>
				<Small>
					<Link to="#" secondary button>
						Website
					</Link>
					&nbsp;
					<Link
						to="#"
						secondary
						button
					>
						<Icon name="GitHub" /> Code
					</Link>
				</Small>
			</section>

			<WaveSection as="section">
				<h3>Null/</h3>
			</WaveSection>

			<section>
				<h3>Null/</h3>
				<Small>
					<Link
						to="https://github.com/thisRaptori/wpc-extended"
						secondary
						button
					>
						<Icon name="GitHub" /> Code
					</Link>
				</Small>
			</section>
		</Projects> */}
	</Layout>
)

export default ProjectsPage
