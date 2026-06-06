data["Multithreading & Concurrency Scenarios"] = [

    {
    question: "Users report that account balances occasionally become incorrect under heavy load. What would you investigate?",
    answer: "The first thing I would suspect is a race condition. Multiple threads may be reading the same balance, modifying it independently and overwriting each other's changes. I would review the update logic, transaction boundaries and synchronization mechanisms. I would also attempt to reproduce the issue through load testing because race conditions often disappear under normal testing conditions. The goal is to identify whether multiple requests can modify the same data concurrently without proper coordination."
    },
    
    {
    question: "A service works perfectly in testing but starts failing under thousands of concurrent users. Why does this happen?",
    answer: "Many concurrency problems only appear when thread count and request volume increase significantly. Shared mutable state, lock contention, exhausted thread pools and resource bottlenecks often remain hidden in lower environments. I would analyze thread dumps, thread pool metrics and request execution patterns to understand how the system behaves under real production load."
    },
    
    {
    question: "CPU usage reaches 100% after a release, but memory usage remains normal. How would concurrency be part of your investigation?",
    answer: "High CPU with normal memory often indicates excessive thread activity, busy waiting, infinite loops or lock contention. I would capture thread dumps and identify threads consuming the most CPU. Profiling tools can reveal whether threads are actively executing code, repeatedly retrying operations or competing heavily for shared resources."
    },
    
    {
    question: "An application occasionally freezes for several seconds even though no errors are logged. What would you check?",
    answer: "I would investigate lock contention and blocked threads. Thread dumps can reveal whether threads are waiting for locks, database connections or external service responses. Temporary freezes often occur when a critical resource becomes unavailable and many threads accumulate behind it."
    },
    
    {
    question: "Multiple services update the same database record simultaneously and data becomes inconsistent. How would you solve it?",
    answer: "I would first determine whether optimistic locking, pessimistic locking or transaction isolation adjustments are appropriate. The solution depends on workload characteristics and business requirements. In distributed systems, concurrency control often extends beyond JVM-level synchronization and requires database-level coordination."
    },
    
    {
    question: "A synchronized method becomes a bottleneck during peak traffic. What would you investigate?",
    answer: "Synchronization guarantees safety but can reduce throughput when many threads compete for the same lock. I would measure lock contention, identify the protected code section and determine whether the critical section can be reduced. Alternatives such as lock-free designs, concurrent collections or finer-grained locking may improve scalability."
    },
    
    {
    question: "A team introduces parallel processing and unexpectedly sees worse performance. How is that possible?",
    answer: "Parallelism is not always beneficial. Thread creation overhead, context switching, lock contention and resource competition can outweigh the benefits of parallel execution. I would measure CPU utilization, thread counts and execution time to determine whether the workload is actually suitable for parallel processing."
    },
    
    {
    question: "An application occasionally processes the same request twice. What concurrency concerns would you investigate?",
    answer: "Duplicate processing may result from race conditions, retries, distributed failures or missing idempotency controls. I would review request handling logic, synchronization mechanisms and retry behavior. In distributed systems, preventing duplicate processing is often more important than simply detecting it."
    },
    
    {
    question: "Thread dumps show hundreds of threads waiting on the same lock. What does that indicate?",
    answer: "This usually indicates severe lock contention. One thread owns a critical lock while many others are blocked waiting for it. I would identify the locked resource, analyze the protected code path and determine whether lock scope can be reduced. Excessive lock contention often becomes a major scalability bottleneck."
    },
    
    {
    question: "A service occasionally throws ConcurrentModificationException in production. How would you investigate?",
    answer: "I would determine whether collections are being modified while being iterated. The next step is identifying whether the issue occurs within a single thread or multiple threads. If concurrency is involved, thread-safe collection alternatives or redesigned data access patterns may be required."
    },
    
    {
    question: "A thread pool queue continues growing while response times increase. What does this suggest?",
    answer: "This usually indicates that tasks are arriving faster than they can be processed. The root cause may be slow business logic, blocked threads, database bottlenecks or insufficient thread pool capacity. Simply increasing thread count is rarely the first solution because the underlying bottleneck may remain unchanged."
    },
    
    {
    question: "An ExecutorService uses a fixed thread pool of 20 threads. During peak load, requests begin timing out. How would you investigate?",
    answer: "I would examine task execution time, queue length and resource dependencies. If tasks spend most of their time waiting on databases or external services, adding threads may help temporarily but not solve the actual bottleneck. Understanding what the threads are doing is more important than simply increasing their number."
    },
    
    {
    question: "A production incident reveals that one thread is blocking hundreds of other requests. How would you approach it?",
    answer: "I would identify the resource being locked and determine why the lock is held for so long. Long-running operations inside synchronized blocks are common causes. The objective is to minimize the amount of work performed while holding shared locks."
    },
    
    {
    question: "Developers want to make everything synchronized to avoid concurrency bugs. What would you say?",
    answer: "While synchronization improves correctness, excessive synchronization can severely reduce scalability. The goal is not to eliminate concurrency but to manage it safely. I would encourage identifying shared mutable state and protecting only the necessary sections of code rather than synchronizing everything."
    },
    
    {
    question: "How would you approach a concurrency-related production issue during an architect interview?",
    answer: "I would begin by identifying whether the problem involves correctness, performance or scalability. Then I would collect thread dumps, metrics and workload characteristics. Rather than immediately selecting a concurrency tool, I would focus on understanding the contention points, shared resources and business impact. Successful concurrency troubleshooting is driven by evidence rather than assumptions."
    },

    {
    question: "Thread dumps reveal a deadlock involving two threads. How would you investigate and fix it?",
    answer: "I would first identify the exact locks involved and the sequence in which they were acquired. Deadlocks usually occur when Thread A holds Lock 1 and waits for Lock 2 while Thread B holds Lock 2 and waits for Lock 1. The permanent fix is typically redesigning lock acquisition order so all threads acquire locks consistently. In some cases I would replace explicit locking with concurrent collections, lock-free algorithms or asynchronous processing. Restarting the service may restore availability temporarily, but the design flaw remains until the locking strategy is corrected."
    },
    
    {
    question: "A thread pool has hundreds of queued requests but CPU utilization remains low. What does that tell you?",
    answer: "Low CPU combined with a growing queue usually indicates blocking operations rather than insufficient processing power. Threads may be waiting on database calls, network requests, file operations or external APIs. I would inspect thread states, analyze dependency latency and determine where time is actually being spent. The problem is often waiting, not computing."
    },
    
    {
    question: "A CompletableFuture-based solution performs worse than a synchronous implementation. How would you analyze it?",
    answer: "Asynchronous programming introduces overhead. If tasks are short-lived or heavily dependent on each other, the coordination cost may outweigh the benefits. I would examine execution time, thread utilization, task dependencies and context switching overhead. Async processing is most beneficial when work can truly proceed independently."
    },
    
    {
    question: "An application uses multiple nested CompletableFuture chains and debugging becomes extremely difficult. What concerns would you raise?",
    answer: "Complex asynchronous workflows often reduce maintainability and observability. Exception propagation becomes harder to follow, logging becomes fragmented and troubleshooting production issues becomes more difficult. I would evaluate whether the complexity is justified and whether simpler designs could achieve similar performance while improving supportability."
    },
    
    {
    question: "A ForkJoinPool application performs well on small datasets but poorly on large workloads. Why might this happen?",
    answer: "ForkJoinPool works best when tasks can be divided evenly and processed independently. Performance degrades if tasks are unbalanced, involve blocking operations or generate excessive task splitting overhead. I would profile workload distribution and verify that the problem is actually suitable for the ForkJoin model."
    },
    
    {
    question: "A producer-consumer system starts accumulating millions of unprocessed messages. How would you investigate?",
    answer: "I would compare producer throughput with consumer throughput. If producers generate data faster than consumers can process it, backlog growth is inevitable. I would analyze processing latency, queue capacity, consumer bottlenecks and dependency performance. Sometimes scaling consumers helps, but often the real issue is slow downstream processing."
    },
    
    {
    question: "Thread starvation occurs during peak business hours. What are the most likely causes?",
    answer: "Thread starvation typically occurs when long-running tasks monopolize available worker threads. I would investigate thread pool sizing, blocking operations, queue lengths and workload distribution. Separating different workloads into dedicated thread pools often improves fairness and prevents critical requests from being delayed."
    },
    
    {
    question: "An application uses one large shared lock protecting multiple operations. What architectural concerns would you have?",
    answer: "Large shared locks reduce concurrency and create scalability bottlenecks. As traffic grows, more threads compete for the same resource. I would evaluate whether the lock can be split into smaller independent locks, replaced with concurrent data structures or redesigned using partitioned ownership models."
    },
    
    {
    question: "Multiple application instances need to coordinate access to the same business process. Why is synchronized insufficient?",
    answer: "The synchronized keyword works only within a single JVM. In distributed environments with multiple application instances, each JVM maintains its own locks. Coordination requires distributed locking mechanisms such as Redis, ZooKeeper, database locks or other distributed coordination services."
    },
    
    {
    question: "A distributed lock prevents duplicate processing but introduces performance issues. How would you evaluate the trade-off?",
    answer: "Distributed locks improve correctness but increase latency and operational complexity. I would determine whether strict locking is truly required or whether idempotency, optimistic concurrency or eventual consistency approaches could achieve the same business outcome with lower overhead."
    },
    
    {
    question: "Users occasionally submit duplicate payments due to retry behavior. How would concurrency influence your solution?",
    answer: "The solution should focus on idempotency rather than simply blocking concurrent requests. I would introduce unique business identifiers, deduplication logic and transactional safeguards. In distributed systems, duplicate requests are expected and should be handled gracefully."
    },
    
    {
    question: "A highly concurrent service experiences frequent lost updates despite using transactions. How is that possible?",
    answer: "Transactions alone do not guarantee protection from all concurrency problems. The transaction isolation level matters significantly. Depending on the isolation level, phenomena such as lost updates, non-repeatable reads or race conditions may still occur. I would review both application logic and database transaction settings."
    },
    
    {
    question: "A service scales from 10 threads to 500 threads but throughput barely improves. What would you investigate?",
    answer: "Increasing thread count does not automatically increase throughput. The true bottleneck may be database capacity, external service latency, lock contention or network limitations. I would identify the constrained resource before attempting further scaling."
    },
    
    {
    question: "A thread dump shows most threads in WAITING state. Is that necessarily a problem?",
    answer: "Not always. Waiting threads may simply be idle and available for work. The context matters. I would determine what the threads are waiting for, how long they remain in that state and whether business requests are being impacted. Thread states alone do not tell the full story."
    },
    
    {
    question: "How would you discuss concurrency design in an architect interview?",
    answer: "I would focus less on APIs and more on trade-offs. The key questions are how shared state is managed, how contention is minimized, how failures are handled and how the system behaves under peak load. Good concurrency design is ultimately about balancing correctness, scalability, maintainability and operational simplicity rather than selecting a specific Java concurrency class."
    }
    
    ];