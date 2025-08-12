import LaptopPortfolio from './components/LaptopPortfolio';

export default function LaptopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen bg-black text-slate-200">
      <LaptopPortfolio />
    </div>
  );
} 