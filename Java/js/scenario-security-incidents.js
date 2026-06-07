data["Security Incident Scenarios"] = [

    {
    question: "A developer accidentally commits production credentials to a public repository. What would be your immediate response?",
    answer: "I would assume the credentials have already been compromised. The first priority is containment. I would revoke and rotate the exposed credentials immediately, identify affected systems and review access logs for suspicious activity. Removing the repository commit alone is not sufficient because the credentials may already have been copied or indexed. Incident response should focus on reducing risk before beginning root cause analysis."
    },
    
    {
    question: "An attacker gains access to an application server. What would you investigate first?",
    answer: "I would begin by determining the scope of the compromise. Key questions include what systems were accessed, what privileges were obtained, what data may have been exposed and whether lateral movement occurred. Preserving forensic evidence is important, but containment must also be considered. Understanding blast radius is usually one of the most critical early activities."
    },
    
    {
    question: "Customer data appears for sale on an external website. How would you approach the incident?",
    answer: "I would treat the situation as a potential data breach until proven otherwise. The response should involve security teams, legal teams, compliance stakeholders and business leadership. I would investigate data sources, access logs, exfiltration indicators and affected systems. The objective is understanding what happened, limiting further exposure and meeting any regulatory obligations."
    },
    
    {
    question: "A ransomware attack encrypts multiple servers. What architectural lessons become important?",
    answer: "Ransomware incidents highlight the importance of backups, disaster recovery planning, network segmentation and least-privilege access. Recovery capability should be tested regularly because backup systems are only valuable if they can restore business operations successfully."
    },
    
    {
    question: "An employee account suddenly begins accessing systems it has never used before. What would you investigate?",
    answer: "This may indicate credential compromise, privilege misuse or automation changes. I would review authentication events, access patterns, privilege assignments and recent account activity. Unusual behavior often provides early indicators of security incidents."
    },
    
    {
    question: "A Distributed Denial of Service attack causes service degradation. How would you evaluate the response?",
    answer: "I would focus on maintaining availability while minimizing impact on legitimate users. Traffic filtering, rate limiting, content delivery networks and cloud protection services may all play a role. The effectiveness of the response depends on both technical controls and operational preparedness."
    },
    
    {
    question: "A vulnerability is discovered in a widely used open-source dependency. What factors determine urgency?",
    answer: "I would evaluate exploitability, exposure, affected systems, available mitigations and business impact. Not every vulnerability requires the same response timeline. Risk should be assessed based on actual exposure rather than severity scores alone."
    },
    
    {
    question: "A security audit reveals excessive administrator privileges across multiple teams. Why is this dangerous?",
    answer: "Excessive privileges increase blast radius during both accidental mistakes and malicious activity. I would review least-privilege principles, role design, access reviews and privilege management processes. Security architecture should assume that accounts may eventually be compromised."
    },
    
    {
    question: "A security incident is technically contained, but public trust has been damaged. How would you discuss recovery?",
    answer: "Recovery extends beyond technical remediation. Communication, transparency, customer support, regulatory obligations and trust rebuilding all become important. Security incidents often have business and reputational consequences that outlast the technical event itself."
    },
    
    {
    question: "How would you discuss security incident management at a Principal Engineer, Enterprise Architect or CTO level?",
    answer: "I would emphasize preparation, detection, containment, recovery and organizational learning. Effective security incident management is not defined solely by how teams react during an attack, but by how well the organization reduces risk beforehand and improves afterward. Strong security programs combine architecture, operational processes, governance, training and continuous improvement."
    }
    
    ];