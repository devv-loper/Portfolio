import MobileHeader from './components/MobileHeader';

export default function MobileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background text-text min-h-screen overflow-y-auto">
      {/* Fixed top header */}
      <MobileHeader />
      
      {/* Main scrollable content */}
      <div className="max-w-md mx-auto min-h-screen pt-16">
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
} 