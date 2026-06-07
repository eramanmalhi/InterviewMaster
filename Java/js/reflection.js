data["Reflection API"] = [

    {
    question: "What is Reflection in Java?",
    answer: "Reflection is a feature that allows a Java program to inspect and manipulate classes, methods, fields and constructors at runtime, even if their details were not known during compilation."
    },
    
    {
    question: "Why is Reflection used?",
    answer: "Reflection is used when applications need dynamic behavior such as discovering classes, invoking methods, creating objects or processing annotations at runtime."
    },
    
    {
    question: "How can we obtain a Class object in Java?",
    answer: "A Class object can be obtained using Class.forName(), the .class syntax or the getClass() method on an existing object."
    },
    
    {
    question: "What information can be obtained using Reflection?",
    answer: "Reflection can retrieve class names, package information, fields, methods, constructors, annotations, modifiers and inheritance details."
    },
    
    {
    question: "How can Reflection be used to create objects dynamically?",
    answer: "Reflection can access constructors at runtime and create objects without directly using the new keyword."
    },
    
    {
    question: "How can Reflection invoke methods dynamically?",
    answer: "Reflection can locate methods by name and parameter types, then execute them using runtime method invocation APIs."
    },
    
    {
    question: "Can Reflection access private fields and methods?",
    answer: "Yes. Reflection can access private members by overriding normal access checks, although this should be used carefully because it breaks encapsulation."
    },
    
    {
    question: "How do frameworks such as Spring and Hibernate use Reflection?",
    answer: "Spring uses Reflection for dependency injection, bean creation and annotation processing. Hibernate uses it for entity mapping, object creation and field access."
    },
    
    {
    question: "What are the disadvantages of Reflection?",
    answer: "Reflection introduces performance overhead, reduces compile-time safety, increases complexity and can bypass encapsulation, making code harder to maintain."
    },
    
    {
    question: "What are some common use cases of Reflection?",
    answer: "Common use cases include dependency injection frameworks, ORM frameworks, annotation processing, testing frameworks, plugin architectures and dynamic object creation."
    }
    
    ];