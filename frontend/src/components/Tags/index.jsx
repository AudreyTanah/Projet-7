export default function Tags({tags}) {
	return (
		<div className="containerTag">
			{tags.map((tag) => {
				return <span className="buttonTag">{tag}</span>
			})}
		</div>
	);
}