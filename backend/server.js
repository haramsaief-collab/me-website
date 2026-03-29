const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// تسجيل عميل جديد
app.post('/register', (req, res) => {

const {
phone,
email,
country,
service,
nationalId,
companyName
} = req.body;

console.log("عميل جديد:", req.body);

res.json({
message: "تم تسجيل العميل بنجاح"
});

});

// تسجيل الدخول
app.post('/login', (req, res) => {

const { phone, password } = req.body;

res.json({
message: "تم تسجيل الدخول"
});

});

// تشغيل السيرفر
app.listen(5000, () => {
console.log('Server running on port 5000');
});
