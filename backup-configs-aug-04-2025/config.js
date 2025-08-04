[
  {
    title: 'Age Verification',
    matches: {
      '/@context': 'https://bparth24.github.io/test-context-credentials/contexts/age-verification/v1.json',
      '/type': 'AgeVerificationCredential'
    },
    styles: {
      backgroundColor: '#FFFFFF',
      textColor: '#000000'
    },
    images: [
      '/image'
    ],
    overrides: {
      title: {
        pointer: '/name'
      },
      subtitle: {
        pointer: '/description'
      },
      imagePointer: '/issuer/image',
      descriptionPointer: '/description'
    },
    highlights: [
      {
        field: 'Over Age',
        pointer: '/credentialSubject/overAge'
      }
    ]
  },
  {
    title: 'Coupon Bundle',
    matches: {
      '/@context': 'https://bparth24.github.io/test-context-credentials/contexts/coupon-bundle/v2.json',
      '/type': 'CouponBundleCredential'
    },
    styles: {
      backgroundColor: '#FFFFFF',
      textColor: '#000000'
    },
    images: [],
    overrides: {
      title: {
        pointer: '/name'
      },
      subtitle: {
        pointer: '/description'
      },
      imagePointer: '/issuer/image',
      descriptionPointer: '/description'
    },
    highlights: [
      {
        field: 'Barcode',
        pointer: '/credentialSubject/barcode'
      },
      {
        field: 'Name',
        pointer: '/credentialSubject/name'
      },
      {
        field: 'Description',
        pointer: '/credentialSubject/description'
      },
      {
        field: 'image',
        pointer: '/image'
      }
    ]
  },
  {
    title: 'Loyalty Card',
    matches: {
      '/@context': 'https://bparth24.github.io/test-context-credentials/contexts/loyalty-card/v1.json',
      '/type': 'LoyaltyCardCredential'
    },
    styles: {
      backgroundColor: '#FFFFFF',
      textColor: '#000000'
    },
    images: [
      '/image',
      '/issuer/image'
    ],
    overrides: {
      title: {
        pointer: '/name'
      },
      subtitle: {
        pointer: '/description'
      },
      imagePointer: '/image',
      descriptionPointer: '/description'
    },
    highlights: [
      {
        field: 'Account Identifier',
        pointer: '/credentialSubject/accountIdentifier'
      },
      {
        field: 'Barcode',
        pointer: '/credentialSubject/barcode'
      },
      {
        field: 'Program Identifier',
        pointer: '/credentialSubject/programIdentifier'
      },
      {
        field: 'Name',
        pointer: '/credentialSubject/name'
      },
      {
        field: 'Description',
        pointer: '/credentialSubject/description'
      },
      {
        field: 'image',
        pointer: '/credentialSubject/image'
      }
    ]
  },
  {
    title: 'Payment Token',
    matches: {
      '/@context': 'https://bparth24.github.io/test-context-credentials/contexts/payment-token/v1.json',
      '/type': 'PaymentTokenCredential'
    },
    styles: {
      backgroundColor: '#FFFFFF',
      textColor: '#000000'
    },
    images: [],
    overrides: {
      title: {
        pointer: '/name'
      },
      subtitle: {
        pointer: '/description'
      },
      imagePointer: '/issuer/image',
      descriptionPointer: '/description'
    },
    highlights: [
      {
        field: 'Token',
        pointer: '/credentialSubject/token'
      },
      {
        field: 'Issuer',
        pointer: '/issuer/name'
      },
      {
        field: 'Valid From',
        pointer: '/validFrom',
        format: 'date'
      },
      {
        field: 'Valid Until',
        pointer: '/validUntil',
        format: 'date'
      },
      {
        field: 'image',
        pointer: '/credentialSubject/image'
      }
    ]
  }
]