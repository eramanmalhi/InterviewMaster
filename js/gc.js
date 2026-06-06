data["Memory Management & Garbage Collection"] = [

    {
    question: "What is Garbage Collection in Java?",
    answer: "Garbage Collection is the automatic process of identifying and removing objects that are no longer reachable by the application. It helps prevent memory leaks and reduces manual memory management."
    },
    
    {
    question: "Why does Java use Garbage Collection?",
    answer: "Java uses Garbage Collection to automatically reclaim unused memory, reduce programming errors and simplify application development."
    },
    
    {
    question: "What is Heap Memory?",
    answer: "Heap is the memory area where objects and arrays are allocated. It is shared among all threads and managed by the Garbage Collector."
    },
    
    {
    question: "How is Heap Memory typically divided?",
    answer: "Heap memory is generally divided into Young Generation and Old Generation. Most newly created objects are allocated in the Young Generation."
    },
    
    {
    question: "What is Young Generation?",
    answer: "Young Generation is the memory region where newly created objects are allocated. Since most objects die quickly, garbage collection occurs frequently in this area."
    },
    
    {
    question: "What is Eden Space?",
    answer: "Eden Space is the part of the Young Generation where new objects are initially created."
    },
    
    {
    question: "What are Survivor Spaces?",
    answer: "Survivor Spaces are memory regions within the Young Generation that temporarily hold objects which survive garbage collection cycles."
    },
    
    {
    question: "What is Old Generation?",
    answer: "Old Generation stores long-lived objects that have survived multiple garbage collection cycles in the Young Generation."
    },
    
    {
    question: "What is Object Promotion?",
    answer: "Object Promotion is the process of moving an object from the Young Generation to the Old Generation after it survives several garbage collection cycles."
    },
    
    {
    question: "What is Minor GC?",
    answer: "Minor GC is a garbage collection event that occurs in the Young Generation. It is usually fast because most objects in this area are short-lived."
    },
    
    {
    question: "What is Major GC?",
    answer: "Major GC refers to garbage collection activity involving the Old Generation. It is generally more expensive than Minor GC."
    },
    
    {
    question: "What is Full GC?",
    answer: "Full GC cleans the entire heap, including Young Generation, Old Generation and sometimes Metaspace. It is typically the most expensive garbage collection operation."
    },
    
    {
    question: "Why are Full GCs considered expensive?",
    answer: "Full GCs often pause application threads for longer durations because a larger memory area must be analyzed and reclaimed."
    },
    
    {
    question: "What is Stop-The-World?",
    answer: "Stop-The-World is an event during which application threads are paused while the Garbage Collector performs certain operations."
    },
    
    {
    question: "What is Serial Garbage Collector?",
    answer: "Serial GC uses a single thread for garbage collection activities. It is simple but not suitable for large applications requiring high throughput."
    },
    
    {
    question: "What is Parallel Garbage Collector?",
    answer: "Parallel GC uses multiple threads for garbage collection and is designed to maximize throughput in multi-core systems."
    },
    
    {
    question: "What is CMS Garbage Collector?",
    answer: "CMS, or Concurrent Mark Sweep, was designed to reduce pause times by performing much of its work concurrently with application execution."
    },
    
    {
    question: "Why was CMS eventually replaced?",
    answer: "CMS suffered from fragmentation issues and complex tuning requirements. Modern collectors such as G1 and ZGC provide better alternatives."
    },
    
    {
    question: "What is G1 Garbage Collector?",
    answer: "G1, or Garbage First, divides the heap into regions and prioritizes collecting regions containing the most garbage. It aims to provide predictable pause times."
    },
    
    {
    question: "Why is G1 the default collector in modern Java versions?",
    answer: "G1 offers a good balance between throughput and pause time, making it suitable for a wide range of applications."
    },
    
    {
    question: "What is ZGC?",
    answer: "ZGC is a low-latency garbage collector designed to keep pause times extremely short even for very large heaps."
    },
    
    {
    question: "What is Shenandoah GC?",
    answer: "Shenandoah is a low-pause-time garbage collector that performs most garbage collection work concurrently with application execution."
    },
    
    {
    question: "What is a memory leak in Java?",
    answer: "A memory leak occurs when objects that are no longer needed remain reachable through references, preventing the Garbage Collector from reclaiming their memory."
    },
    
    {
    question: "How can memory leaks occur even with Garbage Collection?",
    answer: "Garbage Collection removes only unreachable objects. If unnecessary references remain, objects stay reachable and cannot be collected."
    },
    
    {
    question: "What are some Garbage Collection tuning best practices?",
    answer: "Choose an appropriate collector, monitor GC logs, minimize unnecessary object creation, size heap memory correctly and continuously profile applications under realistic workloads."
    }
    
    ];