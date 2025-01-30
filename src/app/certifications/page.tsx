import { Certifications } from "@/components/certifications";
import { Layout } from "@/components/layout";

const certifications = [
    {
      title: "Desenvolvimento Web FullStack",
      institution: "DevQuest",
      status: "completed",
      certificateLink: "https://drive.google.com/drive/folders/1Wdk2GWwBYOIiXinrFBuB6-nk8WvIh32M?usp=drive_link",
      image: "/portal-devquest.png",
      badges: ["HTML", "CSS", "JavaScript", "React", "Nodejs", "APIs", "TypeScript", "Docker", "PostgreSQL", "Git", "GitHub", "express"],
    },
    {
      title: "Desenvolvimento web completo",
      institution: "Udemy",
      status: "inProgress",
      image: "/portal-dwc-udemy.png",
      badges: ["HTML", "CSS", "JavaScript", "JQuery", "PHP", "MySQL", "Bootstrap", "WordPress", "IONIC"],
    }
  ];

const CertificationsPage = () => {
    return (
        <Layout>
            <Certifications certifications={certifications} />
        </Layout>
    );
}
 

export default CertificationsPage;