[![remove-vietnamese-accents](https://img.shields.io/badge/npm-%5E1.0.7-brightgreen.svg)](//www.npmjs.com/package/remove-vietnamese-accents)


# Xóa dấu Tiếng Việt

## Sử dụng

```javascript
import { RemoveVietnameseAccents } from 'remove-vietnamese-accents';

const removeVietnameseAccents = new RemoveVietnameseAccents()

console.log(removeVietnameseAccents.remove('Hoàng Sa, Trường Sa là của Việt Nam'));

// Kết quả: Hoang Sa, Truong Sa la cua Viet Nam
```

## Note

Thư viện này được viết lại để hỗ trợ typescript từ thư viện [Khong-Dau](https://www.npmjs.com/package/khong-dau)

## Giấy phép

MIT
