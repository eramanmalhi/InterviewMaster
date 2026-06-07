data["Database & JDBC Scenarios"] = [

    {
    question: "Application response times suddenly increase from 200 ms to 8 seconds. CPU on application servers looks normal. How would you investigate?",
    answer: "When application servers appear healthy but response times increase dramatically, I immediately investigate the database. I would examine slow query logs, active sessions, lock waits and database CPU utilization. Many performance incidents originate in the database layer while application metrics remain relatively stable. My objective would be determining whether requests are waiting for database resources and identifying the specific queries responsible."
    },
    
    {
    question: "A service starts throwing 'Cannot get database connection' exceptions during peak traffic. What would you investigate?",
    answer: "My first suspicion would be connection pool exhaustion. I would review connection pool metrics such as active connections, idle connections, wait times and maximum pool size. I would also investigate whether connections are being leaked or held for too long. Simply increasing pool size may temporarily help, but understanding why connections are unavailable is the real goal."
    },
    
    {
    question: "A query performs well in testing but becomes extremely slow in production. Why does this happen frequently?",
    answer: "Production datasets are often much larger than test datasets. A query that scans a few thousand records in testing may need to scan millions in production. I would compare execution plans, index usage, data distribution and table sizes. Production performance issues are often data-related rather than code-related."
    },
    
    {
    question: "Database CPU usage suddenly reaches 100%. How would you approach the investigation?",
    answer: "I would identify the most expensive queries first. Database monitoring tools, query statistics and execution plans are extremely valuable here. High CPU is often caused by full table scans, missing indexes, inefficient joins or unexpectedly large result sets. My focus would be identifying which operations consume the most database resources."
    },
    
    {
    question: "Users report random failures during order creation, but retries often succeed. What database issues would you investigate?",
    answer: "Intermittent failures often indicate locking, deadlocks, resource contention or temporary infrastructure issues. I would analyze database logs, transaction statistics and lock wait information. The fact that retries succeed suggests the problem may be transient rather than a permanent data issue."
    },
    
    {
    question: "A connection pool with 100 connections is always full. Should you increase it to 500?",
    answer: "Not immediately. A full connection pool is usually a symptom rather than the root problem. I would investigate why connections remain busy. Long-running queries, slow transactions, blocked operations or connection leaks often cause pool exhaustion. Increasing pool size without understanding the cause can move the bottleneck elsewhere."
    },
    
    {
    question: "An application performs thousands of small database queries per request. What concerns would you raise?",
    answer: "This pattern often indicates inefficient data access design. Excessive round trips increase latency and database load. I would review query patterns, batching opportunities and data retrieval strategies. In many systems, reducing query count produces far greater improvements than optimizing individual queries."
    },
    
    {
    question: "A production deployment causes database response times to double. How would you investigate?",
    answer: "I would compare query patterns before and after deployment. New code may generate additional queries, change execution plans or increase transaction duration. Database monitoring combined with application profiling helps identify whether the deployment altered workload characteristics."
    },
    
    {
    question: "A service occasionally experiences deadlocks in the database. What does that indicate?",
    answer: "Deadlocks occur when transactions wait on resources held by each other. I would analyze transaction ordering, lock acquisition patterns and transaction duration. The solution often involves reducing transaction scope, standardizing resource access order or redesigning conflicting operations."
    },
    
    {
    question: "How would you investigate a database-related production incident during an interview?",
    answer: "I would begin by determining whether the problem involves query performance, locking, resource exhaustion, connectivity or data consistency. Then I would gather evidence from application metrics, database monitoring, query statistics and transaction information. Database troubleshooting is most effective when guided by measurable evidence rather than assumptions."
    },

    {
    question: "A page displaying 100 orders executes more than 500 SQL queries. What would you suspect?",
    answer: "This is a classic sign of the N+1 query problem. Typically the application loads a collection of parent records and then executes additional queries for each child record. I would enable SQL logging, inspect generated queries and review ORM mappings. The solution often involves fetch joins, entity graphs, batch fetching or redesigning data retrieval strategies. N+1 problems may not be noticeable in testing but can severely impact production systems."
    },
    
    {
    question: "A query suddenly becomes slow after a table grows from one million rows to fifty million rows. What would you investigate?",
    answer: "My first step would be reviewing execution plans and index usage. Queries that previously relied on full table scans may become unacceptable as data volume grows. I would identify whether indexes are being used effectively, whether statistics are up to date and whether query structure can be improved. Scalability issues often emerge gradually as datasets increase."
    },
    
    {
    question: "An index exists, but the database still performs a full table scan. Why might that happen?",
    answer: "Indexes are not always used. The query optimizer may decide a scan is cheaper, statistics may be outdated or the query may prevent efficient index usage. Functions applied to indexed columns, leading wildcard searches and poor selectivity are common reasons. I would analyze the execution plan before assuming the index is helping."
    },
    
    {
    question: "Users report that updates occasionally overwrite each other. What database concepts would you investigate?",
    answer: "This often indicates a lost update problem. Multiple transactions may read the same data and then write conflicting changes. I would review transaction isolation levels, optimistic locking strategies and concurrency controls. Understanding how concurrent modifications are handled is critical for maintaining data integrity."
    },
    
    {
    question: "A transaction appears successful from the user's perspective, but some related data is missing. How would you investigate?",
    answer: "I would review transaction boundaries and verify whether all operations participate in the same transaction. Partial updates can occur when different components use separate transactions or when failures occur after some work has already been committed. Understanding transaction scope is essential for diagnosing consistency issues."
    },
    
    {
    question: "A service experiences connection pool exhaustion every night at midnight. What would you suspect?",
    answer: "Recurring issues often indicate scheduled jobs or batch processes. I would investigate long-running database operations, reporting jobs, ETL processes and maintenance tasks that execute around midnight. Correlating connection usage with scheduled activities usually reveals the source of the problem."
    },
    
    {
    question: "Database monitoring shows hundreds of open connections even though application traffic is low. What could be happening?",
    answer: "This often indicates connection leaks. Some code paths may acquire database connections without releasing them properly. I would review connection pool metrics, enable leak detection and inspect transaction management logic. Over time, leaked connections can exhaust the pool and impact application availability."
    },
    
    {
    question: "A batch process that normally completes in 20 minutes suddenly requires 4 hours. How would you investigate?",
    answer: "I would compare data volume, query execution plans, index usage and resource consumption between successful and failing runs. Batch performance degradation is often caused by growing datasets, missing indexes, blocking transactions or infrastructure changes. Historical comparisons are particularly useful in these situations."
    },
    
    {
    question: "The team proposes adding multiple read replicas to solve performance problems. What questions would you ask?",
    answer: "I would first determine whether the workload is actually read-heavy. Read replicas help distribute read traffic but do not solve write bottlenecks. I would also discuss replication lag, consistency requirements and operational complexity. Architectural decisions should be based on workload characteristics rather than generic scaling recommendations."
    },
    
    {
    question: "How would you discuss database architecture in a solution architect interview?",
    answer: "I would focus on trade-offs rather than specific technologies. Key considerations include consistency requirements, scalability goals, transaction patterns, query characteristics, availability expectations and operational complexity. The best database design is one that aligns with business requirements while remaining maintainable as the system grows."
    }
    
    ];