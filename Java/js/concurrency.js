data["Multithreading & Concurrency"] = [

    {
    question: "What is a Thread in Java?",
    answer: "A thread is the smallest unit of execution within a process. Multiple threads can run concurrently within the same application, allowing better utilization of system resources."
    },
    
    {
    question: "What is Multithreading?",
    answer: "Multithreading is the ability of a program to execute multiple threads concurrently, improving responsiveness and resource utilization."
    },
    
    {
    question: "What is the difference between a Process and a Thread?",
    answer: "A process has its own memory space and resources. Threads share the memory and resources of the process they belong to, making thread creation and communication more efficient."
    },
    
    {
    question: "What are the ways to create a Thread in Java?",
    answer: "A thread can be created by extending the Thread class or by implementing the Runnable interface. Modern applications often use ExecutorService instead of manually creating threads."
    },
    
    {
    question: "Why is implementing Runnable preferred over extending Thread?",
    answer: "Implementing Runnable allows a class to extend another class if needed, promotes better separation of concerns and works well with thread pools."
    },
    
    {
    question: "What is the lifecycle of a Thread?",
    answer: "A thread typically moves through New, Runnable, Running, Blocked, Waiting, Timed Waiting and Terminated states during its lifetime."
    },
    
    {
    question: "What is the difference between start() and run()?",
    answer: "start() creates a new thread and invokes run() internally. Calling run() directly executes the method in the current thread without creating a new thread."
    },
    
    {
    question: "What is Thread Scheduler?",
    answer: "The Thread Scheduler is a JVM component responsible for determining which runnable thread gets CPU time."
    },
    
    {
    question: "What is Thread Priority?",
    answer: "Thread priority is a hint to the scheduler about the relative importance of a thread. Higher priority threads may get preference, but behavior depends on the operating system."
    },
    
    {
    question: "What is Thread.join()?",
    answer: "join() causes the current thread to wait until the target thread completes its execution."
    },
    
    {
    question: "What is Thread.sleep()?",
    answer: "sleep() pauses the execution of the current thread for a specified duration without releasing acquired locks."
    },
    
    {
    question: "What is Thread.yield()?",
    answer: "yield() is a hint to the scheduler that the current thread is willing to pause and allow other threads of the same priority to execute."
    },
    
    {
    question: "What is a Race Condition?",
    answer: "A race condition occurs when multiple threads access and modify shared data concurrently, causing unpredictable results."
    },
    
    {
    question: "What is Thread Safety?",
    answer: "Thread safety means code behaves correctly when accessed simultaneously by multiple threads without causing inconsistent results."
    },
    
    {
    question: "What is Synchronization?",
    answer: "Synchronization is a mechanism used to control access to shared resources so that only one thread can execute critical sections at a time."
    },
    
    {
    question: "What is a synchronized method?",
    answer: "A synchronized method acquires the monitor lock of the object before execution, ensuring only one thread can execute it at a time for a given object."
    },
    
    {
    question: "What is a synchronized block?",
    answer: "A synchronized block allows synchronization on a specific object rather than the entire method, providing finer control and often better performance."
    },
    
    {
    question: "What is an Object Monitor?",
    answer: "Every Java object has an associated monitor that acts as a lock. Threads must acquire the monitor before entering synchronized code."
    },
    
    {
    question: "What is the difference between synchronized method and synchronized block?",
    answer: "A synchronized method locks the entire method, whereas a synchronized block allows locking only a specific portion of code, reducing contention."
    },
    
    {
    question: "What is Deadlock?",
    answer: "Deadlock occurs when two or more threads wait indefinitely for resources held by each other, preventing further progress."
    },
    
    {
    question: "How can Deadlock be prevented?",
    answer: "Deadlocks can be prevented by acquiring locks in a consistent order, minimizing nested locks, using lock timeouts and avoiding circular dependencies."
    },
    
    {
    question: "What is the volatile keyword?",
    answer: "volatile ensures that changes made by one thread to a variable are immediately visible to other threads. It provides visibility but not atomicity."
    },
    
    {
    question: "What is the difference between volatile and synchronized?",
    answer: "volatile guarantees visibility of changes across threads. synchronized guarantees both visibility and mutual exclusion by using locks."
    },
    
    {
    question: "What is Atomicity?",
    answer: "Atomicity means an operation is completed entirely or not at all. No other thread can observe the operation in a partially completed state."
    },
    
    {
    question: "What is Visibility in Multithreading?",
    answer: "Visibility ensures that changes made by one thread become visible to other threads. Without proper synchronization, threads may see stale values."
    },

    {
    question: "What is ReentrantLock?",
    answer: "ReentrantLock is an explicit locking mechanism provided by the java.util.concurrent package. It offers more flexibility than synchronized, including lock interruption, fairness policies and timed lock acquisition."
    },
    
    {
    question: "What is the difference between synchronized and ReentrantLock?",
    answer: "synchronized is managed by the JVM and is simpler to use. ReentrantLock provides advanced features such as tryLock(), lockInterruptibly(), fairness policies and manual lock release."
    },
    
    {
    question: "What is ReadWriteLock?",
    answer: "ReadWriteLock allows multiple threads to read simultaneously while allowing only one thread to write at a time, improving performance for read-heavy workloads."
    },
    
    {
    question: "What is Semaphore?",
    answer: "Semaphore is a synchronization utility that controls access to a limited number of resources using permits."
    },
    
    {
    question: "What is CountDownLatch?",
    answer: "CountDownLatch allows one or more threads to wait until a set of operations performed by other threads completes."
    },
    
    {
    question: "What is CyclicBarrier?",
    answer: "CyclicBarrier allows multiple threads to wait for each other at a common barrier point before proceeding together."
    },
    
    {
    question: "What is the difference between CountDownLatch and CyclicBarrier?",
    answer: "CountDownLatch can be used only once, whereas CyclicBarrier can be reused after all waiting threads reach the barrier."
    },
    
    {
    question: "What is ExecutorService?",
    answer: "ExecutorService is a framework for managing and executing asynchronous tasks using thread pools instead of manually creating threads."
    },
    
    {
    question: "Why should ExecutorService be preferred over manually creating threads?",
    answer: "ExecutorService improves resource utilization, reduces thread creation overhead, simplifies task management and supports thread pooling."
    },
    
    {
    question: "What is a Thread Pool?",
    answer: "A thread pool is a collection of pre-created worker threads that execute submitted tasks, reducing the cost of repeatedly creating and destroying threads."
    },
    
    {
    question: "What is Callable?",
    answer: "Callable is similar to Runnable but can return a result and throw checked exceptions."
    },
    
    {
    question: "What is Future?",
    answer: "Future represents the result of an asynchronous computation. It allows checking task completion and retrieving the result later."
    },
    
    {
    question: "What are the limitations of Future?",
    answer: "Future does not support task chaining, callbacks or combining multiple asynchronous operations easily."
    },
    
    {
    question: "What is CompletableFuture?",
    answer: "CompletableFuture extends Future by supporting asynchronous pipelines, task composition, callbacks and advanced exception handling."
    },
    
    {
    question: "What is ForkJoinPool?",
    answer: "ForkJoinPool is a specialized thread pool designed for divide-and-conquer algorithms. It uses work-stealing to improve parallel execution efficiency."
    },
    
    {
    question: "What is BlockingQueue?",
    answer: "BlockingQueue is a thread-safe queue that blocks producers when full and consumers when empty, making it useful in producer-consumer systems."
    },
    
    {
    question: "What is the Producer Consumer Problem?",
    answer: "The Producer Consumer Problem involves coordinating producer threads that generate data and consumer threads that process it while safely sharing a common buffer."
    },
    
    {
    question: "What is CopyOnWriteArrayList?",
    answer: "CopyOnWriteArrayList is a thread-safe collection where modifications create a new copy of the underlying array. It is efficient for read-heavy workloads."
    },
    
    {
    question: "Why is ConcurrentHashMap preferred over Hashtable?",
    answer: "ConcurrentHashMap provides much higher concurrency by allowing multiple threads to operate simultaneously without locking the entire map."
    },
    
    {
    question: "What are some multithreading best practices?",
    answer: "Prefer immutable objects, minimize shared mutable state, use thread pools instead of creating threads directly, avoid excessive synchronization, use concurrent collections and always design for thread safety from the beginning."
    }
    
    ];