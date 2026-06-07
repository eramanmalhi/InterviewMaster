data["Generics"] = [

    {
    question: "What are Generics in Java?",
    answer: "Generics allow classes, interfaces and methods to operate on different data types while providing compile-time type safety. They help eliminate many runtime type casting errors."
    },
    
    {
    question: "Why were Generics introduced in Java?",
    answer: "Generics were introduced to provide stronger type checking, reduce explicit type casting and detect type-related errors during compilation rather than at runtime."
    },
    
    {
    question: "How did collections work before Generics?",
    answer: "Before Generics, collections stored objects as Object references. Developers had to manually cast objects when retrieving them, which increased the risk of ClassCastException."
    },
    
    {
    question: "What is type safety in Generics?",
    answer: "Type safety means the compiler ensures that only the specified type can be stored and retrieved. This prevents accidental insertion of incompatible object types."
    },
    
    {
    question: "What is a generic class?",
    answer: "A generic class is a class that uses one or more type parameters. For example, a Box<T> class can store any type specified during object creation."
    },
    
    {
    question: "What is a generic method?",
    answer: "A generic method declares its own type parameter and can operate on different types independently of whether the containing class is generic."
    },
    
    {
    question: "What is type erasure?",
    answer: "Type erasure is the process by which generic type information is removed during compilation. The JVM does not retain most generic type information at runtime."
    },
    
    {
    question: "Why does Java use type erasure?",
    answer: "Type erasure was introduced to maintain backward compatibility with code written before Generics were added in Java 5."
    },
    
    {
    question: "Can we create an object of a type parameter using new T()?",
    answer: "No. Due to type erasure, the actual type parameter is not available at runtime, so the compiler cannot determine which constructor to invoke."
    },
    
    {
    question: "Can Generics work with primitive types?",
    answer: "No. Generics work only with reference types. Primitive values must be wrapped using wrapper classes such as Integer, Double or Long."
    },
    
    {
    question: "What are bounded type parameters?",
    answer: "Bounded type parameters restrict the types that can be used as generic arguments. For example, T extends Number allows only Number and its subclasses."
    },
    
    {
    question: "What is an upper bounded wildcard?",
    answer: "An upper bounded wildcard uses <? extends Type>. It allows reading objects of the specified type or its subclasses but restricts adding new elements."
    },
    
    {
    question: "What is a lower bounded wildcard?",
    answer: "A lower bounded wildcard uses <? super Type>. It allows inserting objects of the specified type or its subclasses and is useful for write operations."
    },
    
    {
    question: "What is the PECS principle?",
    answer: "PECS stands for Producer Extends Consumer Super. If a collection produces data, use extends. If it consumes data, use super."
    },
    
    {
    question: "What is the difference between List<Object> and List<?>?",
    answer: "List<Object> can hold any object type and allows insertion of objects. List<?> represents a list of an unknown type and generally restricts insertion except for null."
    }
    
    ];