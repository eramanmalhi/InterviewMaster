data["Spring Boot"] = [

    {
    question: "What is Spring Boot?",
    answer: "Spring Boot is an opinionated framework built on top of Spring that simplifies application development by providing auto-configuration, starter dependencies and embedded servers. Its primary goal is to help developers build production-ready applications with minimal configuration."
    },
    
    {
    question: "Why was Spring Boot introduced?",
    answer: "Traditional Spring applications required significant XML configuration, dependency management and server setup. Spring Boot reduced this complexity by providing sensible defaults and automatic configuration, allowing developers to focus on business functionality."
    },
    
    {
    question: "What are the main advantages of Spring Boot?",
    answer: "Spring Boot reduces boilerplate configuration, simplifies dependency management, provides embedded servers, offers production-ready monitoring features and accelerates application development."
    },
    
    {
    question: "What is the difference between Spring and Spring Boot?",
    answer: "Spring provides the core framework capabilities such as IoC, DI and AOP. Spring Boot builds on top of Spring and automates much of the configuration, dependency management and application setup."
    },
    
    {
    question: "What is Auto Configuration in Spring Boot?",
    answer: "Auto Configuration is a mechanism through which Spring Boot automatically configures beans and infrastructure components based on dependencies available in the classpath, application properties and existing bean definitions."
    },
    
    {
    question: "How does Spring Boot Auto Configuration work internally?",
    answer: "During startup, Spring Boot evaluates auto-configuration classes registered through metadata files. Based on conditions such as class availability, bean presence and configuration properties, it decides which beans should be created automatically."
    },
    
    {
    question: "What are Spring Boot Starter Dependencies?",
    answer: "Starter dependencies are pre-packaged dependency bundles that simplify project setup. For example, spring-boot-starter-web automatically includes commonly required web development dependencies."
    },
    
    {
    question: "Why are Starter Dependencies useful?",
    answer: "They eliminate dependency version conflicts, reduce manual configuration and ensure that compatible libraries are included together."
    },
    
    {
    question: "What is @SpringBootApplication?",
    answer: "@SpringBootApplication is a convenience annotation that combines @Configuration, @EnableAutoConfiguration and @ComponentScan. It serves as the primary entry point for most Spring Boot applications."
    },
    
    {
    question: "What is an Embedded Server in Spring Boot?",
    answer: "Spring Boot applications typically package and run with embedded servers such as Tomcat, Jetty or Undertow. This eliminates the need for separately installing and managing application servers."
    },
    
    {
    question: "Why is Embedded Tomcat important?",
    answer: "Embedded Tomcat enables applications to be packaged as self-contained executable JAR files, simplifying deployment, containerization and cloud-native development."
    },
    
    {
    question: "What is application.properties?",
    answer: "application.properties is the default configuration file used to define application settings such as database connections, logging levels, server ports and custom business properties."
    },
    
    {
    question: "What is the difference between application.properties and application.yml?",
    answer: "Both provide configuration capabilities. Properties files use key-value pairs, while YAML provides a hierarchical structure that becomes easier to manage for large and complex configurations."
    },

    {
    question: "What are Spring Profiles?",
    answer: "Spring Profiles allow different configurations to be activated for different environments such as development, testing, staging and production. This helps avoid hardcoding environment-specific values and promotes cleaner deployments."
    },
    
    {
    question: "How are Profiles commonly used in real projects?",
    answer: "Teams typically maintain separate configurations for environments. For example, a development profile may use a local database while a production profile uses managed cloud databases and stricter security settings."
    },
    
    {
    question: "What is Spring Boot Actuator?",
    answer: "Actuator provides production-ready features such as health checks, metrics, application information, thread dumps, environment details and monitoring endpoints. It is widely used for observability and operational monitoring."
    },
    
    {
    question: "Why is Actuator important in microservices?",
    answer: "In distributed systems, operations teams need visibility into service health and performance. Actuator exposes standardized endpoints that can be integrated with monitoring platforms such as Prometheus and Grafana."
    },
    
    {
    question: "What is @ConfigurationProperties?",
    answer: "@ConfigurationProperties maps external configuration values into strongly typed Java objects. This approach is cleaner, more maintainable and more scalable than repeatedly using individual property lookups."
    },
    
    {
    question: "What is CommandLineRunner?",
    answer: "CommandLineRunner is an interface that allows execution of custom logic immediately after the Spring Boot application context has been initialized."
    },
    
    {
    question: "How does Spring Boot application startup work internally?",
    answer: "The application starts by creating the Spring Application instance, loading configuration, performing component scanning, creating the application context, applying auto-configurations, creating beans and finally starting the embedded server."
    },
    
    {
    question: "How does Spring Boot decide which Auto Configurations to apply?",
    answer: "Spring Boot evaluates conditional annotations such as @ConditionalOnClass, @ConditionalOnBean and @ConditionalOnProperty. Based on the application's environment and dependencies, it selectively activates appropriate configurations."
    },
    
    {
    question: "What is Externalized Configuration?",
    answer: "Externalized Configuration allows application settings to be stored outside the application code. This enables configuration changes without rebuilding or redeploying the application."
    },
    
    {
    question: "What is Spring Boot DevTools?",
    answer: "DevTools provides features such as automatic restart, live reload and enhanced development-time productivity. It is intended only for development environments and should not be included in production deployments."
    },
    
    {
    question: "What are some Spring Boot production best practices?",
    answer: "Use profiles correctly, externalize configuration, secure actuator endpoints, implement health checks, use centralized logging, monitor metrics, avoid excessive component scanning and keep startup dependencies minimal."
    },
    
    {
    question: "How would you explain Spring Boot in an architect interview?",
    answer: "Spring Boot is not merely a framework for faster development. Its real value lies in standardization. It provides consistent conventions, production-ready capabilities, simplified deployment and operational visibility, allowing teams to focus on business functionality rather than infrastructure plumbing."
    }
    
    ];