<script lang="ts">
  import GdprBanner from "@beyonk/gdpr-cookie-consent-banner";
  // import "@beyonk/gdpr-cookie-consent-banner/dist/style.css";

  const initAnalytics = () => {
    console.log("INIT");
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

<style global lang="postcss">
  .cookieConsentWrapper {
    @apply fixed inset-x-0 bottom-0 bg-purple-800 p-4 text-pink-200;
  }

  .cookieConsent {
    @apply flex justify-between;
  }

  .cookieConsent__Title {
    @apply font-bold;
  }

  .cookieConsent__Button {
    @apply p-3 rounded-xl bg-indigo-900 ml-2 font-cursive text-white;

    box-shadow: 5px 5px 10px #5d217b, -5px -5px 10px #7d2da7;
  }

  .cookieConsent__Button:hover {
    background: linear-gradient(145deg, #622383, #752a9b);
    box-shadow: 5px 5px 10px #5d217b, -5px -5px 10px #7d2da7;
  }

  .cookieConsentOperations {
    @apply fixed inset-0 flex z-30;
    background-color: rgba(0, 0, 0, 0.8);
  }

  .cookieConsentOperations__List {
    @apply bg-purple-800 text-pink-200 max-w-lg p-10 m-auto max-h-screen;
  }
</style>
