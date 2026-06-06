data["Spring Boot Production Scenarios"] = [

    {
    question: "A Spring Boot application works locally but fails immediately after deployment to production. How would you investigate?",
    answer: "I would begin by comparing the production environment with the local environment. Many deployment failures are caused by missing environment variables, incorrect profiles, unavailable dependencies, database connectivity issues or configuration differences. I would review startup logs carefully and identify the first failure rather than focusing on secondary exceptions. Production troubleshooting often starts with understanding what changed between environments."
    },
    
    {
    question: "A deployment succeeds, but the application takes five minutes to start instead of thirty seconds. How would you analyze it?",
    answer: "I would first identify where startup time is being spent. Startup delays are often caused by slow database connections, service discovery registration, external API calls, excessive bean creation or large initialization tasks. I would enable startup metrics and analyze bean initialization timelines. Understanding which component consumes the majority of startup time is critical before making changes."
    },
    
    {
    question: "A new release introduces a startup failure caused by auto-configuration. How would you troubleshoot it?",
    answer: "I would review the auto-configuration report and identify which auto-configurations were activated. Spring Boot makes decisions based on classpath contents, properties and existing beans. A dependency upgrade or configuration change may unexpectedly trigger a different auto-configuration path. Understanding why Spring Boot made a particular decision is usually the key to resolving these issues."
    },
    
    {
    question: "The application starts successfully but connects to the wrong database. What would you investigate?",
    answer: "I would verify active profiles, environment variables, configuration sources and deployment settings. Spring Boot supports multiple configuration layers, and higher-priority sources can override expected values. Misconfigured profiles are a very common cause of environment-related incidents."
    },
    
    {
    question: "A production deployment accidentally runs with the development profile enabled. What risks does this create?",
    answer: "Development profiles may use test databases, verbose logging, weaker security settings or debugging features that are inappropriate for production. I would immediately assess business impact, verify data integrity and correct profile configuration. Profile management should be treated as a critical operational concern."
    },
    
    {
    question: "After adding a new dependency, application behavior changes unexpectedly even though no code was modified. Why?",
    answer: "Spring Boot auto-configuration is heavily influenced by dependencies present on the classpath. Adding a library may activate new auto-configurations, create additional beans or alter existing behavior. I would review dependency changes and compare auto-configuration reports before and after the deployment."
    },
    
    {
    question: "Application startup fails because multiple beans of the same type are found. How would you investigate?",
    answer: "I would identify all candidate beans and determine why multiple implementations exist. This often occurs after adding libraries, introducing new configuration classes or expanding component scanning. The solution may involve @Qualifier, @Primary or redesigning the bean structure."
    },
    
    {
    question: "A service works perfectly after deployment but begins failing after several hours. How would Spring Boot configuration be part of your investigation?",
    answer: "I would investigate scheduled jobs, configuration refresh mechanisms, connection pools, memory consumption and externalized configuration sources. Some issues do not appear immediately because they depend on workload growth or scheduled activities rather than startup conditions."
    },
    
    {
    question: "A Kubernetes deployment repeatedly restarts the application even though logs show no obvious errors. What would you investigate?",
    answer: "I would examine liveness probes, readiness probes, resource limits, startup timing and container events. Kubernetes may restart a healthy application if health checks are misconfigured or startup takes longer than expected. Infrastructure behavior is just as important as application behavior in cloud-native environments."
    },
    
    {
    question: "How would you troubleshoot a Spring Boot production outage during an architect interview?",
    answer: "I would first establish whether the issue involves startup, configuration, infrastructure, dependencies or business functionality. Then I would collect logs, metrics, health information and deployment history. Rather than assuming a framework problem, I would systematically eliminate possibilities until evidence identifies the true root cause."
    },

    {
    question: "A monitoring system reports that the application is healthy, but users cannot use the system. How would you investigate?",
    answer: "This often indicates a gap between technical health and business health. The application may respond successfully to health checks while critical functionality is failing. I would review Actuator health indicators, business transaction metrics, dependency status and user-facing workflows. A service being 'UP' does not necessarily mean the business process is working."
    },
    
    {
    question: "Actuator health endpoints show the application as DOWN after a deployment. What would you check first?",
    answer: "I would identify which health indicator is failing. Spring Boot Actuator aggregates the health of various dependencies such as databases, messaging systems and external services. Understanding which component reports failure is much more useful than looking only at the overall health status."
    },
    
    {
    question: "A configuration value changes unexpectedly after deployment. How would you determine where it came from?",
    answer: "Spring Boot supports multiple configuration sources including application properties, YAML files, environment variables, command-line arguments, Kubernetes ConfigMaps and secret stores. I would inspect the property source hierarchy and determine which source ultimately supplied the value. Configuration precedence is often the root cause of unexpected behavior."
    },
    
    {
    question: "Application startup consumes several gigabytes of memory before processing any traffic. What would you investigate?",
    answer: "I would analyze bean initialization, large configuration loading, cache preloading, ORM initialization and startup tasks. Some applications load excessive amounts of data into memory during startup. The objective is identifying which components allocate the majority of memory and determining whether that behavior is necessary."
    },
    
    {
    question: "A deployment fails because a required secret cannot be loaded. How would you troubleshoot it?",
    answer: "I would verify secret configuration, access permissions, environment variables, Kubernetes secret mounts and cloud secret management integrations. Security-related configuration failures are often caused by permission changes or incorrect deployment configuration rather than application code."
    },
    
    {
    question: "The application starts locally but fails inside Kubernetes with configuration errors. Why does this happen frequently?",
    answer: "Local and Kubernetes environments often differ significantly. Configuration values, networking rules, DNS resolution, secret management, resource limits and service discovery mechanisms may behave differently. I would compare the runtime environment rather than focusing only on application code."
    },
    
    {
    question: "A dependency upgrade introduces unexpected runtime behavior. How would you investigate?",
    answer: "I would review dependency versions, transitive dependencies and release notes. In Spring Boot applications, a dependency upgrade can alter auto-configuration behavior, serialization logic, security defaults or integration patterns. Understanding what changed internally is often essential."
    },
    
    {
    question: "Startup time continues increasing with every release. What architectural concerns would you raise?",
    answer: "Growing startup times often indicate increasing complexity. Excessive bean creation, startup processing, dependency initialization and configuration loading may signal architectural drift. I would analyze startup trends over time and identify components contributing most to initialization delays."
    },
    
    {
    question: "A Spring Boot service passes all functional tests but repeatedly fails production readiness checks. How would you approach the issue?",
    answer: "I would investigate startup dependencies, health endpoint behavior, readiness probe configuration and infrastructure integration. Production readiness failures often involve timing, networking or dependency availability rather than business functionality. Understanding the deployment lifecycle is critical."
    },
    
    {
    question: "How would you discuss Spring Boot operational excellence in an architect interview?",
    answer: "I would focus on observability, configuration management, deployment reliability, startup behavior, health monitoring and operational simplicity. Building a Spring Boot service is only part of the challenge. The larger responsibility is ensuring the service can be deployed, monitored, scaled, upgraded and supported reliably in production environments."
    }
    
    ];