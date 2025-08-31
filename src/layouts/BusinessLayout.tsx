import { Outlet } from "react-router-dom";
import BusinessNavigation from "@/components/business/BusinessNavigation";
import Footer from "@/components/Footer";

const BusinessLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <BusinessNavigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default BusinessLayout;