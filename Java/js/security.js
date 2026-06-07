data["Security (Java & Spring Security)"] = [

    {
    question: "What is the difference between Authentication and Authorization?",
    answer: "Authentication answers the question 'Who are you?' while Authorization answers 'What are you allowed to do?'. A user must first be authenticated before authorization rules can determine access to resources and operations."
    },
    
    {
    question: "What is Spring Security?",
    answer: "Spring Security is a comprehensive security framework that provides authentication, authorization, session management, protection against common attacks and integration with various identity providers. It is the de facto security solution for Spring applications."
    },
    
    {
    question: "Why is Spring Security widely used?",
    answer: "Spring Security provides a consistent and extensible security model, integrates seamlessly with Spring Boot and significantly reduces the effort required to implement enterprise-grade security controls."
    },
    
    {
    question: "What is JWT?",
    answer: "JWT, or JSON Web Token, is a compact and self-contained token format used for securely transmitting user identity and authorization information between systems. It is commonly used in stateless authentication architectures."
    },
    
    {
    question: "What are the main parts of a JWT?",
    answer: "A JWT consists of three parts: Header, Payload and Signature. The header describes the token type and algorithm, the payload contains claims and the signature protects the token from tampering."
    },
    
    {
    question: "Why are JWTs popular in Microservices?",
    answer: "JWTs are self-contained and do not require server-side session storage. This makes them highly suitable for distributed systems where multiple services need to validate user identity independently."
    },
    
    {
    question: "What is OAuth 2.0?",
    answer: "OAuth 2.0 is an authorization framework that allows applications to access resources on behalf of a user without directly handling the user's credentials. It focuses on delegated access rather than authentication."
    },
    
    {
    question: "What is OpenID Connect?",
    answer: "OpenID Connect is an identity layer built on top of OAuth 2.0. While OAuth handles authorization, OpenID Connect adds authentication and provides information about the authenticated user."
    },
    
    {
    question: "What is CORS?",
    answer: "CORS, or Cross-Origin Resource Sharing, is a browser security mechanism that controls whether a web application can access resources hosted on a different origin. Proper configuration is essential for frontend-backend communication."
    },
    
    {
    question: "What is CSRF?",
    answer: "CSRF, or Cross-Site Request Forgery, is an attack where a malicious website tricks an authenticated user into performing unintended actions. Spring Security provides built-in protection against CSRF attacks."
    },
    
    {
    question: "What is HTTPS?",
    answer: "HTTPS is the secure version of HTTP that uses TLS encryption to protect data transmitted between clients and servers. It ensures confidentiality, integrity and authenticity of communication."
    },
    
    {
    question: "Why should passwords never be stored in plain text?",
    answer: "If a database is compromised, plain-text passwords are immediately exposed. Passwords should always be stored using strong one-way hashing algorithms such as BCrypt, Argon2 or PBKDF2."
    },
    
    {
    question: "What is Role-Based Access Control (RBAC)?",
    answer: "RBAC is an authorization model where permissions are assigned to roles and users are assigned those roles. This simplifies permission management and improves security governance."
    },
    
    {
    question: "What are some security best practices for Spring Boot applications?",
    answer: "Use HTTPS everywhere, implement strong authentication, validate all inputs, hash passwords securely, apply least-privilege access, secure actuator endpoints, protect secrets properly, keep dependencies updated and continuously monitor for vulnerabilities."
    },
    
    {
    question: "How would you explain application security in an architect interview?",
    answer: "Security should not be treated as a feature added at the end of development. It must be built into architecture from the beginning through secure communication, strong identity management, proper authorization, secret management, auditing, monitoring and defense-in-depth strategies."
    }
    
    ];