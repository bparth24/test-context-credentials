# Test Context Credentials

A collection of JSON-LD context files and sample verifiable credentials for testing and development purposes. This repository provides reusable context definitions for various credential types including coupons, loyalty cards, payment token, and age verification credentials.

## 🚀 Live Demo

**GitHub Pages:** [https://bparth24.github.io/test-context-credentials/](https://bparth24.github.io/test-context-credentials/)

The live site provides an interactive interface to browse, search, and copy URLs for all context files and sample credentials.

## 📁 Repository Structure

```
test-context-credentials/
├── contexts/                 # JSON-LD context files
│   ├── coupon-bundle/
│   │   └── v2.json          # CouponBundleCredential context
│   ├── loyalty-card/
│   │   └── v1.json          # LoyaltyCardCredential context  
│   ├── payment-token/
│   │   └── v1.json          # PaymentTokenCredential context
│   └── age-verification/
│       └── v1.json          # AgeVerificationCredential context
├── credentials/              # Sample verifiable credentials & queries
│   ├── coupon-bundle/
│   │   ├── credential.json   # Sample coupon credential
│   │   ├── credential-v2.json # Versioned coupon credential
│   │   ├── queries.json      # Sample queries
│   │   └── queries-v2.json   # Versioned queries
│   ├── loyalty-card/
│   │   ├── credential.json   # Sample loyalty credential
│   │   ├── credential-v2.json # Versioned loyalty credential
│   │   ├── queries.json      # Sample queries
│   │   └── queries-v2.json   # Versioned queries
│   ├── payment-token/
│   │   ├── credential.json   # Sample payment token credential
│   │   ├── credential-v2.json # Versioned payment token credential
│   │   ├── queries.json      # Sample queries
│   │   └── queries-v2.json   # Versioned queries
│   └── age-verification/
│       ├── credential.json   # Sample age verification credential
│       ├── credential-v2.json # Versioned age verification credential
│       ├── queries.json      # Sample queries
│       └── queries-v2.json   # Versioned queries
├── index.html               # Interactive GitHub Pages interface
└── README.md               # This file
```

## 🔧 How to Use Context Files

### In Your Verifiable Credentials

Reference any context file in your credentials by using the GitHub Pages URL:

```json
{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://bparth24.github.io/test-context-credentials/contexts/coupon-bundle/v2.json"
  ],
  "type": ["VerifiableCredential", "CouponBundleCredential"],
  "issuer": "did:example:issuer123",
  "credentialSubject": {
    "id": "did:example:subject456",
    "barcode": "123456789",
    "bundleMatcher": "https://couponbureau.example/matcher"
  }
}
```

### Available Context URLs

| Context Type | Version | URL |
|-------------|---------|-----|
| Coupon Bundle | v2 | `https://bparth24.github.io/test-context-credentials/contexts/coupon-bundle/v2.json` |
| Loyalty Card | v1 | `https://bparth24.github.io/test-context-credentials/contexts/loyalty-card/v1.json` |
| Payment Token | v1 | `https://bparth24.github.io/test-context-credentials/contexts/payment-token/v1.json` |
| Age Verification | v1 | `https://bparth24.github.io/test-context-credentials/contexts/age-verification/v1.json` |

## 📝 Versioned Files

This repository includes versioned credential and query files that reference production context files for real-world testing scenarios:

### File Types

- **credential.json**: Test credential files using context files from this repository
- **credential-v2.json**: Versioned credential files pointing to **production context URLs**
- **queries.json**: Test query files for credentials using repository contexts
- **queries-v2.json**: Versioned query files for credentials using **production contexts**

### Key Difference

The primary difference between original and versioned files:

| File Type | Context Source | Purpose |
|-----------|---------------|---------|
| **Original files** (`*.json`) | Test contexts from this repository | Development and testing with local contexts |
| **Versioned files** (`*-v2.json`) | **Production context URLs** | Testing with real-world, production-deployed contexts |

## 🧪 Testing Instructions

### Quick Testing with VC Playground

1. **Copy Credential URL**: Visit the [GitHub Pages site](https://bparth24.github.io/test-context-credentials/) and copy any credential URL from the "Sample Credentials" section

2. **Open VC Playground**: Go to [vcplayground.org](https://vcplayground.org/)

3. **Select Specification Version**:
   - **Age Verification Credentials**: Select **VC 1.1** (follows VC DM 1.1 Spec)
   - **All Other Credentials**: Use **VC 2.0** (follows VC DM 2.0 Spec)

4. **Add Custom Credential**:
   - Click "Custom Credential"
   - Paste the copied credential URL

5. **Test Issuance**:
   - Test with DID Authentication
   - Test without DID Authentication for simpler testing

### Specification Compatibility

| Credential Type | VC Specification | VC Playground Setting |
|----------------|------------------|----------------------|
| Age Verification | VC DM 1.1 | Select "VC 1.1" |
| Coupon Bundle | VC DM 2.0 | Default "VC 2.0" |
| Loyalty Card | VC DM 2.0 | Default "VC 2.0" |
| Payment Token | VC DM 2.0 | Default "VC 2.0" |

### Testing Scope

#### ✅ Currently Tested

- **Credential Issuance**: All sample credentials have been tested for successful issuance
- **DID Authentication**: Tested both with and without DID Authentication
- **Context Resolution**: All context files resolve correctly via GitHub Pages
- **JSON-LD Processing**: Context expansion and compaction work as expected

#### 🔄 Future Testing Scope

- **Store Credential**: Store issued credentials in wallet
- **Credential Verification**: Verify issued credentials
- **Credential Presentation**: Create and verify presentations

## 🔍 Finding Context Files

### Using the Web Interface

Visit [https://bparth24.github.io/test-context-credentials/](https://bparth24.github.io/test-context-credentials/) to:

- Browse files by folder structure
- Search by filename, path, or type
- Copy URLs with one click
- View file contents directly

### Direct URL Pattern

Context files follow this pattern:
```
https://bparth24.github.io/test-context-credentials/contexts/{type}/{version}.json
```

Sample credentials follow this pattern:
```
https://bparth24.github.io/test-context-credentials/credentials/{type}/credential.json
```

---

**Repository**: https://github.com/bparth24/test-context-credentials  
**Live Demo**: https://bparth24.github.io/test-context-credentials/
