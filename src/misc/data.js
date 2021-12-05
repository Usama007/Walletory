let data = {
    "wallets": [
        {
            "name": "USD wallet",
            "balance": "100",
            "currency_sym": "$",
            "primary": "1",
            "qr_code": "https://pngimg.com/uploads/qr_code/qr_code_PNG5.png"
        },
        {
            "name": "GBP wallet",
            "balance": "100",
            "currency_sym": "£",
            "primary": "0",
            "qr_code": "https://pngimg.com/uploads/qr_code/qr_code_PNG5.png"
        }
    ],
    "transactions": {
        "2021-02-26": [
            {
                "title": "GBP wallet",
                "balance": "100",
                "currency_sym": "£",
                "type": "topup",
                "status": "Approved",
                "picture": "https://p.kindpng.com/picc/s/263-2633434_businessman-avatar-svg-clip-arts-generic-profile-picture.png"
            },
            {
                "title": "GBP wallet",
                "balance": "100",
                "currency_sym": "£",
                "type": "pay",
                "status": "approved",
                "picture": "https://p.kindpng.com/picc/s/263-2633434_businessman-avatar-svg-clip-arts-generic-profile-picture.png"
            }
        ],
        "2021-02-27": [
            {
                "title": "GBP wallet",
                "balance": "10",
                "currency_sym": "£",
                "type": "topup",
                "status": "pending",
                "picture": "https://p.kindpng.com/picc/s/263-2633434_businessman-avatar-svg-clip-arts-generic-profile-picture.png"
            },
            {
                "title": "GBP wallet",
                "balance": "100",
                "currency_sym": "£",
                "type": "request",
                "status": "declined",
                "picture": "https://p.kindpng.com/picc/s/263-2633434_businessman-avatar-svg-clip-arts-generic-profile-picture.png"
            }

        ]
    }
}

module.exports = data;