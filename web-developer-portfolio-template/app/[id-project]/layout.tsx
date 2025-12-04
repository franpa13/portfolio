import { BackgroundCanvas } from "../components/Canvas";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
		<main className="min-h-screen bg-[#0D1117] text-white">
            <BackgroundCanvas />
            {children}
        </main>
    );
}
