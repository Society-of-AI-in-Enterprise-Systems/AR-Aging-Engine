import { useState } from "react";

const steps = [
  {
    id: 1,
    label: "Real Companies",
    title: "3 Real Companies Using AI in Tax Strategy",
    content: () => (
      <div className="space-y-4">
        {[
          {
            company: "Deloitte",
            product: "Argus",
            use: "Lease & contract extraction",
            detail: "Scans thousands of lease agreements to auto-extract tax-relevant terms (ASC 842 / IFRS 16). Cuts a 3-week manual process to hours. Output feeds directly into tax provision models.",
            tag: "NLP / Document AI"
          },
          {
            company: "KPMG",
            product: "KPMG Clara",
            use: "Tax provision anomaly detection",
            detail: "ML model trained on historical provision schedules flags unusual effective tax rate movements across business units. Audit teams use it to prioritize where to dig deeper.",
            tag: "Anomaly Detection"
          },
          {
            company: "EY",
            product: "EY Tax Analyzer",
            use: "Transfer pricing & related-party risk scoring",
            detail: "Ingests ERP transaction data (similar to your CSVs) to score intercompany transactions for audit risk. Flags pricing outliers vs. arm's-length benchmarks automatically.",
            tag: "Gradient Boosting"
          }
        ].map(c => (
          <div key={c.company} style={{background:'#0f1923', border:'1px solid #1e3a4a', borderRadius:8, padding:'16px 20px'}}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:8}}>
              <span style={{color:'#e2c074', fontWeight:700, fontSize:17}}>{c.company} — {c.product}</span>
              <span style={{background:'#1e3a4a', color:'#5bc8d4', fontSize:11, padding:'3px 10px', borderRadius:20}}>{c.tag}</span>
            </div>
            <div style={{color:'#a0b8c8', fontSize:13, marginBottom:6}}><strong style={{color:'#fff'}}>What it does:</strong> {c.use}</div>
            <div style={{color:'#7a9db0', fontSize:12, lineHeight:1.6}}>{c.detail}</div>
          </div>
        ))}
      </div>
    )
  },
  {
    id: 2,
    label: "Your Data Fit",
    title: "Which Problems Can YOU Solve With This Data?",
    content: () => (
      <div className="space-y-4">
        <div style={{background:'#0f1923', border:'1px solid #1e3a4a', borderRadius:8, padding:16}}>
          <div style={{color:'#5bc8d4', fontSize:12, marginBottom:8}}>YOUR DATA INVENTORY</div>
          {[
            ["customers.csv", "23 customers", "Segment, city, lifetime revenue"],
            ["products.csv", "26 products", "Category, avg price, avg cost"],
            ["transactions.csv", "5,000 rows", "Revenue, cost, discount, profit by order"],
            ["invoices.csv", "2,237 rows", "Invoice dates, due dates, status"],
            ["payments.csv", "2,237 rows", "Payment date, days_from_due"]
          ].map(([f,s,d]) => (
            <div key={f} style={{display:'flex', gap:12, padding:'6px 0', borderBottom:'1px solid #1a2d38'}}>
              <span style={{color:'#e2c074', width:160, fontSize:13}}>{f}</span>
              <span style={{color:'#5bc8d4', width:100, fontSize:13}}>{s}</span>
              <span style={{color:'#7a9db0', fontSize:13}}>{d}</span>
            </div>
          ))}
        </div>
        <div style={{color:'#c8dde8', fontSize:14, fontWeight:600, marginTop:4}}>Problems you CAN solve:</div>
        {[
          [" Bad Debt Provision Modeling", "invoices + payments → days_from_due tells you exactly who pays late. This is the foundation of ASC 450 bad debt estimates."],
          [" AR Aging Schedule (audit-ready)", "Combine invoice due dates + payment dates to build a proper 30/60/90/90+ day aging schedule."],
          [" Revenue Recognition Timing", "Order date vs invoice date vs payment date — flag transactions where recognition may be premature."],
          [" Discount Abuse / Transfer Pricing Risk", "High discount + related customer segment patterns can indicate non-arm's-length pricing."],
          [" Not enough for: Corporate income tax provision", "You'd need GL/trial balance data for that."]
        ].map(([t,d]) => (
          <div key={t} style={{background:'#0f1923', border:'1px solid #1e3a4a', borderRadius:8, padding:'12px 16px'}}>
            <div style={{color: t.startsWith('') ? '#c87a30' : '#5bc8d4', fontSize:13, fontWeight:700, marginBottom:4}}>{t}</div>
            <div style={{color:'#7a9db0', fontSize:12}}>{d}</div>
          </div>
        ))}
      </div>
    )
  },
  {
    id: 3,
    label: "What to Build",
    title: "What Would You Build? (Specific Blueprint)",
    content: () => (
      <div>
        <div style={{background:'#0a2233', border:'2px solid #e2c074', borderRadius:10, padding:20, marginBottom:16}}>
          <div style={{color:'#e2c074', fontSize:16, fontWeight:700, marginBottom:4}}> The Product: Bad Debt Risk Scorer + AR Aging Engine</div>
          <div style={{color:'#a0b8c8', fontSize:13}}>A tool your firm runs quarterly to support tax provision work and audit defense</div>
        </div>
        {[
          {
            phase: "INPUT",
            color: "#5bc8d4",
            items: [
              "invoices.csv — invoice_date, due_date, amount, status",
              "payments.csv — payment_date, days_from_due",
              "customers.csv — segment, lifetime_revenue",
              "transactions.csv — discount patterns, profit margins"
            ]
          },
          {
            phase: "PROCESS",
            color: "#e2c074",
            items: [
              "Build AR aging buckets: Current / 1-30 / 31-60 / 61-90 / 90+",
              "Calculate avg days late + payment volatility per customer",
              "Engineer discount abuse score from transaction data",
              "Train Gradient Boosting model to predict bad debt probability"
            ]
          },
          {
            phase: "OUTPUT",
            color: "#7ed47e",
            items: [
              "Risk score (0–100%) per customer",
              "Recommended provision % for each tier",
              "Audit-ready AR aging schedule (Excel export)",
              "Explainability: top 3 reasons per flagged customer"
            ]
          }
        ].map(({phase, color, items}) => (
          <div key={phase} style={{background:'#0f1923', border:`1px solid ${color}33`, borderRadius:8, padding:16, marginBottom:12}}>
            <div style={{color, fontSize:12, fontWeight:700, letterSpacing:2, marginBottom:8}}>{phase}</div>
            {items.map(i => <div key={i} style={{color:'#a0b8c8', fontSize:13, padding:'3px 0', paddingLeft:12, borderLeft:`2px solid ${color}66`}}>{i}</div>)}
          </div>
        ))}
      </div>
    )
  },
  {
    id: 4,
    label: "AI Method",
    title: "Which AI/ML Method to Use?",
    content: () => (
      <div className="space-y-4">
        <div style={{background:'#0a2233', border:'2px solid #5bc8d4', borderRadius:10, padding:20}}>
          <div style={{color:'#5bc8d4', fontSize:15, fontWeight:700}}> Recommended: Gradient Boosting (XGBoost / sklearn GBM)</div>
          <div style={{color:'#7a9db0', fontSize:12, marginTop:8}}>Best for small structured datasets with mixed feature types. Used by KPMG and EY for exactly this problem class.</div>
        </div>
        <div style={{color:'#c8dde8', fontSize:13, marginBottom:4}}>Why not other methods:</div>
        {[
          ["Linear Regression", "Too simple — can't capture non-linear payment behavior", ""],
          ["Neural Network", "Overkill for 23 customers; uninterpretable to auditors", ""],
          ["Gradient Boosting", "Handles small data, mixed types, gives feature importance for audit trail", ""],
          ["Rule-based (thresholds)", "Good baseline but won't generalize to new customers", ""],
          ["Clustering (K-Means)", "Useful add-on to segment customers AFTER scoring", ""]
        ].map(([m, r, s]) => (
          <div key={m} style={{display:'flex', gap:12, alignItems:'flex-start', background:'#0f1923', border:'1px solid #1e3a4a', borderRadius:8, padding:'10px 14px'}}>
            <span style={{fontSize:16, minWidth:24}}>{s}</span>
            <div>
              <div style={{color:'#e2c074', fontSize:13, fontWeight:600}}>{m}</div>
              <div style={{color:'#7a9db0', fontSize:12}}>{r}</div>
            </div>
          </div>
        ))}
        <div style={{background:'#0f1923', border:'1px solid #2a4a5a', borderRadius:8, padding:14}}>
          <div style={{color:'#7ed47e', fontSize:12, fontWeight:700, marginBottom:6}}>KEY ADVANTAGE FOR TAX WORK</div>
          <div style={{color:'#a0b8c8', fontSize:12}}>Gradient Boosting outputs <strong style={{color:'#fff'}}>feature importances</strong> — you can tell your client exactly why a customer was flagged (e.g., "avg 47 days late + 90+ bucket exposure of $120K"). This creates an audit-defensible paper trail, which is critical for provision work.</div>
        </div>
      </div>
    )
  },
  {
    id: 5,
    label: "Python Code",
    title: "Python Code — Step by Step",
    content: () => {
      const [activeBlock, setActiveBlock] = useState(0);
      const blocks = [
        {
          title: "Step 1: Load & Preview",
          code: `import pandas as pd

customers    = pd.read_csv('customers.csv')
invoices     = pd.read_csv('invoices.csv', parse_dates=['invoice_date','due_date'])
payments     = pd.read_csv('payments.csv', parse_dates=['payment_date'])
transactions = pd.read_csv('transactions.csv', parse_dates=['order_date'])

# Key field: days_from_due (negative=early, positive=late)
print(payments['days_from_due'].describe())`,
          note: "payments.days_from_due is your gold field. Negative = paid early, positive = paid late, missing = unpaid."
        },
        {
          title: "Step 2: Build AR Aging",
          code: `inv_pay = invoices.merge(payments, on='invoice_id', how='left')
inv_pay['days_late'] = inv_pay['days_from_due'].fillna(999)

def bucket(d):
    if d <= 0:    return 'current'
    elif d <= 30:  return 'b1_30'
    elif d <= 60:  return 'b31_60'
    elif d <= 90:  return 'b61_90'
    else:          return 'b90plus'

inv_pay['bucket'] = inv_pay['days_late'].apply(bucket)

# Pivot to customer level
aging = inv_pay.pivot_table(
    index='customer_id', columns='bucket',
    values='amount_x', aggfunc='sum', fill_value=0
).reset_index()`,
          note: "This is your AR aging schedule — standard format used by auditors and tax teams."
        },
        {
          title: "Step 3: Engineer Features",
          code: `# Payment behavior features
behavior = inv_pay.groupby('customer_id').agg(
    avg_days_late=('days_late', 'mean'),
    payment_vol=('days_late', 'std'),
    invoice_count=('invoice_id', 'count')
).reset_index()

# Discount pattern from transactions
discount_feat = transactions.groupby('customer_id').agg(
    avg_discount=('discount', 'mean'),
    profit_margin=('profit', lambda x: x.sum() / transactions.loc[x.index,'revenue'].sum())
).reset_index()

# Merge everything
features = customers \\
    .merge(aging, on='customer_id', how='left') \\
    .merge(behavior, on='customer_id', how='left') \\
    .merge(discount_feat, on='customer_id', how='left') \\
    .fillna(0)`,
          note: "Each row = one customer with ~15 features describing their payment history, aging exposure, and transaction patterns."
        },
        {
          title: "Step 4: Train & Score",
          code: `from sklearn.ensemble import GradientBoostingClassifier
from sklearn.preprocessing import StandardScaler

# Label: high risk = avg >30 days late OR has 90+ exposure
features['bad_debt_risk'] = (
    (features['avg_days_late'] > 30) | 
    (features['b90plus'] > 0)
).astype(int)

feature_cols = ['lifetime_revenue','avg_days_late','payment_vol',
                'avg_discount','b1_30','b31_60','b61_90','b90plus']

X = features[feature_cols]
y = features['bad_debt_risk']

scaler = StandardScaler()
model  = GradientBoostingClassifier(n_estimators=100, random_state=42)
model.fit(scaler.fit_transform(X), y)

features['risk_score'] = model.predict_proba(scaler.transform(X))[:,1]
features['risk_label'] = features['risk_score'].apply(
    lambda s: 'HIGH' if s>.6 else ('MEDIUM' if s>.3 else 'LOW')
)`,
          note: "With only 23 customers you're in semi-supervised territory — the model is more of a scoring engine than a predictive model. That's fine for this use case."
        },
        {
          title: "Step 5: Export for Tax Work",
          code: `# Export 1: AR Aging Schedule
aging_report = features[['customer_name','b1_30','b31_60','b61_90','b90plus']]
aging_report.to_excel('ar_aging_schedule.xlsx', index=False)

# Export 2: Bad Debt Risk Scores
risk_report = features[['customer_name','avg_days_late',
                          'risk_score','risk_label']] \\
              .sort_values('risk_score', ascending=False)
risk_report.to_csv('bad_debt_risk_scores.csv', index=False)

# Export 3: Feature importance (audit trail)
import pandas as pd
importance = pd.DataFrame({
    'driver': feature_cols,
    'weight': model.feature_importances_
}).sort_values('weight', ascending=False)
print(importance)`,
          note: "Three outputs: AR aging for audit, risk scores for tax provision, and feature importance for your audit defense file."
        }
      ];

      return (
        <div>
          <div style={{display:'flex', gap:8, marginBottom:16, flexWrap:'wrap'}}>
            {blocks.map((b,i) => (
              <button key={i} onClick={()=>setActiveBlock(i)}
                style={{background: activeBlock===i ? '#e2c074' : '#1e3a4a', color: activeBlock===i ? '#0a1520' : '#a0b8c8',
                  border:'none', borderRadius:6, padding:'6px 14px', fontSize:12, cursor:'pointer', fontWeight: activeBlock===i ? 700 : 400}}>
                {b.title}
              </button>
            ))}
          </div>
          <div style={{background:'#060e14', border:'1px solid #1e3a4a', borderRadius:8, padding:16}}>
            <pre style={{color:'#a8d8a8', fontSize:12, lineHeight:1.7, overflowX:'auto', margin:0, whiteSpace:'pre-wrap'}}>
              {blocks[activeBlock].code}
            </pre>
          </div>
          <div style={{background:'#0a2233', border:'1px solid #5bc8d466', borderRadius:6, padding:'10px 14px', marginTop:10}}>
            <span style={{color:'#5bc8d4', fontSize:11, fontWeight:700}}> WHY THIS MATTERS: </span>
            <span style={{color:'#a0b8c8', fontSize:12}}>{blocks[activeBlock].note}</span>
          </div>
        </div>
      );
    }
  }
];

