import { Outlet } from "react-router-dom";
import EducationNavigation from "@/components/education/EducationNavigation";
import Footer from "@/components/Footer";

const EducationLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <EducationNavigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default EducationLayout;