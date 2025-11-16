export const Footer = () => {
	return (
		<footer className="border-t border-gray-800  py-8 px-4">
			<div className="max-w-4xl mx-auto text-center">
				<div className="flex items-center justify-center gap-1 md:gap-2 mb-2">
					<span className="text-gray-400">✨</span>
					<p className="text-gray-400 font-semibold text-xs md:text-sm">
						Hecho con pasión, mate 🧉 y muchas líneas de código
					</p>
					<span className="text-gray-400">💻</span>
				</div>
				<p className="text-gray-500 text-xs">
					Francisco Paredes • {new Date().getFullYear()}
				</p>
			</div>
		</footer>
	);
};