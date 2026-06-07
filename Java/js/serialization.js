data["Serialization & Deserialization"] = [

    {
    question: "What is Serialization in Java?",
    answer: "Serialization is the process of converting an object's state into a byte stream so that it can be stored in a file, transferred over a network or persisted for later use."
    },
    
    {
    question: "What is Deserialization?",
    answer: "Deserialization is the process of reconstructing an object from a serialized byte stream and restoring its state into memory."
    },
    
    {
    question: "Why is Serialization used?",
    answer: "Serialization is used for object persistence, caching, distributed systems, remote communication and transferring objects between applications."
    },
    
    {
    question: "What is the Serializable interface?",
    answer: "Serializable is a marker interface provided by Java. A class must implement Serializable to indicate that its objects can be serialized."
    },
    
    {
    question: "Why is Serializable called a marker interface?",
    answer: "Serializable does not contain any methods or constants. It simply provides metadata to the JVM indicating that objects of the class can participate in serialization."
    },
    
    {
    question: "What happens if a class does not implement Serializable?",
    answer: "Attempting to serialize an object of such a class results in NotSerializableException."
    },
    
    {
    question: "What is serialVersionUID?",
    answer: "serialVersionUID is a unique version identifier used during serialization and deserialization to verify compatibility between the sender and receiver versions of a class."
    },
    
    {
    question: "Why should serialVersionUID be explicitly declared?",
    answer: "Explicit declaration prevents unexpected InvalidClassException issues when class definitions change between serialization and deserialization operations."
    },
    
    {
    question: "What is the transient keyword?",
    answer: "The transient keyword prevents a field from being serialized. During deserialization, transient fields are assigned default values."
    },
    
    {
    question: "When should transient fields be used?",
    answer: "Transient fields are commonly used for sensitive information such as passwords, temporary calculations, cached values and non-serializable resources."
    },
    
    {
    question: "What is Externalizable?",
    answer: "Externalizable is an interface that provides complete control over the serialization and deserialization process through writeExternal() and readExternal() methods."
    },
    
    {
    question: "What is the difference between Serializable and Externalizable?",
    answer: "Serializable uses default JVM serialization mechanisms with minimal effort. Externalizable requires explicit implementation and gives full control over what gets serialized."
    },
    
    {
    question: "Can constructors be called during deserialization?",
    answer: "For Serializable objects, constructors are generally not invoked during deserialization. The JVM recreates the object directly from the serialized data. However, parent class constructors may execute if they are not Serializable."
    },
    
    {
    question: "Can Serialization be used for deep copying?",
    answer: "Yes. An object can be serialized and then deserialized to create a deep copy, provided all nested objects are also serializable."
    },
    
    {
    question: "What are the disadvantages of Java Serialization?",
    answer: "Java Serialization can be slower than alternative formats, may create compatibility challenges, increases security risks when handling untrusted data and is often replaced by JSON, Protocol Buffers or Avro in modern distributed systems."
    }
    
    ];