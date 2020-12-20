module.exports = {
	siteMetadata: {
		title: `HThacker.dev`,
		description: `Hunter Thacker - Portfolio`,
		author: `Hunter Thacker`,
		url: `https://HThacker.dev`,
	},
	plugins: [
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-root-import`,
		`gatsby-plugin-react-helmet`,
		`gatsby-remark-reading-time`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/posts`,
			},
		},
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							backgroundColor: 'transparent',
							maxWidth: 900,
							linkImagesToOriginal: false,
						},
					},
					`gatsby-remark-smartypants`,
				],
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							backgroundColor: 'transparent',
							maxWidth: 900,
							linkImagesToOriginal: false,
						},
					},
				],
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Hunter Thacker`,
				short_name: `HTWebDev`,
				start_url: `/`,
				background_color: `#9278A1`,
				theme_color: `#9278A1`,
				display: `minimal-ui`,
				icon: `src/images/icon1.png`,
			},
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				anonymize: true,
				trackingId: 'UA-185645032-1',
			},
		},
		`gatsby-theme-waves`,
	],
}
