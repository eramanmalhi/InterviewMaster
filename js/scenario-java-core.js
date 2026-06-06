data["Java Core Production Scenarios"] = [

    {
    question: "Production server memory usage keeps increasing every day and eventually crashes with OutOfMemoryError. How would you investigate?",
    answer: "The first thing I would do is determine whether this is a genuine memory leak or simply increased business traffic. I would monitor heap usage after each garbage collection cycle. If heap usage continuously grows and never returns to a stable baseline, that usually indicates a memory leak. I would capture heap dumps using tools such as Eclipse MAT or VisualVM and identify which objects are consuming the most memory. I would also look for static collections, caches without eviction policies, unclosed resources and long-lived references preventing garbage collection. After identifying the root cause, I would fix the code and add memory monitoring dashboards and alerts to detect similar issues early."
    },
    
    {
    question: "A HashMap performs well in testing but becomes extremely slow in production. What could be happening?",
    answer: "I would first check the size of the HashMap and the quality of the hashCode() implementation. Poor hashCode() implementations can cause excessive collisions, forcing many entries into the same bucket. This increases lookup time significantly. I would analyze bucket distribution, inspect object equality logic and review whether the map is being accessed concurrently without proper synchronization. In production systems, a HashMap may also become a bottleneck due to excessive growth, memory pressure or incorrect usage in multithreaded environments."
    },
    
    {
    question: "An application suddenly starts throwing StackOverflowError after a new release. How would you approach the problem?",
    answer: "StackOverflowError usually indicates excessive recursion or an unexpectedly deep call chain. I would first analyze the stack trace because it often reveals repeated method calls. I would review recent code changes for recursive logic, circular method invocations or framework configuration mistakes. If recursion is legitimate, I would evaluate whether an iterative solution would be more appropriate. Understanding why the recursion depth increased after the release is usually more important than simply increasing stack size."
    },
    
    {
    question: "Production logs show intermittent NullPointerExceptions but developers cannot reproduce the issue locally. How would you investigate?",
    answer: "Intermittent issues are often caused by data conditions, race conditions or environment differences. I would first collect complete stack traces and identify the exact line where the exception occurs. Next, I would compare production data with test data and verify whether null values are entering the system from external services, databases or configuration sources. If concurrency is involved, I would analyze thread interactions. Additional structured logging around the failing code path is often required to capture the state of variables when the issue occurs."
    },
    
    {
    question: "Application response time gradually increases over several days without any deployment. What would you investigate?",
    answer: "Gradual degradation usually indicates resource accumulation rather than a sudden defect. I would investigate memory usage, garbage collection behavior, thread counts, database connection pools, file handles and cache growth. I would also examine database query performance because indexes may become less effective as data volume increases. Historical monitoring data often reveals trends that point directly to the root cause."
    },
    
    {
    question: "A Java service works correctly for a few hundred users but fails under thousands of concurrent users. What could be wrong?",
    answer: "This typically indicates scalability limitations. I would investigate thread pools, database connection pools, synchronized blocks, external service dependencies and resource contention. Load testing results, thread dumps and application metrics are extremely valuable here. Frequently the problem is not CPU power but blocking operations that prevent requests from being processed efficiently."
    },
    
    {
    question: "Users report that some updates are randomly lost even though no exceptions are logged. How would you investigate?",
    answer: "Lost updates often indicate concurrency problems. Multiple threads may be reading and modifying the same data simultaneously without proper synchronization. I would examine shared state, database transaction isolation levels and concurrent request patterns. Reproducing the issue through load testing is often necessary. Thread safety and transaction management become primary areas of investigation."
    },
    
    {
    question: "CPU usage suddenly jumps to 100% across all application servers. What would be your investigation strategy?",
    answer: "My first step would be capturing thread dumps. High CPU usually means one or more threads are continuously consuming processor time. I would identify hot threads and analyze what they are executing. Common causes include infinite loops, excessive object creation, inefficient algorithms, uncontrolled retries and heavy garbage collection activity. Profiling tools can quickly reveal where CPU time is being spent."
    },
    
    {
    question: "An application occasionally freezes for several seconds and then recovers. Users report random delays. What would you check?",
    answer: "Short freezes often indicate garbage collection pauses, database locking, thread contention or external service latency. I would correlate application logs, GC logs, database metrics and distributed tracing data around the time of the freeze. Understanding whether the delay occurs inside the JVM, database or network layer is critical before attempting a fix."
    },
    
    {
    question: "A service starts failing after a configuration change even though the code has not changed. How would you troubleshoot?",
    answer: "Configuration changes can be just as dangerous as code changes. I would compare current configuration with the previous working version and identify all modified values. Common issues include incorrect database URLs, thread pool sizes, timeout values, feature flags and environment-specific settings. I would also verify whether dependent services were affected by the same configuration change."
    },

    {
    question: "A production application suddenly starts throwing ClassNotFoundException after deployment. What would you investigate?",
    answer: "The first thing I would verify is whether the required class actually exists in the deployed artifact. Many times the issue is caused by an incomplete build, incorrect dependency scope or version mismatch between environments. I would compare the working version and the failed deployment, inspect the generated JAR or WAR and verify the dependency tree. In containerized environments I would also check whether the correct image version was deployed. If the application uses custom class loaders, plugin architectures or application servers, I would investigate class loading paths and isolation rules."
    },
    
    {
    question: "A cache introduced to improve performance slowly causes memory issues in production. How would you analyze it?",
    answer: "I would first determine whether the cache has a proper eviction strategy. Many memory problems occur because entries are continuously added but never removed. I would examine cache hit ratio, entry count, object sizes and growth trends. Heap dump analysis would help identify whether the cache is retaining large object graphs. If the cache provides little benefit while consuming significant memory, I would revisit its design, eviction policy and maximum size limits."
    },
    
    {
    question: "Users occasionally see ConcurrentModificationException in production. What does that tell you?",
    answer: "ConcurrentModificationException usually indicates that a collection is being modified while it is being iterated. I would identify the collection involved and determine whether multiple threads are accessing it simultaneously. If concurrency is the cause, I would evaluate thread-safe alternatives such as ConcurrentHashMap or CopyOnWriteArrayList. If the issue occurs within a single thread, I would review iteration and modification logic carefully. The exception itself is often a symptom of a deeper design problem involving shared mutable state."
    },
    
    {
    question: "A new release introduces serialization failures between services. How would you investigate?",
    answer: "I would verify whether object structures changed between service versions. Common causes include incompatible serialVersionUID values, removed fields, renamed classes or mismatched schema versions. If services communicate through JSON, Avro or Protocol Buffers, I would review schema compatibility rules. In distributed systems, backward and forward compatibility are critical because different service versions often coexist during deployments."
    },
    
    {
    question: "The JVM spends most of its time performing garbage collection and very little time executing business logic. What would you do?",
    answer: "This situation often indicates excessive object creation, memory leaks or incorrectly sized heap settings. I would begin by analyzing GC logs to understand collection frequency, pause times and memory reclamation effectiveness. Next I would profile the application to identify allocation hotspots. Frequently the root cause is unnecessary object creation inside loops, inefficient caching strategies or retaining references longer than necessary. The objective is to reduce allocation pressure rather than simply increasing heap size."
    },
    
    {
    question: "Requests begin timing out even though CPU and memory usage look normal. How would you investigate?",
    answer: "Healthy CPU and memory metrics do not guarantee healthy application behavior. I would examine thread pools, database connection pools, external service dependencies and network latency. Thread dumps are particularly valuable because they reveal whether threads are blocked, waiting for resources or stuck on external calls. In many production incidents the bottleneck is resource contention rather than raw infrastructure capacity."
    },
    
    {
    question: "A service experiences thread starvation during peak traffic. How would you recognize and solve it?",
    answer: "Thread starvation occurs when some tasks rarely receive execution time because available threads are consumed by long-running or blocking operations. I would inspect thread pool metrics, queue sizes and task execution times. If blocking operations are occupying worker threads, I might separate workloads into dedicated thread pools, increase pool capacity or redesign the processing model. Understanding which tasks monopolize resources is usually the key to resolution."
    },
    
    {
    question: "Production systems occasionally stop responding and thread dumps reveal deadlocks. How would you handle this?",
    answer: "Deadlocks occur when two or more threads wait indefinitely for resources held by each other. I would use thread dumps to identify the exact locks and threads involved. The long-term solution usually involves redesigning lock acquisition order, reducing lock scope or replacing explicit locking with safer concurrency mechanisms. Simply restarting the application may restore service temporarily, but it does not eliminate the underlying design flaw."
    },
    
    {
    question: "An application eventually exhausts file handles and stops processing requests. What could cause this?",
    answer: "This typically indicates a resource leak. Files, sockets, streams or database connections may be opened but not closed properly. I would inspect operating system metrics, application logs and code paths handling external resources. Modern Java features such as try-with-resources greatly reduce this risk, but leaks can still occur when third-party libraries or custom resource management are involved."
    },
    
    {
    question: "You are called into a critical production incident affecting revenue-generating services. What is your first approach?",
    answer: "My first objective is stabilization, not root cause analysis. I would quickly assess business impact, identify affected systems and determine whether rollback, failover or traffic reduction is necessary. Once service stability is restored, I would gather logs, metrics, traces and timelines for investigation. Effective incident response requires balancing immediate recovery with systematic root cause analysis. The worst mistake is making uncontrolled changes during an outage without understanding their impact."
    }
    
    ];