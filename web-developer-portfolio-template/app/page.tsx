import { HeroSection } from './components/HeroSection';
import { ExperiencieSection } from './components/ExperiencieSection';
import { ProjectsSection } from './components/ProjectsSection';
import { WebCapabilitiesSection } from './components/WebCapabilitiesSection';
import { ContactSection } from './components/ContactSection';

export default function WebDeveloperPortfolio() {
	return (
		<main className="min-h-screen bg-[#0D1117] text-white">
			<HeroSection />
			<ExperiencieSection />
			<ProjectsSection />
			<WebCapabilitiesSection />
			<ContactSection />
		</main>
	);
}
