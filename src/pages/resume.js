import React from 'react'

import { Icon, Layout, Link, Resume, SEO, WaveSection } from 'src/components'
import { github } from 'src/links'

const ResumePage = () => (
	<Layout activePage="resume">
		<SEO title="Hunter Thacker's Resume" />
		<Resume>
			<WaveSection disableTopMargin>
				<p>
					Here is an overview of some of my experience working within the field of Technology as well as some customer service experience. Check out my GitHub page or the "Projects" page to see my latest work.
				</p>
				<p>
					{/* <Link to="/joe-mcgrath-resume.pdf" external button>
						Download Resume
					</Link> */}
					&nbsp;
					<Link to={github} secondary button>
						<Icon name="GitHub" /> Visit GitHub
					</Link>
				</p>
			</WaveSection>
			<Resume.Position
				name="Freelance"
				start="October 2020"
				end="Present"
			>
				<Resume.Role name="Front-End Web Developer" />
				<Resume.Description>
					<p>
						Since finishing the Web Development boot-camp I've been working to realize my career as a web developer.
					</p>
				</Resume.Description>
			</Resume.Position>
			<WaveSection>
			<Resume.Position
				name="Colt Steele's Full Stack Web Developer Bootcamp"
				link="https://www.udemy.com/course/the-web-developer-bootcamp/"
				start="June 2020"
				end="October 2020"
			>
				<Resume.Description>
					<p>
						63+ hour web development Bootcamp that teaches you basic and intermediate web development skills. HTML, CSS, BootStrap, JavaScript, JQuery, NodeJS, Express, MongoDB, authentication and more. You finish the class off with a project: "YelpCamp" a dynamic campsite review app with a user login and registry system as well as comments and other common social media app features. 
					</p>
				</Resume.Description>
			</Resume.Position>
			</WaveSection>
			<Resume.Position
				name="Deliverer Inc."
				link="https://www.facebook.com/delivererinc/"
				start="April 2020"
				end="September 2020"
			>
				<Resume.Role name="I.T. Tech Intern" />
				<Resume.Description>
					<p>
						Spent the summer of 2020 working as an I.T. Tech. Prepared and maintained desktop PCs for remote work and managed various software for professional businesses such as Country Animal Hospital, Kentuckiana Title Agency, and other clients from within their own homes.
					</p>
				</Resume.Description>
			</Resume.Position>
			<WaveSection>
			<Resume.Position
				name="Doc. Crows Steak House"
				link="https://www.doccrows.com/"
				start="November 2019"
				end="March 2020"
			>
				<Resume.Role name="Waiter" />
				<Resume.Role name="Food Runner" />
				<Resume.Description>
						<p>
							Worked as a waiter in a high volume location in the heart of Louisville KY. In this fast-paced work environment, I picked up a variety of work ethic skills as well as customer service skills.
					</p>
				</Resume.Description>
			</Resume.Position>
			</WaveSection>
			<Resume.Position
				name="Captain's Quarters"
				link="https://www.cqriverside.com/"
				start="June 2016"
				end="November 2019"
			>
				<Resume.Role name="Waiter" />
				<Resume.Role name="Lead Food Runner/Expo" />
				<Resume.Role name="BarBack" />
				<Resume.Role name="Dish Washer" />
				<Resume.Description>
						<p>
							Worked my way up in this high-volume land-mark restaurant. Started as a dishwasher out of highschool. Through loyalty and hard work I moved into the kitchen and eventually out onto the customer floor.
					</p>
				</Resume.Description>
			</Resume.Position>
			<WaveSection>
			<Resume.Position
				name="Skills"
			>
				<Resume.Role name="HTML/CSS/Javascript" />
				<Resume.Role name="BootStrap/TailwindCSS/JQuery" />
				<Resume.Role name="ReactJS" />
				<Resume.Role name="GatsbyJS" />
				<Resume.Role name="NodeJS" />
				<Resume.Role name="Photoshop 2021" />
			</Resume.Position>
			</WaveSection>
			<Resume.Position
				name="Interests"
			>
				<Resume.Role name="Coding" />
				<Resume.Role name="Camping/Hiking" />
				<Resume.Role name="Traveling" />
				<Resume.Role name="Cooking" />
				<Resume.Role name="Decorating" />
				<Resume.Role name="Listening to Music" />
			</Resume.Position>
		</Resume>
	</Layout>
)

export default ResumePage
