# learn-tailwind

แนวคิดหลักของ Tailwind CSS
Utility-First Classes: Tailwind จะใช้การแบ่งคลาสโดยยึดตามฟังก์ชัน เช่นการตั้งค่าขนาดตัวอักษร, การจัดการระยะห่าง, การตั้งค่าเลย์เอาต์ ซึ่งสามารถเพิ่มลงใน HTML ได้เลย เช่น:
<div class="bg-blue-500 text-white p-4 rounded">
  Hello Tailwind!
</div>

คลาส bg-blue-500 ใช้เพื่อเปลี่ยนพื้นหลังเป็นสีฟ้า, text-white ทำให้ข้อความเป็นสีขาว, p-4 กำหนด padding, และ rounded ทำให้มุมกลม

การออกแบบแบบ Responsive และ Mobile-First
Tailwind ทำให้การออกแบบแบบ responsive ง่ายมาก คุณสามารถใช้คลาสตามเบรคพอยต์ เช่น:

<div class="text-base md:text-lg lg:text-xl">
  Responsive Text
</div>

md:text-lg จะเปลี่ยนขนาดตัวอักษรเมื่อหน้าจอกว้างถึง md (768px ขึ้นไป)
lg:text-xl จะใช้เมื่อหน้าจอกว้างถึง lg (1024px ขึ้นไป)

Customization และการปรับแต่ง
คุณสามารถปรับแต่ง Tailwind CSS ให้เหมาะกับโปรเจกต์ของคุณโดยแก้ไขไฟล์ tailwind.config.js เช่น การเพิ่มสีใหม่ หรือปรับเปลี่ยนขนาดต่างๆ

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',
        secondary: '#ffed4a',
        danger: '#e3342f',
      },
    },
  },
}


การใช้ @apply Method
ใน Tailwind CSS คุณสามารถใช้คำสั่ง @apply เพื่อรวม utility classes เข้าด้วยกันในไฟล์ CSS ของคุณ เพื่อให้โค้ดสะอาดและอ่านง่ายขึ้น เช่น:

.btn {
  @apply bg-blue-500 text-white font-bold py-2 px-4 rounded;
}


การใช้ Plugins
Tailwind CSS มี plugins มากมายที่ช่วยเพิ่มฟังก์ชันให้ Tailwind มากขึ้น เช่น:
Typography Plugin: ช่วยจัดการการแสดงผลของข้อความ
Forms Plugin: ปรับแต่งฟอร์มให้สวยงาม คุณสามารถติดตั้งได้ง่ายๆ ผ่าน npm:

npm install @tailwindcss/typography

การ Build และ Deploy Tailwind CSS
เมื่อต้องการนำ Tailwind CSS ไปใช้งานจริง คุณควรใช้ PurgeCSS เพื่อลดขนาดไฟล์ CSS โดยลบคลาสที่ไม่ได้ใช้งานออก ตัวอย่างการตั้งค่าใน tailwind.config.js:

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
}
