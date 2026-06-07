data["String & String Pool"] = [

    {
    question: "What is String in Java?",
    answer: "String is a class in Java used to represent a sequence of characters. It is one of the most commonly used classes and is immutable, meaning its value cannot be changed after creation."
    },
    
    {
    question: "Why is String immutable in Java?",
    answer: "String is immutable to improve security, thread safety, caching and performance. Since the value cannot change after creation, the JVM can safely share String objects through the String Pool."
    },
    
    {
    question: "What is the String Constant Pool?",
    answer: "The String Constant Pool, also called String Pool, is a special memory area where the JVM stores String literals. If the same literal already exists, the JVM reuses the existing object instead of creating a new one."
    },
    
    {
    question: "What is the difference between creating a String using a literal and using new?",
    answer: "A String literal may be stored in the String Pool and reused. Using the new keyword always creates a new object in heap memory regardless of whether the same value already exists."
    },
    
    {
    question: "What happens when we write String s = \"Java\"?",
    answer: "The JVM checks the String Pool. If the value already exists, it returns the existing reference. Otherwise, a new String object is created in the pool."
    },
    
    {
    question: "What happens when we write String s = new String(\"Java\")?",
    answer: "The literal 'Java' may exist in the String Pool, but the new keyword forces the JVM to create an additional String object in heap memory."
    },
    
    {
    question: "What is the difference between == and equals() for Strings?",
    answer: "The == operator compares references, while equals() compares actual content. Two String objects with the same text may return false with == but true with equals()."
    },
    
    {
    question: "What is the intern() method?",
    answer: "The intern() method places a String into the String Pool if it is not already present and returns the pooled reference. It helps reduce duplicate String objects."
    },
    
    {
    question: "What is StringBuilder?",
    answer: "StringBuilder is a mutable sequence of characters used for efficient String manipulation. Unlike String, its contents can be modified without creating new objects."
    },
    
    {
    question: "What is StringBuffer?",
    answer: "StringBuffer is similar to StringBuilder but is thread-safe because its methods are synchronized."
    },
    
    {
    question: "What is the difference between StringBuilder and StringBuffer?",
    answer: "StringBuilder is faster because it is not synchronized. StringBuffer is thread-safe but slightly slower due to synchronization overhead."
    },
    
    {
    question: "When should you use StringBuilder instead of String?",
    answer: "StringBuilder should be used when performing multiple String modifications such as concatenation inside loops because it avoids creating many temporary String objects."
    },
    
    {
    question: "Why is String concatenation inside loops considered inefficient?",
    answer: "Since String is immutable, every concatenation creates a new String object. In large loops this leads to unnecessary object creation and increased memory usage."
    },
    
    {
    question: "Can String be subclassed?",
    answer: "No. String is declared as final, so it cannot be extended by another class."
    },
    
    {
    question: "Why is String frequently used as a HashMap key?",
    answer: "String is immutable and properly implements equals() and hashCode(). Its value cannot change after insertion, making it a reliable key for hash-based collections."
    }
    
    ];