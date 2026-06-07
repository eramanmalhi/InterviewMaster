data["Caching & Redis Scenarios"] = [

    {
    question: "Application response times suddenly increase after Redis becomes unavailable. How would you investigate?",
    answer: "The first question I would ask is whether the application can operate without the cache. Many systems unintentionally become dependent on Redis even though it was introduced only as a performance optimization. I would examine fallback behavior, database load, connection failures and timeout settings. A cache outage should ideally degrade performance rather than completely break business functionality."
    },
    
    {
    question: "A popular product page suddenly causes database CPU usage to reach 100%. What caching issue might be occurring?",
    answer: "This is often a cache stampede. When a highly requested cache entry expires, many requests simultaneously attempt to reload the same data from the database. Instead of one database query, thousands may execute at the same time. I would investigate cache expiration patterns and consider techniques such as cache warming, request coalescing or staggered expiration times."
    },
    
    {
    question: "A cache hit ratio drops from 95% to 20% after deployment. How would you investigate?",
    answer: "I would compare cache key generation, expiration policies, serialization logic and deployment changes. Small changes in key structure can effectively invalidate the entire cache. I would also verify whether application instances are using the expected Redis cluster and configuration."
    },
    
    {
    question: "Users report seeing outdated information even though the database contains correct values. What would you investigate?",
    answer: "This usually indicates stale cache data. I would review cache invalidation logic, update workflows, expiration policies and replication delays. Cache consistency problems are often caused by updates reaching the database but failing to refresh or invalidate cached entries."
    },
    
    {
    question: "Redis memory consumption grows continuously until eviction begins. How would you approach the problem?",
    answer: "I would investigate key growth patterns, expiration policies, object sizes and cache hit rates. The key question is whether the stored data continues to provide value. A cache consuming large amounts of memory while delivering poor hit rates is often a sign of ineffective caching strategy."
    },
    
    {
    question: "A single Redis key receives thousands of requests per second while other keys receive very little traffic. Why is this important?",
    answer: "This is known as a hot key problem. A single heavily accessed key can become a bottleneck even when the rest of the cache infrastructure is healthy. I would evaluate key distribution, caching strategy and whether data can be partitioned or replicated to reduce concentrated load."
    },
    
    {
    question: "A Redis restart causes a sudden spike in database traffic. Why?",
    answer: "After a restart, cached data may no longer be available. Requests that were previously served from cache now hit the database directly. This is sometimes called a cold cache problem. I would evaluate cache warming strategies and determine whether the database can tolerate cache rebuild traffic."
    },
    
    {
    question: "A team decides to cache every database query result. What concerns would you raise?",
    answer: "Not all data benefits equally from caching. Excessive caching increases memory usage, invalidation complexity and operational overhead. I would focus on frequently accessed, expensive-to-compute data rather than attempting to cache everything indiscriminately."
    },
    
    {
    question: "An application stores user sessions in Redis and users are unexpectedly logged out. What would you investigate?",
    answer: "I would review session expiration settings, Redis availability, replication behavior and deployment activity. Session-related incidents often involve incorrect time-to-live values, accidental key deletion or infrastructure changes affecting session persistence."
    },
    
    {
    question: "Redis latency suddenly increases despite low CPU utilization. What areas would you investigate?",
    answer: "I would examine network latency, command complexity, memory pressure, persistence operations and replication activity. Low CPU usage does not guarantee healthy performance. Sometimes the bottleneck exists in networking or storage rather than computation."
    },
    
    {
    question: "A cache contains millions of keys but only a small percentage are ever accessed again. What does this suggest?",
    answer: "This may indicate poor cache effectiveness. Storing large amounts of rarely used data consumes memory without delivering meaningful performance benefits. I would analyze access patterns and adjust expiration or eviction policies accordingly."
    },
    
    {
    question: "An application uses write-through caching. What trade-offs would you discuss?",
    answer: "Write-through caching keeps cache and database synchronized by updating both during writes. This improves read consistency but increases write latency. The choice depends on workload characteristics and consistency requirements."
    },
    
    {
    question: "A team wants to use Redis as the primary database for critical business records. What concerns would you raise?",
    answer: "Redis is extremely fast, but durability, persistence strategy, recovery objectives and data consistency requirements must be evaluated carefully. The correct choice depends on business requirements rather than performance alone."
    },
    
    {
    question: "A distributed cache cluster experiences node failures. How would you investigate system behavior?",
    answer: "I would examine replication, failover mechanisms, key redistribution and client behavior. The important question is not whether nodes fail, but how the system behaves when they do. Resilience should be validated through testing rather than assumptions."
    },
    
    {
    question: "A cache eviction policy removes frequently used data while retaining rarely accessed entries. What might be wrong?",
    answer: "The eviction strategy may not match workload characteristics. I would review policies such as LRU, LFU and TTL-based expiration. Choosing the wrong eviction mechanism can significantly reduce cache effectiveness."
    },
    
    {
    question: "Multi-region deployments start returning different cached values in different locations. Why is this challenging?",
    answer: "Distributed caching introduces synchronization and consistency challenges. Replication delays, regional isolation and independent cache updates can create temporary differences between regions. The acceptable level of inconsistency should be defined by business requirements."
    },
    
    {
    question: "A team wants to cache API responses for 24 hours to reduce costs. What questions would you ask?",
    answer: "I would first determine how frequently the underlying data changes and how much staleness users can tolerate. Aggressive caching may reduce costs but can create poor user experiences if information becomes outdated."
    },
    
    {
    question: "A Redis cluster appears healthy, but users still report slow performance. How would you investigate?",
    answer: "I would examine cache hit ratios, application-side latency, database fallback behavior and end-to-end request timing. A healthy cache infrastructure does not automatically mean the application is using it effectively."
    },
    
    {
    question: "How would you troubleshoot a caching-related production outage during an architect interview?",
    answer: "I would determine whether the issue involves cache availability, cache effectiveness, stale data, memory pressure or dependency failures. Then I would analyze metrics such as hit ratio, latency, memory utilization and downstream database load. Caching incidents are often best understood by examining their impact on the systems behind the cache."
    },
    
    {
    question: "How would you discuss caching architecture at a Solution Architect level?",
    answer: "I would focus on trade-offs between performance, consistency, cost and operational complexity. Caching is not simply about making systems faster. It changes data flow, failure behavior and consistency guarantees. The best caching strategy aligns with business requirements and operational realities rather than maximizing cache usage everywhere."
    }
    
    ];