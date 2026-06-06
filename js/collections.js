data["Collections Framework"] = [

    {
    question: "What is the Collections Framework in Java?",
    answer: "The Collections Framework is a set of interfaces, implementations and algorithms that provide reusable data structures for storing and manipulating groups of objects."
    },
    
    {
    question: "What are the main interfaces in the Collections Framework?",
    answer: "The primary interfaces are Collection, List, Set, Queue, Deque and Map. Map is part of the framework but does not inherit from Collection."
    },
    
    {
    question: "What is the difference between Collection and Collections?",
    answer: "Collection is an interface representing a group of objects. Collections is a utility class that provides static methods such as sorting, searching and synchronization helpers."
    },
    
    {
    question: "What is the difference between Collection and Map?",
    answer: "Collection stores individual elements, while Map stores key-value pairs. Map does not extend the Collection interface."
    },
    
    {
    question: "What is a List in Java?",
    answer: "List is an ordered collection that allows duplicate elements and maintains insertion order. Examples include ArrayList, LinkedList and Vector."
    },
    
    {
    question: "What is a Set in Java?",
    answer: "Set is a collection that does not allow duplicate elements. Examples include HashSet, LinkedHashSet and TreeSet."
    },
    
    {
    question: "What is a Queue in Java?",
    answer: "Queue is a collection designed for holding elements before processing. It generally follows FIFO, meaning First In First Out."
    },
    
    {
    question: "What is the difference between List and Set?",
    answer: "List allows duplicates and preserves insertion order. Set does not allow duplicates and may or may not preserve insertion order depending on the implementation."
    },
    
    {
    question: "What is ArrayList?",
    answer: "ArrayList is a resizable array implementation of the List interface. It provides fast random access and is one of the most commonly used collections."
    },
    
    {
    question: "How does ArrayList work internally?",
    answer: "ArrayList internally uses a dynamic array. When capacity is exceeded, a larger array is created and existing elements are copied into the new array."
    },
    
    {
    question: "What is the default capacity of ArrayList?",
    answer: "In modern Java versions, the internal array is initially empty and grows to a default capacity of 10 when the first element is added."
    },
    
    {
    question: "What is the time complexity of ArrayList operations?",
    answer: "Access by index is O(1). Adding at the end is usually O(1). Searching is O(n). Inserting or deleting in the middle is O(n) because elements must be shifted."
    },
    
    {
    question: "What is LinkedList?",
    answer: "LinkedList is a doubly linked list implementation of List and Deque. Each element stores references to both previous and next nodes."
    },
    
    {
    question: "How does LinkedList work internally?",
    answer: "LinkedList stores elements as nodes connected through references. Each node contains data and pointers to neighboring nodes."
    },
    
    {
    question: "What is the time complexity of LinkedList operations?",
    answer: "Insertion and deletion at known positions are O(1). Access by index is O(n) because traversal is required."
    },
    
    {
    question: "What is the difference between ArrayList and LinkedList?",
    answer: "ArrayList provides fast random access but slower insertions and deletions in the middle. LinkedList provides efficient insertions and deletions but slower random access."
    },
    
    {
    question: "When should you choose ArrayList over LinkedList?",
    answer: "ArrayList is preferred when frequent reads and random access operations are required because it provides constant-time index access."
    },
    
    {
    question: "When should you choose LinkedList over ArrayList?",
    answer: "LinkedList is useful when frequent insertions and deletions occur in the middle of the collection and random access is not important."
    },
    
    {
    question: "What is Vector?",
    answer: "Vector is a legacy dynamic array implementation similar to ArrayList but with synchronized methods, making it thread-safe."
    },
    
    {
    question: "What is the difference between Vector and ArrayList?",
    answer: "Vector is synchronized and thread-safe, whereas ArrayList is not synchronized and generally performs better in single-threaded environments."
    },
    
    {
    question: "What is Stack in Java?",
    answer: "Stack is a legacy class that extends Vector and follows the Last In First Out principle. Common operations include push, pop and peek."
    },
    
    {
    question: "Why is ArrayDeque preferred over Stack?",
    answer: "ArrayDeque provides better performance, cleaner design and avoids the synchronization overhead inherited from Vector-based Stack."
    },
    
    {
    question: "What is HashSet?",
    answer: "HashSet is a Set implementation that stores unique elements and internally uses a HashMap for storage."
    },
    
    {
    question: "How does HashSet work internally?",
    answer: "HashSet internally stores elements as keys in a HashMap. The value associated with each key is a dummy constant object."
    },
    
    {
    question: "Does HashSet maintain insertion order?",
    answer: "No. HashSet does not guarantee insertion order because element placement depends on hash values and bucket locations."
    },

    {
    question: "What is LinkedHashSet?",
    answer: "LinkedHashSet is a HashSet implementation that maintains insertion order while still preventing duplicate elements."
    },
    
    {
    question: "How does LinkedHashSet maintain insertion order?",
    answer: "LinkedHashSet internally uses a linked list along with a hash table. The linked list preserves the order in which elements are inserted."
    },
    
    {
    question: "What is TreeSet?",
    answer: "TreeSet is a Set implementation that stores unique elements in sorted order. It internally uses a TreeMap based on a Red-Black Tree."
    },
    
    {
    question: "What is the time complexity of TreeSet operations?",
    answer: "Search, insertion and deletion operations in TreeSet typically take O(log n) time because it is backed by a balanced tree structure."
    },
    
    {
    question: "What is the difference between HashSet, LinkedHashSet and TreeSet?",
    answer: "HashSet provides the best performance but no ordering. LinkedHashSet maintains insertion order. TreeSet maintains sorted order."
    },
    
    {
    question: "What is HashMap?",
    answer: "HashMap is a key-value data structure that stores data using hashing. It allows one null key and multiple null values and does not guarantee ordering."
    },
    
    {
    question: "How does HashMap work internally?",
    answer: "HashMap calculates the hash of a key, determines the bucket location and stores the key-value pair in that bucket. If multiple keys map to the same bucket, collision handling mechanisms are used."
    },
    
    {
    question: "What is a hash collision?",
    answer: "A hash collision occurs when two different keys produce the same bucket location in a hash-based data structure."
    },
    
    {
    question: "How does HashMap handle collisions?",
    answer: "HashMap handles collisions using linked lists and, in Java 8 and later, converts heavily populated buckets into balanced trees for better performance."
    },
    
    {
    question: "What changed in HashMap in Java 8?",
    answer: "When the number of entries in a bucket exceeds a threshold, the linked list is converted into a Red-Black Tree. This improves worst-case lookup performance from O(n) to O(log n)."
    },
    
    {
    question: "Can HashMap have null keys and null values?",
    answer: "Yes. HashMap allows one null key and multiple null values."
    },
    
    {
    question: "What is LinkedHashMap?",
    answer: "LinkedHashMap is a HashMap implementation that maintains insertion order using a doubly linked list."
    },
    
    {
    question: "What is TreeMap?",
    answer: "TreeMap stores key-value pairs in sorted order of keys. It is implemented using a Red-Black Tree."
    },
    
    {
    question: "What is Hashtable?",
    answer: "Hashtable is a legacy synchronized key-value collection. Unlike HashMap, it does not allow null keys or null values."
    },
    
    {
    question: "What is the difference between HashMap and Hashtable?",
    answer: "HashMap is not synchronized and allows one null key and multiple null values. Hashtable is synchronized and does not allow null keys or values."
    },
    
    {
    question: "What is ConcurrentHashMap?",
    answer: "ConcurrentHashMap is a thread-safe implementation of Map designed for high concurrency. It allows multiple threads to perform read and write operations efficiently."
    },
    
    {
    question: "What is the difference between HashMap and ConcurrentHashMap?",
    answer: "HashMap is not thread-safe. ConcurrentHashMap supports concurrent access with much better performance than synchronizing an entire HashMap."
    },
    
    {
    question: "What is Comparable?",
    answer: "Comparable is an interface used to define the natural ordering of objects. It contains the compareTo() method."
    },
    
    {
    question: "What is Comparator?",
    answer: "Comparator is an interface used to define custom sorting logic separate from the class being sorted. It contains the compare() method."
    },
    
    {
    question: "What is the difference between Comparable and Comparator?",
    answer: "Comparable defines natural ordering within the class itself using compareTo(). Comparator defines external custom sorting logic using compare()."
    }
    
    ];