data["Microservices"] = [

    {
    question: "What are Microservices?",
    answer: "Microservices is an architectural style in which an application is built as a collection of small, independently deployable services. Each service owns a specific business capability, has its own lifecycle and communicates with other services through well-defined APIs or messaging systems."
    },
    
    {
    question: "What is the difference between Monolithic and Microservices Architecture?",
    answer: "In a monolithic architecture, all modules are deployed as a single unit and often share the same codebase and database. In microservices architecture, services are independently developed, deployed and scaled. While microservices improve flexibility and scalability, they also introduce operational complexity."
    },
    
    {
    question: "When should an organization consider Microservices?",
    answer: "Microservices make sense when applications become large, teams grow, deployment cycles slow down or different modules have different scaling requirements. For small applications, a well-designed monolith is often simpler and more cost-effective."
    },
    
    {
    question: "What are the main advantages of Microservices?",
    answer: "Microservices enable independent deployments, better scalability, technology flexibility, fault isolation and team autonomy. Different services can evolve independently without impacting the entire system."
    },
    
    {
    question: "What are the challenges of Microservices?",
    answer: "Microservices introduce challenges such as distributed transactions, network latency, service discovery, observability, data consistency, security and increased operational overhead."
    },
    
    {
    question: "What is the Database Per Service pattern?",
    answer: "Database Per Service means each microservice owns its own database and schema. This prevents tight coupling between services and allows independent evolution of data models."
    },
    
    {
    question: "Why is sharing a database across multiple microservices discouraged?",
    answer: "A shared database creates tight coupling between services, makes independent deployments difficult and often turns microservices into a distributed monolith."
    },
    
    {
    question: "What is Service Discovery?",
    answer: "Service Discovery is the mechanism through which services dynamically locate and communicate with each other. Since service instances may scale up, scale down or move between hosts, hardcoded addresses are impractical."
    },
    
    {
    question: "What is Eureka?",
    answer: "Eureka is a service registry commonly used in Spring Cloud. Services register themselves with Eureka, allowing other services to discover and communicate with them dynamically."
    },
    
    {
    question: "What is an API Gateway?",
    answer: "An API Gateway acts as a single entry point for clients. It handles routing, authentication, rate limiting, request aggregation and other cross-cutting concerns before forwarding requests to backend services."
    },
    
    {
    question: "Why is an API Gateway important in Microservices?",
    answer: "Without an API Gateway, clients may need to communicate directly with many services. The gateway simplifies client interactions, centralizes security and reduces duplication of common functionality."
    },
    
    {
    question: "What is a Distributed Transaction?",
    answer: "A Distributed Transaction spans multiple services or databases. Managing consistency becomes challenging because failures can occur after some services have already completed their work."
    },
    
    {
    question: "Why is Two-Phase Commit rarely preferred in Microservices?",
    answer: "Two-Phase Commit introduces tight coupling, reduced availability and performance overhead. Modern microservice architectures generally favor eventual consistency approaches instead."
    },
    
    {
    question: "What is the Saga Pattern?",
    answer: "Saga is a distributed transaction pattern where a business process is broken into multiple local transactions. If one step fails, compensating transactions are executed to undo previously completed work."
    },
    
    {
    question: "What is Event-Driven Architecture?",
    answer: "Event-Driven Architecture allows services to communicate by publishing and consuming events. This reduces direct dependencies between services and improves scalability and flexibility."
    },
    
    {
    question: "What is Idempotency?",
    answer: "Idempotency means that executing the same operation multiple times produces the same result as executing it once. This is critical in distributed systems where retries are common."
    },
    
    {
    question: "Why is Idempotency important in Microservices?",
    answer: "Network failures, duplicate messages and retry mechanisms can cause the same request to be processed multiple times. Idempotency prevents duplicate business actions such as charging a customer twice."
    },
    
    {
    question: "What is Observability in Microservices?",
    answer: "Observability is the ability to understand the internal state of a distributed system through logs, metrics and traces. It helps teams diagnose failures and performance bottlenecks."
    },
    
    {
    question: "What are the three pillars of Observability?",
    answer: "The three pillars are Logs, Metrics and Distributed Tracing. Together they provide visibility into application behavior across multiple services."
    },
    
    {
    question: "How would you explain Microservices in an architect interview?",
    answer: "Microservices are not a goal by themselves. They are a trade-off. They provide scalability, team autonomy and deployment independence, but they also introduce distributed system challenges. A successful microservices architecture focuses as much on observability, resilience, automation and operational excellence as it does on service decomposition."
    }
    
    ];