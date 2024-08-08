<script lang="ts">
import GdprBanner from "@beyonk/gdpr-cookie-consent-banner";

const initAnalytics = () => {
  window.gtag("consent", "update", { analytics_storage: "granted" });
};
</script>

<GdprBanner
  choices={{
    analytics: {
      description:
        "Used to control Google Analytics, a 3rd party tool offered by Google to track user behavior.",
      label: "Analytics cookies",
      value: true,
    },
    marketing: false,
    necessary: {
      description: "Used for cookie control. Can't be turned off.",
      label: "Necessary cookies",
      value: true,
    },
    tracking: false,
  }}
  cookieName="frank-gairal-cookie-consent"
  description="Cookies are used for anonymous statistical purposes"
  on:analytics={initAnalytics}
  showEditIcon={false}
/>
