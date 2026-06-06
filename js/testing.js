data["Testing (JUnit & Mockito)"] = [

    {
    question: "Why is testing important in software development?",
    answer: "Testing helps identify defects before software reaches production. More importantly, it gives teams confidence to refactor, enhance and deploy applications frequently without breaking existing functionality."
    },
    
    {
    question: "What is Unit Testing?",
    answer: "Unit Testing focuses on verifying a small piece of functionality in isolation, usually a single class or method. The goal is to validate business logic without involving external dependencies such as databases, APIs or messaging systems."
    },
    
    {
    question: "What is Integration Testing?",
    answer: "Integration Testing verifies that multiple components work correctly together. Examples include testing service-to-database interactions, REST endpoints or message-driven workflows."
    },
    
    {
    question: "What is the difference between Unit Testing and Integration Testing?",
    answer: "Unit tests are fast, isolated and focused on individual components. Integration tests validate interactions between components and provide greater confidence that the system behaves correctly in realistic environments."
    },
    
    {
    question: "What is JUnit?",
    answer: "JUnit is the most widely used testing framework in the Java ecosystem. It provides annotations, assertions and execution capabilities for writing and running automated tests."
    },
    
    {
    question: "What is JUnit 5 and why is it significant?",
    answer: "JUnit 5 introduced a modular architecture, improved extension mechanisms, better assertions and more flexible test execution capabilities. It is the standard choice for modern Java applications."
    },
    
    {
    question: "What is Mockito?",
    answer: "Mockito is a mocking framework used to create test doubles for dependencies. It allows developers to isolate the unit under test without requiring real implementations of external components."
    },
    
    {
    question: "What is the difference between a Mock and a Spy?",
    answer: "A Mock is a completely simulated object whose behavior is explicitly defined in tests. A Spy wraps a real object and allows selective stubbing while preserving actual behavior for other methods."
    },
    
    {
    question: "Why should external dependencies be mocked in Unit Tests?",
    answer: "Mocking keeps tests fast, deterministic and independent of external systems. Unit tests should fail only because of issues in the code being tested, not because a database or network service is unavailable."
    },
    
    {
    question: "What is Test-Driven Development (TDD)?",
    answer: "TDD is a development approach where tests are written before implementation code. Developers follow the cycle of writing a failing test, implementing the functionality and then refactoring while keeping tests green."
    },
    
    {
    question: "What is Code Coverage?",
    answer: "Code Coverage measures how much application code is executed during testing. While useful as an indicator, high coverage does not automatically mean high-quality tests."
    },
    
    {
    question: "What is TestContainers?",
    answer: "TestContainers is a testing library that starts real infrastructure components such as databases, Kafka brokers and Redis instances inside Docker containers during test execution. This provides realistic integration testing environments."
    },
    
    {
    question: "What is Contract Testing?",
    answer: "Contract Testing verifies that communication between services follows agreed interfaces and expectations. It helps detect integration issues early without requiring all services to run together."
    },
    
    {
    question: "What is the Testing Pyramid?",
    answer: "The Testing Pyramid recommends having many unit tests, fewer integration tests and even fewer end-to-end tests. This approach balances execution speed, maintenance effort and confidence."
    },
    
    {
    question: "How would you define a good testing strategy in an architect interview?",
    answer: "A good testing strategy combines fast unit tests, meaningful integration tests and a limited number of end-to-end tests. The goal is not maximum coverage but maximum confidence. Effective testing should detect defects early, support continuous delivery and provide rapid feedback to development teams."
    }
    
    ];