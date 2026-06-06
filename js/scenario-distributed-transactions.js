data["Distributed Transactions & Saga Scenarios"] = [

    {
    question: "An order is created successfully, but payment processing fails immediately afterward. How would you handle this scenario?",
    answer: "In a monolithic application, a single database transaction might roll everything back. In a microservices architecture, the order service and payment service often operate independently. I would use a Saga pattern where the order creation is treated as a local transaction and payment processing becomes the next step. If payment fails, a compensating action can cancel the order or move it into a failed state. The goal is maintaining business consistency rather than relying on a distributed database transaction."
    },
    
    {
    question: "Payment succeeds, but inventory reservation fails. What challenges does this create?",
    answer: "This creates a partially completed business workflow. Money has been collected, but the product cannot be fulfilled. The architecture must define compensating actions such as payment reversal, inventory retry or manual review. The correct response depends on business requirements. The important point is that distributed systems must be designed to handle partial success as a normal operating condition."
    },
    
    {
    question: "A Saga completes successfully in four services, but the fifth service fails. How would you recover?",
    answer: "I would first determine whether the failure is temporary or permanent. If it is temporary, retries may be appropriate. If it is permanent, compensating transactions may need to reverse the completed steps. The recovery strategy should be defined during system design rather than invented during an outage. Distributed workflows require explicit failure handling at every stage."
    },
    
    {
    question: "A compensating transaction itself fails. What would you do?",
    answer: "This is one of the most important distributed systems scenarios because many designs assume compensation always succeeds. I would implement retry mechanisms, monitoring, alerting and manual recovery procedures. Some business processes may require human intervention when automated compensation cannot complete successfully."
    },
    
    {
    question: "Why is Two-Phase Commit rarely preferred in modern microservices architectures?",
    answer: "Two-Phase Commit can provide strong consistency, but it introduces tight coupling, reduced availability and scalability limitations. If one participant becomes unavailable, the entire transaction may remain blocked. Modern architectures often favor eventual consistency because it provides better resilience and scalability despite increased complexity."
    },
    
    {
    question: "A customer places an order, but due to a timeout they submit the request again. How would this affect a Saga workflow?",
    answer: "Without idempotency controls, duplicate requests could create duplicate orders, payments and inventory reservations. I would ensure every business request contains a unique identifier that allows the workflow to recognize and safely handle duplicates. Distributed systems must assume retries and duplicate submissions will occur."
    },
    
    {
    question: "Events arrive out of order during a distributed workflow. Why is this dangerous?",
    answer: "Many business processes assume events arrive in a specific sequence. If an inventory confirmation arrives before an order creation event is processed, inconsistent behavior may occur. I would evaluate event ordering guarantees, sequence tracking and workflow design. Systems should be resilient to unexpected event timing whenever possible."
    },
    
    {
    question: "A Saga workflow remains stuck in an intermediate state for several hours. How would you investigate?",
    answer: "I would use correlation IDs, workflow tracking and distributed tracing to determine where progress stopped. The issue may involve failed events, unavailable services, messaging problems or incorrect state transitions. Long-running workflows require visibility into every stage so incomplete transactions can be detected and recovered."
    },
    
    {
    question: "What factors influence the choice between Saga orchestration and Saga choreography?",
    answer: "Orchestration uses a central coordinator to manage workflow execution, while choreography relies on services reacting to events. Orchestration provides greater visibility and control but introduces a central dependency. Choreography improves decoupling but can become difficult to understand as workflows grow. The choice depends on complexity, governance and operational requirements."
    },
    
    {
    question: "A business workflow spans ten services. What concerns would you raise?",
    answer: "The more services involved, the greater the probability of partial failure, latency accumulation and operational complexity. I would evaluate whether the workflow can be simplified, whether service boundaries are appropriate and whether some operations should be consolidated. Distributed workflows should be as simple as business requirements allow."
    },
    
    {
    question: "A banking transfer debits one account but fails before crediting another account. How would you think about this problem?",
    answer: "This is a business-critical consistency challenge. The system must ensure money is never lost or created incorrectly. I would design the workflow with strong auditability, compensation mechanisms, reconciliation processes and operational monitoring. Financial systems often require stricter guarantees than many other domains."
    },
    
    {
    question: "How would you monitor distributed transactions in production?",
    answer: "I would use correlation IDs, workflow state tracking, distributed tracing, business event monitoring and alerting. Technical success is not enough. The business workflow itself must be observable so incomplete or failed transactions can be detected quickly."
    },
    
    {
    question: "A messaging system guarantees at-least-once delivery. How does this affect Saga design?",
    answer: "At-least-once delivery means duplicate messages are possible. Every Saga participant should therefore be idempotent. Services must be capable of safely handling repeated execution of the same business step without producing incorrect results."
    },
    
    {
    question: "A product owner asks for immediate consistency across all services. How would you discuss the trade-offs?",
    answer: "Immediate consistency across distributed systems often comes at the cost of availability, performance and complexity. I would first determine whether the business truly requires immediate consistency or whether eventual consistency is acceptable. Architecture should be driven by business outcomes rather than technical preferences."
    },
    
    {
    question: "How would you explain distributed transactions in a solution architect interview?",
    answer: "I would emphasize that distributed transactions are fundamentally about managing business consistency across independent systems. The challenge is not executing a single transaction but designing workflows that remain correct when failures, retries, duplicate messages and partial success occur. Successful solutions combine technical patterns such as Sagas with strong observability, idempotency and operational recovery mechanisms."
    }
    
    ];