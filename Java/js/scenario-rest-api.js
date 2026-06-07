data["REST API Design Scenarios"] = [

    {
    question: "A new API deployment breaks multiple client applications even though the endpoint URL did not change. How would you investigate?",
    answer: "The first thing I would examine is whether the response contract changed. Many API outages occur because developers modify field names, data types, response structures or validation rules while keeping the endpoint URL unchanged. Existing clients may depend on the previous behavior. I would compare request and response payloads before and after deployment, review API versioning practices and identify which contract changes caused the failure. In production environments, backward compatibility is often more important than adding new features quickly."
    },
    
    {
    question: "An API performs well with hundreds of requests per minute but becomes extremely slow at thousands of requests per second. What would you investigate?",
    answer: "I would start by identifying where time is spent during request processing. The bottleneck may be database queries, external service calls, thread pool exhaustion, serialization overhead or network latency. Metrics, distributed tracing and profiling data are critical. Rather than assuming the API itself is slow, I would follow the complete request path and identify the component limiting throughput."
    },
    
    {
    question: "Users accidentally create duplicate orders because they click the submit button multiple times. How would you solve this problem?",
    answer: "This is an idempotency problem. The API should be designed so that repeated execution of the same business request produces the same result rather than creating duplicates. I would introduce idempotency keys, unique business identifiers or request deduplication mechanisms. In distributed systems, duplicate requests should be expected rather than treated as exceptional events."
    },
    
    {
    question: "An API returns large datasets and clients complain about slow responses. What would you recommend?",
    answer: "Returning large datasets in a single response often creates performance and scalability problems. I would introduce pagination, filtering and sorting mechanisms so clients retrieve only the data they actually need. I would also evaluate response compression and caching opportunities. The goal is reducing unnecessary data transfer while maintaining usability."
    },
    
    {
    question: "A public API becomes unavailable because a small number of clients generate excessive traffic. How would you address this?",
    answer: "I would introduce rate limiting, throttling and usage monitoring. Not all clients should consume unlimited resources. Rate limiting protects platform stability and ensures fair resource allocation. The implementation should be designed carefully so legitimate users are not unnecessarily impacted."
    },
    
    {
    question: "A client team requests a new mandatory field in an existing API response. What concerns would you raise?",
    answer: "Adding fields is generally safer than removing fields, but I would still consider backward compatibility. Some clients may perform strict schema validation and fail when unexpected fields appear. I would review consumer expectations, API contracts and versioning strategy before making the change."
    },
    
    {
    question: "A team wants to remove an old API endpoint immediately because a new version exists. What would your approach be?",
    answer: "I would first determine who still consumes the old endpoint. Immediate removal can cause widespread outages if clients have not migrated. I typically prefer a structured deprecation process involving communication, monitoring, migration support and eventual retirement after usage drops to an acceptable level."
    },
    
    {
    question: "A REST API relies on multiple downstream services and response times become unpredictable. How would you investigate?",
    answer: "I would use distributed tracing to understand how long each dependency contributes to request processing. In distributed systems, the API may simply be exposing latency originating elsewhere. Timeouts, retries, circuit breakers and dependency health must all be reviewed when diagnosing unpredictable response times."
    },
    
    {
    question: "An API Gateway deployment causes multiple services to become inaccessible. What areas would you investigate?",
    answer: "I would review routing rules, authentication configuration, service discovery integration, rate limiting policies and gateway health. Because API gateways sit in front of many services, even a small configuration mistake can create widespread impact. Understanding the blast radius of gateway changes is extremely important."
    },
    
    {
    question: "How would you troubleshoot a REST API outage during an architect interview?",
    answer: "I would begin by identifying whether the problem involves the API itself, downstream dependencies, infrastructure, networking or client behavior. Then I would collect metrics, logs, traces and deployment history. My goal would be understanding the complete request lifecycle and finding the first component where expected behavior diverges from actual behavior."
    },

    {
    question: "A team changes an API response field from String to Integer and several clients stop working. What lesson does this teach?",
    answer: "This is a classic backward compatibility failure. Even a seemingly small change can break consumers that depend on the original contract. Before changing APIs, I would identify all consumers, evaluate compatibility impact and determine whether versioning is required. Production APIs should be treated as long-term contracts rather than implementation details."
    },
    
    {
    question: "A business wants to introduce API version 2 while thousands of clients still use version 1. How would you manage the transition?",
    answer: "I would support both versions for a defined period while encouraging migration. Monitoring usage is critical because assumptions about client adoption are often wrong. I would publish migration guides, communicate timelines clearly and avoid forcing immediate upgrades unless security or compliance concerns require it."
    },
    
    {
    question: "API response times are acceptable, but network bandwidth costs continue increasing. What would you investigate?",
    answer: "I would analyze response payload sizes, unnecessary fields, duplicate data and caching opportunities. Sometimes performance appears healthy while infrastructure costs grow significantly. Optimizing payload design, compression and caching strategies can reduce costs without affecting functionality."
    },
    
    {
    question: "A team introduces aggressive API caching and users start seeing outdated information. How would you approach this?",
    answer: "Caching always involves a trade-off between performance and freshness. I would identify which data truly requires real-time accuracy and which data can tolerate temporary staleness. Cache expiration policies, invalidation strategies and business requirements should drive the design rather than performance goals alone."
    },
    
    {
    question: "Authentication suddenly becomes the slowest part of API processing. What would you investigate?",
    answer: "I would examine token validation, identity provider latency, database lookups and external authentication dependencies. Authentication is executed for nearly every request, so even small inefficiencies can significantly impact overall system performance. Metrics and distributed tracing are particularly useful here."
    },
    
    {
    question: "Thousands of users are logged out unexpectedly after a JWT configuration change. What might have happened?",
    answer: "I would investigate token expiration settings, signing keys, issuer configuration and validation rules. Security-related configuration changes can invalidate existing tokens and affect large numbers of users. Understanding token lifecycle management is essential when deploying authentication changes."
    },
    
    {
    question: "A client requests an API operation that takes several minutes to complete. Why is a synchronous REST call usually a poor choice?",
    answer: "Long-running synchronous requests tie up resources, increase timeout risk and provide a poor user experience. I would consider asynchronous processing where the API returns immediately with a tracking identifier while background processing continues independently."
    },
    
    {
    question: "Users continuously poll an API every few seconds to check for updates, causing significant load. What alternatives would you consider?",
    answer: "I would evaluate WebSockets, Server-Sent Events, event-driven notifications or intelligent polling strategies. Continuous polling often wastes resources because most requests return no meaningful changes. Push-based approaches can be more efficient when real-time updates are required."
    },
    
    {
    question: "A mobile application requires data from five different microservices for a single screen. How would you approach the design?",
    answer: "Making the client call five separate services increases latency and complexity. I would evaluate API aggregation through an API Gateway, Backend for Frontend pattern or dedicated aggregation service. The objective is reducing client complexity while maintaining reasonable service boundaries."
    },
    
    {
    question: "How would you discuss API evolution in a solution architect interview?",
    answer: "I would focus on treating APIs as products rather than technical endpoints. Good API design balances usability, scalability, security and long-term maintainability. Versioning, backward compatibility, observability and consumer impact should be considered before every significant API change. The best API is not simply one that works today, but one that can evolve safely over many years."
    }
    
    ];