import InfoPage from "@/components/InfoPage";
import { siteConfig } from "@/lib/config";

export const metadata = {
  title: `Contact | ${siteConfig.name}`,
  description: `Contact ${siteConfig.name}.`,
};

export default function ContactPage() {
  return (
    <InfoPage title="Contact us" eyebrow="We'd love to hear from you">
      <p>
        For questions, feedback, or support with CLYRO.IMAGES, email us at{" "}
        <a className="text-fg underline underline-offset-4" href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.
      </p>
    </InfoPage>
  );
}
