# 🛠️ Runbook – Static Website Hosting on AWS (S3 + CloudFront + CloudWatch)

## 📌 Purpose
This runbook provides step-by-step operational instructions to:
- Deploy a static website on **Amazon S3**.
- Distribute globally via **Amazon CloudFront**.
- Monitor errors with **CloudWatch Alarms**.
- Send alerts using **SNS**.
- Safely clean up resources to avoid costs.

---

## 🚀 Deployment Steps

### 1. Create an S3 Bucket
- Navigate to **S3 Console** → **Create bucket**.
- Choose a globally unique name (e.g., `first-staticc-website-hosting`).
- Block Public Access → **Uncheck** (required for website hosting).
- Upload `index.html`, `style.css`, and `script.js`.

✅ **Validation**: Confirm files are visible in the bucket.

---

### 2. Enable Static Website Hosting
- Open bucket → **Properties** → Enable **Static Website Hosting**.
- Specify `index.html` as the root document.

✅ **Validation**: Copy the S3 website endpoint and open in browser → should display homepage.

---

### 3. Configure Bucket Policy
- Apply a bucket policy to allow **public read** access to objects.
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::first-staticc-website-hosting/*"
    }
  ]
}
```

✅ **Validation**: Access `index.html` directly via S3 endpoint.

---

### 4. Create CloudFront Distribution
- Navigate to **CloudFront Console** → **Create distribution**.
- Set **S3 bucket** as origin.
- Default cache settings → leave as is.

✅ **Validation**: Access CloudFront domain URL → page should load faster than raw S3 endpoint.

---

### 5. Enable Logging
- In CloudFront → Edit → Enable **Access Logging**.
- Choose/create another S3 bucket for logs.

✅ **Validation**: Check log bucket for `.gz` log files after traffic.

---

### 6. Create CloudWatch Alarm
- Go to **CloudWatch → Alarms → Create Alarm**.
- Select metric: `CloudFront → 5xxErrorRate`.
- Threshold: `Greater than 1 for 1 datapoint`.

✅ **Validation**: Alarm status should switch to `OK` once configured.

---

### 7. Setup SNS for Notifications
- Create an **SNS topic** (e.g., `CloudFrontErrorAlerts`).
- Subscribe via **email**.
- Link CloudWatch alarm to the SNS topic.

✅ **Validation**: Confirm subscription via email and test notification.

---

## 🧹 Cleanup Procedure
Run after testing to avoid charges:
1. **Disable & delete CloudFront distribution**.
2. **Delete CloudWatch alarms**.
3. **Delete SNS topics**.
4. **Delete both S3 buckets** (website + logs).

✅ **Validation**: No AWS resources should remain.

---

## ⚠️ Troubleshooting
- **Website not loading** → Check bucket policy & hosting settings.
- **CloudFront still serving old content** → Invalidate cache in CloudFront.
- **No logs in logging bucket** → Ensure correct bucket permissions.
- **No alarm notifications** → Confirm SNS subscription is confirmed.
