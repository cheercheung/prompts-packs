
import { Category } from '../types';

export const promptData: Category[] = [
  {
    id: 'any-role',
    title: '1. 任意角色通用',
    description: '适用场景: 所有职场角色的日常工作\n核心能力: 沟通写作、会议协作、问题解决、组织效率',
    subCategories: [
      {
        title: '1.1 沟通与写作 (Communication & Writing)',
        description: '用途说明: ChatGPT可以帮助创建草稿、优化文案、调整日常职场沟通的语气和风格。',
        prompts: [
          {
            title: '📝 撰写专业邮件',
            prompt: 'Write a professional email to [recipient]. The email is about [topic] and should be polite, clear, and concise. Provide a subject line and a short closing.',
            suggestion: '使用建议: 替换`[recipient]`为收件人角色,`[topic]`为邮件主题。适用于外部沟通、内部协调等场景。',
          },
          {
            title: '📝 重写以提高清晰度',
            prompt: 'Rewrite the following text so it is easier to understand. The text will be used in a professional setting. Ensure the tone is clear, respectful, and concise. Text: [paste text].',
            suggestion: '使用建议: 将复杂或冗长的文本粘贴到`[paste text]`处,让AI简化表达。',
          },
          {
            title: '📝 针对不同受众调整信息',
            prompt: 'Reframe this message for [audience type: executives, peers, or customers]. The message was originally written for [context]. Adjust tone, word choice, and style to fit the intended audience. Text: [paste text].',
            suggestion: '使用建议: 同一内容需要向不同层级汇报时特别有用。',
          },
          {
            title: '📝 起草会议邀请',
            prompt: 'Draft a meeting invitation for a session about [topic]. The meeting will include [attendees/roles] and should outline agenda items, goals, and preparation required. Provide the text in calendar-invite format.',
          },
          {
            title: '📝 总结冗长邮件线程',
            prompt: 'Summarize this email thread into a short recap. The thread includes several back-and-forth messages. Highlight key decisions, action items, and open questions. Email: [paste text].',
          },
        ],
      },
      {
        title: '1.2 会议与协作 (Meetings & Collaboration)',
        description: '用途说明: 简化会议准备、记录和跟进流程。',
        prompts: [
          {
            title: '🤝 创建会议议程',
            prompt: 'Create a structured agenda for a meeting about [topic]. The meeting will last [time] and include [attendees]. Break the agenda into sections with time estimates and goals for each section.',
          },
          {
            title: '🤝 总结会议记录',
            prompt: 'Summarize these meeting notes into a structured recap. The notes are rough and informal. Organize them into categories: key decisions, next steps, and responsibilities. Notes: [paste text].',
          },
          {
            title: '🤝 创建行动项清单',
            prompt: 'Turn the following meeting notes into a clean task list. The tasks should be grouped by owner and include deadlines if mentioned. Notes: [paste text].',
          },
          {
            title: '🤝 准备会议提问',
            prompt: 'Suggest thoughtful questions to ask in a meeting about [topic]. The purpose of the meeting is [purpose]. Provide a list of at least 5 questions that show preparation and insight.',
          },
          {
            title: '🤝 起草跟进邮件',
            prompt: 'Write a professional follow-up email after a meeting about [topic]. Include a recap of key points, assigned responsibilities, and next steps with deadlines. Use a clear and polite tone.',
          },
        ],
      },
      {
        title: '1.3 问题解决与决策 (Problem Solving & Decision Making)',
        description: '用途说明: 识别根本原因、比较方案、评估风险。',
        prompts: [
          {
            title: '🎯 识别根本原因',
            prompt: 'Analyze the following workplace issue: [describe issue]. The context is that the problem has occurred multiple times. Identify possible root causes and suggest questions to confirm them.',
          },
          {
            title: '🎯 比较多个方案',
            prompt: 'Compare the following two or more possible solutions: [list options]. The decision needs to be made in [timeframe]. Evaluate pros, cons, and potential risks for each option.',
          },
          {
            title: '🎯 定义决策标准',
            prompt: 'Help define clear decision-making criteria for [describe decision]. The context is that multiple stakeholders are involved. Provide a short list of weighted criteria to guide the choice.',
          },
          {
            title: '🎯 风险评估',
            prompt: 'Assess the potential risks of the following plan: [describe plan]. The plan is set to start on [date]. List risks by likelihood and impact, and suggest mitigation strategies.',
          },
          {
            title: '🎯 推荐最佳方案',
            prompt: 'Based on the following background: [describe situation and options], recommend the most suitable option. Explain your reasoning clearly and suggest first steps for implementation.',
          },
        ],
      },
      {
        title: '1.4 组织与生产力 (Organization & Productivity)',
        description: '用途说明: 帮助整理任务、时间和优先级。',
        prompts: [
          {
            title: '📊 记录每日优先事项',
            prompt: 'Create a prioritized to-do list from the following tasks: [paste tasks]. The context is a typical workday with limited time. Suggest which tasks should be done first and why.',
          },
          {
            title: '📊 创建周计划',
            prompt: 'Build a weekly work plan for [describe role or situation]. The week includes deadlines, meetings, and individual focus time. Provide a balanced schedule with recommended priorities.',
          },
          {
            title: '📊 总结长文档',
            prompt: 'Summarize the following document into 5 key points and 3 recommended actions. The document is [type: report, plan, or notes]. Keep the summary concise and professional. Text: [paste document].',
          },
          {
            title: '📊 头脑风暴解决方案',
            prompt: 'Brainstorm potential solutions to the following workplace challenge: [describe challenge]. Provide at least 5 varied ideas, noting pros and cons for each.',
          },
          {
            title: '📊 撰写项目进展更新',
            prompt: 'Draft a short project update for stakeholders. The project is [describe project]. Include progress made, current blockers, and next steps. Write in a professional, concise style.',
          },
        ],
      },
    ],
  },
  {
    id: 'sales',
    title: '2. 销售团队',
    description: '适用场景: B2B/B2C销售、客户拓展、管道管理、商机跟进\n核心能力: 外联沟通、销售策略、竞争情报、数据分析、可视化素材',
    subCategories: [
        {
            title: '2.1 外联与沟通 (Outreach & Communication)',
            description: '用途说明: 制作个性化、有说服力的客户沟通内容。',
            prompts: [
              {
                title: '💼 起草个性化冷邮件',
                prompt: 'Write a short, compelling cold email to a [job title] at [company name] introducing our product. Use the background below to customize it. Background: [insert value props or ICP info]. Format it in email-ready text.',
              },
              {
                title: '💼 改写演示跟进邮件',
                prompt: 'Rewrite this follow-up email after a demo to sound more consultative. Original email: [paste here]. Include recap, next steps, and call scheduling CTA. Output as email text.',
              },
              {
                title: '💼 起草续约推介',
                prompt: 'Draft a renewal pitch for [customer name] based on this renewal history and value data: [paste data]. Include key ROI proof points and renewal recommendation. Output as a short pitch and optional follow-up email.',
              },
              {
                title: '💼 创建销售代表活动总结',
                prompt: 'Write a daily update summarizing key rep activities. Inputs: [paste call summaries or CRM exports]. Make it upbeat and concise. Output as 3–5 bullet message.',
              },
              {
                title: '💼 起草高管管道状态更新',
                prompt: 'Summarize our pipeline health this month for execs. Inputs: [paste data]. Include total pipeline, top risks, biggest wins, and forecast confidence. Write it like a short exec update.',
              },
            ],
          },
          {
            title: '2.2 销售策略与规划 (Sales Strategy & Planning)',
            description: '用途说明: 指导客户、区域和管道规划以实现战略增长。',
            prompts: [
              {
                title: '📈 生成战略客户计划',
                prompt: 'Create an account plan for [customer name]. Use these inputs: company profile, known priorities, current product usage, stakeholders, and renewal date. Output a structured plan with goals, risks, opportunities, and next steps.',
              },
              {
                title: '📈 设计区域规划框架',
                prompt: 'Create a territory planning guide for our next fiscal year. Inputs: team headcount, target industries, regions, and historical revenue. Recommend allocation method and sample coverage plan.',
              },
              {
                title: '📈 使用公司数据优先排序客户',
                prompt: 'I have this list of accounts: [paste sample]. Prioritize them based on [criteria: industry, size, funding, tech stack]. Output a ranked list with reasons why.',
              },
              {
                title: '📈 使用加权评分识别高潜力客户',
                prompt: 'Score accounts based on [insert rules—e.g., company size, engagement score, intent signals]. Data: [Upload account list]. Output top 10 ranked accounts with their score and a note explaining why.',
              },
              {
                title: '📈 区域市场进入规划',
                prompt: 'I\'m evaluating market entry into [region/country] for our [SaaS solution]. Research local buying behaviors, competitive landscape, economic conditions, and regulatory concerns. Format as a go/no-go market readiness summary with citations and action steps.',
              },
            ],
          },
          {
            title: '2.3 竞争情报与赋能 (Competitive Intelligence & Enablement)',
            description: '用途说明: 为销售团队提供洞察、定位和工具以赢得竞争。',
            prompts: [
              {
                title: '🔍 为竞争对手创建对战卡',
                prompt: 'Create a battlecard for [competitor name]. Use these notes: [insert positioning data]. Include strengths, weaknesses, how we win, and quick talk track. Output as table format.',
              },
              {
                title: '🔍 竞争定位分析',
                prompt: 'I\'m preparing a competitive battlecard for [competitor name]. Research their pricing model, product positioning, recent customer wins/losses, and sales motion. Compare it to ours based on these strengths: [insert]. Output a 1-page summary with citations.',
              },
              {
                title: '🔍 创建销售赋能单页文档',
                prompt: 'Create a one-pager to help reps pitch [product name] to [persona]. Include key benefits, features, common use cases, and competitor differentiators. Format as copy-ready enablement doc.',
              },
              {
                title: '🔍 准备销售异议回应',
                prompt: 'Create rebuttals to these common objections: [insert 2–3 objections]. Make them sound natural and confident, and include a backup stat or story where useful. Output as list.',
              },
              {
                title: '🔍 在公共领域查找客户证明点',
                prompt: 'Research recent online reviews, social mentions, and testimonials about [our product OR competitor product]. Focus on what customers are praising or criticizing. Summarize top 5 quotes, what persona each came from, and where it was posted. Include links.',
              },
            ],
          },
          {
            title: '2.4 数据分析与性能洞察 (Data Analysis & Performance Insights)',
            description: '用途说明: 分析销售数据以发现性能趋势和可操作洞察。',
            prompts: [
              {
                title: '📊 按阶段分析管道转化率',
                prompt: 'Analyze this sales pipeline export. Calculate conversion rates between each stage and identify the biggest drop-off point. Data: [Upload pipeline CSV]. Output a short summary and a table of conversion % by stage.',
              },
              {
                title: '📊 按成交率识别顶级代表',
                prompt: 'From this dataset of rep activities and closed deals, calculate the close rate for each rep and rank them. Data: [Upload rep performance CSV]. Output a ranked list and a sentence for each rep\'s strength.',
              },
              {
                title: '📊 可视化各季度交易速度',
                prompt: 'Use this CRM export to calculate average deal velocity per quarter (days from lead to close). Data: [Upload with open/close dates]. Show velocity trend in a simple chart and summarize the trendline.',
              },
              {
                title: '📊 总结活动归因到成交',
                prompt: 'Match campaign sources to closed-won deals from this data. Identify which campaign drove the most closed revenue. Data: [Upload campaign + deal export]. Output a ranked list and a short campaign summary.',
              },
              {
                title: '📊 生成性能对比图表',
                prompt: 'Here\'s a table of rep performance by quarter: [paste data]. Compare top vs bottom performers. Show chart with trends and call out key differences. Output as table + insights.',
              },
            ],
          },
          {
            title: '2.5 可视化与销售素材 (Visuals & Sales Collateral)',
            description: '用途说明: 创建视觉资产和结构化素材用于销售赋能。',
            prompts: [
              {
                title: '🎨 以漏斗视图可视化销售流程',
                prompt: 'Create a funnel graphic showing our sales stages: [insert stages]. Make it clean and easy to read for onboarding docs. Output as simple image.',
              },
              {
                title: '🎨 可视化B2B销售漏斗',
                prompt: 'Create an image of a standard B2B SaaS sales funnel with these stages: Prospecting, Discovery, Demo, Proposal, Closed Won/Lost. Use clean, modern icons and text labels. Output should be clear enough for use in a slide or enablement doc.',
              },
              {
                title: '🎨 描绘关键销售角色',
                prompt: 'Create professional illustrations for 3 personas: (1) CFO of a mid-market company, (2) VP of IT at a global enterprise, and (3) Operations Manager at a logistics firm. Style should be flat and modern, ideal for use in a one-pager or training slide.',
              },
              {
                title: '🎨 创建区域覆盖地图',
                prompt: 'Create a simplified U.S. map showing sales territories split by region: West, Central, East. Use distinctive color zones and label key states. Output should look clean and suitable for a sales kickoff deck.',
              },
              {
                title: '🎨 起草团队庆祝图形',
                prompt: 'Design a fun, modern graphic to celebrate "Top Rep of the Month." Include a placeholder for name/photo and stylized trophy or badge. Style should match internal brand or newsletter vibe.',
              },
            ],
          },
    ],
  },
    {
    id: 'customer-success',
    title: '3. 客户成功',
    description: '适用场景: SaaS客户成功、客户生命周期管理、健康度监控、续约管理\n核心能力: 入职策略、竞争研究、客户规划、数据分析、可视化设计',
    subCategories: [
      {
        title: '3.1 入职与生命周期策略 (Onboarding & Lifecycle Strategy)',
        prompts: [
          { title: '🚀 创建入职计划模板', prompt: 'Create a reusable onboarding plan template for [type of customer]. Reference typical timelines, milestones, and stakeholder alignment needs. Format as a week-by-week table with task owners and goals.' },
          { title: '🚀 总结入职反馈', prompt: 'Summarize onboarding feedback from our last 10 customers in [segment]. Use these shared notes and survey answers. Output a short paragraph per theme: wins, blockers, suggestions.' },
          { title: '🚀 识别高接触入职最佳实践', prompt: 'Research how leading B2B companies structure high-touch onboarding journeys. Focus on companies with $1M+ ACV and hybrid onboarding models. Include sources and structure the output as a bulleted summary of key tactics with references.' },
          { title: '🚀 建议主动剧本', prompt: 'Recommend 3 proactive outreach playbooks for at-risk customers in [industry/segment]. Use trends from recent churn, feature inactivity, and low engagement. Output should include: goal, trigger, CTA, and timing.' },
          { title: '🚀 头脑风暴留存激励', prompt: 'Suggest creative retention strategies for accounts likely to downgrade in [industry]. Use trends in usage and renewal hesitations we\'ve seen. Output 5 tested and 5 novel ideas with pros/cons.' },
        ]
      },
      {
        title: '3.2 竞争与基准研究 (Competitive & Benchmark Research)',
        prompts: [
          { title: '🔬 基准CS组织结构', prompt: 'Benchmark the CS org structure for companies like ours in [industry, size]. Focus on roles per customer segment and ratio to revenue. Output as a comparison table with notes on headcount ratios.' },
          { title: '🔬 按行业基准成功指标', prompt: 'Research top 3 success metrics used for customer health scoring in the [industry] sector. Include CSAT, NRR, usage frequency, or other emerging benchmarks. Output as a table comparing metric, source, and benchmark value with citations.' },
          { title: '🔬 评估CS工具栈', prompt: 'Research typical Customer Success tech stacks for companies in early-stage, growth-stage, and enterprise. Include categories (e.g., CRM, Success Platform, Analytics). Output a comparison chart with examples and usage notes.' },
          { title: '🔬 竞争赋能总结', prompt: 'Research how competitors are supporting enterprise customers post-sale in [industry]. Include examples of success resources, team structure, and onboarding formats. Output as a table comparing 3 competitors with pros/cons per tactic.' },
          { title: '🔬 创建CS项目竞争对比', prompt: 'Research what customer success programs look like at our top 3 competitors. Focus on onboarding, health tracking, and expansion strategies. Output a comparison matrix.' },
        ]
      },
      {
        title: '3.3 客户规划与续约准备 (Account Planning & Renewal Prep)',
        prompts: [
          { title: '📋 起草高管邮件更新', prompt: 'Write a weekly update email for [executive stakeholder at customer]. Use these internal notes from this week\'s call and usage metrics: [paste here]. Output should be a short, polished email with 3 bullets.' },
          { title: '📋 起草QBR讨论要点', prompt: 'Summarize the top wins, risks, and product usage highlights for [Customer Name] ahead of our QBR. Use their latest health score, usage trends, and support ticket history. Format as a bulleted prep doc for internal review.' },
          { title: '📋 准备续约电话', prompt: 'Create a renewal call prep checklist for [Customer Name]. Include contract terms, current usage, known risks, and upsell potential. Output as a bulleted checklist.' },
          { title: '📋 创建客户计划摘要', prompt: 'Draft a 1-pager account plan for [Customer Name]. Use notes from our last 2 calls + contract info + goals: [paste here]. Output should be formatted as goals, blockers, actions, and renewals.' },
          { title: '📋 概述续约风险总结', prompt: 'Draft a renewal risk summary for [Customer Name] ahead of our internal forecast call. Include their renewal date, usage trend, sentiment, and contract notes. Output should be a paragraph summary + 1-line recommendation.' },
        ]
      },
      {
        title: '3.4 数据与健康度分析 (Data & Health Analysis)',
        prompts: [
          { title: '📈 按细分概述成功指标', prompt: 'Outline a draft list of success metrics for [segment] customers. Include adoption goals, engagement targets, and renewal benchmarks. Format as a 2-column table: Metric | Definition.' },
          { title: '📈 评估CSAT分数分布', prompt: 'Review this CSAT survey data from Q2. Calculate overall average, identify outlier scores, and summarize feedback themes if available. Output as a short summary with key stats and top positive/negative feedback examples.' },
          { title: '📈 分析支持工单趋势', prompt: 'Examine this export of support tickets from the last quarter. Identify the top 5 recurring issues and provide a short summary of root causes. Output should include a ranked list with issue, frequency, and potential CS actions.' },
          { title: '📈 发现流失早期信号', prompt: 'Review this customer usage data from the past 90 days. Identify any customers who may be at risk of churning based on usage drop, login frequency, or support interactions. Summarize the findings in a table with columns: Customer Name | Risk Factor | Notes.' },
          { title: '📈 标准化客户健康度评分', prompt: 'Build a draft health scoring rubric for [segment or region]. Use inputs like usage %, NPS, renewal status, and ticket volume. Output as a table with scoring ranges, weights, and color indicators.' },
        ]
      },
      {
        title: '3.5 可视化与图表设计 (Visual & Diagram Design)',
        prompts: [
          { title: '🎨 设计客户健康度评分模型', prompt: 'Design a visual mock-up of a color-coded health score gauge for customers. Include Low, Medium, High ranges with suggested numerical ranges and icons. Style: dashboard-style, clean lines, professional.' },
          { title: '🎨 可视化客户旅程地图', prompt: 'Turn this outline of customer lifecycle stages into a visual journey map. Use the stages and pain points listed here: [paste text]. Output as a labeled diagram with 5 lifecycle stages.' },
          { title: '🎨 图解升级流程', prompt: 'Create a diagram that illustrates the internal escalation process from CSM to Support to Engineering. Include 3 levels of severity and labeled handoff points. Style: flowchart format, minimal colors, ready for internal wiki.' },
          { title: '🎨 构建可视化客户成熟度模型', prompt: 'Create an image that visualizes a 4-stage customer maturity model for a SaaS platform. Each stage should have a title, key behavior pattern, and suggested CS touchpoint. Style: professional, clean, slide-ready.' },
        ]
      },
    ]
  },
  {
    id: 'product-management',
    title: '4. 产品管理',
    description: '适用场景: 产品经理、产品设计师、产品运营\n核心能力: 竞争与市场研究、产品策略与路线图、产品内容与沟通',
    subCategories: [
      {
        title: '4.1 竞争与市场研究 (Competitive & Market Research)',
        prompts: [
          { title: '🔍 比较竞争对手的入职UX', prompt: 'Compare the onboarding user experience of [competitor names]. Research their signup flow, activation steps, time-to-value, and key friction points. Output a comparison table with screenshots or descriptions and recommendations.', suggestion: '使用建议: 用于产品入职优化和竞品分析。' },
          { title: '🔍 基准竞争对手定价策略', prompt: 'Analyze and benchmark competitor pricing strategies for [product category]. Include pricing tiers, features per tier, target customers, and positioning. Output as a comparison matrix.' },
          { title: '🔍 比较技术栈选项', prompt: 'Compare different technology stack options for implementing [feature/system]. Consider scalability, developer experience, community support, and long-term maintenance. Output pros, cons, and recommendation.' },
          { title: '🔍 识别新功能的监管风险', prompt: 'Identify potential regulatory risks associated with launching [new feature] in [markets/regions]. Research relevant regulations, compliance requirements, and mitigation strategies.' },
          { title: '🔍 研究产品主导增长策略', prompt: 'Research and analyze product-led growth tactics and strategies used by successful SaaS companies in [industry]. Include case studies, key metrics, and implementation playbook.' },
        ]
      },
      {
        title: '4.2 产品策略与路线图 (Product Strategy & Roadmapping)',
        prompts: [
          { title: '🗺️ 优先排序产品路线图项目', prompt: 'Help prioritize these product roadmap items based on [criteria: impact, effort, strategic alignment]. Items: [paste list]. Output a ranked list with reasoning and suggested sequencing.' },
          { title: '🗺️ 探索变现模型', prompt: 'Explore different monetization models for [product type]. Consider subscription, usage-based, freemium, and hybrid approaches. Analyze pros, cons, and fit for our target market.' },
          { title: '🗺️ 起草产品愿景声明', prompt: 'Draft a compelling product vision statement for [product name]. The product serves [target audience] and aims to [core value proposition]. Make it inspiring, concise, and memorable.' },
          { title: '🗺️ 从客户反馈头脑风暴功能创意', prompt: 'Analyze this customer feedback: [paste feedback]. Brainstorm feature ideas that address the underlying needs and pain points. Output 5-10 feature concepts with brief descriptions.' },
          { title: '🗺️ 规划A/B测试实验', prompt: 'Plan an A/B testing experiment for [feature/change]. Define hypothesis, success metrics, sample size, duration, and variants. Output a structured experiment plan.' },
        ]
      },
      {
        title: '4.3 产品内容与沟通 (Product Content & Communication)',
        prompts: [
          { title: '📝 为新功能起草PRD', prompt: 'Draft a Product Requirements Document (PRD) for [new feature]. Include: problem statement, user stories, success metrics, technical requirements, and launch plan. Format as a structured document.' },
          { title: '📝 起草变更日志和发布说明', prompt: 'Draft changelog and release notes for [product update/version]. Highlight new features, improvements, bug fixes, and breaking changes. Use clear, user-friendly language.' },
        ]
      },
    ]
  },
    {
    id: 'engineers',
    title: '5. 工程师',
    description: '适用场景: 软件工程师、系统架构师、DevOps工程师\n核心能力: 技术研究、代码审查、文档编写、调试优化',
    subCategories: [
      {
        title: '5.1 研究与基准测试 (Research & Benchmarking)',
        prompts: [
            { title: '🔬 评估云提供商以进行迁移', prompt: 'Evaluate different cloud providers (AWS, Azure, GCP) for migrating [system/workload]. Compare pricing, services, compliance, performance, and migration complexity. Output a decision matrix with recommendation.'},
            { title: '🔬 研究实时应用框架', prompt: 'Research and compare frameworks suitable for building real-time applications with [requirements]. Consider WebSocket support, scalability, developer experience, and ecosystem maturity.'},
            { title: '🔬 基准可观测性工具', prompt: 'Benchmark and compare observability tools (e.g., Datadog, New Relic, Grafana) for [environment]. Evaluate metrics collection, tracing, logging, alerting, and cost.'},
            { title: '🔬 分析物流中的AI/ML趋势', prompt: 'Analyze AI and machine learning trends in the logistics industry. Focus on route optimization, demand forecasting, and warehouse automation. Include recent innovations and adoption patterns.'},
            { title: '🔬 调查合规最佳实践', prompt: 'Investigate compliance best practices for implementing [system/feature] in [regulated industry]. Research requirements, audit considerations, and technical controls.'},
        ]
      },
      {
        title: '5.2 技术审查与文档 (Technical Reviews & Documentation)',
        prompts: [
            { title: '📄 审查系统设计文档', prompt: 'Review this system design document for [system name]: [paste doc]. Provide feedback on architecture decisions, scalability concerns, potential bottlenecks, and missing considerations.'},
            { title: '📄 记录内部API行为', prompt: 'Document the behavior and specifications of this internal API: [paste API details]. Include endpoints, parameters, response formats, error codes, and usage examples.'},
            { title: '📄 为值班工程师起草运行手册', prompt: 'Draft a comprehensive runbook for on-call engineers handling [service/system]. Include: common issues, troubleshooting steps, escalation procedures, and key metrics to monitor.'},
            { title: '📄 为新员工创建入职指南', prompt: 'Create a technical onboarding guide for new engineering hires joining [team/project]. Cover: codebase overview, development setup, key systems, deployment process, and team practices.'},
            { title: '📄 从规格编写JIRA工单', prompt: 'Convert these technical specifications into detailed JIRA tickets: [paste specs]. Include: acceptance criteria, technical approach, dependencies, and estimated complexity.'},
        ]
      },
      {
        title: '5.3 调试与优化 (Debugging & Optimization)',
        prompts: [
            { title: '🐛 调试生产系统故障', prompt: 'Help debug this production issue: [paste error logs/symptoms]. Analyze potential root causes, suggest diagnostic steps, and propose solutions.'},
            { title: '🐛 排查性能问题', prompt: 'Troubleshoot this performance issue: [paste metrics/observations]. Identify potential bottlenecks in database queries, API calls, rendering, or infrastructure. Suggest optimization strategies.'},
            { title: '🐛 识别系统故障的根本原因', prompt: 'Analyze this system failure: [paste incident details]. Use the 5 Whys method to identify root causes. Output a structured analysis with preventive measures.'},
        ]
      }
    ]
  },
   {
    id: 'hr',
    title: '6. 人力资源',
    description: '适用场景: HR BP、招聘专员、薪酬福利、员工关系\n核心能力: 员工体验与反馈、HR研究与合规',
    subCategories: [
      {
        title: '6.1 员工体验与反馈 (Workspace Experience and Feedback)',
        prompts: [
            { title: '👥 起草员工调研问题', prompt: 'Write 6–8 employee survey questions designed to measure [e.g. belonging, manager trust, workload balance]. Ensure questions are unbiased, actionable, and use a 5-point Likert scale.'},
            { title: '👥 生成绩效评估提示', prompt: 'Develop a set of five questions for performance reviews that encourage reflection, future goal setting, and actionable feedback. Tailor for [role/level].'},
            { title: '👥 分析离职调研主题', prompt: 'Review the following employee exit survey responses: [paste data]. Identify the top recurring themes, concerns, and sentiment trends. Output a summary with recommendations.'},
            { title: '👥 分析员工流失趋势', prompt: 'Analyze this employee attrition dataset from the last 12 months: [paste data]. Identify patterns by department, tenure, performance rating, and demographics. Highlight risk factors.'},
            { title: '👥 生成薪酬基准报告', prompt: 'Based on this internal salary data and industry benchmarks: [paste data], highlight pay discrepancies by role, gender, and level. Output a summary with equity recommendations.'},
        ]
      },
      {
        title: '6.2 HR研究与合规 (HR Research & Compliance)',
        prompts: [
            { title: '📚 研究全球HR合规更新', prompt: 'Research the latest 2024–2025 HR compliance changes in the EU, US, and APAC. Focus on employment law, data privacy, and workplace safety. Output a regional summary with implementation impact.'},
            { title: '📚 基准平均DEI预算', prompt: 'Research typical DEI program budgets and team sizes for companies with 500–5,000 employees in the US. Include industry benchmarks and program components.'},
            { title: '📚 探索2025年顶级HR技术趋势', prompt: 'Research and summarize the top 5 HR technology trends expected to shape 2025. Include AI-powered tools, employee experience platforms, and people analytics innovations.'},
            { title: '📚 比较员工留存策略', prompt: 'Research 3 innovative, high-impact employee retention strategies used in tech, healthcare, and financial services. Compare effectiveness, implementation complexity, and ROI.'},
            { title: '📚 研究招聘工具', prompt: 'Research 4 top-rated candidate screening or sourcing tools used by mid-market companies. Compare features, pricing, ATS integrations, and user reviews.'},
        ]
      }
    ]
  },
  {
    id: 'it-team',
    title: '7. IT团队',
    description: '适用场景: IT运维、网络安全、系统管理、云架构\n核心能力: 云与供应商评估、IT合规与安全、IT运维与资产管理',
    subCategories: [
      {
        title: '7.1 云与供应商评估 (Cloud & Vendor Evaluations)',
        prompts: [
            { title: '☁️ 比较云提供商', prompt: 'Compare AWS, Azure, and GCP for our use case: [insert workload or environment]. Consider cost, uptime, global availability, and ease of integration. Output a decision matrix.'},
            { title: '☁️ 生成供应商对比图表', prompt: 'Research and compare remote access vendors for enterprise use. Focus on features (SSO, MFA, session recording), pricing, integrations, and support quality. Output as comparison table.'},
            { title: '☁️ 比较AI可观测性工具', prompt: 'I\'m an IT Manager at [company]. I\'m evaluating observability platforms for AI/ML workloads. Research current offerings, pricing, supported environments, and key differentiators in 2025.'},
            { title: '☁️ 调查零信任框架', prompt: 'I\'m a Security Architect working on adopting a zero trust model. Research leading frameworks (NIST, Google BeyondCorp) and recent updates to best practices in 2024–2025.'},
        ]
      },
      {
        title: '7.2 IT合规与安全 (IT Compliance & Security)',
        prompts: [
            { title: '🔒 评估全球数据驻留法规', prompt: 'Research 2025 data residency requirements across the EU, US, APAC, and LATAM. Include regulatory restrictions (GDPR, CCPA, LGPD) and preferred cloud regions. Output regional summary.'},
            { title: '🔒 分析远程访问工具', prompt: 'Compare remote access tools for enterprise use in 2025. Focus on SSO support, encryption standards, session logging, and pricing. Output vendor comparison with security ratings.'},
            { title: '🔒 生成合规检查清单', prompt: 'Create a checklist of IT-specific controls to review for an upcoming internal audit based on SOC 2 Type II guidelines. Organize by control domain (access, change management, monitoring).'},
            { title: '🔒 验证访问控制', prompt: 'Review this access matrix of users, roles, and systems: [paste matrix]. Check whether each user\'s access level follows our least-privilege policy. Flag violations and suggest remediations.'},
            { title: '🔒 审查API安全态势', prompt: 'Review this API schema and traffic logs: [paste data]. Identify common API security issues (broken auth, excessive data exposure, rate limiting). Output findings with suggested fixes.'},
        ]
      },
      {
        title: '7.3 IT运维与资产管理 (IT Operations & Asset Management)',
        prompts: [
            { title: '🛠️ 起草IT入职检查清单', prompt: 'Create a checklist for onboarding new hires from an IT perspective. Include: account provisioning (email, VPN, SSO), hardware setup, security training, and software licenses. Format as actionable checklist.'},
        ]
      }
    ]
  },
  {
    id: 'managers',
    title: '8. 管理者',
    description: '适用场景: 团队领导、部门经理、项目经理\n核心能力: 战略规划与对齐、管理辅导与绩效赋能、团队分析与健康诊断',
    subCategories: [
      {
        title: '8.1 战略规划与对齐 (Strategic Planning & Alignment)',
        prompts: [
            { title: '🎯 起草季度目标', prompt: 'Draft clear and measurable quarterly goals for my team. Here is the business context: [paste context]. Return 3 Objectives with 3-4 Key Results each using OKR framework.'},
            { title: '🎯 高管更新讨论要点', prompt: 'I need to brief my VP on team progress. Based on this weekly summary: [paste summary], generate concise talking points covering: wins, blockers, asks, and next sprint priorities.'},
            { title: '🎯 技能差距分析', prompt: 'I\'m trying to assess skill gaps on my team. Here\'s our current skill matrix: [paste matrix]. Identify key gaps relative to [project/initiative] and suggest training solutions or hiring needs.'},
        ]
      },
      {
        title: '8.2 管理辅导与绩效赋能 (Managerial Coaching & Performance Enablement)',
        prompts: [
            { title: '💬 1:1会议模板', prompt: 'Draft a 1:1 meeting template for my direct reports. Include: check-ins on progress, roadblocks, career growth goals, and space for bidirectional feedback. Format as reusable agenda.'},
            { title: '💬 建设性反馈', prompt: 'I want to give constructive feedback to a report who is underperforming in [specific area]. Context: [paste context]. Suggest ways to phrase it constructively using SBI (Situation-Behavior-Impact) model.'},
            { title: '💬 准备困难对话', prompt: 'I have a difficult conversation coming up about [topic] with [report name]. Context: [paste details]. Help me think through: what to say, questions to ask, and how to maintain psychological safety.'},
        ]
      },
      {
        title: '8.3 团队分析与健康诊断 (Team Analytics & Health Diagnostics)',
        prompts: [
            { title: '📊 倦怠风险评估', prompt: 'Based on this timesheet data: [paste data], flag early signs of burnout risk using a threshold of >45 hours for 2+ consecutive weeks. Output at-risk employees with suggested interventions.'},
            { title: '📊 工作量分配分析', prompt: 'Analyze task assignments and completion times for my team: [paste data]. Identify who may be overburdened or underutilized. Suggest workload rebalancing.'},
            { title: '📊 团队健康诊断', prompt: 'I\'m noticing signs of disengagement on my team: [describe symptoms]. What are likely causes (workload, clarity, recognition, growth)? What should I do next? Provide a diagnostic framework.'},
        ]
      }
    ]
  },
  {
    id: 'executives',
    title: '9. 高管',
    description: '适用场景: CEO、CFO、CTO、VP级别领导者\n核心能力: 投资者与市场情报、高管与组织沟通、战略规划与决策支持',
    subCategories: [
      {
        title: '9.1 投资者与市场情报 (Investor & Market Intelligence)',
        prompts: [
            { title: '💼 总结投资者趋势', prompt: 'Research the latest funding and market trends in [industry]. Focus on: valuation benchmarks (Series A-C), risk sentiment shifts, notable exits (IPO/acquisition), and emerging sub-sectors. Output a 1-page brief.'},
            { title: '💼 调研投资者情绪', prompt: 'Research current investor sentiment for companies in the [industry] space. Pull insights from earnings calls, investor letters, and analyst notes. Identify bullish/bearish signals.'},
            { title: '💼 基准高管薪酬', prompt: 'Conduct research on executive compensation benchmarks for [title] at [company size and industry]. Include base salary, equity, bonuses, and perks. Output percentile ranges (50th, 75th, 90th).'},
            { title: '💼 评估并购机会', prompt: 'Research recent acquisitions in [sector/vertical] (past 24 months). Analyze typical deal sizes, common acquisition targets, strategic rationales, and integration outcomes. Output M&A landscape summary.'},
            { title: '💼 评估未来趋势', prompt: 'Conduct deep research on 3-5 emerging trends in [industry/topic] over the next 3 years. Use academic papers, industry reports, and expert opinions. Output trend analysis with implications for our business.'},
        ]
      },
      {
        title: '9.2 高管与组织沟通 (Executive & Organizational Communications)',
        prompts: [
            { title: '📢 起草愿景声明', prompt: 'Help me draft a compelling vision statement for our [company/division/initiative]. Context: [paste context]. Make it inspiring, concise (1-2 sentences), forward-looking, and memorable.'},
            { title: '📢 生成全员大会讨论要点', prompt: 'I need talking points for an upcoming company-wide town hall. The theme is [insert theme, e.g., Q1 results, new strategy, org changes]. Include: opening hook, key messages, and Q&A prep.'},
            { title: '📢 刷新内部沟通策略', prompt: 'Help me design a new internal communications plan for [company/team]. Goals: [list goals]. Recommend: channels, cadence, content types, and measurement metrics.'},
            { title: '📢 规划重组沟通', prompt: 'Provide a step-by-step message plan for announcing a reorganization. Segment by audience (affected employees, broader team, managers, external stakeholders). Include timing, channels, and FAQ prep.'},
            { title: '📢 起草继任规划备忘录', prompt: 'Help me draft a succession planning memo for our [leadership team/board]. Include: objectives, timeline, evaluation criteria, development plans, and risk mitigation for key roles.'},
        ]
      },
      {
        title: '9.3 战略规划与决策支持 (Strategic Planning & Decision Support)',
        prompts: [
            { title: '📋 创建定价策略简报', prompt: 'We\'re revisiting our pricing strategy for [product/service]. Current model: [describe]. Suggest 2-3 alternative pricing models (value-based, usage-based, tiered). Include pros, cons, and revenue impact modeling.'},
        ]
      }
    ]
  },
    {
    id: 'gov-it',
    title: '10. 政府IT人员',
    description: '适用场景: 政府部门IT团队、系统管理员、安全专家\n核心能力: 系统安全与漏洞管理、DevOps与发布管理',
    subCategories: [
      {
        title: '10.1 系统安全与漏洞管理 (System Security & Vulnerability Management)',
        prompts: [
            { title: '🔐 分析漏洞扫描结果', prompt: 'Analyze these weekly vulnerability-scan results for the [system name] and group findings by severity (Critical, High, Medium, Low) and affected component. Recommend remediation steps ranked by risk reduction. Output a prioritized action plan.', suggestion: '使用建议: 用于定期安全审计和漏洞管理工作流。'},
        ]
      },
      {
        title: '10.2 DevOps与发布管理 (DevOps & Release Management)',
        prompts: [
            { title: '🚀 分析代码覆盖率报告', prompt: 'Merge these code-coverage reports from the last three builds: [paste data]. Calculate test-coverage percentage for each module, highlight any module below 75 percent, and produce a bar chart of the results with a short narrative explaining the biggest gaps.'},
        ]
      }
    ]
  },
  {
    id: 'gov-analysts',
    title: '11. 政府分析师与项目人员',
    description: '适用场景: 政府政策分析师、项目管理人员、数据分析师\n核心能力: 分析简报与决策支持',
    subCategories: [
      {
        title: '11.1 分析简报与决策支持 (Analytical Briefings & Decision Support)',
        prompts: [
            { title: '📊 总结季度绩效仪表板', prompt: 'Summarize the last four quarterly performance dashboards for the [program name]. Highlight trends in [subject 1, e.g., service delivery], [subject 2, e.g., budget utilization], [subject 3, e.g., citizen satisfaction] in a one-page brief for executives. Format for quick decision-making.', suggestion: '使用建议: 用于快速将复杂数据转化为高管可读的简报。'},
        ]
      }
    ]
  },
    {
    id: 'gov-leaders',
    title: '12. 政府领导者',
    description: '适用场景: 政府部门负责人、政策制定者、公共事务管理者\n核心能力: 高管决策支持、政策起草与分析、选民沟通、预算与财务',
    subCategories: [
      {
        title: '12.1 高管决策支持 (Executive Decision Support)',
        prompts: [
            { title: '📋 总结季度绩效报告', prompt: 'Summarize the last five quarterly performance reports for the [program name] initiative. Highlight trends in cost, schedule, and outcomes in a one-page brief for the senior leadership meeting. Include red flags and recommendations.'},
            { title: '📋 总结审计结果', prompt: 'Summarize key findings from our last [performance audit or evaluation] and prepare a talking-point brief for leadership. Focus on: major findings, root causes, and recommended actions.'},
            { title: '📋 创建倡议时间轴', prompt: 'Create a timeline of major decisions and milestones for the [initiative name] over the last three years, based on these planning documents: [paste docs]. Output as visual timeline with context.'},
        ]
      },
      {
        title: '12.2 政策起草与分析 (Policy Drafting & Analysis)',
        prompts: [
            { title: '📜 用简明语言重写法规', prompt: 'Rewrite this draft regulation on [topic] in plain language for public consultation: [paste regulation]. Ensure accessibility, clarity, and compliance with plain language guidelines.'},
            { title: '📜 识别政策冲突', prompt: 'Identify potential conflicts between the proposed [draft policy] and existing statutes: [paste policy draft]. Highlight legal risks, inconsistencies, and recommend revisions.'},
            { title: '📜 总结公众反馈', prompt: 'Summarize common public feedback themes from these consultation submissions on [topic]: [paste submissions]. Group by theme, sentiment, and stakeholder type. Provide actionable recommendations.'},
        ]
      },
      {
        title: '12.3 选民沟通 (Constituent Communication)',
        prompts: [
            { title: '📢 起草带翻译的公告', prompt: 'Compose a 250-word public announcement about new [grant or service] eligibility. Explain who qualifies, how to apply, and deadlines. Then translate into Spanish and Korean for multilingual distribution.'},
            { title: '📢 将手册转换为演讲稿', prompt: 'Turn this 10-page program manual into a 2-minute speech for a public meeting. Focus on key benefits, eligibility, and next steps. Use accessible language suitable for general audience.'},
            { title: '📢 起草FAQ回复', prompt: 'Draft responses to frequently asked questions about the new [zoning policy / tax rule / health ordinance]. Cover: rationale, impact, exceptions, and implementation timeline. Use clear, non-technical language.'},
        ]
      },
      {
        title: '12.4 预算与财务 (Budget & Finance)',
        prompts: [
            { title: '💰 分析支出差异', prompt: 'Analyze spending over the last three years for [department/program] and identify accounts with more than 15% variance from budget. Categorize variances as overspend/underspend and provide explanations. Output variance report with recommendations.'},
        ]
      }
    ]
  },
];
