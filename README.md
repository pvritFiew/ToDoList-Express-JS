# ToDoList RestAPI
RestAPI สำหรับจัดการข้อมูลกิจกรรมของ todolist ซึ่งเชื่อมต่อกับ MongoDB โดยฟังก์ชันที่สามารถใช้ได้มีดังนี้
- Create
- Read
- Update
- Delete

## Tech ที่ใช้
- Express application generator(Express.js)
- MongoDB (Libraly ที่ใช้ mongoose)
- Visual Code Studio Extension (ใช้เพื่อช่วยให้เริ่มต้นง่ายขึ้น)
    - Thunder Client

## Endpoint List
Defualt URL - http://localhost:3000
สำหรับ GET Method
สำหรับดู data กิจกรรมทั้งหมด
- {URL}/events
- {URL}/event/:id

สำหรับ Post Method
- {URL}/

สำหรับ Put Method
- {URL}/:id

สำหรับ Delete Method
- {URL}/:id

## วิธีใช้งาน
- ติดตั้ง node.js ด้วยคำสั่งใน terminal
 - $ npm install
- เข้าสู่หน้า Endpoint ได้จากบราวเซอร์ต่างๆดัง URL ด้านบน

### format data
* event_add_date: Date,
* event:{
*    event_name: String,
*    event_desc: String,
*    event_end_date: Date},
*    finish: Boolean
*    }


