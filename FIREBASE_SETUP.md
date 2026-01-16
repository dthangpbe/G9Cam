# 🔥 Hướng dẫn Setup Firebase

## Bước 1: Tạo Firebase Project

1. **Truy cập Firebase Console**
   - Mở: https://console.firebase.google.com
   - Đăng nhập bằng tài khoản Google

2. **Tạo Project Mới**
   - Nhấn **"Add project"** hoặc **"Create a project"**
   - Tên project: **`Locket App`** (hoặc tên bạn thích)
   - Nhấn **Continue**
   
3. **Google Analytics** (tùy chọn)
   - Tắt Google Analytics (không cần cho demo)
   - Hoặc bật nếu muốn
   - Nhấn **Create project**
   - Đợi vài giây để Firebase setup

4. **Vào Dashboard**
   - Nhấn **Continue** khi project sẵn sàng

---

## Bước 2: Setup Firestore Database

1. **Trong Firebase Console**, nhấn **"Firestore Database"** ở menu bên trái

2. **Create Database**
   - Nhấn nút **"Create database"**
   
3. **Security Rules**
   - Chọn **"Start in test mode"** (cho phép read/write tự do - CHỈ ĐỂ TEST)
   - Nhấn **Next**
   
4. **Location**
   - Chọn region gần bạn: **`asia-southeast1`** hoặc **`asia-east1`**
   - Nhấn **Enable**
   - Đợi vài giây

---

## Bước 3: Setup Authentication

1. **Trong Firebase Console**, nhấn **"Authentication"** ở menu bên trái

2. **Get Started**
   - Nhấn nút **"Get started"**

3. **Sign-in Method**
   - Tab **"Sign-in method"** (đã được chọn)
   - Tìm **"Email/Password"**
   - Nhấn vào **Email/Password**

4. **Enable**
   - Bật **"Enable"** (toggle ON)
   - **KHÔNG** cần bật "Email link"
   - Nhấn **Save**

---

## Bước 4: Lấy Firebase Config

1. **Trong Firebase Console**, nhấn **⚙️ (Settings icon)** bên cạnh "Project Overview"

2. **Project Settings**
   - Chọn **"Project settings"**

3. **Your Apps**
   - Scroll xuống phần **"Your apps"**
   - Nhấn **Web icon** `</>`  (biểu tượng code)

4. **Register App**
   - App nickname: **`Locket Web App`**
   - **KHÔNG** tick "Firebase Hosting"
   - Nhấn **Register app**

5. **Copy Config**
   - Bạn sẽ thấy đoạn code như này:
   
   ```javascript
   const firebaseConfig = {
     apiKey: "AIza....",
     authDomain: "locket-app-xxxxx.firebaseapp.com",
     projectId: "locket-app-xxxxx",
     storageBucket: "locket-app-xxxxx.appspot.com",
     messagingSenderId: "123456789",
     appId: "1:123456789:web:abcdef"
   };
   ```
   
   - **SAO CHÉP TOÀN BỘ OBJECT `firebaseConfig` này**
   - Nhấn **Continue to console**

---

## Bước 5: Gửi Config cho tôi

**Copy toàn bộ firebaseConfig và gửi cho tôi**, ví dụ:

```javascript
{
  apiKey: "AIzaSyABC123...",
  authDomain: "locket-app-12345.firebaseapp.com",
  projectId: "locket-app-12345",
  storageBucket: "locket-app-12345.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abc123def456"
}
```

Sau khi bạn gửi config, tôi sẽ:
✅ Tạo file firebase-config.js
✅ Cập nhật HTML với Firebase SDKs  
✅ Viết lại app.js để dùng Firestore
✅ Test kết nối Firebase

---

## ⚠️ Lưu ý Bảo mật

> [!WARNING]
> **Security Rules "Test Mode" chỉ để development!**
> 
> Sau khi test xong, bạn cần update Firestore Security Rules:
> - Vào Firestore Database → Rules
> - Thay đổi rules để chỉ cho phép user đã login
> - Tôi sẽ hướng dẫn sau khi app chạy được

---

Bạn đã sẵn sàng tạo Firebase project chưa? Cần trợ giúp bước nào không? 😊
