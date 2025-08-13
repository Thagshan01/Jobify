// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node"
import { nodeProfilingIntegration } from "@sentry/profiling-node";

Sentry.init({
  dsn: "https://18a35aac95ac4e8dde7a317eadd13645@o4509616500113408.ingest.us.sentry.io/4509616509419520",
  integrations: [
    nodeProfilingIntegration(),
    Sentry.mongooseIntegration()
  ],

}); 

Sentry.profiler.startProfiler();