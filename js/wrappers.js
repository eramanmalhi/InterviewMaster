data["Wrapper Classes & Autoboxing"] = [

    {
    question: "What are Wrapper Classes in Java?",
    answer: "Wrapper classes are object representations of primitive data types. They allow primitives to be used where objects are required. Examples include Integer, Long, Double, Float, Character and Boolean."
    },
    
    {
    question: "Why do we need Wrapper Classes?",
    answer: "Many Java APIs and collections work only with objects and not primitive types. Wrapper classes allow primitive values to be stored in collections, passed to generic methods and used in object-oriented features."
    },
    
    {
    question: "What is Autoboxing?",
    answer: "Autoboxing is the automatic conversion of a primitive type into its corresponding wrapper object by the Java compiler. For example, int can automatically be converted to Integer."
    },
    
    {
    question: "What is Unboxing?",
    answer: "Unboxing is the automatic conversion of a wrapper object into its corresponding primitive type. For example, Integer can automatically be converted to int."
    },
    
    {
    question: "What is the difference between parseInt() and valueOf()?",
    answer: "parseInt() returns a primitive int, whereas valueOf() returns an Integer object. Both convert a String into a numeric value but return different types."
    },
    
    {
    question: "What is Integer Cache in Java?",
    answer: "Java maintains an internal cache for Integer values ranging from -128 to 127. When Integer objects within this range are created using autoboxing or valueOf(), the cached objects are reused."
    },
    
    {
    question: "Why does Integer a = 100; Integer b = 100; return true with ==?",
    answer: "Since 100 falls within the Integer cache range of -128 to 127, both variables point to the same cached object. Therefore == returns true."
    },
    
    {
    question: "Why does Integer a = 200; Integer b = 200; return false with ==?",
    answer: "The value 200 is outside the default Integer cache range. Separate Integer objects are created, so == compares different references and returns false."
    },
    
    {
    question: "Can autoboxing cause NullPointerException?",
    answer: "Yes. If a wrapper object containing null is automatically unboxed into a primitive, the JVM throws a NullPointerException because it cannot convert null into a primitive value."
    },
    
    {
    question: "What is the difference between primitive types and wrapper classes?",
    answer: "Primitive types store actual values and are more memory efficient and faster. Wrapper classes store objects, provide utility methods and can be used wherever objects are required."
    }
    
    ];