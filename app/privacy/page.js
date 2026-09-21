import InfoPage from "@/components/InfoPage";
import { siteConfig } from "@/lib/config";

export const metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description: `How ${siteConfig.name} handles information and images.`,
};

export default function PrivacyPage() {
  return (
    <InfoPage title="Privacy Policy" eyebrow="Last updated: September 21, 2026">
      <div className="space-y-8">
        <p>
          CLYRO.IMAGES is designed to make background removal simple while keeping your images in your control.
          This policy explains what information the site handles when you use it.
        </p>
        <section>
          <h2 className="font-display text-xl font-semibold text-fg">Images you choose</h2>
          <p className="mt-3">
            Images selected in the editor are processed in your browser. The current version of CLYRO.IMAGES does not upload your image files to our server or retain them after you leave the page. Your browser may download processing resources needed to run the editor.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-fg">Information we receive</h2>
          <p className="mt-3">
            We do not require an account or ask for personal details to use the editor. Like most websites, our hosting providers may process basic technical information such as IP address, browser type, device information, and request logs to deliver and secure the site.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-fg">Advertising and third parties</h2>
          <p className="mt-3">
            CLYRO.IMAGES may display advertising from third-party providers such as Google AdSense. When advertising is enabled, those providers may use cookies or similar technologies to serve, measure, and personalize ads in accordance with their own policies and applicable law. Third-party advertising providers may process information such as browser, device, and approximate location signals associated with an ad request.
          </p>
          <p className="mt-3">
            If advertising or another third-party service requires additional consent or choices in a particular region, we will provide the applicable notice or controls.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-fg">Your choices</h2>
          <p className="mt-3">
            You can stop using the editor at any time. Because we do not store uploaded images on our servers, there is no image account or gallery for us to retrieve or delete. For privacy questions, email{" "}
            <a className="text-fg underline underline-offset-4" href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-fg">Updates</h2>
          <p className="mt-3">We may revise this policy as the service changes. The date at the top shows when it was last updated.</p>
        </section>
      </div>
    </InfoPage>
  );
}
