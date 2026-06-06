data["Performance & Scalability Scenarios"] = [

    {
    question: "Application response times increase from 200 milliseconds to 5 seconds during peak traffic. How would you investigate?",
    answer: "I would avoid assuming the application itself is the bottleneck. First, I would identify where time is actually spent by using metrics, tracing and profiling. The delay could originate from databases, external services, thread pools, network latency or resource contention. My objective would be locating the slowest component in the request path before proposing solutions."
    },
    
    {
    question: "CPU utilization suddenly reaches 100% across application servers. What is your investigation approach?",
    answer: "I would identify which processes and threads consume the CPU. High CPU can result from inefficient algorithms, excessive logging, busy waiting, serialization overhead or unexpected traffic patterns. Thread dumps and profiling tools are particularly useful because they reveal exactly what the system is doing rather than what we assume it is doing."
    },
    
    {
    question: "Memory utilization continues increasing throughout the day until the application becomes unstable. What would you investigate?",
    answer: "I would determine whether memory growth is expected or indicative of a leak. Heap dumps, GC behavior, object retention analysis and cache usage patterns would help identify the cause. The important question is not how much memory is used, but why it remains allocated."
    },
    
    {
    question: "A service performs well under normal traffic but collapses during traffic spikes. What does this suggest?",
    answer: "This often indicates limited scalability headroom. I would investigate thread pools, connection pools, database capacity, queue lengths and dependency performance. Traffic spikes frequently expose bottlenecks that remain hidden during normal operation."
    },
    
    {
    question: "Increasing server capacity does not improve throughput. Why might this happen?",
    answer: "Adding resources helps only when the bottleneck is resource-related. If performance is limited by database locks, external service latency, synchronization issues or inefficient architecture, additional CPU and memory may have little impact. Identifying the true bottleneck is more important than increasing capacity."
    },
    
    {
    question: "An application has low CPU usage but still responds slowly. How would you explain that?",
    answer: "Low CPU usage often indicates waiting rather than processing. Threads may be blocked on databases, external APIs, network calls, locks or message queues. I would investigate latency sources rather than assuming compute power is the problem."
    },
    
    {
    question: "A load balancer distributes traffic evenly, but one server consistently performs worse than the others. What would you investigate?",
    answer: "I would compare hardware resources, JVM settings, application versions, connection counts, cache efficiency and dependency access patterns. Uniform traffic distribution does not guarantee identical performance across instances."
    },
    
    {
    question: "A team wants to solve performance problems by increasing thread pool sizes everywhere. What concerns would you raise?",
    answer: "Larger thread pools can sometimes improve throughput, but they can also increase context switching, memory usage and resource contention. I would first determine why existing threads are busy. Thread pool tuning should be based on workload analysis rather than guesswork."
    },
    
    {
    question: "Response times become unpredictable even though average performance appears healthy. What would you investigate?",
    answer: "Averages often hide important details. I would examine latency percentiles, particularly P95 and P99 response times. A small percentage of slow requests can significantly impact user experience while remaining invisible in average metrics."
    },
    
    {
    question: "A new feature causes throughput to drop by 40%. How would you approach the investigation?",
    answer: "I would compare performance before and after deployment, identify new processing paths and measure resource consumption. Feature-related performance issues often involve additional database queries, external service calls, object creation or synchronization points."
    },
    
    {
    question: "Application servers scale horizontally, but the database becomes a bottleneck. What architectural lesson does this teach?",
    answer: "Scaling one layer does not automatically scale the entire system. Performance is limited by the slowest constrained component. I would evaluate database optimization, caching, read replicas, partitioning or architectural redesign depending on workload characteristics."
    },
    
    {
    question: "A performance test succeeds in staging but fails in production. Why is this common?",
    answer: "Production environments often have larger datasets, more users, different traffic patterns and more complex dependency interactions. Performance testing is valuable, but assumptions should always be validated against real-world behavior."
    },
    
    {
    question: "How would you investigate a performance incident during an architect interview?",
    answer: "I would begin by identifying the bottleneck rather than jumping to solutions. Metrics, tracing, profiling, thread analysis and workload characteristics would guide the investigation. Performance optimization is most effective when driven by evidence rather than intuition."
    },

    {
    question: "A platform grows rapidly and suddenly cannot handle holiday-season traffic. What architectural lesson does this teach?",
    answer: "This highlights the importance of capacity planning. Systems should be designed with growth expectations in mind rather than current usage alone. I would review historical traffic patterns, growth projections, infrastructure utilization and scaling strategies. Capacity planning is fundamentally about preparing for future demand before it arrives."
    },
    
    {
    question: "A message queue grows continuously during peak traffic. What does that indicate?",
    answer: "A growing queue usually means producers generate work faster than consumers can process it. I would compare production rates, consumption rates and downstream dependency performance. The queue itself is rarely the problem. It is usually exposing a bottleneck somewhere else in the processing pipeline."
    },
    
    {
    question: "Traffic suddenly increases tenfold after a marketing campaign. What would you investigate first?",
    answer: "I would identify which resources approach saturation first. This may include CPU, memory, databases, caches, network bandwidth, thread pools or third-party services. Understanding where capacity limits are reached helps prioritize scaling and optimization efforts."
    },
    
    {
    question: "An auto-scaling configuration launches additional servers, but performance still degrades. Why?",
    answer: "Auto-scaling only helps when the bottleneck can be distributed. If the constraint is a shared database, external API, lock contention or centralized resource, adding more application instances may increase load without increasing throughput. Scaling strategies must align with actual bottlenecks."
    },
    
    {
    question: "A team wants to scale vertically by upgrading servers instead of scaling horizontally. How would you evaluate the trade-off?",
    answer: "Vertical scaling is often simpler because it avoids distributed system complexity, but it has practical limits and may create larger failure domains. Horizontal scaling provides greater flexibility and resilience but increases architectural complexity. The appropriate choice depends on workload characteristics, operational maturity and business requirements."
    },
    
    {
    question: "A service performs well individually, but system-wide throughput remains low. What might be happening?",
    answer: "The bottleneck may exist elsewhere in the architecture. Optimizing one service does not necessarily improve end-to-end performance if another component limits overall throughput. I would analyze the entire workflow and identify the slowest constrained resource."
    },
    
    {
    question: "A database query optimization reduces response times by 90%, but users still report slow performance. How would you investigate?",
    answer: "Technical improvements do not always translate into user-visible improvements. I would examine network latency, frontend behavior, external dependencies and complete transaction timing. User experience should always be measured across the full business workflow rather than a single component."
    },
    
    {
    question: "A team introduces aggressive caching and performance improves dramatically, but operational incidents increase. Why?",
    answer: "Caching improves performance but also introduces consistency challenges, invalidation complexity and new failure modes. Architectural decisions often involve balancing performance gains against operational complexity. Every optimization has trade-offs."
    },
    
    {
    question: "Multiple services compete for the same database resources and performance becomes unpredictable. What would you investigate?",
    answer: "This is a resource contention problem. I would analyze connection pools, locking behavior, query patterns and workload distribution. Shared dependencies often become bottlenecks in distributed systems because many services compete for the same limited resources."
    },
    
    {
    question: "A load test predicts the platform can handle 100,000 users, but production struggles with 20,000. Why might this happen?",
    answer: "Load tests often simplify real-world behavior. Production environments include unpredictable traffic patterns, background jobs, dependency failures, user behavior variations and operational overhead. Performance testing is valuable, but it should never be treated as a perfect prediction of production reality."
    },
    
    {
    question: "A company spends heavily on infrastructure upgrades every year, but performance problems keep returning. What architectural concern would you raise?",
    answer: "This may indicate that scaling is being used to compensate for architectural inefficiencies. Infrastructure investment can delay bottlenecks, but it rarely eliminates poor design decisions. I would investigate whether recurring performance issues originate from architecture, data access patterns or operational practices."
    },
    
    {
    question: "How would you discuss scalability architecture in a Principal Engineer or Enterprise Architect interview?",
    answer: "I would focus on identifying bottlenecks, understanding workload characteristics and balancing cost, complexity and business requirements. Scalability is not simply about handling more traffic. It is about ensuring the system can continue delivering business value as demand grows while remaining maintainable and economically sustainable."
    }
    
    ];