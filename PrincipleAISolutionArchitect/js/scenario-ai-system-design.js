data["Scenario: AI System Design"] = [

{
question: "Design an Enterprise Copilot Similar to ChatGPT for 100,000 Employees.",

answer: `
This is one of the most common AI Architect interview questions.

The first thing I would do is clarify requirements.

Will the copilot answer company questions?

Will it access internal systems?

Will it execute actions?

Will it support multiple languages?

The high-level architecture would contain:

UI Layer.

API Gateway.

AI Gateway.

Authentication Layer.

RAG Platform.

Knowledge Platform.

Model Layer.

Observability Platform.

Governance Platform.

The user authenticates through enterprise SSO.

Queries are routed through an AI Gateway.

The gateway applies:

Security Policies.

Rate Limits.

Model Routing.

Cost Controls.

The retrieval layer accesses enterprise knowledge.

Retrieved content is injected into prompts.

The model generates responses.

Every interaction is logged, evaluated and monitored.

A Principal Architect should emphasize governance, scalability and operational excellence rather than simply describing the LLM.
`,

followups:[
"How would you support multiple models?",
"How would permission-aware retrieval work?",
"How would you measure adoption?",
"How would costs be controlled?"
]
},

{
question: "Design an Enterprise RAG Platform Used by Multiple Business Units.",

answer: `
The challenge here is multi-tenancy.

Different business units have:

Different knowledge.

Different permissions.

Different compliance requirements.

The platform should provide:

Shared Ingestion.

Shared Embedding Services.

Shared Retrieval Services.

Shared Governance.

Business units maintain isolated knowledge spaces.

Permission-aware retrieval becomes critical.

The architecture should support:

Knowledge Freshness.

Scalability.

Tenant Isolation.

Governance.

The platform should be reusable rather than building independent RAG solutions for each department.
`,

followups:[
"How would tenant isolation work?",
"How would governance work?",
"How would retrieval scale?",
"How would security be implemented?"
]
},

{
question: "Design an AI Gateway for Enterprise AI Applications.",

answer: `
The AI Gateway acts similarly to an API Gateway.

Every AI request passes through it.

Responsibilities include:

Authentication.

Authorization.

Model Routing.

Rate Limiting.

Prompt Inspection.

Cost Controls.

Observability.

Governance.

Without an AI Gateway, organizations struggle to manage model usage consistently.

The gateway becomes the central control point for enterprise AI traffic.
`,

followups:[
"How would model routing work?",
"How would prompt filtering work?",
"How would cost controls work?",
"How would governance be enforced?"
]
},

{
question: "Design a Multi-Model Enterprise AI Platform.",

answer: `
Most enterprises eventually use multiple models.

Examples include:

Reasoning Models.

Coding Models.

Low-Cost Models.

Multimodal Models.

The architecture requires a routing layer.

The routing layer evaluates:

Task Type.

Cost Requirements.

Latency Requirements.

Security Constraints.

The platform should support model abstraction so applications are not tightly coupled to a single vendor.
`,

followups:[
"How would routing decisions work?",
"How would fallback strategies work?",
"How would vendor lock-in be avoided?",
"How would model performance be monitored?"
]
},

{
question: "Design an Enterprise Agent Platform.",

answer: `
The platform should provide shared services for all agents.

Examples include:

Identity Services.

Memory Services.

A2A Services.

MCP Services.

Observability.

Governance.

Security.

The objective is allowing teams to focus on business logic rather than building foundational capabilities repeatedly.
`,

followups:[
"How would agents be discovered?",
"How would governance work?",
"How would agent identity be managed?",
"How would memory be implemented?"
]
},

{
question: "Design a Customer Support AI Assistant for a Telecom Company.",

answer: `
The solution would combine:

Enterprise Knowledge.

Customer Data.

Ticket History.

Network Information.

The architecture includes:

Customer Portal.

AI Gateway.

RAG Layer.

CRM Integration.

Ticketing Integration.

Knowledge Platform.

The assistant should support:

Question Answering.

Ticket Creation.

Troubleshooting.

Escalation.

Governance and permission controls become important because customer information is sensitive.
`,

followups:[
"How would customer data be protected?",
"How would hallucinations be reduced?",
"How would escalation work?",
"How would success be measured?"
]
},

{
question: "Design an AI Platform for Software Engineering Teams.",

answer: `
Capabilities would include:

Code Generation.

Code Review.

Documentation.

Knowledge Search.

Architecture Assistance.

The platform would integrate with:

GitHub.

Jira.

Confluence.

CI/CD Systems.

Governance controls should ensure generated code follows organizational standards.
`,

followups:[
"How would code security be validated?",
"How would source code be protected?",
"How would evaluations work?",
"How would developer productivity be measured?"
]
},

{
question: "Design an Enterprise Search Platform Powered by GenAI.",

answer: `
The architecture combines:

Keyword Search.

Vector Search.

Metadata Search.

RAG.

The objective is providing unified access to enterprise knowledge.

Permission-aware retrieval is critical.

Users should only see information they are authorized to access.
`,

followups:[
"How would retrieval work?",
"How would indexing work?",
"How would freshness be maintained?",
"How would governance be enforced?"
]
},

{
question: "Design a Digital Workforce for Back-Office Operations.",

answer: `
The workforce may include:

Research Agents.

Validation Agents.

Execution Agents.

Audit Agents.

A2A communication becomes important.

Governance must define:

Approvals.

Escalations.

Risk Thresholds.

Human Oversight.

The architecture should support graduated autonomy.
`,

followups:[
"How would agent coordination work?",
"How would governance scale?",
"How would performance be measured?",
"How would risk be managed?"
]
},

{
question: "Design a Global Knowledge Platform for Enterprise AI.",

answer: `
The platform should centralize knowledge while supporting regional requirements.

Capabilities include:

Ingestion.

Classification.

Retrieval.

Governance.

Security.

Regional deployments may be required for compliance and data sovereignty.
`,

followups:[
"How would global governance work?",
"How would freshness be maintained?",
"How would retrieval scale?",
"How would security work?"
]
},

{
question: "Design a Graph RAG Platform.",

answer: `
The architecture combines:

Knowledge Graphs.

Entity Extraction.

Relationship Extraction.

Graph Storage.

Graph Retrieval.

LLMs.

Graph RAG is useful when answers depend on relationships rather than individual documents.
`,

followups:[
"How are relationships extracted?",
"How does graph retrieval work?",
"How does Graph RAG differ from traditional RAG?",
"How should governance work?"
]
},

{
question: "Design an Agentic RAG Platform.",

answer: `
Instead of a simple retrieve-and-generate workflow, agents perform:

Planning.

Research.

Validation.

Summarization.

This improves performance for complex questions but increases cost and complexity.
`,

followups:[
"How would agents coordinate?",
"How would costs be controlled?",
"How would evaluations work?",
"How would governance work?"
]
},

{
question: "Design an AI Platform Supporting One Million Users.",

answer: `
The design should focus on:

Horizontal Scaling.

Caching.

Regional Deployments.

Model Routing.

Load Balancing.

Observability.

Governance.

Every layer should be designed for resilience and elasticity.
`,

followups:[
"How would global deployments work?",
"How would costs be optimized?",
"How would reliability be achieved?",
"How would observability scale?"
]
},

{
question: "Design an Enterprise AI Evaluation Platform.",

answer: `
The platform should evaluate:

Prompts.

Models.

RAG Pipelines.

Agents.

Workflows.

Metrics include:

Accuracy.

Groundedness.

Latency.

Cost.

Safety.

The platform becomes essential for production AI quality management.
`,

followups:[
"How would datasets be created?",
"How would evaluations be automated?",
"How would regressions be detected?",
"How would results be visualized?"
]
},

{
question: "Design an Enterprise Memory Platform.",

answer: `
The platform should support:

Short-Term Memory.

Long-Term Memory.

Episodic Memory.

Semantic Memory.

The platform becomes a shared capability used by multiple agents and copilots.
`,

followups:[
"How would retrieval work?",
"How would governance work?",
"How would memory be secured?",
"How would storage scale?"
]
},

{
question: "Design a Multi-Agent Incident Management System.",

answer: `
Example agents include:

Detection Agent.

Analysis Agent.

Recommendation Agent.

Execution Agent.

Audit Agent.

The architecture should support collaboration while maintaining strong governance controls.
`,

followups:[
"How would agents communicate?",
"How would escalation work?",
"How would governance work?",
"How would risk be controlled?"
]
},

{
question: "Design an AI Cost Optimization Platform.",

answer: `
The platform monitors:

Model Usage.

Token Consumption.

Agent Costs.

Retrieval Costs.

It should support:

Budget Controls.

Cost Analytics.

Model Routing.

Caching.

Optimization Recommendations.
`,

followups:[
"How would budgets be enforced?",
"How would costs be allocated?",
"How would optimization work?",
"How would reporting work?"
]
},

{
question: "Design an AI Observability Platform.",

answer: `
The platform should provide:

Tracing.

Monitoring.

Evaluation.

Cost Analytics.

Governance Visibility.

The objective is making AI systems observable and manageable in production.
`,

followups:[
"How would traces work?",
"How would agent workflows be visualized?",
"How would alerts work?",
"How would governance integrate?"
]
},

{
question: "Design a Global Enterprise AI Platform.",

answer: `
This combines:

AI Gateway.

RAG Platform.

Agent Platform.

Memory Platform.

Governance Platform.

Security Platform.

Regional deployments support compliance while maintaining centralized governance.
`,

followups:[
"How would regional autonomy work?",
"How would governance scale?",
"How would security work?",
"How would operations work?"
]
},

{
question: "Principal Architect Whiteboard Exercise: Design an End-to-End Enterprise AI Ecosystem.",

answer: `
I would structure the architecture into layers.

Experience Layer.

Agent Layer.

Knowledge Layer.

Memory Layer.

Model Layer.

Integration Layer.

Security Layer.

Governance Layer.

Operations Layer.

The discussion should focus on:

Tradeoffs.

Scalability.

Governance.

Risk.

Business Value.

The strongest answers demonstrate platform thinking rather than solution-level thinking.

A Principal Architect should show how multiple AI capabilities work together as an enterprise ecosystem.
`,

followups:[
"How would transformation occur?",
"How would adoption be measured?",
"How would governance evolve?",
"How would value be realized?"
]
}

];