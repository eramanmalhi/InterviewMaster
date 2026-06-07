data["Exception Handling & Debugging Scenarios"] = [

    {
    question: "Users report failures, but application logs show no errors. How would you investigate?",
    answer: "The absence of errors in logs does not mean the absence of failures. My first step would be to verify whether exceptions are being swallowed or converted into generic responses. I would inspect global exception handlers, API gateways, middleware components and logging configurations. I would also compare client-side errors, server-side metrics and distributed traces. In many incidents, exceptions occur but never reach centralized logging because of poor error-handling practices."
    },
    
    {
    question: "A production issue occurs intermittently and cannot be reproduced in lower environments. What is your debugging approach?",
    answer: "Intermittent issues require evidence collection rather than assumptions. I would gather timestamps, request identifiers, user actions, logs, metrics and traces associated with failures. The goal is to identify common patterns. I would also compare production and non-production environments because configuration differences, data volume and concurrency levels often reveal the root cause."
    },
    
    {
    question: "A developer catches Exception and ignores it. What risks does this create?",
    answer: "Ignoring exceptions can hide serious failures and make troubleshooting extremely difficult. The application may continue running in an inconsistent state while the actual error remains invisible. I would encourage handling exceptions meaningfully, logging sufficient context and either recovering safely or propagating the error appropriately."
    },
    
    {
    question: "A service experiences a sudden spike in failures after deployment. How would you begin debugging?",
    answer: "I would first establish a timeline and determine exactly what changed. Deployment-related incidents are often caused by code changes, configuration updates, dependency upgrades or infrastructure modifications. I would compare working and failing versions, review deployment logs and identify whether rollback is required to restore service quickly."
    },
    
    {
    question: "Application logs contain thousands of errors every minute. How do you identify the real problem?",
    answer: "Large volumes of errors often create noise. I would group errors by type, frequency and business impact. Usually a small number of root causes generate the majority of error messages. Rather than reading logs sequentially, I focus on identifying patterns and correlating failures with metrics and traces."
    },
    
    {
    question: "A database outage causes a flood of exceptions across multiple services. What concerns would you have?",
    answer: "The database outage is only the initial failure. I would also look for secondary effects such as retry storms, exhausted thread pools, increased latency and cascading failures. In distributed systems, the impact of a failure is often greater than the original fault itself."
    },
    
    {
    question: "A retry mechanism intended to improve reliability actually causes a production outage. How is that possible?",
    answer: "Retries increase load on already struggling systems. If thousands of requests retry aggressively during an outage, the dependency may become overwhelmed. I would review retry counts, backoff strategies and circuit breaker behavior. Reliability mechanisms must be designed carefully because they can amplify failures when misconfigured."
    },
    
    {
    question: "An application occasionally returns incorrect results without throwing exceptions. How would you investigate?",
    answer: "The absence of exceptions suggests a logical error rather than a runtime failure. I would analyze business workflows, validate assumptions about input data and compare expected versus actual behavior. Metrics, audit logs and business event tracking often provide more value than exception logs in these situations."
    },
    
    {
    question: "A service starts returning generic 'Internal Server Error' responses. What information would you collect first?",
    answer: "I would collect request identifiers, stack traces, deployment history, affected endpoints and recent infrastructure changes. Generic errors are symptoms, not root causes. The objective is tracing the request through the system to identify where the failure originated."
    },
    
    {
    question: "How would you debug a memory leak when there are no exceptions in the logs?",
    answer: "Memory leaks often do not generate exceptions until memory is nearly exhausted. I would analyze memory trends, heap dumps, GC behavior and object retention paths. Waiting for OutOfMemoryError before investigating usually means valuable evidence has already been lost."
    },
    
    {
    question: "A distributed transaction fails somewhere in the middle of execution. How would you determine what happened?",
    answer: "I would use correlation IDs, distributed tracing and audit logs to reconstruct the request path across services. Understanding where the workflow stopped and which actions completed successfully is critical before deciding on recovery or compensation actions."
    },
    
    {
    question: "A production issue occurs at 2 AM every day. What would be your approach?",
    answer: "Recurring incidents usually indicate scheduled jobs, batch processes, maintenance tasks or automated workflows. I would correlate failure times with scheduled activities, infrastructure operations and resource usage patterns. Time-based incidents often provide strong clues because they occur predictably."
    },
    
    {
    question: "An application becomes unstable after enabling debug-level logging. Why might that happen?",
    answer: "Extensive logging increases CPU usage, disk I/O, network traffic and storage consumption. In high-throughput systems, excessive logging can become a bottleneck itself. Logging should provide useful diagnostic information without overwhelming system resources."
    },
    
    {
    question: "During a production incident, multiple teams propose different root causes. How would you handle the situation?",
    answer: "I would focus on evidence rather than opinions. Logs, metrics, traces and timelines should drive the investigation. During incidents, speculation often creates confusion and delays recovery. The objective is building a fact-based understanding of what happened before implementing fixes."
    },
    
    {
    question: "How would you explain your debugging philosophy in an architect interview?",
    answer: "My approach is to move from symptoms to evidence and from evidence to root cause. I avoid making assumptions based on the first visible failure. Most production incidents involve chains of events rather than a single problem. Effective debugging requires understanding system behavior, collecting objective data and validating conclusions before taking action."
    }
    
    ];