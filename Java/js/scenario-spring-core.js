data["Spring Core Scenarios"] = [

    {
    question: "A Spring Boot application suddenly fails during startup after a deployment. What is your first approach?",
    answer: "My first step is always to identify the earliest failure in the startup logs rather than focusing on the final error message. Spring often throws a chain of exceptions where the root cause appears much earlier in the log. I would review bean creation errors, configuration loading, dependency injection failures and environment-specific settings. Understanding what prevented the ApplicationContext from starting is usually the fastest path to resolution."
    },
    
    {
    question: "Application startup fails with BeanCreationException. How would you investigate?",
    answer: "BeanCreationException is often a symptom rather than the actual root cause. I would inspect the nested exceptions and identify which bean failed and why. Common causes include missing dependencies, invalid configuration, database connectivity issues and circular dependencies. The key is tracing the dependency chain until the original failure is found."
    },
    
    {
    question: "A new deployment introduces a Circular Dependency error. What does that tell you about the design?",
    answer: "Circular dependencies usually indicate excessive coupling between components. If Service A depends on Service B and Service B depends on Service A, the design becomes difficult to maintain and test. While there are technical workarounds, I generally treat circular dependencies as a design smell and look for opportunities to separate responsibilities."
    },
    
    {
    question: "A Singleton bean starts producing inconsistent results under heavy traffic. How would you investigate?",
    answer: "The first question I would ask is whether the bean contains mutable shared state. Singleton beans are shared across all requests, so any mutable data stored inside them must be thread-safe. I would review instance variables, concurrency behavior and request processing logic. Stateless singleton beans are generally safe, but stateful singleton beans frequently create production issues."
    },
    
    {
    question: "A developer changes a bean from Singleton scope to Prototype scope to fix a bug. What concerns would you have?",
    answer: "Changing scope may solve one symptom while introducing others. Prototype beans create a new instance every time they are requested, which affects memory usage, lifecycle management and dependency behavior. I would first understand the original bug and determine whether scope changes address the root cause or merely hide it."
    },
    
    {
    question: "Dependency injection works locally but fails in production. How would you investigate?",
    answer: "I would compare environment-specific configurations, active profiles, component scanning behavior and deployment artifacts. Many production-only issues occur because different profiles are active, certain packages are excluded from scanning or required configuration values are missing."
    },
    
    {
    question: "A service receives NullPointerException even though @Autowired is present. How is that possible?",
    answer: "The most common cause is that the object was created manually using the new keyword rather than by Spring. In such cases Spring never manages the object and dependency injection does not occur. I would verify bean creation paths and ensure the object is managed by the Spring container."
    },
    
    {
    question: "A bean appears to be created multiple times unexpectedly. What would you investigate?",
    answer: "I would review bean scope, configuration classes, component scanning rules and application context hierarchy. Duplicate bean creation may occur due to multiple application contexts, incorrect configuration or misunderstanding of bean scope behavior."
    },
    
    {
    question: "An application starts successfully but certain Spring-managed features stop working. What areas would you investigate?",
    answer: "I would examine proxy creation, AOP configuration, transaction management and component scanning. Features such as transactions, security and aspects often depend on Spring-generated proxies. If proxy creation fails or is bypassed, functionality may silently stop working."
    },
    
    {
    question: "How would you troubleshoot a Spring startup issue during an architect interview?",
    answer: "I would begin with the startup logs and identify the first meaningful error. Then I would classify the problem into configuration, dependency injection, bean lifecycle, infrastructure connectivity or application design categories. My focus would be understanding why the container could not construct the required object graph rather than treating the final exception as the root cause."
    },

    {
    question: "A method is annotated with @Transactional, but database changes are still partially committed. How would you investigate?",
    answer: "The first thing I would verify is whether the transaction is actually active. Many developers assume that adding @Transactional automatically guarantees transactional behavior. I would review transaction boundaries, exception handling and propagation settings. I would also check whether exceptions are being caught and swallowed because Spring only rolls back transactions automatically for specific exception types unless configured otherwise."
    },
    
    {
    question: "A @Transactional method calls another @Transactional method, but expected transaction behavior does not occur. Why might that happen?",
    answer: "This is often caused by self-invocation. Spring typically applies transaction management through proxies. If a method calls another method within the same class, the call may bypass the proxy entirely and transactional behavior will not be applied. I would review call paths and proxy behavior before assuming a transaction configuration problem."
    },
    
    {
    question: "A rollback is expected, but the transaction commits successfully even after an exception occurs. What would you investigate?",
    answer: "I would examine the exception type and transaction configuration. By default, Spring rolls back on unchecked exceptions but not necessarily on checked exceptions. I would also verify whether the exception is propagated out of the transactional boundary or caught internally. Understanding rollback rules is critical when debugging transaction-related issues."
    },
    
    {
    question: "A service becomes slow after introducing AOP-based logging. Why might this happen?",
    answer: "AOP is powerful, but every intercepted method call introduces some overhead. If aspects are applied too broadly or perform expensive operations such as serialization, database access or excessive logging, they can significantly impact performance. I would profile execution time and determine whether the aspect is creating more work than expected."
    },
    
    {
    question: "A Spring application starts successfully, but @Transactional, @Cacheable and @Async annotations appear to stop working. What would you investigate?",
    answer: "These features typically depend on Spring proxies. I would verify that beans are managed by Spring, ensure proxy creation is enabled and confirm that calls are not bypassing the proxy through direct self-invocation. Many advanced Spring features silently fail when proxy-based behavior is unintentionally skipped."
    },
    
    {
    question: "Lazy initialization was enabled to improve startup time, but runtime failures increased. Why?",
    answer: "Lazy initialization delays bean creation until first use. While this can reduce startup time, it also postpones failure detection. Problems that would normally be discovered during startup may now appear during live traffic. I would evaluate whether faster startup is worth the operational risk introduced by delayed validation."
    },
    
    {
    question: "A Spring event listener stops processing events after a deployment. How would you troubleshoot it?",
    answer: "I would verify event publication, listener registration, component scanning and application context initialization. If asynchronous listeners are involved, I would also investigate executor configuration, thread pool health and exception handling because failures inside asynchronous listeners may not always be visible immediately."
    },
    
    {
    question: "A singleton Spring bean stores request-specific information and users start seeing each other's data. What happened?",
    answer: "This usually indicates shared mutable state inside a singleton bean. Since singleton beans are shared across all requests, request-specific data should never be stored in instance variables. I would redesign the component to be stateless or move request-specific state into request-scoped structures."
    },
    
    {
    question: "A production issue only occurs when multiple Spring Boot instances are running. Why might single-instance testing miss it?",
    answer: "Single-instance environments often hide distributed system problems. Shared state assumptions, race conditions, cache synchronization issues and distributed locking problems may not appear until multiple instances operate simultaneously. I would review application behavior from a distributed system perspective rather than focusing solely on Spring."
    },
    
    {
    question: "How would you discuss Spring architecture in a senior architect interview?",
    answer: "I would focus less on annotations and more on design principles. Spring's greatest value is enabling loosely coupled, testable and maintainable systems through dependency injection, proxy-based capabilities and lifecycle management. Understanding how these mechanisms work internally is often more important than memorizing framework features."
    }
    
    ];