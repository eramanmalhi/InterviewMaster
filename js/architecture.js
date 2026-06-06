data["Architecture & Best Practices"] = [

    {
    question: "What is Scalability?",
    answer: "Scalability is the ability of a system to handle increasing workloads without significant degradation in performance. A scalable system should be able to accommodate growth in users, requests and data volume while maintaining acceptable response times."
    },
    
    {
    question: "What is the difference between Horizontal and Vertical Scaling?",
    answer: "Vertical scaling increases the capacity of a single machine by adding CPU, memory or storage. Horizontal scaling adds more machines and distributes workload across them. Modern cloud-native systems generally favor horizontal scaling because it provides better elasticity and fault tolerance."
    },
    
    {
    question: "What is Availability?",
    answer: "Availability measures the percentage of time a system remains operational and accessible. Highly available systems are designed to minimize downtime through redundancy, failover mechanisms and resilient infrastructure."
    },
    
    {
    question: "What is Reliability?",
    answer: "Reliability refers to a system's ability to consistently perform its intended function correctly over time. A system can be available but unreliable if it frequently produces incorrect results."
    },
    
    {
    question: "What is the CAP Theorem?",
    answer: "CAP Theorem states that a distributed system can guarantee at most two of the following three properties during a network partition: Consistency, Availability and Partition Tolerance. Since network failures are inevitable, architects must carefully balance consistency and availability requirements."
    },
    
    {
    question: "What is Eventual Consistency?",
    answer: "Eventual Consistency is a consistency model where updates may not be immediately visible across all nodes, but all replicas eventually converge to the same state. Many distributed systems use this model to improve availability and scalability."
    },
    
    {
    question: "What is Caching and why is it important?",
    answer: "Caching stores frequently accessed data closer to consumers to reduce latency and decrease load on backend systems. Effective caching can dramatically improve performance and reduce infrastructure costs."
    },
    
    {
    question: "What is the difference between Cache Aside and Write Through caching?",
    answer: "Cache Aside loads data into the cache only when requested, while Write Through updates both the cache and persistent storage simultaneously. Each approach involves different trade-offs between simplicity, consistency and performance."
    },
    
    {
    question: "What is Load Balancing?",
    answer: "Load Balancing distributes incoming requests across multiple service instances. It improves availability, fault tolerance and resource utilization while preventing individual servers from becoming bottlenecks."
    },
    
    {
    question: "Why is Observability important in distributed systems?",
    answer: "As systems become distributed, understanding failures becomes increasingly difficult. Observability provides visibility into system behavior through logs, metrics and traces, enabling faster diagnosis and resolution of issues."
    },
    
    {
    question: "What is the difference between Monitoring and Observability?",
    answer: "Monitoring tells you when something is wrong based on predefined metrics. Observability helps you understand why something is wrong, even for scenarios that were not anticipated during system design."
    },
    
    {
    question: "What are Resilience Patterns?",
    answer: "Resilience Patterns are design techniques used to handle failures gracefully. Examples include Circuit Breaker, Retry, Timeout, Bulkhead and Fallback patterns."
    },
    
    {
    question: "Why are failures considered normal in distributed systems?",
    answer: "In distributed environments, network issues, service outages, hardware failures and latency spikes are inevitable. Architecture should be designed with the assumption that failures will occur rather than treating them as exceptional events."
    },
    
    {
    question: "What is Event-Driven Architecture?",
    answer: "Event-Driven Architecture is a design approach where components communicate through events rather than direct synchronous calls. This reduces coupling, improves scalability and enables asynchronous processing."
    },
    
    {
    question: "What is Technical Debt?",
    answer: "Technical Debt represents the future cost of taking shortcuts today. While some technical debt is intentional and strategic, unmanaged debt eventually slows development, increases defects and raises maintenance costs."
    },
    
    {
    question: "What is the difference between a good developer and a good architect?",
    answer: "A good developer focuses on building correct and efficient solutions. A good architect focuses on balancing business goals, scalability, maintainability, security, operational complexity and long-term sustainability."
    },
    
    {
    question: "How should architects approach technology selection?",
    answer: "Technology choices should be driven by business requirements, team expertise, operational capabilities and long-term maintainability. The most technically advanced solution is not always the best business solution."
    },
    
    {
    question: "What is Cloud-Native Architecture?",
    answer: "Cloud-Native Architecture is an approach that embraces containerization, automation, elasticity, observability and distributed systems principles. It is designed to fully leverage cloud platform capabilities."
    },
    
    {
    question: "What are the most important non-functional requirements in system design?",
    answer: "Common non-functional requirements include scalability, availability, reliability, security, performance, maintainability, observability and disaster recovery. These often have a greater impact on long-term success than functional requirements."
    },
    
    {
    question: "How would you answer an architect-level system design question?",
    answer: "Start by understanding business requirements and constraints. Identify functional and non-functional requirements. Discuss trade-offs rather than presenting a perfect solution. Consider scalability, availability, security, data consistency, observability and operational concerns. Strong architecture discussions focus on reasoning and trade-offs rather than specific technologies."
    }
    
    ];