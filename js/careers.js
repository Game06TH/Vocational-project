const careers = [
  {
    id: "software-dev",
    name: "Software Developer",
    description: "พัฒนาโปรแกรมหรือแอปพลิเคชันสำหรับคอมพิวเตอร์และมือถือ",
    skills: ["Java", "C#", "Python", "JavaScript"],
    salary: "30,000 - 100,000 บาท",
    path: "เรียนสายคอมพิวเตอร์ / วิศวกรรมซอฟต์แวร์",
    image: ""
  },
  {
    id: "web-dev",
    name: "Web Developer",
    description: "พัฒนาเว็บไซต์ทั้งฝั่งหน้าและหลังบ้าน",
    skills: ["HTML", "CSS", "JavaScript", "Git", "React"],
    salary: "18,000 - 40,000 บาท",
    path: "เรียนสาย IT / เรียนรู้จากคอร์สออนไลน์",
    image: ""
  },
  {
    id: "mobile-app-dev",
    name: "Mobile App Developer",
    description: "พัฒนาแอปบน iOS และ Android",
    skills: ["Swift", "Kotlin", "Flutter", "React Native"],
    salary: "30,000 - 90,000 บาท",
    path: "เรียนสายพัฒนาแอป / วิศวกรรมซอฟต์แวร์",
    image: ""
  },
  {
    id: "game-dev",
    name: "Game Developer",
    description: "สร้างเกมทั้งภาพ เสียง และระบบการเล่น",
    skills: ["Unity", "C#", "Unreal Engine", "3D Modeling"],
    salary: "35,000 - 80,000 บาท",
    path: "เรียนพัฒนาเกม / วิศวกรรมคอมพิวเตอร์",
    image: ""
  },
  {
    id: "devops",
    name: "DevOps Engineer",
    description: "ดูแลการส่งมอบซอฟต์แวร์อัตโนมัติและโครงสร้างพื้นฐาน",
    skills: ["Docker", "Jenkins", "Linux", "Kubernetes"],
    salary: "50,000 - 120,000 บาท",
    path: "เรียนสายระบบ / Network หรือ Cloud",
    image: ""
  },
  {
    id: "cloud-eng",
    name: "Cloud Engineer",
    description: "จัดการระบบเซิร์ฟเวอร์และบริการบน Cloud",
    skills: ["AWS", "Azure", "GCP", "Terraform"],
    salary: "50,000 - 120,000 บาท",
    path: "เรียนคลาวด์คอมพิวติ้ง / วิศวกรรมคอมพิวเตอร์",
    image: ""
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity Analyst",
    description: "วิเคราะห์และป้องกันการโจมตีทางไซเบอร์",
    skills: ["Firewall", "SIEM", "Python", "Ethical Hacking"],
    salary: "40,000 - 90,000 บาท",
    path: "เรียนด้านความปลอดภัยไซเบอร์ / IT Security",
    image: ""
  },
  {
    id: "ml-engineer",
    name: "Machine Learning Engineer",
    description: "พัฒนาโมเดล AI เพื่อให้ระบบเรียนรู้ได้ด้วยตนเอง",
    skills: ["Python", "TensorFlow", "Pandas", "Scikit-learn"],
    salary: "50,000 - 120,000 บาท",
    path: "เรียนสายข้อมูล / ปัญญาประดิษฐ์",
    image: ""
  },
  {
    id: "data-scientist",
    name: "Data Scientist",
    description: "วิเคราะห์และสร้างโมเดลข้อมูลเพื่อการตัดสินใจ",
    skills: ["Python", "R", "SQL", "Machine Learning"],
    salary: "50,000 - 150,000 บาท",
    path: "เรียน Data Science / วิทยาการคอมพิวเตอร์",
    image: ""
  },
  {
    id: "ai-specialist",
    name: "AI Specialist",
    description: "พัฒนาเทคโนโลยีและระบบ AI",
    skills: ["Deep Learning", "Neural Networks", "Python", "TensorFlow"],
    salary: "60,000 - 150,000 บาท",
    path: "เรียนปัญญาประดิษฐ์ / วิทยาการข้อมูล",
    image: ""
  },
  {
    id: "blockchain",
    name: "Blockchain Developer",
    description: "พัฒนาและดูแลระบบบล็อกเชน",
    skills: ["Solidity", "Ethereum", "Smart Contract", "JavaScript"],
    salary: "50,000 - 120,000 บาท",
    path: "เรียน Blockchain / การพัฒนาซอฟต์แวร์",
    image: ""
  },
  {
    id: "data-eng",
    name: "Data Engineer",
    description: "จัดการโครงสร้างข้อมูลและการไหลของข้อมูล",
    skills: ["SQL", "Hadoop", "Spark", "Python"],
    salary: "40,000 - 100,000 บาท",
    path: "เรียน Data Engineering / วิทยาการคอมพิวเตอร์",
    image: ""
  },
  {
    id: "digital-consult",
    name: "Digital Transformation Consultant",
    description: "ให้คำปรึกษาเทคโนโลยีเพื่อเปลี่ยนผ่านองค์กร",
    skills: ["Business Strategy", "IT Tools", "Cloud", "Data Analytics"],
    salary: "50,000 - 150,000 บาท",
    path: "เรียนการจัดการเทคโนโลยีสารสนเทศ",
    image: ""
  },
  {
    id: "bigdata",
    name: "Big Data Engineer",
    description: "วิเคราะห์และจัดการข้อมูลขนาดใหญ่",
    skills: ["Hadoop", "Spark", "Kafka", "NoSQL"],
    salary: "50,000 - 120,000 บาท",
    path: "เรียน Big Data / Data Science",
    image: ""
  },
  {
    id: "robotics",
    name: "Robotics Engineer",
    description: "ออกแบบและสร้างหุ่นยนต์และระบบอัตโนมัติ",
    skills: ["C++", "ROS", "Embedded Systems", "Control Systems"],
    salary: "50,000 - 110,000 บาท",
    path: "เรียนวิศวกรรมหุ่นยนต์ / Mechatronics",
    image: ""
  },
  {
    id: "vr-ar",
    name: "VR/AR Developer",
    description: "พัฒนาเทคโนโลยีโลกเสมือนและเสริมจริง",
    skills: ["Unity", "C#", "3D Modeling", "ARKit/ARCore"],
    salary: "40,000 - 100,000 บาท",
    path: "เรียนสื่อดิจิทัล / วิทยาการคอมพิวเตอร์",
    image: ""
  },
  {
    id: "pentester",
    name: "Penetration Tester",
    description: "ทดสอบระบบเพื่อค้นหาช่องโหว่",
    skills: ["Kali Linux", "Metasploit", "Python", "Burp Suite"],
    salary: "50,000 - 120,000 บาท",
    path: "เรียน Cybersecurity / Ethical Hacking",
    image: ""
  },
  {
    id: "iot-engineer",
    name: "IoT Engineer",
    description: "พัฒนาอุปกรณ์และระบบที่เชื่อมต่ออินเทอร์เน็ต",
    skills: ["C", "Microcontroller", "Python", "MQTT"],
    salary: "45,000 - 100,000 บาท",
    path: "เรียน IoT / วิศวกรรมอิเล็กทรอนิกส์",
    image: ""
  },
  {
    id: "cloud-sec",
    name: "Cloud Security Engineer",
    description: "ป้องกันข้อมูลบน Cloud จากภัยไซเบอร์",
    skills: ["Cloud Security", "IAM", "Encryption", "AWS/Azure"],
    salary: "50,000 - 120,000 บาท",
    path: "เรียนความปลอดภัยบนคลาวด์",
    image: ""
  },
  {
    id: "it-pm",
    name: "IT Project Manager",
    description: "บริหารจัดการโครงการ IT ให้สำเร็จตรงเวลา",
    skills: ["Project Management", "Agile", "Scrum", "Leadership"],
    salary: "50,000 - 150,000 บาท",
    path: "เรียนการจัดการโครงการ / IT Management",
    image: ""
  }
];

