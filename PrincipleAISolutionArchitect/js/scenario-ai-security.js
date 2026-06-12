data["Scenario: AI Security"] = [

{
question: "A Public AI Chatbot Accidentally Exposes Confidential Enterprise Information. How Would You Respond?",

answer: `
The first priority is containment.

I would immediately determine:

What information was exposed?

How many users were affected?

How long the exposure existed?

Whether the issue is ongoing?

The incident response process would include:

Containment.

Investigation.

Impact Assessment.

Remediation.

Communication.

Lessons Learned.

The architecture review would focus on:

RAG Controls.

Access Controls.

Prompt Construction.

Output Filtering.

Permission-Aware Retrieval.

The root cause is often not the LLM itself.

It is usually retrieval, authorization or governance failures.

A Principal Architect should demonstrate a structured incident response approach rather than immediately focusing on technical fixes.
`,

followups:[
"How would you investigate the root cause?",
"How would you communicate with executives?",
"How would you prevent recurrence?",
"How would governance change afterward?"
]
},

{
question: "A Prompt Injection Attack Successfully Bypasses System Instructions. What Would You Do?",

answer: `
The first step is understanding the scope.

Questions include:

Was sensitive data exposed?

Were tools executed?

Were other systems impacted?

Then I would review:

Prompt Architecture.

Tool Permissions.

Retrieval Logic.

Output Controls.

Prompt injection should be treated similarly to application-layer attacks.

Mitigations may include:

Prompt Isolation.

Input Validation.

Context Segmentation.

Output Validation.

Tool Restrictions.

The key lesson is that prompts should never be considered a security boundary.

Security controls must exist independently of prompts.
`,

followups:[
"Why are prompts not security boundaries?",
"How would you redesign the architecture?",
"How would testing improve?",
"How would governance respond?"
]
},

{
question: "An Agent Accidentally Executes an Unauthorized Financial Transaction. How Would You Handle It?",

answer: `
This scenario highlights the risks of autonomous systems.

The investigation should determine:

Why was the action permitted?

Which controls failed?

What approvals were bypassed?

The architecture should have included:

Authorization Controls.

Approval Workflows.

Risk Thresholds.

Audit Logging.

Human Oversight.

High-risk actions should rarely be fully autonomous.

A Principal Architect should emphasize layered controls rather than blaming the agent.
`,

followups:[
"How would approvals work?",
"How would autonomy levels be defined?",
"How would future incidents be prevented?",
"How would regulators view the incident?"
]
},

{
question: "Your Enterprise Wants to Deploy AI Agents with Administrator Access. Do You Approve?",

answer: `
Not without strong controls.

Administrator-level permissions significantly increase risk.

I would require:

Identity Controls.

Least Privilege.

Approval Mechanisms.

Activity Logging.

Continuous Monitoring.

The architecture should minimize privileged access whenever possible.

A useful principle is:

Agents should receive only the permissions required for their responsibilities.
`,

followups:[
"How would least privilege work?",
"How would monitoring work?",
"How would approvals work?",
"How would governance evaluate risk?"
]
},

{
question: "A RAG System Begins Returning Documents That Users Should Not Be Able to Access. What Is Your Response?",

answer: `
This indicates a retrieval authorization failure.

The investigation would focus on:

Document Permissions.

Metadata Filters.

Access Controls.

Retrieval Logic.

Indexing Processes.

The architecture should support permission-aware retrieval.

Users should never retrieve documents they are not authorized to access.

This is one of the most common enterprise AI security failures.
`,

followups:[
"How does permission-aware retrieval work?",
"How would you audit retrieval systems?",
"How would you identify affected users?",
"How would governance respond?"
]
},

{
question: "Your CISO Wants to Ban All Public LLMs. How Would You Respond?",

answer: `
I would avoid extreme positions.

The discussion should focus on risk rather than fear.

Questions include:

Which data is being shared?

Which providers are involved?

What controls exist?

Can risks be mitigated?

Potential approaches include:

Approved Providers.

Private Deployments.

AI Gateway Controls.

Data Classification Policies.

The goal is enabling value while managing risk.
`,

followups:[
"How would providers be evaluated?",
"How would governance work?",
"How would risks be measured?",
"How would compliance be maintained?"
]
},

{
question: "How Would You Design a Secure Enterprise Copilot?",

answer: `
The architecture would include:

SSO Integration.

Authorization Services.

Permission-Aware Retrieval.

Prompt Security.

Output Validation.

Audit Logging.

Observability.

Governance.

The most important requirement is ensuring users only access authorized information.

The architecture should assume malicious and accidental misuse are both possible.
`,

followups:[
"How would retrieval security work?",
"How would monitoring work?",
"How would governance integrate?",
"How would incidents be managed?"
]
},

{
question: "An AI Vendor Suffers a Major Security Breach. What Should the Enterprise Do?",

answer: `
The response should follow established third-party risk procedures.

Activities include:

Risk Assessment.

Exposure Analysis.

Credential Rotation.

Access Reviews.

Contract Reviews.

Vendor Re-Evaluation.

The event should trigger broader supply chain security reviews.
`,

followups:[
"How would you assess exposure?",
"How would contracts influence decisions?",
"How would governance respond?",
"How would vendor strategy change?"
]
},

{
question: "How Would You Conduct an AI Red Team Exercise?",

answer: `
The objective is identifying weaknesses before attackers do.

Areas tested include:

Prompt Injection.

Jailbreaking.

Data Leakage.

Agent Abuse.

Tool Misuse.

RAG Security.

The exercise should simulate realistic threats rather than academic attacks.

Findings should directly influence architecture improvements.
`,

followups:[
"Who participates in red teaming?",
"How often should exercises occur?",
"How are findings prioritized?",
"How are improvements tracked?"
]
},

{
question: "A Business Unit Wants Fully Autonomous Agents. What Security Concerns Would You Raise?",

answer: `
Autonomy increases both value and risk.

Concerns include:

Unauthorized Actions.

Privilege Escalation.

Financial Risk.

Compliance Violations.

Operational Risk.

I would recommend phased autonomy.

Recommendation.

Approval.

Semi-Autonomous.

Fully Autonomous.

The level of autonomy should match organizational trust and risk tolerance.
`,

followups:[
"How do you measure readiness?",
"How do you define risk thresholds?",
"How do approvals work?",
"How do audits work?"
]
},

{
question: "How Would You Secure an Enterprise Agent Platform?",

answer: `
The architecture should include:

Agent Identity.

Authentication.

Authorization.

Tool Controls.

Memory Controls.

Governance.

Observability.

Every agent should be treated as a software identity with clearly defined permissions.
`,

followups:[
"How would identity work?",
"How would permissions be managed?",
"How would governance scale?",
"How would observability work?"
]
},

{
question: "How Would You Protect Against Insider Misuse of Enterprise AI Systems?",

answer: `
Controls should include:

Access Management.

Data Classification.

Monitoring.

Usage Analytics.

Behavioral Analysis.

Audit Logging.

Many AI incidents originate from legitimate users operating outside approved boundaries.
`,

followups:[
"How would monitoring work?",
"How are violations detected?",
"How does governance help?",
"How are investigations conducted?"
]
},

{
question: "How Would You Respond to a Large-Scale Hallucination Incident in Production?",

answer: `
The response should focus on:

Containment.

Impact Assessment.

Root Cause Analysis.

Evaluation Improvements.

Governance Updates.

The investigation should determine whether the issue originated from:

Retrieval.

Prompting.

Model Changes.

Data Quality.

Hallucinations should be managed similarly to software defects.
`,

followups:[
"How would you identify affected users?",
"How would evaluations improve?",
"How would governance respond?",
"How would future incidents be prevented?"
]
},

{
question: "How Would You Secure MCP-Based Enterprise Integrations?",

answer: `
The architecture should provide:

Authentication.

Authorization.

Tool Governance.

Resource Governance.

Audit Logging.

Monitoring.

MCP should extend enterprise security models rather than bypass them.
`,

followups:[
"How would permissions work?",
"How would auditing work?",
"How would governance integrate?",
"How would security scale?"
]
},

{
question: "How Would You Secure A2A Communication Across Thousands of Agents?",

answer: `
The architecture should include:

Agent Identity.

Mutual Authentication.

Authorization Policies.

Message Integrity.

Observability.

Governance.

Zero Trust principles should apply.

Every interaction should be verified rather than assumed trustworthy.
`,

followups:[
"How does Zero Trust apply?",
"How would discovery work securely?",
"How would authorization work?",
"How would observability support investigations?"
]
},

{
question: "Your Enterprise Wants to Use Open-Source Models. What Security Review Would You Perform?",

answer: `
The review should include:

Model Provenance.

Licensing.

Supply Chain Risks.

Security Testing.

Governance Requirements.

The objective is understanding risks before deployment rather than rejecting open-source models automatically.
`,

followups:[
"How would you evaluate provenance?",
"How would supply chain risks be assessed?",
"How would governance work?",
"How would security testing occur?"
]
},

{
question: "How Would You Build an Enterprise AI Threat Model?",

answer: `
The threat model should evaluate:

Users.

Agents.

Models.

Knowledge Sources.

Integrations.

Infrastructure.

Threat categories include:

Prompt Injection.

Data Leakage.

Model Abuse.

Agent Abuse.

Supply Chain Risks.

The threat model becomes a foundation for architecture decisions.
`,

followups:[
"How are threats prioritized?",
"How often is the model updated?",
"How does governance use the model?",
"How does it influence architecture?"
]
},

{
question: "A Regulator Requests a Full Audit of an AI Decision. Can You Explain It?",

answer: `
The architecture should support:

Traceability.

Auditability.

Observability.

Decision Records.

Evidence Tracking.

The organization should be able to explain:

What information was used?

Which model participated?

Which rules were applied?

Who approved actions?

This capability should be designed from the beginning.
`,

followups:[
"How are decisions traced?",
"How are audits performed?",
"How does observability help?",
"How do governance controls support audits?"
]
},

{
question: "How Would You Establish Enterprise AI Security Governance?",

answer: `
The framework should include:

Policies.

Standards.

Architecture Reviews.

Risk Assessments.

Security Reviews.

Incident Management.

Governance should be embedded into platforms rather than relying solely on manual reviews.
`,

followups:[
"Who owns governance?",
"How are policies enforced?",
"How does governance scale?",
"How is effectiveness measured?"
]
},

{
question: "Principal Architect Scenario: Design a Secure Enterprise AI Platform for a Fortune 500 Organization.",

answer: `
I would structure the architecture into layers.

Identity Layer.

Authentication Layer.

Authorization Layer.

Knowledge Security Layer.

Model Security Layer.

Agent Security Layer.

Integration Security Layer.

Governance Layer.

Observability Layer.

Operations Layer.

Key principles include:

Zero Trust.

Least Privilege.

Defense in Depth.

Auditability.

Governance by Design.

The objective is enabling enterprise-scale AI adoption while maintaining security, compliance and trust.

A strong Principal Architect answer demonstrates that AI security is not a model problem.

It is an enterprise architecture problem involving people, processes, governance and technology.
`,

followups:[
"How would implementation be phased?",
"How would governance integrate?",
"How would risks be measured?",
"How would maturity evolve?"
]
}

];