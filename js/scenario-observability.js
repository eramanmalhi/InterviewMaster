data["Observability & Monitoring Scenarios"] = [

    {
    question: "A major outage occurs, but no alerts are triggered. What does this tell you?",
    answer: "This usually indicates an observability gap rather than simply a monitoring failure. I would investigate whether the right signals were being collected, whether alert thresholds were appropriate and whether business-critical workflows were monitored at all. The most dangerous outages are often the ones the monitoring system never notices."
    },
    
    {
    question: "Teams receive hundreds of alerts every day and begin ignoring them. What problem does this create?",
    answer: "This is a classic example of alert fatigue. When alerts are noisy, engineers lose confidence in monitoring systems and critical issues may be overlooked. I would focus on improving signal quality so alerts represent meaningful conditions that require action."
    },
    
    {
    question: "Users report failures, but all infrastructure dashboards appear healthy. How would you investigate?",
    answer: "Infrastructure health and business health are different things. Servers, containers and databases may appear healthy while customer workflows fail. I would review business transaction monitoring, user journeys and end-to-end service behavior rather than relying only on infrastructure metrics."
    },
    
    {
    question: "A distributed system contains hundreds of services. How would you troubleshoot a single failed request?",
    answer: "Distributed tracing becomes essential in these environments. I would use correlation IDs and traces to reconstruct the complete journey of the request across services. Without tracing, troubleshooting often becomes a slow process of manually correlating logs across multiple systems."
    },
    
    {
    question: "Application logs contain large amounts of information, but engineers still struggle during incidents. Why?",
    answer: "More logs do not automatically create better observability. Logs must be structured, searchable and connected to meaningful context. Excessive logging can actually make investigations harder if important signals become buried in noise."
    },
    
    {
    question: "A service reports healthy response times on average, but users continue complaining. What metric might be missing?",
    answer: "Average response times often hide important performance problems. I would examine latency percentiles such as P95 and P99. A small percentage of very slow requests can significantly impact user experience while remaining invisible in average metrics."
    },
    
    {
    question: "An alert triggers every weekend even though no customer impact occurs. How would you handle it?",
    answer: "I would investigate whether the alert reflects expected behavior or an actual risk. Monitoring systems should focus on actionable conditions. Repeated false positives reduce trust and contribute to alert fatigue."
    },
    
    {
    question: "A new microservice is deployed without monitoring. What risks does this introduce?",
    answer: "Operating a service without observability creates blind spots. Failures, performance degradation and business impact may go unnoticed until users report problems. Monitoring should be considered part of the service, not an optional enhancement."
    },
    
    {
    question: "A team measures only technical metrics such as CPU and memory. What important visibility might be missing?",
    answer: "Technical metrics are valuable, but business metrics are equally important. Order completion rates, payment success rates, customer signups and other business indicators often provide earlier visibility into customer-facing issues than infrastructure metrics."
    },
    
    {
    question: "A service generates thousands of metrics. Is that always beneficial?",
    answer: "Not necessarily. Large volumes of metrics can increase cost and complexity while making it harder to identify meaningful signals. Effective observability focuses on useful measurements that support operational and business decisions."
    },
    
    {
    question: "An organization wants to define Service Level Objectives. Where would you start?",
    answer: "I would begin with user expectations and business requirements. Service Level Objectives should reflect what users actually experience rather than what is convenient to measure. Good objectives connect technical performance to customer outcomes."
    },
    
    {
    question: "A production issue takes hours to diagnose because logs, metrics and traces are stored in separate systems. What lesson does this teach?",
    answer: "Observability tools should work together. Engineers should be able to move easily between metrics, logs and traces during investigations. Fragmented visibility increases Mean Time To Resolution and makes incident response more difficult."
    },
    
    {
    question: "A company wants to reduce monitoring costs significantly. What concerns would you raise?",
    answer: "Observability is an investment in operational reliability. Cost optimization is important, but reducing visibility too aggressively can increase incident frequency and recovery time. I would identify waste while preserving critical operational signals."
    },
    
    {
    question: "How would you design observability for a large-scale distributed platform?",
    answer: "I would combine centralized logging, metrics, distributed tracing, alerting and business monitoring. The objective is ensuring that engineers can quickly understand system behavior, detect problems and investigate failures across the entire platform."
    },
    
    {
    question: "How would you discuss observability at a Principal Engineer or Enterprise Architect level?",
    answer: "I would describe observability as a strategic capability rather than a collection of tools. Modern systems are too complex to operate effectively without strong visibility. Observability enables reliability, faster incident resolution, informed decision-making and continuous improvement across the organization."
    }
    
    ];