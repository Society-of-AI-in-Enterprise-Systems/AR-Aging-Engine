AR Aging Engine & Bad Debt Risk Scorer
SAIES — Society for AI in Enterprise Systems
Track: Forensic Accounting & Credit Risk
Lead: Anthony
Organization: Society-of-AI-in-Enterprise-Systems

What This Project Does
An enterprise AI tool that automatically scores customers for bad debt risk and generates audit-ready AR aging schedules. Built for public accounting professionals to support tax provision work and audit defense.
Modeled after tools used by Deloitte (Argus), KPMG (Clara), and EY (Tax Analyzer) — applied to structured transactional data.

The Problem It Solves
Manual AR aging and bad debt estimation is slow, inconsistent, and hard to defend in an audit. This tool automates:

AR Aging Schedule — classifies every invoice into Current / 1-30 / 31-60 / 61-90 / 90+ day buckets
Bad Debt Risk Scoring — predicts risk probability (0–100%) per customer using Gradient Boosting
Audit Trail Output — exports feature importance so you can explain exactly why a customer was flagged


Dataset
Built on the TechFlow NexCore v2 shared dataset (5,000 transactions).
FileRecordsKey Fieldscustomers.csv23 customersSegment, city, lifetime revenueproducts.csv26 productsCategory, avg price, avg costtransactions.csv5,000 rowsRevenue, cost, discount, profitinvoices.csv2,237 rowsInvoice dates, due dates, statuspayments.csv2,237 rowsPayment date, days_from_due

days_from_due is the core field — negative = paid early, positive = paid late, missing = unpaid.


ML Method
Gradient Boosting (XGBoost / sklearn GBM)
Chosen because:

Handles small structured datasets with mixed feature types
Outputs feature importances for audit-defensible explanations
Used by KPMG and EY for this exact problem class


Pipeline
INPUT
  invoices.csv + payments.csv + customers.csv + transactions.csv

PROCESS
  → Build AR aging buckets per customer
  → Calculate avg days late + payment volatility
  → Engineer discount abuse score from transactions
  → Train Gradient Boosting model to predict bad debt probability

OUTPUT
  → ar_aging_schedule.xlsx     — audit-ready aging report
  → bad_debt_risk_scores.csv   — risk score + label per customer
  → feature_importance.csv     — top drivers per flagged customer

How to Run
1. Install dependencies
bashpip install pandas scikit-learn openpyxl
2. Add your data files
Place these in the project root:
customers.csv
invoices.csv
payments.csv
transactions.csv
3. Run the scorer
bashpython ar_aging_engine.py
4. Check outputs
ar_aging_schedule.xlsx      — share with audit team
bad_debt_risk_scores.csv    — feed into tax provision model
feature_importance output   — printed to console

Output Example
CustomerAvg Days LateRisk ScoreRisk LabelCustomer A67 days0.89HIGHCustomer B12 days0.21LOWCustomer C34 days0.54MEDIUM

Interactive Demo
The TaxAIGuide React component (src/TaxAIGuide.jsx) is a 5-step interactive walkthrough covering:

Real companies using AI in tax strategy
Data inventory and what problems can be solved
What to build — specific blueprint
Which AI/ML method and why
Python code step by step

Live demo: [link to be added after deploy]

Project Status
MilestoneStatusDataset ingestion✅ CompleteAR aging buckets✅ CompleteFeature engineering✅ CompleteGradient Boosting model✅ CompleteExcel/CSV export✅ CompleteReact interactive demo✅ CompleteVercel deployment🔄 In progressResearch paper section🔄 In progress

Connection to SAIES Research
This project is one component of the broader SAIES research paper:

"Using AI as a Judge to Evaluate the Process of Getting Messy SMB Data AI-Ready"

The AR aging engine demonstrates how structured transactional data from a small business (23 customers, 5,000 transactions) can be made AI-ready and used to produce enterprise-grade financial intelligence outputs.

Maintainer
Anthony — AR Aging & Credit Risk Track
SAIES, Cal State LA
Advisor: Dr. Ming Wang, CIS Department Chair
