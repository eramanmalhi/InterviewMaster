data["Stream API"] = [

    {
    question: "What is a Stream in Java?",
    answer: "A Stream is a sequence of elements that supports functional-style operations such as filtering, mapping, sorting and aggregation. Streams do not store data and operate on data sources such as collections."
    },
    
    {
    question: "How is Stream different from Collection?",
    answer: "A Collection stores data in memory, whereas a Stream processes data. Streams are used for computation and do not directly modify the underlying collection."
    },
    
    {
    question: "How can a Stream be created?",
    answer: "Streams can be created from collections, arrays, files, generators and various utility methods provided by the Stream API."
    },
    
    {
    question: "Can a Stream be reused?",
    answer: "No. Once a terminal operation is executed, the Stream is considered consumed and cannot be reused."
    },
    
    {
    question: "What is a Stream pipeline?",
    answer: "A Stream pipeline consists of a source, zero or more intermediate operations and a terminal operation that produces the final result."
    },
    
    {
    question: "What are intermediate operations?",
    answer: "Intermediate operations transform a Stream and return another Stream. They are lazy and do not execute until a terminal operation is invoked."
    },
    
    {
    question: "What are terminal operations?",
    answer: "Terminal operations trigger the execution of the Stream pipeline and produce a result or side effect."
    },
    
    {
    question: "What is the filter() method?",
    answer: "filter() is an intermediate operation that selects elements matching a given condition represented by a Predicate."
    },
    
    {
    question: "What is the map() method?",
    answer: "map() transforms each element of a Stream into another form and returns a new Stream containing the transformed values."
    },
    
    {
    question: "What is the difference between map() and flatMap()?",
    answer: "map() converts one element into one result, whereas flatMap() converts one element into multiple elements and flattens them into a single Stream."
    },
    
    {
    question: "When is flatMap() commonly used?",
    answer: "flatMap() is commonly used when processing nested collections, such as converting a List of Lists into a single Stream of elements."
    },
    
    {
    question: "What is the sorted() method?",
    answer: "sorted() returns a Stream whose elements are arranged according to natural ordering or a provided Comparator."
    },
    
    {
    question: "What is the distinct() method?",
    answer: "distinct() removes duplicate elements from a Stream based on equals() comparisons."
    },
    
    {
    question: "What is the limit() method?",
    answer: "limit() restricts the Stream to a specified maximum number of elements."
    },
    
    {
    question: "What is the skip() method?",
    answer: "skip() ignores a specified number of elements from the beginning of a Stream."
    },
    
    {
    question: "What is the peek() method?",
    answer: "peek() allows inspection of elements as they pass through the Stream pipeline and is commonly used for debugging."
    },
    
    {
    question: "What is the reduce() method?",
    answer: "reduce() combines Stream elements into a single result using an accumulator function. It is commonly used for summation, multiplication and aggregation operations."
    },
    
    {
    question: "What is the collect() method?",
    answer: "collect() is a terminal operation that gathers Stream elements into collections, maps or custom result containers."
    },
    
    {
    question: "What is Collectors.toList()?",
    answer: "Collectors.toList() collects Stream elements into a List implementation."
    },
    
    {
    question: "What is Collectors.toSet()?",
    answer: "Collectors.toSet() collects Stream elements into a Set, removing duplicates according to Set semantics."
    },
    
    {
    question: "What is Collectors.groupingBy()?",
    answer: "groupingBy() groups elements based on a classification function and returns a Map where keys represent groups and values contain grouped elements."
    },
    
    {
    question: "What is Collectors.partitioningBy()?",
    answer: "partitioningBy() divides elements into two groups based on a boolean condition and returns a Map with true and false keys."
    },
    
    {
    question: "What is the difference between findFirst() and findAny()?",
    answer: "findFirst() returns the first element according to encounter order. findAny() may return any matching element and is often more efficient in parallel streams."
    },
    
    {
    question: "What is the difference between anyMatch(), allMatch() and noneMatch()?",
    answer: "anyMatch() checks if at least one element satisfies a condition. allMatch() checks whether all elements satisfy it. noneMatch() checks that no elements satisfy it."
    },
    
    {
    question: "What are the advantages of Stream API?",
    answer: "Stream API reduces boilerplate code, improves readability, supports functional programming, enables parallel processing and simplifies complex collection operations."
    }
    
    ];