export default function TaxAIGuide() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div style={{minHeight:'100vh', background:'#0a1520', color:'#c8dde8', fontFamily:"'Georgia', serif", padding:'24px 16px'}}>
      <div style={{maxWidth:820, margin:'0 auto'}}>
        {/* Header */}
        <div style={{textAlign:'center', marginBottom:32}}>
          <div style={{color:'#5bc8d4', fontSize:11, letterSpacing:4, marginBottom:8}}>ENTERPRISE AI FOR TAX PROFESSIONALS</div>
          <h1 style={{color:'#e2c074', fontSize:28, fontWeight:700, margin:'0 0 8px'}}>From Bike Sales Data → Tax Intelligence</h1>
          <p style={{color:'#7a9db0', fontSize:13, margin:0}}>A practical walkthrough for public accounting professionals</p>
        </div>

        {/* Step Nav */}
        <div style={{display:'flex', gap:0, marginBottom:28, background:'#0f1923', borderRadius:10, overflow:'hidden', border:'1px solid #1e3a4a'}}>
          {steps.map((s, i) => (
            <button key={s.id} onClick={()=>setActiveStep(i)}
              style={{flex:1, padding:'12px 4px', background: activeStep===i ? '#1e3a4a' : 'transparent',
                color: activeStep===i ? '#e2c074' : '#5a7d8c', border:'none', cursor:'pointer',
                fontSize:11, fontWeight: activeStep===i ? 700 : 400, letterSpacing:.5,
                borderRight: i<steps.length-1 ? '1px solid #1e3a4a' : 'none', transition:'all .2s'}}>
              <div style={{fontSize:16, marginBottom:3}}>{s.id}</div>
              {s.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div style={{background:'#0d1e2a', border:'1px solid #1e3a4a', borderRadius:12, padding:24}}>
          <h2 style={{color:'#e2c074', fontSize:18, marginTop:0, marginBottom:20, paddingBottom:12, borderBottom:'1px solid #1e3a4a'}}>
            {steps[activeStep].title}
          </h2>
          {steps[activeStep].content()}
        </div>

        {/* Navigation */}
        <div style={{display:'flex', justifyContent:'space-between', marginTop:16}}>
          <button onClick={()=>setActiveStep(Math.max(0,activeStep-1))}
            disabled={activeStep===0}
            style={{background:'#1e3a4a', color:'#5bc8d4', border:'none', borderRadius:6, padding:'8px 20px', cursor: activeStep===0 ? 'default' : 'pointer', opacity: activeStep===0 ? .3 : 1, fontSize:13}}>
            ← Previous
          </button>
          <span style={{color:'#3a5a6a', fontSize:12, alignSelf:'center'}}>{activeStep+1} / {steps.length}</span>
          <button onClick={()=>setActiveStep(Math.min(steps.length-1,activeStep+1))}
            disabled={activeStep===steps.length-1}
            style={{background:'#e2c074', color:'#0a1520', border:'none', borderRadius:6, padding:'8px 20px', cursor: activeStep===steps.length-1 ? 'default' : 'pointer', opacity: activeStep===steps.length-1 ? .3 : 1, fontWeight:700, fontSize:13}}>
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
