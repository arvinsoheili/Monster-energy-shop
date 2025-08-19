interface Props {
	copywrite: string;
}

export default function Footer({ copywrite }: Props) {
	return (
		<>
			<div className='w-full bg-stone-900 border border-t-stone-700 text-center p-3 text-stone-500'>
				<p>© {copywrite}</p>
			</div>
		</>
	);
}
