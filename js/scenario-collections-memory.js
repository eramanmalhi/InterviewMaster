data["Collections & Memory Scenarios"] = [

    {
    question: "A production server runs out of memory after introducing a cache based on HashMap. How would you investigate?",
    answer: "The first thing I would verify is whether the cache has a size limit and eviction strategy. A common mistake is continuously adding entries without removing old ones. I would analyze heap dumps to identify the number of entries stored in the cache, check whether keys and values are larger than expected and determine whether expired data remains in memory. If the cache keeps growing indefinitely, the issue is usually not HashMap itself but the absence of proper cache management. In production systems I typically prefer mature solutions such as Redis, Caffeine or Ehcache because they provide eviction policies, monitoring and memory controls out of the box."
    },
    
    {
    question: "Application memory usage increases continuously and heap dump shows millions of objects inside an ArrayList. What would you do?",
    answer: "I would first identify who owns the ArrayList and why objects are not being removed. Large collections often indicate either a memory leak or missing cleanup logic. I would examine the code responsible for adding elements, verify whether removal logic exists and determine whether the collection is intended to grow indefinitely. Heap analysis tools can reveal the object retention path, helping identify exactly which references prevent garbage collection."
    },
    
    {
    question: "A HashMap lookup operation becomes unexpectedly slow in production. What could be causing it?",
    answer: "The most common cause is excessive hash collisions. If many keys generate the same hash value, entries end up in the same bucket and lookup performance degrades significantly. I would review hashCode() implementations, analyze bucket distribution and inspect whether key objects are mutable. Poorly implemented equals() and hashCode() methods often create performance issues that only appear at production scale."
    },
    
    {
    question: "A ConcurrentHashMap is being used, but data inconsistencies are still reported. How is that possible?",
    answer: "ConcurrentHashMap guarantees thread-safe operations on individual entries, but it does not automatically make complex business operations atomic. For example, a read-modify-write sequence may still suffer race conditions. I would review the business logic rather than assuming the collection is the problem. Thread-safe collections protect data structures, not entire workflows."
    },
    
    {
    question: "An application experiences frequent Full GC after loading a large dataset into memory. What would you investigate?",
    answer: "I would determine whether all of the data truly needs to reside in memory. Many applications load entire datasets when only a subset is required. I would analyze object sizes, collection growth patterns and access frequency. Sometimes pagination, streaming or external caching solutions provide a better approach than storing everything in JVM memory."
    },
    
    {
    question: "A service crashes only during month-end processing when data volume becomes very large. How would collections be part of your investigation?",
    answer: "Month-end failures often reveal scalability problems hidden during normal operation. I would investigate whether collections grow proportionally with business volume, whether temporary processing structures consume excessive memory and whether large datasets are loaded entirely into memory. Profiling memory consumption during peak workloads is critical for identifying collection-related bottlenecks."
    },
    
    {
    question: "A team uses a List for frequent searches and experiences performance problems. What would you recommend?",
    answer: "The answer depends on access patterns. If frequent lookups are required, a HashMap or HashSet may be more appropriate because they provide much faster search performance. Before changing the implementation, I would analyze actual usage patterns, query frequency and memory trade-offs to ensure the chosen data structure aligns with business requirements."
    },
    
    {
    question: "An application stores user sessions in memory and eventually becomes unstable. What concerns would you raise?",
    answer: "Keeping session data entirely in application memory can create scalability and reliability issues. Memory consumption grows with user count, failover becomes difficult and horizontal scaling becomes more complex. I would evaluate distributed session management solutions such as Redis or database-backed session storage depending on business requirements."
    },
    
    {
    question: "A developer uses static collections to improve performance. What risks do you see?",
    answer: "Static collections live for the lifetime of the application and can easily become sources of memory leaks. Data added to static collections may never be released. I would carefully review growth patterns, cleanup strategies and memory consumption. Static state also introduces testing challenges and potential concurrency issues."
    },
    
    {
    question: "Why can mutable objects be dangerous as HashMap keys?",
    answer: "HashMap relies on hashCode() and equals() for locating entries. If a key changes after insertion, the map may no longer be able to locate the entry correctly. This can lead to missing data, memory growth and difficult-to-debug production issues. I generally recommend immutable objects for map keys."
    },
    
    {
    question: "A cache hit ratio is extremely low while memory consumption is extremely high. What does that suggest?",
    answer: "This usually indicates a poorly designed cache. The application is paying the memory cost of caching without receiving meaningful performance benefits. I would analyze cache access patterns, expiration policies and key design. In many cases reducing cache size or redesigning the caching strategy improves both performance and memory utilization."
    },
    
    {
    question: "A production incident reveals duplicate objects stored in memory, significantly increasing heap usage. How would you investigate?",
    answer: "I would examine collection usage patterns and object creation logic. Sometimes the same business entity is loaded repeatedly and stored multiple times. Heap dump analysis can reveal duplication patterns. Depending on the use case, object reuse, caching or deduplication mechanisms may significantly reduce memory consumption."
    },
    
    {
    question: "An application experiences OutOfMemoryError even though heap size was recently increased. What does that tell you?",
    answer: "Increasing heap size may delay the failure but does not necessarily solve the underlying problem. I would investigate memory leaks, uncontrolled collection growth, large object retention and inefficient data structures. If memory usage grows faster than available memory, larger heaps simply postpone the inevitable."
    },
    
    {
    question: "A service uses CopyOnWriteArrayList and performs poorly under heavy write traffic. Why?",
    answer: "CopyOnWriteArrayList is optimized for read-heavy workloads. Every write operation creates a new copy of the underlying array, making writes expensive. If write frequency is high, I would evaluate alternative collections better suited for the workload characteristics."
    },
    
    {
    question: "How would you approach a collection-related production issue during an interview?",
    answer: "I would avoid immediately blaming a specific collection implementation. Instead, I would understand the workload, access patterns, concurrency requirements, memory constraints and scalability goals. Most collection-related issues are not caused by the collection itself but by choosing the wrong data structure for the problem being solved."
    }
    
    ];