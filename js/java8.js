data["Java 8 Features"] = [

    {
    question: "What were the major features introduced in Java 8?",
    answer: "Java 8 introduced Lambda Expressions, Functional Interfaces, Stream API, Method References, Optional, Default Methods, Static Interface Methods, Date and Time API and several performance improvements."
    },
    
    {
    question: "Why is Java 8 considered a major release?",
    answer: "Java 8 introduced functional programming concepts into Java, significantly changing how developers write collection processing, concurrent code and reusable APIs."
    },
    
    {
    question: "What is Functional Programming?",
    answer: "Functional programming focuses on functions as first-class concepts, minimizing mutable state and emphasizing declarative programming rather than imperative programming."
    },
    
    {
    question: "What is a Lambda Expression?",
    answer: "A lambda expression is an anonymous function that can be passed as an argument, returned from a method or assigned to a variable. It provides a concise way to represent behavior."
    },
    
    {
    question: "Why were Lambda Expressions introduced?",
    answer: "Lambda expressions reduce boilerplate code and make it easier to implement functional interfaces and process collections using functional programming techniques."
    },
    
    {
    question: "What is the basic syntax of a Lambda Expression?",
    answer: "A lambda expression consists of parameters, an arrow operator and a body. The parameters define input values and the body contains the implementation logic."
    },
    
    {
    question: "What is a Functional Interface?",
    answer: "A functional interface is an interface that contains exactly one abstract method. It can have multiple default and static methods."
    },
    
    {
    question: "What is the purpose of the @FunctionalInterface annotation?",
    answer: "The annotation indicates that the interface is intended to be a functional interface. The compiler validates that only one abstract method exists."
    },
    
    {
    question: "Can a Functional Interface contain default methods?",
    answer: "Yes. A functional interface can contain any number of default and static methods as long as it has exactly one abstract method."
    },
    
    {
    question: "What is a Method Reference?",
    answer: "A method reference is a shorthand form of a lambda expression that directly refers to an existing method using the double colon operator."
    },
    
    {
    question: "Why use Method References instead of Lambdas?",
    answer: "Method references improve readability when a lambda expression simply calls an existing method without adding additional logic."
    },
    
    {
    question: "What are the different types of Method References?",
    answer: "Method references can refer to static methods, instance methods of a particular object, instance methods of an arbitrary object of a specific type and constructors."
    },
    
    {
    question: "What are Default Methods in interfaces?",
    answer: "Default methods allow interfaces to provide method implementations. This helps add new functionality to existing interfaces without breaking existing implementations."
    },
    
    {
    question: "Why were Default Methods introduced?",
    answer: "They were introduced primarily to support backward compatibility when enhancing existing interfaces such as Collection and List."
    },
    
    {
    question: "What are Static Methods in interfaces?",
    answer: "Java 8 allows interfaces to define static methods that belong to the interface itself rather than implementing classes."
    },
    
    {
    question: "How are Static Methods in interfaces different from Default Methods?",
    answer: "Default methods are inherited by implementing classes, while static methods belong to the interface and must be called using the interface name."
    },
    
    {
    question: "What is Optional in Java 8?",
    answer: "Optional is a container object that may or may not contain a value. It helps reduce the risk of NullPointerException by explicitly representing the absence of a value."
    },
    
    {
    question: "Why was Optional introduced?",
    answer: "Optional encourages developers to handle missing values explicitly instead of relying on null checks throughout the codebase."
    },
    
    {
    question: "Can Optional completely eliminate NullPointerException?",
    answer: "No. Optional reduces the likelihood of NullPointerException when used properly, but null values can still exist elsewhere in the application."
    },
    
    {
    question: "When should Optional be used?",
    answer: "Optional is commonly used as a method return type when a value may or may not be present. It is generally not recommended for entity fields or method parameters."
    },

    {
    question: "What is Stream API?",
    answer: "Stream API provides a declarative way to process collections of data. It allows filtering, mapping, sorting, grouping and aggregation operations in a concise and readable manner."
    },
    
    {
    question: "Why was Stream API introduced?",
    answer: "Stream API was introduced to simplify collection processing, reduce boilerplate code and enable functional-style programming."
    },
    
    {
    question: "What is the difference between Collection and Stream?",
    answer: "A Collection stores data, whereas a Stream processes data. Streams do not store elements and operate on data sources such as collections, arrays or files."
    },
    
    {
    question: "What is lazy evaluation in Streams?",
    answer: "Intermediate stream operations are not executed immediately. They are evaluated only when a terminal operation is invoked, improving efficiency."
    },
    
    {
    question: "What are intermediate operations in Streams?",
    answer: "Intermediate operations transform a stream and return another stream. Examples include filter(), map(), sorted() and distinct()."
    },
    
    {
    question: "What are terminal operations in Streams?",
    answer: "Terminal operations produce a result or side effect and end the stream pipeline. Examples include collect(), count(), reduce() and forEach()."
    },
    
    {
    question: "What is a Parallel Stream?",
    answer: "A Parallel Stream divides work across multiple threads using the ForkJoinPool framework, allowing data processing to occur concurrently."
    },
    
    {
    question: "When should Parallel Streams be used?",
    answer: "Parallel Streams are useful for CPU-intensive operations on large datasets where tasks can be executed independently."
    },
    
    {
    question: "What are the risks of using Parallel Streams?",
    answer: "Parallel Streams can introduce thread contention, increased memory usage and unpredictable performance if the workload is small or not suitable for parallel execution."
    },
    
    {
    question: "What is the new Date and Time API introduced in Java 8?",
    answer: "Java 8 introduced the java.time package containing classes such as LocalDate, LocalTime, LocalDateTime, Instant and ZonedDateTime."
    },
    
    {
    question: "Why was the old Date API replaced?",
    answer: "The old Date and Calendar APIs were mutable, difficult to use and not thread-safe. The new API provides immutability, clarity and better design."
    },
    
    {
    question: "What is LocalDate?",
    answer: "LocalDate represents a date without time or timezone information. It is commonly used for birthdays, holidays and business dates."
    },
    
    {
    question: "What is LocalTime?",
    answer: "LocalTime represents time without date or timezone information. It is useful for representing schedules and daily timings."
    },
    
    {
    question: "What is LocalDateTime?",
    answer: "LocalDateTime combines both date and time information without timezone support."
    },
    
    {
    question: "What is ZonedDateTime?",
    answer: "ZonedDateTime represents date and time along with timezone information, making it suitable for global applications."
    },
    
    {
    question: "What is Nashorn?",
    answer: "Nashorn is a JavaScript engine introduced in Java 8 that allows Java applications to execute JavaScript code within the JVM."
    },
    
    {
    question: "What is CompletableFuture?",
    answer: "CompletableFuture is an enhancement over Future that supports asynchronous programming, chaining operations and non-blocking workflows."
    },
    
    {
    question: "What are the advantages of CompletableFuture?",
    answer: "CompletableFuture supports asynchronous execution, task composition, exception handling and callback-based processing, making concurrent programming easier."
    },
    
    {
    question: "What collection enhancements were introduced in Java 8?",
    answer: "Java 8 introduced methods such as forEach(), removeIf(), replaceAll(), computeIfAbsent() and enhancements to Map and Collection interfaces."
    },
    
    {
    question: "How did Java 8 improve application performance?",
    answer: "Java 8 improved performance through Stream API optimizations, Parallel Streams, JVM enhancements, better garbage collection support and functional programming constructs."
    }
    
    ];