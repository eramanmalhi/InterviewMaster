data["Kafka Production Scenarios"] = [

    {
    question: "Consumer lag suddenly increases from a few hundred messages to several million. How would you investigate?",
    answer: "Consumer lag is a symptom, not the root cause. I would first determine whether producers have increased throughput or whether consumers have slowed down. I would analyze consumer processing time, broker metrics, partition distribution, database dependencies and external service calls. In many production incidents, Kafka itself is healthy and the real bottleneck exists inside the consumer application."
    },
    
    {
    question: "A topic has ten partitions, but one partition receives almost all the traffic. Why is this a problem?",
    answer: "This indicates partition skew. Kafka distributes work at the partition level, so if one partition receives most messages, only one consumer can process that workload efficiently while others remain underutilized. I would review the partition key strategy because poor key selection is a common cause of uneven distribution."
    },
    
    {
    question: "Messages are being processed twice. How would you investigate?",
    answer: "Duplicate processing is common in distributed systems. I would review consumer offset management, retry behavior, producer retries and failure scenarios. The key question is whether the application is designed to handle duplicates safely. In most production environments, idempotency is more important than attempting to eliminate every duplicate message."
    },
    
    {
    question: "A producer reports successful message delivery, but consumers never receive the messages. What would you investigate?",
    answer: "I would verify topic configuration, partition assignments, consumer group subscriptions, offsets and retention settings. I would also determine whether messages were written to the expected topic. The investigation should follow the complete message lifecycle from producer to broker to consumer."
    },
    
    {
    question: "A consumer application suddenly falls behind after a deployment. How would you approach the problem?",
    answer: "I would compare consumer throughput before and after deployment. The new version may contain slower processing logic, additional database calls, increased logging or new dependencies. Consumer lag often reveals application performance issues rather than Kafka infrastructure problems."
    },
    
    {
    question: "A Kafka cluster survives a broker failure, but users still experience outages. Why?",
    answer: "Broker availability alone does not guarantee application availability. Producers, consumers, partition leadership transitions and dependent systems all influence business outcomes. I would investigate how the application behaved during failover rather than focusing solely on Kafka cluster health."
    },
    
    {
    question: "A team increases consumer instances from five to twenty, but throughput barely improves. What would you investigate?",
    answer: "The first thing I would check is partition count. Kafka can only distribute partitions among consumers. If there are fewer partitions than consumers, additional consumers provide little benefit. I would also investigate whether downstream dependencies such as databases have become the actual bottleneck."
    },
    
    {
    question: "Message ordering is critical, but consumers report out-of-sequence events. How would you investigate?",
    answer: "Kafka guarantees ordering only within a partition. I would examine partition key selection and verify whether related events are consistently routed to the same partition. If ordering requirements span multiple partitions, additional design considerations may be necessary."
    },
    
    {
    question: "A producer experiences increased latency despite healthy broker metrics. What would you investigate?",
    answer: "I would analyze producer batching configuration, acknowledgment settings, network latency and message sizes. Producer performance can be influenced by many factors outside broker health. Understanding where time is spent during message publication is essential."
    },
    
    {
    question: "A deployment introduces a new consumer group and broker CPU usage spikes dramatically. Why might this happen?",
    answer: "A new consumer group reads messages independently from existing consumer groups. If it begins consuming large historical datasets, broker resource utilization may increase significantly. I would review consumption patterns and determine whether the new workload was anticipated."
    },
    
    {
    question: "A Kafka topic reaches retention limits and older messages disappear. What lessons would you take from this?",
    answer: "Retention policies should align with business and operational requirements. If important messages are lost due to retention settings, monitoring and capacity planning may be insufficient. I would review storage policies, replay requirements and historical data needs."
    },
    
    {
    question: "A Dead Letter Queue starts growing rapidly. How would you investigate?",
    answer: "A growing Dead Letter Queue usually indicates a systemic issue rather than isolated bad messages. I would classify failure types, identify common patterns and determine whether schema changes, application bugs or dependency failures are causing messages to be rejected."
    },
    
    {
    question: "A team claims Kafka guarantees exactly-once processing everywhere. How would you respond?",
    answer: "Exactly-once semantics are often misunderstood. Kafka can provide strong guarantees within specific boundaries, but complete end-to-end exactly-once behavior depends on producers, consumers, databases and business logic. I would clarify where guarantees apply and where additional safeguards are required."
    },
    
    {
    question: "A consumer processes messages successfully but never commits offsets. What problems can this create?",
    answer: "If offsets are not committed, messages may be reprocessed after restarts or failures. This can create duplicate business operations and increase recovery time. Offset management is a critical part of reliable message consumption."
    },
    
    {
    question: "How would you troubleshoot a Kafka production incident during an architect interview?",
    answer: "I would begin by identifying whether the issue involves producers, brokers, consumers or downstream systems. Then I would analyze lag, throughput, partition health, offsets, broker metrics and business impact. Kafka troubleshooting should follow the complete event flow rather than focusing on a single component in isolation."
    },

    {
    question: "Consumers repeatedly rebalance throughout the day and message processing becomes unstable. What would you investigate?",
    answer: "Frequent rebalancing often indicates consumer instability. Consumers may be crashing, restarting, failing health checks or exceeding processing time limits. During rebalancing, partitions are reassigned and message consumption may temporarily pause. I would investigate consumer logs, heartbeat failures, resource utilization and deployment activity. Excessive rebalancing is usually a symptom of instability somewhere in the ecosystem."
    },
    
    {
    question: "A team replays six months of historical events into production and downstream systems become overloaded. What went wrong?",
    answer: "Event replay should be treated as a major operational activity. Replaying large volumes of historical events can generate traffic levels far beyond normal production workloads. I would evaluate replay rate controls, consumer capacity, downstream system limits and business impact. Historical data processing often requires dedicated environments or controlled throttling mechanisms."
    },
    
    {
    question: "A schema change is deployed and consumers begin failing immediately. How would you investigate?",
    answer: "I would first determine whether the schema change is backward compatible. Many event-driven systems rely on producers and consumers evolving independently. If compatibility rules are violated, consumers may fail to deserialize messages correctly. Schema governance and compatibility validation should ideally prevent such incidents before deployment."
    },
    
    {
    question: "Large messages start causing broker performance issues. What concerns would you raise?",
    answer: "Kafka is generally optimized for streams of relatively small messages. Large payloads increase network utilization, storage requirements, replication overhead and memory pressure. I would investigate whether large objects should be stored externally while Kafka carries references rather than entire payloads."
    },
    
    {
    question: "A producer sends messages successfully, but consumers in another region never receive them. What would you investigate?",
    answer: "I would examine cross-region replication mechanisms, replication lag, networking issues and cluster synchronization. Multi-region event architectures introduce additional failure modes that do not exist within a single cluster. Understanding where replication stops is critical."
    },
    
    {
    question: "A Kafka broker runs out of disk space. What happens next?",
    answer: "Storage exhaustion can impact message retention, replication and cluster stability. Depending on configuration, producers may begin failing, partitions may become unavailable or retention policies may remove older data. Capacity planning and storage monitoring are essential because disk exhaustion is often predictable long before it becomes an outage."
    },
    
    {
    question: "A topic has sufficient partitions, but consumers still cannot keep up with traffic growth. Why might this happen?",
    answer: "Kafka scalability depends on more than partition count. Consumer processing logic, database writes, external service calls and business workflows often become bottlenecks. I would analyze end-to-end processing rather than assuming Kafka infrastructure is the limiting factor."
    },
    
    {
    question: "A disaster recovery test reveals that some events are missing after failover. How would you investigate?",
    answer: "I would review replication settings, acknowledgment policies, producer guarantees and failover procedures. Not all configurations provide the same durability guarantees. Understanding what level of data loss is acceptable and verifying that the architecture meets those expectations is a critical design responsibility."
    },
    
    {
    question: "A team wants a separate Kafka cluster for every business domain. What trade-offs would you discuss?",
    answer: "Multiple clusters can improve isolation and ownership, but they also increase operational complexity, monitoring overhead and infrastructure costs. I would evaluate traffic patterns, governance requirements, security needs and operational maturity before deciding between shared and dedicated clusters."
    },
    
    {
    question: "An event sourcing system grows to billions of events and performance starts degrading. What architectural questions would you ask?",
    answer: "I would investigate snapshot strategies, retention policies, replay requirements and storage growth. Event sourcing provides powerful auditability and reconstruction capabilities, but long-term scalability requires careful management of event volume and retrieval patterns."
    },
    
    {
    question: "A consumer group is healthy, but business teams report missing notifications. How would you investigate?",
    answer: "I would follow the complete business workflow rather than stopping at infrastructure metrics. Messages may have been consumed successfully but filtered, discarded, transformed incorrectly or blocked by downstream processing. Technical success does not always mean business success."
    },
    
    {
    question: "MirrorMaker replication introduces noticeable delays between regions. Why is this important?",
    answer: "Replication lag affects data freshness, disaster recovery expectations and business workflows. Some use cases can tolerate delayed replication while others require near real-time synchronization. The acceptable level of lag should be defined by business requirements rather than technical convenience."
    },
    
    {
    question: "A Kafka deployment doubles cloud costs without delivering measurable business value. What lesson does this teach?",
    answer: "Technology decisions should be evaluated against business outcomes. Kafka provides tremendous value for event-driven architectures, but not every problem requires a distributed streaming platform. I would periodically review whether architectural complexity remains justified by business needs."
    },
    
    {
    question: "How would you discuss Kafka architecture at a Principal Engineer or Solution Architect level?",
    answer: "I would focus on event-driven business workflows, data ownership, scalability, resilience, observability and operational trade-offs. Kafka is not merely a messaging platform. It is often a central nervous system for modern distributed architectures. The discussion should include governance, replay strategies, schema evolution, disaster recovery and long-term operational sustainability."
    },
    
    {
    question: "A company is deciding between Kafka, RabbitMQ and synchronous REST communication. How would you approach the decision?",
    answer: "I would begin with business requirements rather than technology preferences. Kafka excels at high-throughput event streaming and decoupled architectures. RabbitMQ is often well-suited for traditional messaging patterns and task distribution. REST is appropriate when immediate responses and simpler communication models are sufficient. The correct choice depends on consistency requirements, throughput expectations, operational maturity and system complexity."
    }
    
    ];