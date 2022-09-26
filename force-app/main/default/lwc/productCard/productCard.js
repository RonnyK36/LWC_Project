import { LightningElement } from 'lwc';

export default class ProductCard extends LightningElement {

    productList = [

        { "key": '1', 'title': 'Shoes', "price": '100', 'img': 'https://imgs.search.brave.com/Cdbjjix-RDJDwN0yvuhHhwcJIMEgW3alTx1jDvuf1s0/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9hc3IvZTY1/ZTIwNDYtZTI5YS00/ZGUxLThkMGItYTJi/NGU0ZDBjMzZjXzEu/NThjYzFkYWU2MjNm/YTE1ZWM4NzIxYzcz/ZDVjMzBjZTQuanBl/Zw' },
        { "key": '2', 'title': 'Shirt', "price": '500', 'img': 'https://imgs.search.brave.com/3jk75anKc541mycANIzvHsFPgz--I1gP12QJeYlsJwU/rs:fit:798:991:1/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvZHJlc3Nfc2hp/cnQvZHJlc3Nfc2hp/cnRfUE5HODEwOS5w/bmc' },
        { "key": '3', 'title': 'Trouser', "price": '250', 'img': 'https://imgs.search.brave.com/Vz0EC9dmyKcfbghYfRziWqA09XiENCz_7sloAUAW8dM/rs:fit:316:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5K/Z0REWVh1Q1hzTnU4/S2NvSVRDVENRSGFM/SCZwaWQ9QXBp' }
    ]
}