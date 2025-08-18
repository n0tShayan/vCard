import { BusinessCard } from '@/components/BusinessCard';
import { Terminal } from '@/components/Terminal';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Split Screen Layout */}
      <div className="hidden lg:flex h-screen">
        {/* Left Section - Business Card */}
        <div className="w-1/2 flex items-center justify-center bg-background">
          <BusinessCard />
        </div>

        {/* Right Section - Terminal */}
        <div className="w-1/2 border-l border-border">
          <Terminal />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="block lg:hidden">
        <div className="min-h-screen">
          {/* Mobile Business Card */}
          <div className="h-screen flex items-center justify-center bg-background p-4">
            <BusinessCard />
          </div>

          {/* Mobile Terminal */}
          <div className="h-screen border-t border-border">
            <Terminal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;