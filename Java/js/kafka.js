data["Kafka & Messaging"] = [

    {
    question: "Why do Microservices use Messaging instead of only REST communication?",
    answer: "REST provides synchronous communication where the caller waits for a response. Messaging enables asynchronous communication, allowing services to operate independently. This improves scalability, resilience and decoupling, especially in high-volume distributed systems."
    },
    
    {
    question: "What is Apache Kafka?",
    answer: "Kafka is a distributed event streaming platform designed for high-throughput, fault-tolerant and scalable message processing. It is widely used for event-driven architectures, real-time analytics, data pipelines and microservice communication."
    },
    
    {
    question: "What is a Topic in Kafka?",
    answer: "A Topic is a logical channel used to organize and store messages. Producers publish messages to topics and consumers read messages from them."
    },
    
    {
    question: "What is a Partition in Kafka?",
    answer: "A Partition is a subdivision of a topic. Partitions allow Kafka to distribute data across multiple brokers and enable parallel processing, which is critical for scalability."
    },
    
    {
    question: "Why are Partitions important?",
    answer: "Partitions provide scalability, parallelism and fault tolerance. Without partitions, Kafka would struggle to handle large workloads and high consumer throughput."
    },
    
    {
    question: "What is an Offset in Kafka?",
    answer: "An Offset is a unique sequential identifier assigned to messages within a partition. Consumers use offsets to track their reading position and resume processing after failures."
    },
    
    {
    question: "What is a Consumer Group?",
    answer: "A Consumer Group is a set of consumers working together to process messages from a topic. Kafka distributes partitions among consumers in the group to achieve parallel consumption."
    },
    
    {
    question: "What happens when a new consumer joins a Consumer Group?",
    answer: "Kafka performs a rebalance. During rebalancing, partitions are redistributed among consumers to ensure workload is shared appropriately. Excessive rebalancing can temporarily impact message processing."
    },
    
    {
    question: "Does Kafka guarantee message ordering?",
    answer: "Kafka guarantees ordering only within a single partition. If ordering is important, related messages should be routed to the same partition using an appropriate partition key."
    },
    
    {
    question: "What delivery guarantees does Kafka provide?",
    answer: "Kafka supports At-Most-Once, At-Least-Once and Exactly-Once processing semantics. The chosen approach depends on business requirements, performance considerations and implementation design."
    },
    
    {
    question: "What is At-Least-Once Processing?",
    answer: "At-Least-Once guarantees that messages are not lost, but duplicates may occur. This is the most commonly used delivery model in production systems."
    },
    
    {
    question: "What is Exactly-Once Processing?",
    answer: "Exactly-Once ensures that a message affects the system only once, even in the presence of retries and failures. Achieving this requires support from both Kafka and the consuming application."
    },
    
    {
    question: "What is an Idempotent Producer?",
    answer: "An Idempotent Producer prevents duplicate message writes caused by retries. If the same message is sent multiple times due to transient failures, Kafka ensures it is stored only once."
    },
    
    {
    question: "What is a Dead Letter Queue (DLQ)?",
    answer: "A Dead Letter Queue stores messages that cannot be processed successfully after retries. Instead of blocking the entire pipeline, problematic messages are isolated for investigation and recovery."
    },
    
    {
    question: "How would you explain Kafka in an architect interview?",
    answer: "Kafka is not simply a messaging system. It is a distributed event backbone that enables scalable, fault-tolerant and loosely coupled architectures. Its real value lies in decoupling producers and consumers, supporting event-driven design and handling large-scale data movement reliably across distributed systems."
    }
    
    ];