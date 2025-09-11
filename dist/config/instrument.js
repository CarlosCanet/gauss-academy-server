import * as Sentry from "@sentry/node";
Sentry.init({
    dsn: "https://bbfd32ebf379167c04b9770fb650f49b@o4509996082397184.ingest.de.sentry.io/4509996338774096",
    // Setting this option to true will send default PII data to Sentry.
    // For example, automatic IP address collection on events
    sendDefaultPii: true,
});
//# sourceMappingURL=instrument.js.map