import { Outlet } from "react-router-dom";
import TechNavigation from "@/components/tech/TechNavigation";
import Footer from "@/components/Footer";

const TechLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <TechNavigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default TechLayout;