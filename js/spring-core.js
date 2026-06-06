data["Spring Core"] = [

    {
    question: "What is Spring Framework?",
    answer: "Spring is a lightweight, open-source framework that simplifies enterprise Java development. Its primary goal is to reduce tight coupling between components and provide infrastructure support for dependency injection, transaction management, data access, security and web applications."
    },
    
    {
    question: "Why was Spring created when Java already had J2EE?",
    answer: "Traditional J2EE development often involved complex configurations, heavy application servers and tightly coupled code. Spring simplified development by promoting POJOs, dependency injection and modular architecture, making applications easier to develop, test and maintain."
    },
    
    {
    question: "What is Inversion of Control (IoC)?",
    answer: "In traditional applications, objects create and manage their own dependencies. With IoC, the responsibility of creating, configuring and wiring objects is transferred to the Spring container. This reduces coupling and makes applications more flexible and testable."
    },
    
    {
    question: "What is Dependency Injection (DI)?",
    answer: "Dependency Injection is a design pattern where required dependencies are provided to an object from an external source instead of being created inside the object. Spring uses DI extensively to achieve loose coupling and easier unit testing."
    },
    
    {
    question: "What is the relationship between IoC and DI?",
    answer: "IoC is the broader principle that delegates object management to a container. Dependency Injection is one of the techniques used to implement IoC. In Spring, DI is the primary mechanism used to achieve IoC."
    },
    
    {
    question: "What is a Spring Bean?",
    answer: "A Spring Bean is an object whose lifecycle is managed by the Spring IoC container. Instead of creating objects using the new keyword, developers typically allow Spring to create, configure and inject beans automatically."
    },
    
    {
    question: "What is the Spring Container?",
    answer: "The Spring Container is the core component of the framework responsible for creating beans, managing dependencies, controlling bean lifecycles and providing various enterprise services."
    },
    
    {
    question: "What is the difference between BeanFactory and ApplicationContext?",
    answer: "BeanFactory is the basic IoC container providing dependency injection capabilities. ApplicationContext extends BeanFactory and adds enterprise features such as event handling, internationalization, annotation support and automatic bean post-processing. In modern applications, ApplicationContext is almost always used."
    },
    
    {
    question: "What are the different ways of Dependency Injection in Spring?",
    answer: "Spring supports Constructor Injection, Setter Injection and Field Injection. Constructor Injection is generally preferred because it promotes immutability, makes dependencies explicit and simplifies testing."
    },
    
    {
    question: "Why is Constructor Injection preferred over Field Injection?",
    answer: "Constructor Injection clearly communicates required dependencies, allows immutable objects, simplifies unit testing and prevents partially initialized objects. Field Injection hides dependencies and makes testing more difficult."
    },
    
    {
    question: "What is @Component in Spring?",
    answer: "@Component is a stereotype annotation that tells Spring to automatically detect and register a class as a bean during component scanning."
    },
    
    {
    question: "What is Component Scanning?",
    answer: "Component Scanning is the process where Spring automatically discovers classes annotated with stereotypes such as @Component, @Service, @Repository and @Controller, and registers them as beans."
    },
    
    {
    question: "What is the difference between @Component, @Service, @Repository and @Controller?",
    answer: "All four create Spring-managed beans. The difference is primarily semantic. @Service represents business logic, @Repository represents data access components, @Controller handles web requests and @Component is a generic stereotype used when a more specific role does not apply."
    },

    {
    question: "What is @Autowired?",
    answer: "@Autowired is used by Spring to automatically inject dependencies into a bean. During application startup, Spring searches for a matching bean and injects it into the target component. This removes the need for manual object creation and wiring."
    },
    
    {
    question: "How does Spring resolve dependency injection when multiple implementations exist?",
    answer: "When multiple beans of the same type exist, Spring cannot determine which bean to inject automatically and throws an exception. Developers can resolve this using @Qualifier or by marking one bean as @Primary."
    },
    
    {
    question: "What is @Qualifier?",
    answer: "@Qualifier allows developers to specify exactly which bean should be injected when multiple candidate beans of the same type are available."
    },
    
    {
    question: "What is @Primary?",
    answer: "@Primary marks a bean as the default choice for dependency injection when multiple implementations of the same type exist."
    },
    
    {
    question: "What are Bean Scopes in Spring?",
    answer: "Bean scope determines how many bean instances Spring creates and how long they live. Common scopes include Singleton, Prototype, Request, Session and Application."
    },
    
    {
    question: "What is Singleton Scope in Spring?",
    answer: "Singleton is the default bean scope in Spring. Only one instance of the bean is created for the entire Spring container, and all requests receive the same instance."
    },
    
    {
    question: "What is Prototype Scope?",
    answer: "Prototype scope creates a new bean instance every time the bean is requested from the container. It is useful when objects maintain request-specific state."
    },
    
    {
    question: "What is the Spring Bean Lifecycle?",
    answer: "The lifecycle typically includes bean instantiation, dependency injection, initialization callbacks, business usage and destruction callbacks when the container shuts down."
    },
    
    {
    question: "What is BeanPostProcessor?",
    answer: "BeanPostProcessor allows custom logic to be executed before and after bean initialization. Many Spring features such as AOP, transactions and proxy creation rely on BeanPostProcessors internally."
    },
    
    {
    question: "What is Lazy Initialization?",
    answer: "By default, singleton beans are created during application startup. Lazy Initialization delays bean creation until the bean is actually requested, which can reduce startup time and resource consumption."
    },
    
    {
    question: "What is Circular Dependency in Spring?",
    answer: "A circular dependency occurs when Bean A depends on Bean B and Bean B depends on Bean A. Constructor-based circular dependencies cannot be resolved automatically by Spring and usually indicate a design problem."
    },
    
    {
    question: "How would you explain Spring Core in an architect interview?",
    answer: "Spring Core is fundamentally a dependency management framework. Its greatest value is not the annotations themselves but the ability to build loosely coupled, testable and maintainable applications through IoC, Dependency Injection and container-managed object lifecycles."
    }
    
    ];