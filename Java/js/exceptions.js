data["Exception Handling"] = [

    {
    question: "What is an Exception in Java?",
    answer: "An exception is an event that occurs during program execution and disrupts the normal flow of instructions. Java provides a structured mechanism to handle such situations."
    },
    
    {
    question: "What is Exception Handling?",
    answer: "Exception handling is the process of detecting, managing and recovering from runtime errors so that applications can continue running gracefully or fail in a controlled manner."
    },
    
    {
    question: "What is the Exception hierarchy in Java?",
    answer: "At the top is Throwable. Throwable has two main subclasses: Error and Exception. RuntimeException is a subclass of Exception and represents unchecked exceptions."
    },
    
    {
    question: "What is the difference between Error and Exception?",
    answer: "Exceptions are conditions that applications can usually handle. Errors represent serious JVM or system-level problems such as OutOfMemoryError and StackOverflowError that applications typically should not handle."
    },
    
    {
    question: "What are Checked Exceptions?",
    answer: "Checked exceptions are verified by the compiler. The programmer must either handle them using try-catch or declare them using throws. Examples include IOException and SQLException."
    },
    
    {
    question: "What are Unchecked Exceptions?",
    answer: "Unchecked exceptions are subclasses of RuntimeException. The compiler does not force handling of these exceptions. Examples include NullPointerException and ArithmeticException."
    },
    
    {
    question: "What is the difference between Checked and Unchecked Exceptions?",
    answer: "Checked exceptions are checked at compile time and must be handled or declared. Unchecked exceptions occur at runtime and handling them is optional."
    },
    
    {
    question: "What is a try block?",
    answer: "A try block contains code that may throw an exception. It must be followed by at least one catch block or a finally block."
    },
    
    {
    question: "What is a catch block?",
    answer: "A catch block handles exceptions thrown from the associated try block. Multiple catch blocks can be used to handle different exception types."
    },
    
    {
    question: "What is a finally block?",
    answer: "A finally block contains code that executes regardless of whether an exception occurs or not. It is commonly used for cleanup activities such as closing resources."
    },
    
    {
    question: "Will finally always execute?",
    answer: "In most cases yes. However, it may not execute if the JVM terminates abruptly using System.exit(), the process crashes or the machine shuts down unexpectedly."
    },
    
    {
    question: "Can a try block exist without a catch block?",
    answer: "Yes. A try block can be followed directly by a finally block without a catch block."
    },
    
    {
    question: "Can we have multiple catch blocks?",
    answer: "Yes. Multiple catch blocks can be used to handle different exception types separately. More specific exceptions should appear before more general exceptions."
    },
    
    {
    question: "What is the difference between throw and throws?",
    answer: "throw is used to explicitly throw an exception object. throws is used in a method signature to declare that a method may propagate exceptions to the caller."
    },
    
    {
    question: "Can we throw checked exceptions manually?",
    answer: "Yes. A checked exception can be created and thrown using the throw keyword, but it must still be handled or declared using throws."
    },
    
    {
    question: "What is a custom exception?",
    answer: "A custom exception is a user-defined exception class created to represent application-specific error conditions."
    },
    
    {
    question: "What is try-with-resources?",
    answer: "Try-with-resources is a feature introduced in Java 7 that automatically closes resources implementing AutoCloseable after execution completes."
    },
    
    {
    question: "What are suppressed exceptions?",
    answer: "Suppressed exceptions occur when an exception is thrown inside a try block and another exception occurs while closing resources. Java preserves both exceptions instead of losing one."
    },
    
    {
    question: "What happens if an exception is not handled?",
    answer: "The exception propagates up the call stack. If no handler is found, the JVM terminates the program and prints the stack trace."
    },
    
    {
    question: "What are some exception handling best practices?",
    answer: "Handle exceptions at appropriate layers, catch specific exceptions rather than generic Exception, avoid swallowing exceptions, provide meaningful messages, log important failures and use custom exceptions when necessary."
    }
    
    ];