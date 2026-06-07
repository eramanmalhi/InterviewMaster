data["Production Support Scenarios"] = [

    {
    question: "You receive a critical production alert at 2 AM stating that revenue-generating transactions are failing. What is your first action?",
    answer: "My first objective is stabilization, not root cause analysis. I would quickly assess business impact, identify affected systems and determine whether rollback, failover or traffic redirection is necessary. During major incidents, restoring service safely is usually more important than immediately understanding every technical detail. Once stability is restored, a structured investigation can begin."
    },
    
    {
    question: "Multiple dashboards show different symptoms during an outage. How do you avoid chasing the wrong problem?",
    answer: "I focus on timelines and evidence rather than assumptions. Large incidents often create many secondary symptoms that are not the actual root cause. I would correlate logs, metrics, traces and deployment events to determine what changed first. Understanding the sequence of events is often more valuable than understanding individual errors."
    },
    
    {
    question: "A production incident starts immediately after deployment. How would you approach it?",
    answer: "The deployment becomes the primary suspect until evidence proves otherwise. I would compare working and failing versions, review deployment logs and determine whether rollback is the safest path. Many incidents are resolved quickly by reverting a recent change while investigation continues."
    },
    
    {
    question: "Users report failures, but monitoring dashboards show everything is healthy. What would you investigate?",
    answer: "I would verify whether monitoring actually reflects business outcomes. Technical metrics can appear healthy while customer workflows fail. I would examine business transactions, user journeys and real customer impact. Monitoring should measure both technical health and business health."
    },
    
    {
    question: "An incident affects multiple teams and everyone proposes different root causes. How would you handle the situation?",
    answer: "I would establish a structured incident process focused on evidence collection. During outages, speculation often creates confusion and delays recovery. I would encourage teams to provide supporting data for hypotheses and prioritize facts over opinions."
    },
    
    {
    question: "A service becomes unavailable, but no obvious errors appear in logs. What would you do next?",
    answer: "I would expand the investigation beyond application logs. Metrics, thread dumps, network diagnostics, infrastructure events and dependency health often reveal issues that logs do not capture. Absence of errors is not evidence of healthy behavior."
    },
    
    {
    question: "A temporary workaround restores service. How do you decide whether the incident is truly resolved?",
    answer: "A workaround may restore functionality without eliminating the root cause. I would continue monitoring key indicators, verify system stability and ensure that recovery actions do not introduce new risks. An incident should not be considered resolved until the underlying cause is understood and addressed."
    },
    
    {
    question: "A database issue causes failures across multiple applications. How would you coordinate the response?",
    answer: "I would treat the database as a shared dependency and establish centralized communication. Multiple teams investigating independently often duplicate effort and create confusion. Coordinated response improves recovery speed and reduces conflicting actions."
    },
    
    {
    question: "A production incident occurs during a major business event. How does this change your approach?",
    answer: "Business context becomes extremely important. During high-impact periods, recovery speed may take priority over deeper investigation. Decisions should consider customer impact, financial consequences and operational risk. Technical responses should align with business priorities."
    },
    
    {
    question: "An outage lasts only a few minutes and resolves itself before engineers can investigate. How would you prepare for future incidents?",
    answer: "Transient incidents require strong observability. I would ensure logs, metrics, traces and infrastructure events are retained so evidence remains available after recovery. The ability to investigate after the fact is critical when failures disappear quickly."
    },
    
    {
    question: "A team repeatedly resolves symptoms but the same incident keeps returning. What does this suggest?",
    answer: "This often indicates insufficient root cause analysis. Temporary fixes may restore service but fail to address underlying architectural, operational or process issues. Recurring incidents should be treated as opportunities for deeper investigation."
    },
    
    {
    question: "A major incident is resolved. What should happen next?",
    answer: "I would conduct a post-incident review focused on learning rather than blame. The objective is understanding what happened, why it happened, what worked well and what improvements are necessary. Strong organizations treat incidents as opportunities to strengthen systems and processes."
    },
    
    {
    question: "How would you discuss production support responsibilities in an architect interview?",
    answer: "I would emphasize that architecture is accountable for operational outcomes, not just design decisions. An architect should understand observability, resilience, incident response, recovery strategies and operational processes. A system is not truly successful until it can be operated reliably in production."
    },

    {
    question: "A Sev-1 incident is declared. What does that change in your response approach?",
    answer: "A Sev-1 incident typically indicates major business impact and requires structured coordination. I would ensure incident ownership is clear, communication channels are established and recovery actions are prioritized. During high-severity incidents, coordination and communication often become just as important as technical troubleshooting."
    },
    
    {
    question: "What responsibilities would you expect from an Incident Commander during a major outage?",
    answer: "The Incident Commander should coordinate response efforts, maintain situational awareness, manage communication and ensure teams remain focused on recovery objectives. The role should not become the primary troubleshooter. Effective incident leadership requires maintaining a system-wide view while technical teams investigate details."
    },
    
    {
    question: "A war room contains twenty engineers proposing changes simultaneously. How would you maintain control?",
    answer: "I would establish clear ownership, document decisions and ensure changes are coordinated. Uncontrolled modifications during an outage often create additional failures. Every action should have a clear purpose, expected outcome and rollback strategy."
    },
    
    {
    question: "An engineer wants to deploy an untested fix directly to production during an outage. How would you evaluate the risk?",
    answer: "I would balance recovery urgency against the possibility of making the situation worse. Emergency fixes are sometimes necessary, but they should be evaluated carefully. During incidents, the safest path is often rollback or traffic redirection rather than introducing additional unknowns."
    },
    
    {
    question: "A critical alert fires repeatedly but rarely corresponds to actual business impact. What problem does this create?",
    answer: "This contributes to alert fatigue. Teams may begin ignoring alerts if they frequently produce false positives. Monitoring systems should prioritize meaningful signals that require action. Reliable alerting improves response effectiveness and operational trust."
    },
    
    {
    question: "An outage affects customers, and executives request updates every fifteen minutes. How would you communicate?",
    answer: "I would provide concise updates focused on business impact, current status, mitigation efforts and estimated next steps. Executive communication should emphasize outcomes and risk rather than technical implementation details. Clarity and consistency are critical during high-pressure situations."
    },
    
    {
    question: "A post-incident review becomes focused on assigning blame. Why is this dangerous?",
    answer: "Blame-focused reviews discourage transparency and learning. The purpose of a post-incident review is understanding contributing factors and improving systems. Most major incidents involve multiple technical and process failures rather than a single mistake."
    },
    
    {
    question: "A recurring incident affects the same service every month. How would you approach it?",
    answer: "Recurring incidents should be treated as reliability problems rather than isolated events. I would analyze historical patterns, identify common triggers and prioritize permanent fixes. Repeated recovery work is usually more expensive than eliminating the root cause."
    },
    
    {
    question: "A monitoring gap prevented early detection of a major outage. What lesson would you take from this?",
    answer: "Observability should evolve alongside the system. Missing signals often become visible only after an incident occurs. I would review monitoring coverage, alerting effectiveness and business-level visibility to reduce the likelihood of similar blind spots."
    },
    
    {
    question: "A team resolves incidents quickly but rarely documents them. What risks does this create?",
    answer: "Knowledge remains concentrated in individuals rather than becoming organizational learning. Documentation helps future responders understand historical context, common failure patterns and recovery procedures. Operational maturity depends on retaining knowledge over time."
    },
    
    {
    question: "Site Reliability Engineering teams often discuss error budgets. Why are they important?",
    answer: "Error budgets help balance reliability and delivery speed. They provide a framework for making decisions about risk, change velocity and operational priorities. Reliability should be managed intentionally rather than treated as an unlimited requirement."
    },
    
    {
    question: "How would you discuss incident leadership at a Principal Engineer or Enterprise Architect level?",
    answer: "I would focus on coordination, communication, resilience and organizational learning. Senior technical leaders should help create systems and processes that reduce incident frequency, improve recovery speed and strengthen operational maturity across the organization. Effective incident leadership extends beyond technical troubleshooting and includes culture, governance and continuous improvement."
    }
    
    ];