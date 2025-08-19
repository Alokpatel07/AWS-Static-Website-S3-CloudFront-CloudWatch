# 🚀 Static Website Hosting on AWS (S3 + CloudFront + CloudWatch)

This project demonstrates how to host a static website on **Amazon S3**, accelerate it globally using **Amazon CloudFront**, enable **logging**, and monitor errors using **Amazon CloudWatch Alarms** with **SNS notifications**.  
All implemented on the **AWS Free Tier**.

---

## 📌 Steps Implemented

### 1. Created an S3 Bucket & Uploaded Website Files
- Created an S3 bucket.
- Uploaded `index.html`, `style.css`, and `script.js`.

📷 Screenshot:  
[![Bucket Created and HTML CSS & JS files uploaded](https://github.com/Alokpatel07/AWS-Static-Website-S3-CloudFront-CloudWatch/blob/main/Screenshots/1_Bucket%20Created%20and%20HTML%20CSS%20%26%20JS%20files%20uploaded.png)]

---

### 2. Enabled Static Website Hosting on S3
- Enabled **Static Website Hosting** in bucket properties.

📷 Screenshot:  
[![Static Website Hosting Enabled](https://github.com/Alokpatel07/AWS-Static-Website-S3-CloudFront-CloudWatch/blob/main/Screenshots/2_Static%20Website%20Hosting%20Enabled.png)]

---

### 3. Configured Bucket Policy for Public Read
- Updated bucket policy to allow public access for objects.  
- This makes the website accessible via browser.

📷 Screenshot:  
[![Bucket Policy for Public Read](https://github.com/Alokpatel07/AWS-Static-Website-S3-CloudFront-CloudWatch/blob/main/Screenshots/3_Bucket%20Policy%20for%20Public%20Read.png)]

---

### 4. Created CloudFront Distribution
- Added S3 bucket as origin.
- CloudFront provides a **global CDN endpoint** for faster delivery.

📷 Screenshot:  
[![CloudFront Distribution Created](https://github.com/Alokpatel07/AWS-Static-Website-S3-CloudFront-CloudWatch/blob/main/Screenshots/4_Cloudfront%20Distribution%20Created.png)]

---

### 5. Enabled CloudFront Logging
- Configured CloudFront to send access logs to another S3 bucket.

📷 Screenshot:  
[![Logging Enabled for CloudFront](https://github.com/Alokpatel07/AWS-Static-Website-S3-CloudFront-CloudWatch/blob/main/Screenshots/5_Logging%20Enabled%20for%20CloudFront.png)]

---

### 6. Created CloudWatch Alarm for 5xx Errors
- Set an alarm on the metric `5xxErrorRate > 1`.  
- Sends notification if error rate crosses threshold.

📷 Screenshot:  
[![Created CloudWatch Alarm for errors](https://github.com/Alokpatel07/AWS-Static-Website-S3-CloudFront-CloudWatch/blob/main/Screenshots/6_Created%20Cloudwatch%20Alarm%20for%20errors.png)]

---

### 7. Created SNS Topic & Subscribed for Notifications
- Created an SNS topic.  
- Subscribed email to receive alarm notifications.

📷 Screenshot:  
[![Created SNS topic & subscribed](https://github.com/Alokpatel07/AWS-Static-Website-S3-CloudFront-CloudWatch/blob/main/Screenshots/7_Created%20a%20SNS%20topic%20%26%20subscribe%20to%20SNS%20topic%20for%20notification.png)]

---

## 🧹 Cleanup
To avoid costs:
1. Delete CloudFront distribution.
2. Delete CloudWatch alarms & SNS topics.
3. Delete S3 buckets (both website + logs).

---

## 📚 Key Learnings
- Hosting static websites on **S3**.  
- Using **CloudFront CDN** for global distribution.  
- Enabling **logging** for monitoring.  
- Creating **CloudWatch alarms** for error detection.  
- Sending notifications via **SNS**.  

---

✅ This project is safe to try in the **AWS Free Tier** if cleaned up after testing.

