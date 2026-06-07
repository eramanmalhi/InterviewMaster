data["Functional Interfaces & Lambda"] = [

    {
    question: "What is a Functional Interface?",
    answer: "A Functional Interface is an interface that contains exactly one abstract method. It can have multiple default and static methods. Functional interfaces serve as the target type for lambda expressions."
    },
    
    {
    question: "What are some commonly used Functional Interfaces in Java?",
    answer: "Common functional interfaces include Predicate, Function, Consumer, Supplier, BiFunction, UnaryOperator and BinaryOperator."
    },
    
    {
    question: "What is Predicate?",
    answer: "Predicate is a functional interface that accepts one input and returns a boolean result. It is commonly used for filtering and conditional checks."
    },
    
    {
    question: "When is Predicate commonly used?",
    answer: "Predicate is frequently used with Stream API methods such as filter() where elements need to be evaluated against a condition."
    },
    
    {
    question: "What is Function?",
    answer: "Function is a functional interface that accepts one input and produces one output. It is commonly used for transformation operations."
    },
    
    {
    question: "What is Consumer?",
    answer: "Consumer is a functional interface that accepts one input and performs an operation without returning any result."
    },
    
    {
    question: "What is Supplier?",
    answer: "Supplier is a functional interface that does not accept any input and returns a value. It is commonly used for lazy object creation and value generation."
    },
    
    {
    question: "What is BiFunction?",
    answer: "BiFunction accepts two input parameters and returns a result. It is useful when a computation requires two inputs."
    },
    
    {
    question: "What is UnaryOperator?",
    answer: "UnaryOperator is a specialization of Function where the input type and output type are the same."
    },
    
    {
    question: "What is BinaryOperator?",
    answer: "BinaryOperator is a specialization of BiFunction where both input parameters and the return type are the same."
    },
    
    {
    question: "What is variable capture in Lambda Expressions?",
    answer: "Variable capture refers to a lambda expression accessing variables defined outside its scope. The captured variables must be final or effectively final."
    },
    
    {
    question: "What is an effectively final variable?",
    answer: "A variable is effectively final if its value is assigned only once and never modified afterward, even if the final keyword is not explicitly used."
    },
    
    {
    question: "Why must captured variables be effectively final?",
    answer: "This restriction prevents inconsistencies between local variables stored on the stack and lambda expressions that may execute later or in different threads."
    },
    
    {
    question: "How are Lambda Expressions implemented internally?",
    answer: "Lambda expressions are not compiled into anonymous inner classes. The JVM uses invokedynamic instructions and runtime-generated implementations for better performance and flexibility."
    },
    
    {
    question: "What are the advantages of Lambda Expressions?",
    answer: "Lambda expressions reduce boilerplate code, improve readability, enable functional programming, simplify collection processing and make APIs more expressive."
    }
    
    ];