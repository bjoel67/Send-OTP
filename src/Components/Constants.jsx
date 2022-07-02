export const listOfSendOTP =
    [
        {
            "DisplayName": "Byj's",
            "EndpointUrl": "https://user.vedantu.com/user/resendPreLoginVerificationOTP",
            "unique": "bj",
            "EndPointType": "POST",
            "RequestObject": '{"phone":"+91-{phoneNbr}","app_client_id":""}'
        },
        {
            "DisplayName": "Policy Bazar",
            "EndpointUrl": "https://caccount.policybazaar.com/myacc/login/customerRegistration",
            "unique": "pb",
            "EndPointType": "POST",
            "RequestObject": '{"CountryCode":"91","Mobile":"{phoneNbr}"}'
        },
        {
            "DisplayName": "Unacademy",
            "EndpointUrl": "https://unacademy.com/api/v3/user/user_check",
            "unique": "un",
            "EndPointType": "POST",
            "RequestObject": '{"phone":"{phoneNbr}","country_code":"IN","otp_type":1,"email":"","send_otp":true,"is_un_teach_user":false}'
        }
    ]