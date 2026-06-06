data["SOLID Principles"] = [

    {
    question: "What are SOLID Principles?",
    answer: "SOLID is a set of five object-oriented design principles introduced by Robert C. Martin. These principles help developers build maintainable, scalable, flexible and loosely coupled software systems."
    },
    
    {
    question: "What does SOLID stand for?",
    answer: "SOLID stands for Single Responsibility Principle, Open Closed Principle, Liskov Substitution Principle, Interface Segregation Principle and Dependency Inversion Principle."
    },
    
    {
    question: "What is the Single Responsibility Principle (SRP)?",
    answer: "SRP states that a class should have only one reason to change. In other words, a class should focus on a single responsibility or business concern. This improves maintainability and reduces the impact of future changes."
    },
    
    {
    question: "What is a common violation of Single Responsibility Principle?",
    answer: "A class that performs business logic, database operations, validation, logging and email notifications simultaneously violates SRP because multiple independent reasons can force changes to the same class."
    },
    
    {
    question: "What is the Open Closed Principle (OCP)?",
    answer: "OCP states that software entities should be open for extension but closed for modification. New behavior should be added by extending existing code rather than modifying already tested code."
    },
    
    {
    question: "How is Open Closed Principle commonly achieved in Java?",
    answer: "OCP is commonly achieved using interfaces, abstract classes, inheritance, composition and design patterns such as Strategy, Factory and Template Method."
    },
    
    {
    question: "What is the Liskov Substitution Principle (LSP)?",
    answer: "LSP states that objects of a subclass should be replaceable with objects of the parent class without changing the correctness of the program. A child class must honor the behavior contract of its parent."
    },
    
    {
    question: "What is a classic example of Liskov Substitution Principle violation?",
    answer: "A common example is a Bird parent class with a fly() method and a Penguin subclass that cannot fly. The subclass cannot properly substitute the parent behavior, indicating a design problem."
    },
    
    {
    question: "What is the Interface Segregation Principle (ISP)?",
    answer: "ISP states that clients should not be forced to depend on methods they do not use. Instead of creating large interfaces, smaller and more focused interfaces should be designed."
    },
    
    {
    question: "What is the Dependency Inversion Principle (DIP)?",
    answer: "DIP states that high-level modules should not depend on low-level modules. Both should depend on abstractions. This principle is the foundation of Dependency Injection frameworks such as Spring and helps create loosely coupled systems."
    }
    
    ];