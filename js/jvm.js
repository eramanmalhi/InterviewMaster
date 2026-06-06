data["JVM Internals"] = [

    {
    question: "What is JVM?",
    answer: "JVM, or Java Virtual Machine, is the runtime environment responsible for loading, verifying and executing Java bytecode. It provides platform independence, memory management and garbage collection."
    },
    
    {
    question: "What are the main components of JVM?",
    answer: "The JVM consists of the Class Loader Subsystem, Runtime Data Areas, Execution Engine, Native Interface and Native Libraries."
    },
    
    {
    question: "What is JVM Architecture?",
    answer: "JVM Architecture refers to the internal structure of the JVM including class loading, memory areas, execution engine and garbage collection mechanisms that work together to execute Java programs."
    },
    
    {
    question: "What is the Class Loader Subsystem?",
    answer: "The Class Loader Subsystem is responsible for loading class files into memory when they are required by the application."
    },
    
    {
    question: "What are the different Class Loaders in Java?",
    answer: "The main class loaders are Bootstrap ClassLoader, Platform ClassLoader and Application ClassLoader."
    },
    
    {
    question: "What is Bootstrap ClassLoader?",
    answer: "Bootstrap ClassLoader is the parent of all class loaders. It loads core Java classes such as those from java.lang and java.util packages."
    },
    
    {
    question: "What is Application ClassLoader?",
    answer: "Application ClassLoader loads classes that are present in the application's classpath."
    },
    
    {
    question: "What is Parent Delegation Model?",
    answer: "The Parent Delegation Model ensures that a class loader first delegates class loading requests to its parent before attempting to load the class itself."
    },
    
    {
    question: "Why is Parent Delegation important?",
    answer: "It prevents duplicate class loading, improves security and ensures that core Java classes cannot be accidentally replaced by application classes."
    },
    
    {
    question: "What are Runtime Data Areas in JVM?",
    answer: "Runtime Data Areas are memory regions used by the JVM during execution. They include Heap, Stack, Method Area, Program Counter Register and Native Method Stack."
    },
    
    {
    question: "What is Heap Memory?",
    answer: "Heap is the runtime memory area where objects and arrays are allocated. It is shared among all threads and managed by the Garbage Collector."
    },
    
    {
    question: "What is Stack Memory?",
    answer: "Stack memory stores method calls, local variables and partial results. Each thread has its own JVM stack."
    },
    
    {
    question: "What is the Method Area?",
    answer: "The Method Area stores class metadata, runtime constant pools, method information and static variables."
    },
    
    {
    question: "What is Program Counter Register?",
    answer: "The Program Counter Register stores the address of the current JVM instruction being executed by a thread."
    },
    
    {
    question: "What is Native Method Stack?",
    answer: "Native Method Stack stores information related to native methods written in languages such as C or C++."
    },
    
    {
    question: "What is the Execution Engine?",
    answer: "The Execution Engine executes bytecode loaded into memory. It includes the Interpreter, JIT Compiler and Garbage Collector."
    },
    
    {
    question: "What is the Interpreter in JVM?",
    answer: "The Interpreter reads and executes bytecode instruction by instruction. While simple, repeated interpretation can be slower for frequently executed code."
    },
    
    {
    question: "What is JIT Compiler?",
    answer: "JIT, or Just-In-Time Compiler, identifies frequently executed code and converts bytecode into native machine code to improve performance."
    },
    
    {
    question: "What is the difference between Interpreter and JIT Compiler?",
    answer: "The Interpreter executes bytecode line by line, while the JIT Compiler converts frequently used bytecode into machine code for faster execution."
    },
    
    {
    question: "What are the phases of Class Loading?",
    answer: "Class loading typically involves Loading, Linking and Initialization. Linking itself includes Verification, Preparation and Resolution."
    },

    {
    question: "What is Verification in the Class Loading process?",
    answer: "Verification ensures that the loaded bytecode follows JVM specifications and does not violate security or memory access rules. Invalid bytecode is rejected before execution."
    },
    
    {
    question: "What is Preparation in the Class Loading process?",
    answer: "Preparation allocates memory for static variables and initializes them with default values. Actual assignments specified in code happen later during initialization."
    },
    
    {
    question: "What is Resolution in the Class Loading process?",
    answer: "Resolution converts symbolic references present in the constant pool into direct memory references that the JVM can use during execution."
    },
    
    {
    question: "What is Initialization in the Class Loading process?",
    answer: "Initialization executes static variable assignments and static blocks in the order they appear in the class."
    },
    
    {
    question: "What is Metaspace?",
    answer: "Metaspace is the memory area introduced in Java 8 to store class metadata. Unlike PermGen, Metaspace uses native memory and can grow dynamically when required."
    },
    
    {
    question: "Why was PermGen removed in Java 8?",
    answer: "PermGen had a fixed size and often caused OutOfMemoryError issues. Metaspace removed this limitation by using native memory instead of a fixed JVM memory region."
    },
    
    {
    question: "What is TLAB in JVM?",
    answer: "TLAB, or Thread Local Allocation Buffer, is a small memory area allocated to each thread inside the Young Generation. It reduces contention when multiple threads create objects simultaneously."
    },
    
    {
    question: "What is Escape Analysis?",
    answer: "Escape Analysis is a JVM optimization technique used to determine whether an object can be accessed outside a method or thread. If not, certain optimizations can be applied."
    },
    
    {
    question: "What optimizations are possible through Escape Analysis?",
    answer: "Escape Analysis enables stack allocation, lock elimination and scalar replacement, reducing memory allocation and synchronization overhead."
    },
    
    {
    question: "What are Compressed OOPs?",
    answer: "Compressed Ordinary Object Pointers are a JVM optimization that reduces memory consumption by storing object references in a compressed format rather than full 64-bit pointers."
    },
    
    {
    question: "What is JNI?",
    answer: "JNI, or Java Native Interface, allows Java code to interact with native code written in languages such as C and C++."
    },
    
    {
    question: "What is a Memory Leak in Java?",
    answer: "A memory leak occurs when objects are no longer needed but remain reachable through references, preventing Garbage Collection and causing unnecessary memory consumption."
    },
    
    {
    question: "What is OutOfMemoryError?",
    answer: "OutOfMemoryError occurs when the JVM cannot allocate additional memory because the required memory area is exhausted and garbage collection cannot free sufficient space."
    },
    
    {
    question: "What is StackOverflowError?",
    answer: "StackOverflowError occurs when the JVM stack exceeds its limit, usually due to deep or infinite recursion causing excessive stack frame creation."
    },
    
    {
    question: "What are some JVM tuning best practices?",
    answer: "Monitor heap usage, choose appropriate garbage collectors, size heap memory correctly, avoid excessive object creation, analyze GC logs and profile applications regularly to identify performance bottlenecks."
    }
    
    ];