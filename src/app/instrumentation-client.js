import * as Sentry from '@sentry/nextjs';

export function register() {
  Sentry.init({
    dsn: 'https://8b10ded8e2037dc136ab04722e278da8@o4509041897570304.ingest.de.sentry.io/4509041898815568',

    // Add optional integrations for additional features
    integrations: [Sentry.replayIntegration()],

    // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
    tracesSampleRate: 1,

    // Define how likely Replay events are sampled.
    replaysSessionSampleRate: 0.1, // Sample 10% sessions

    // Define how likely Replay events are sampled when an error occurs.
    replaysOnErrorSampleRate: 1.0, // Sample 100% when errors occur

    // Setting this option to true will print useful information to the console while you're setting up Sentry.
    debug: false,
  });
}
