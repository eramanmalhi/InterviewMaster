data["IO, NIO & File Handling"] = [

    {
    question: "What is Java IO?",
    answer: "Java IO is a set of APIs used for reading and writing data from files, streams, sockets and other input-output sources. It is based on stream-oriented processing."
    },
    
    {
    question: "What is a Stream in Java IO?",
    answer: "A stream is a sequence of data flowing between a source and a destination. Input streams read data while output streams write data."
    },
    
    {
    question: "What is InputStream?",
    answer: "InputStream is the abstract base class used for reading binary data from various sources such as files, networks and memory."
    },
    
    {
    question: "What is OutputStream?",
    answer: "OutputStream is the abstract base class used for writing binary data to files, networks and other destinations."
    },
    
    {
    question: "What is the difference between InputStream and Reader?",
    answer: "InputStream works with binary data, whereas Reader works with character-based data and handles character encoding."
    },
    
    {
    question: "What is the difference between OutputStream and Writer?",
    answer: "OutputStream writes binary data, whereas Writer writes character data and supports character encoding."
    },
    
    {
    question: "What is FileInputStream?",
    answer: "FileInputStream is used to read raw binary data from files."
    },
    
    {
    question: "What is FileOutputStream?",
    answer: "FileOutputStream is used to write raw binary data into files."
    },
    
    {
    question: "What is BufferedInputStream?",
    answer: "BufferedInputStream improves performance by reading data into an internal buffer, reducing the number of physical read operations."
    },
    
    {
    question: "What is BufferedOutputStream?",
    answer: "BufferedOutputStream improves performance by accumulating data in memory before writing it to the underlying destination."
    },
    
    {
    question: "What is BufferedReader?",
    answer: "BufferedReader provides efficient character input and supports reading text line by line using methods such as readLine()."
    },
    
    {
    question: "Why is BufferedReader generally faster than FileReader?",
    answer: "BufferedReader reduces the number of I/O operations by reading larger chunks of data into memory at once."
    },
    
    {
    question: "What is the File class?",
    answer: "The File class represents file and directory path information. It can be used to create, delete, rename and inspect files and directories."
    },
    
    {
    question: "What is Java NIO?",
    answer: "Java NIO, or New IO, is an alternative I/O framework introduced to provide better performance, non-blocking operations and scalable I/O handling."
    },
    
    {
    question: "What are the main components of NIO?",
    answer: "The main components are Buffers, Channels and Selectors. Together they provide efficient and scalable I/O operations."
    },
    
    {
    question: "What is a Buffer in NIO?",
    answer: "A Buffer is a memory container used to temporarily hold data while it is transferred between Channels and applications."
    },
    
    {
    question: "What is a Channel in NIO?",
    answer: "A Channel represents a connection capable of reading and writing data. Unlike streams, channels support both read and write operations."
    },
    
    {
    question: "What is the Path interface?",
    answer: "Path represents a file system path in a platform-independent manner and is part of the NIO file handling API."
    },
    
    {
    question: "What is the Files utility class?",
    answer: "The Files class provides utility methods for file creation, deletion, copying, moving, reading and writing using the NIO framework."
    },
    
    {
    question: "What is the difference between IO and NIO?",
    answer: "Traditional IO is stream-based and generally blocking, while NIO is buffer-based and supports non-blocking operations, making it more suitable for high-performance and scalable applications."
    }
    
    ];