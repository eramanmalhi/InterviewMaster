data["Security & Spring Security Scenarios"] = [

    {
    question: "Users suddenly start receiving 401 Unauthorized responses after a deployment. How would you investigate?",
    answer: "I would first determine whether the issue affects authentication, authorization or token validation. I would review security configuration changes, token generation logic, signing keys, identity provider connectivity and deployment history. Authentication failures often originate from configuration changes rather than application code. The first objective is identifying which stage of the security workflow is failing."
    },
    
    {
    question: "A JWT token that worked yesterday is rejected today. What would you investigate?",
    answer: "I would examine token expiration, signing keys, issuer validation, audience validation and clock synchronization across systems. Security incidents involving JWTs are frequently caused by configuration drift or key rotation rather than software defects. Understanding the token lifecycle is essential for troubleshooting."
    },
    
    {
    question: "Users can log in successfully but cannot access resources they previously used. Why might this happen?",
    answer: "Authentication and authorization are separate concerns. The user may be authenticated correctly while role mappings, permissions or authorization rules have changed. I would review role assignments, access control policies and recent security configuration updates."
    },
    
    {
    question: "A production deployment accidentally exposes administrative APIs to regular users. What concerns would you raise?",
    answer: "This is a serious authorization failure. I would immediately assess business impact, restrict access and review authorization controls. The root cause may involve incorrect role mappings, missing endpoint protection or configuration errors. Security incidents should be treated as both technical and business risks."
    },
    
    {
    question: "A service depends on an external identity provider, and users cannot log in when that provider becomes unavailable. How would you evaluate the architecture?",
    answer: "I would examine resilience strategies such as caching, token reuse, failover options and graceful degradation mechanisms. External identity providers are critical dependencies, so their availability directly affects business operations. Understanding failure behavior is just as important as understanding normal authentication flows."
    },
    
    {
    question: "An application stores secrets directly inside source code repositories. What risks do you see?",
    answer: "Hardcoded secrets create long-term security exposure. Secrets may be copied, leaked, shared or retained in version history indefinitely. I would recommend centralized secret management solutions with proper access controls, auditing and rotation mechanisms."
    },
    
    {
    question: "A team rotates signing keys and thousands of active sessions stop working. Why might this happen?",
    answer: "Existing tokens may have been signed using keys that are no longer trusted. Key rotation strategies should consider active sessions and token lifecycles. Many systems support overlapping trust periods so older tokens remain valid while new tokens use updated keys."
    },
    
    {
    question: "An API Gateway handles authentication for all services. What are the advantages and risks?",
    answer: "Centralized authentication simplifies implementation and governance, but it can also create a critical dependency. If the gateway experiences issues, many services may become inaccessible. I would evaluate availability, scalability and fallback strategies carefully."
    },
    
    {
    question: "A penetration test reveals that sensitive information appears in application logs. Why is this dangerous?",
    answer: "Logs are often widely accessible across operations, support and monitoring systems. Sensitive information such as passwords, tokens, personal data or financial details should never be logged unnecessarily. Log security is an important part of overall application security."
    },
    
    {
    question: "How would you investigate a security-related production incident during an architect interview?",
    answer: "I would first determine whether the issue involves authentication, authorization, data exposure, infrastructure security or operational controls. Then I would collect logs, audit records, traces and deployment history. Security investigations should be evidence-driven and focused on both containment and root cause analysis."
    },

    {
    question: "An OAuth2 login flow suddenly stops working after an identity provider upgrade. How would you investigate?",
    answer: "I would review OAuth2 configuration, redirect URIs, client credentials, scopes, token endpoints and provider release notes. Identity provider upgrades often introduce behavioral changes that affect authentication flows. The objective is identifying where the authorization process diverges from expected behavior."
    },
    
    {
    question: "Users report that they occasionally gain access to resources belonging to other users. What concerns would you have?",
    answer: "This is potentially a critical authorization issue. I would investigate access control logic, caching behavior, session management and identity propagation across services. Any possibility of cross-user data exposure should be treated as a high-priority incident until proven otherwise."
    },
    
    {
    question: "A web application becomes vulnerable to CSRF attacks after a security configuration change. What happened?",
    answer: "Cross-Site Request Forgery protection may have been disabled, misconfigured or bypassed. I would review CSRF settings, session management and browser interaction patterns. Security features are often removed during troubleshooting and accidentally left disabled in production."
    },
    
    {
    question: "A CORS configuration change suddenly allows requests from any origin. Why is this dangerous?",
    answer: "Overly permissive CORS settings may allow untrusted websites to interact with APIs in unintended ways. I would review business requirements, trusted origins and access patterns before exposing resources broadly. Convenience should never override security requirements without careful evaluation."
    },
    
    {
    question: "An attacker obtains a valid JWT token. What determines the severity of the incident?",
    answer: "The impact depends on token privileges, expiration duration, audience scope and available revocation mechanisms. A short-lived token with limited permissions presents a different risk profile than a long-lived administrative token. Security design should assume credential compromise is possible and limit blast radius accordingly."
    },
    
    {
    question: "A user successfully authenticates but escalates privileges beyond what they should have. What would you investigate?",
    answer: "I would examine role assignment logic, authorization policies, token contents and service-level access controls. Privilege escalation often occurs because systems verify identity correctly but enforce permissions incorrectly. Strong authorization controls are just as important as authentication."
    },
    
    {
    question: "A public API experiences excessive automated traffic that impacts legitimate users. How would you respond?",
    answer: "I would evaluate rate limiting, throttling, bot detection, API quotas and traffic analysis. Security is not limited to preventing unauthorized access. Protecting service availability from abuse is also a critical responsibility."
    },
    
    {
    question: "A company wants to adopt a zero-trust security model. What changes would you expect?",
    answer: "Zero-trust architecture assumes no request is trusted automatically, even within internal networks. Every request should be authenticated, authorized and validated. This often affects identity management, network design, service communication and operational processes."
    },
    
    {
    question: "An audit reveals that security events are not being logged consistently across services. Why is this important?",
    answer: "Without reliable audit trails, investigating incidents becomes significantly harder. Security monitoring, compliance reporting and forensic analysis all depend on accurate event records. Observability is an important part of security architecture, not merely an operational concern."
    },
    
    {
    question: "How would you discuss security architecture at a Solution Architect level?",
    answer: "I would focus on balancing protection, usability, scalability and operational complexity. Security should be integrated throughout the architecture rather than added afterward. Topics such as identity, authorization, secrets management, observability, compliance and resilience should all be considered as part of a comprehensive security strategy."
    }
    
    ];