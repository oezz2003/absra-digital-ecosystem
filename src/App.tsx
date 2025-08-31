import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Tech Division Pages
import TechLayout from "./layouts/TechLayout";
import TechHome from "./pages/tech/TechHome";
import TechAbout from "./pages/tech/TechAbout";
import TechServices from "./pages/tech/TechServices";
import TechCustomSoftware from "./pages/tech/services/TechCustomSoftware";
import TechMobileApps from "./pages/tech/services/TechMobileApps";
import TechWebDevelopment from "./pages/tech/services/TechWebDevelopment";
import TechCloudSolutions from "./pages/tech/services/TechCloudSolutions";
import TechAutomationAI from "./pages/tech/services/TechAutomationAI";
import TechCybersecurity from "./pages/tech/services/TechCybersecurity";
import TechCaseStudies from "./pages/tech/TechCaseStudies";
import TechTechnologies from "./pages/tech/TechTechnologies";
import TechBlog from "./pages/tech/TechBlog";
import TechContact from "./pages/tech/TechContact";

// Business Division Pages
import BusinessLayout from "./layouts/BusinessLayout";
import BusinessHome from "./pages/business/BusinessHome";
import BusinessAbout from "./pages/business/BusinessAbout";
import BusinessServices from "./pages/business/BusinessServices";
import BusinessConsulting from "./pages/business/services/BusinessConsulting";
import BusinessDigitalTransformation from "./pages/business/services/BusinessDigitalTransformation";
import BusinessMarketing from "./pages/business/services/BusinessMarketing";
import BusinessFinancialAdvisory from "./pages/business/services/BusinessFinancialAdvisory";
import BusinessHRTalent from "./pages/business/services/BusinessHRTalent";
import BusinessCaseStudies from "./pages/business/BusinessCaseStudies";
import BusinessIndustries from "./pages/business/BusinessIndustries";
import BusinessContact from "./pages/business/BusinessContact";

// Education Division Pages
import EducationLayout from "./layouts/EducationLayout";
import EducationHome from "./pages/education/EducationHome";
import EducationAbout from "./pages/education/EducationAbout";
import EducationPrograms from "./pages/education/EducationPrograms";
import EducationPrimary from "./pages/education/programs/EducationPrimary";
import EducationSecondary from "./pages/education/programs/EducationSecondary";
import EducationWorkshops from "./pages/education/programs/EducationWorkshops";
import EducationAdmissions from "./pages/education/EducationAdmissions";
import EducationCampusLife from "./pages/education/EducationCampusLife";
import EducationEvents from "./pages/education/EducationEvents";
import EducationContact from "./pages/education/EducationContact";

// Global Pages
import GlobalLayout from "./layouts/GlobalLayout";
import Careers from "./pages/global/Careers";
import News from "./pages/global/News";
import GlobalContact from "./pages/global/GlobalContact";
import AboutAbsra from "./pages/global/AboutAbsra";
import Privacy from "./pages/global/Privacy";
import Terms from "./pages/global/Terms";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Main Landing Page */}
          <Route path="/" element={<Index />} />
          
          {/* Tech Division */}
          <Route path="/tech" element={<TechLayout />}>
            <Route index element={<TechHome />} />
            <Route path="about" element={<TechAbout />} />
            <Route path="services" element={<TechServices />} />
            <Route path="services/custom-software" element={<TechCustomSoftware />} />
            <Route path="services/mobile-apps" element={<TechMobileApps />} />
            <Route path="services/web-development" element={<TechWebDevelopment />} />
            <Route path="services/cloud-solutions" element={<TechCloudSolutions />} />
            <Route path="services/automation-ai" element={<TechAutomationAI />} />
            <Route path="services/cybersecurity" element={<TechCybersecurity />} />
            <Route path="case-studies" element={<TechCaseStudies />} />
            <Route path="technologies" element={<TechTechnologies />} />
            <Route path="blog" element={<TechBlog />} />
            <Route path="contact" element={<TechContact />} />
          </Route>

          {/* Business Division */}
          <Route path="/business" element={<BusinessLayout />}>
            <Route index element={<BusinessHome />} />
            <Route path="about" element={<BusinessAbout />} />
            <Route path="services" element={<BusinessServices />} />
            <Route path="services/consulting" element={<BusinessConsulting />} />
            <Route path="services/digital-transformation" element={<BusinessDigitalTransformation />} />
            <Route path="services/marketing" element={<BusinessMarketing />} />
            <Route path="services/financial-advisory" element={<BusinessFinancialAdvisory />} />
            <Route path="services/hr-talent" element={<BusinessHRTalent />} />
            <Route path="case-studies" element={<BusinessCaseStudies />} />
            <Route path="industries" element={<BusinessIndustries />} />
            <Route path="contact" element={<BusinessContact />} />
          </Route>

          {/* Education Division */}
          <Route path="/education" element={<EducationLayout />}>
            <Route index element={<EducationHome />} />
            <Route path="about" element={<EducationAbout />} />
            <Route path="programs" element={<EducationPrograms />} />
            <Route path="programs/primary" element={<EducationPrimary />} />
            <Route path="programs/secondary" element={<EducationSecondary />} />
            <Route path="programs/workshops" element={<EducationWorkshops />} />
            <Route path="admissions" element={<EducationAdmissions />} />
            <Route path="campus-life" element={<EducationCampusLife />} />
            <Route path="events" element={<EducationEvents />} />
            <Route path="contact" element={<EducationContact />} />
          </Route>

          {/* Global Pages */}
          <Route path="/" element={<GlobalLayout />}>
            <Route path="careers" element={<Careers />} />
            <Route path="news" element={<News />} />
            <Route path="contact" element={<GlobalContact />} />
            <Route path="about-absra" element={<AboutAbsra />} />
            <Route path="legal/privacy" element={<Privacy />} />
            <Route path="legal/terms" element={<Terms />} />
          </Route>

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;