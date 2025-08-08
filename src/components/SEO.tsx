import { Helmet } from "react-helmet-async";

export default function SEO() {
	return (
		<>
			<Helmet>
				<title>Shop - Monsters</title>
				<link rel='icon' type='image/svg+xml' href={`monster-graffio.svg`} />

				<meta
					name='description'
					content='Welcome to Monster shop, time to Unleash your beast.'
				/>
				<meta property='og:title' content='Monster Shop' />
				<meta
					property='og:description'
					content='Shop the latest Monster Energies.'
				/>
                <meta property="og:image" content={`${window.location.origin}/monster-graffio.svg`}/>
				<meta property='og:type' content='website' />
			</Helmet>
		</>
	);
}
