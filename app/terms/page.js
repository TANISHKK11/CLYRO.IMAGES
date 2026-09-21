import InfoPage from "@/components/InfoPage";
import { siteConfig } from "@/lib/config";

export const metadata = {
  title: `Terms of Use | ${siteConfig.name}`,
  description: `Terms for using ${siteConfig.name}.`,
};

export default function TermsPage() {
  return (
    <InfoPage title="Terms of Use" eyebrow="Last updated: September 21, 2026">
      <div className="space-y-8">
        <p>By using CLYRO.IMAGES, you agree to these Terms of Use.</p>
        <section>
          <h2 className="font-display text-xl font-semibold text-fg">Using the service</h2>
          <p className="mt-3">
            CLYRO.IMAGES provides browser-based image editing tools, including background removal. You may use the service for personal or commercial projects, provided you have all rights, permissions, and consents required for the images and content you use.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-fg">Your responsibility</h2>
          <p className="mt-3">
            Do not use the service for unlawful, harmful, deceptive, or rights-infringing activity. You are responsible for verifying that your use of an image, including any edited result, complies with applicable laws and third-party rights.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-fg">Service availability</h2>
          <p className="mt-3">
            We provide the service as available and may change, pause, or discontinue features at any time. We aim for a useful, reliable experience, but do not guarantee uninterrupted access or that every result will meet a particular purpose.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-fg">Disclaimer and liability</h2>
          <p className="mt-3">
            To the extent permitted by law, CLYRO.IMAGES is provided without warranties of any kind. We are not liable for indirect, incidental, special, consequential, or punitive damages arising from your use of the service.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-fg">Changes and contact</h2>
          <p className="mt-3">
            We may update these terms from time to time. Continuing to use the service after an update means you accept the revised terms. Questions can be sent to{" "}
            <a className="text-fg underline underline-offset-4" href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.
          </p>
        </section>
      </div>
    </InfoPage>
  );
}
