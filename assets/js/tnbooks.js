// =============================
// Subjects by Class
// =============================
const subjectsByClass = {
  1: ["Tamil", "English", "Mathematics", "Environmental Science"],
  2: ["Tamil", "English", "Mathematics", "Environmental Science"],
  3: ["Tamil", "English", "Mathematics", "Science", "Social Science"],
  4: ["Tamil", "English", "Mathematics", "Science", "Social Science"],
  5: ["Tamil", "English", "Mathematics", "Science", "Social Science"],
  6: ["Tamil", "English", "Mathematics", "Science", "Social Science"],
  7: ["Tamil", "English", "Mathematics", "Science", "Social Science"],
  8: ["Tamil", "English", "Mathematics", "Science", "Social Science"],
  9: ["Tamil", "English", "Mathematics", "Science", "Social Science"],
  10: ["Tamil", "English", "Mathematics", "Science", "Social Science"],
  11: ["Tamil", "English", "Mathematics", "Physics", "Chemistry", "Botany", "Zoology", "Bio Botany", "Bio Zoology", "Bio Chemistry", "Accountancy", "Commerce", "Computer Science", "Computer Applications", "Business Mathematics and Statistics", "Economics", "Geography", "Home Science", "History", "Micro Biology", "Nutrition and Dietetics", "Political Science", "Statistics", "General Nursing", "Employability Skills", "Auditing", "Agricultural Science", "Basic Automobile Engineering", "Basic Civil Engineering", "Basic Electrical Engineering", "Basic Electronics Engineering", "Basic Mechanical Engineering", "Food Service Management", "Office Management and Secretaryship & Typography and Computer Applications", "Textiles and Dress Designing", "Textiles Technology", "Advance Tamil", "Communicative English", "Physical Education-Tr.Resource Book"],
  12: ["Tamil", "English", "Mathematics", "Physics", "Chemistry", "Botany", "Zoology", "Bio Botany", "Bio Zoology", "Bio Chemistry", "Accountancy", "Commerce", "Computer Science", "Computer Applications", "Business Mathematics and Statistics", "Economics", "Geography", "Home Science", "History", "Micro Biology", "Nutrition and Dietetics", "Political Science", "Statistics", "General Nursing", "Employability Skills", "Auditing", "Agricultural Science", "Basic Automobile Engineering", "Basic Civil Engineering", "Basic Electrical Engineering", "Basic Electronics Engineering", "Basic Mechanical Engineering", "Food Service Management", "Office Management and Secretaryship & Typography and Computer Applications", "Textiles and Dress Designing", "Textiles Technology", "Advance Tamil", "Communicative English", "Physical Education-Tr.Resource Book"]
};

// =============================
// Special Links Mapping
// =============================
// Format:
// - Class 1–7: "class-subject-TM/EM-T{term}"
//   Example: "6-Tamil-TM-T1"
// - Class 8–12: "class-subject-TM/EM"
//   Example: "8-Science-EM"
const specialLinks = {
"1-Tamil-TM-T1": "",
"1-Tamil-TM-T2": "",
"1-Tamil-TM-T3": "",
"1-English-EM-T1": "",
"1-English-EM-T2": "",
"1-English-EM-T3": "",
"1-Mathematics-TM-T1": "",
"1-Mathematics-TM-T2": "",
"1-Mathematics-TM-T3": "",
"1-Mathematics-EM-T1": "",
"1-Mathematics-EM-T2": "",
"1-Mathematics-EM-T3": "",
"1-Environmental Science-TM-T1": "",
"1-Environmental Science-TM-T2": "",
"1-Environmental Science-TM-T3": "",
"1-Environmental Science-EM-T1": "",
"1-Environmental Science-EM-T2": "",
"1-Environmental Science-EM-T3": "",

"2-Tamil-TM-T1": "",
"2-Tamil-TM-T2": "",
"2-Tamil-TM-T3": "",
"2-English-EM-T1": "",
"2-English-EM-T2": "",
"2-English-EM-T3": "",
"2-Mathematics-TM-T1": "",
"2-Mathematics-TM-T2": "",
"2-Mathematics-TM-T3": "",
"2-Mathematics-EM-T1": "",
"2-Mathematics-EM-T2": "",
"2-Mathematics-EM-T3": "",
"2-Environmental Science-TM-T1": "",
"2-Environmental Science-TM-T2": "",
"2-Environmental Science-TM-T3": "",
"2-Environmental Science-EM-T1": "",
"2-Environmental Science-EM-T2": "",
"2-Environmental Science-EM-T3": "",

"3-Tamil-TM-T1": "",
"3-Tamil-TM-T2": "",
"3-Tamil-TM-T3": "",
"3-English-EM-T1": "",
"3-English-EM-T2": "",
"3-English-EM-T3": "",
"3-Mathematics-TM-T1": "",
"3-Mathematics-TM-T2": "",
"3-Mathematics-TM-T3": "",
"3-Mathematics-EM-T1": "",
"3-Mathematics-EM-T2": "",
"3-Mathematics-EM-T3": "",
"3-Science-TM-T1": "",
"3-Science-TM-T2": "",
"3-Science-TM-T3": "",
"3-Science-EM-T1": "",
"3-Science-EM-T2": "",
"3-Science-EM-T3": "",
"3-Social Science-TM-T1": "",
"3-Social Science-TM-T2": "",
"3-Social Science-TM-T3": "",
"3-Social Science-EM-T1": "",
"3-Social Science-EM-T2": "",
"3-Social Science-EM-T3": "",

"4-Tamil-TM-T1": "",
"4-Tamil-TM-T2": "",
"4-Tamil-TM-T3": "",
"4-English-EM-T1": "",
"4-English-EM-T2": "",
"4-English-EM-T3": "",
"4-Mathematics-TM-T1": "",
"4-Mathematics-TM-T2": "",
"4-Mathematics-TM-T3": "",
"4-Mathematics-EM-T1": "",
"4-Mathematics-EM-T2": "",
"4-Mathematics-EM-T3": "",
"4-Science-TM-T1": "",
"4-Science-TM-T2": "",
"4-Science-TM-T3": "",
"4-Science-EM-T1": "",
"4-Science-EM-T2": "",
"4-Science-EM-T3": "",
"4-Social Science-TM-T1": "",
"4-Social Science-TM-T2": "",
"4-Social Science-TM-T3": "",
"4-Social Science-EM-T1": "",
"4-Social Science-EM-T2": "",
"4-Social Science-EM-T3": "",

"5-Tamil-TM-T1": "",
"5-Tamil-TM-T2": "",
"5-Tamil-TM-T3": "",
"5-English-EM-T1": "",
"5-English-EM-T2": "",
"5-English-EM-T3": "",
"5-Mathematics-TM-T1": "",
"5-Mathematics-TM-T2": "",
"5-Mathematics-TM-T3": "",
"5-Mathematics-EM-T1": "",
"5-Mathematics-EM-T2": "",
"5-Mathematics-EM-T3": "",
"5-Science-TM-T1": "",
"5-Science-TM-T2": "",
"5-Science-TM-T3": "",
"5-Science-EM-T1": "",
"5-Science-EM-T2": "",
"5-Science-EM-T3": "",
"5-Social Science-TM-T1": "",
"5-Social Science-TM-T2": "",
"5-Social Science-TM-T3": "",
"5-Social Science-EM-T1": "",
"5-Social Science-EM-T2": "",
"5-Social Science-EM-T3": "",

  // Class 6
"6-Tamil-TM-T1": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-6-tamil-tamil-tamil-term-1-2024-edition-Wulb9.pdf",
"6-Tamil-TM-T2": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-6-tamil-tamil-tamil-term-2-2024-edition-znABW.pdf",
"6-Tamil-TM-T3": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-6-tamil-tamil-tamil-term-3-2024-edition-SpqbH.pdf",
"6-English-EM-T1": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-6-english-english-english-term-1-2024-edition-3fCgm.pdf",
"6-English-EM-T2": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-6-english-english-english-term-2-2024-edition-f0pVo.pdf",
"6-English-EM-T3": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-6-english-english-english-term-3-2024-edition-QTY9R.pdf",
"6-Mathematics-TM-T1": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-6-mathematics-tamil-mathematics-term-1-2025-edition-4Sxd9.pdf",
"6-Mathematics-TM-T2": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-6-mathematics-tamil-mathematics-term-2-2024-edition-Z7Z5t.pdf",
"6-Mathematics-TM-T3": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-6-mathematics-tamil-mathematics-term-3-2024-edition-nHyN9.pdf",
"6-Mathematics-EM-T1": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-6-mathematics-english-mathematics-term-1-2025-edition-WTe6y.pdf",
"6-Mathematics-EM-T2": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-6-mathematics-english-mathematics-term-2-2024-edition-Tv3XK.pdf",
"6-Mathematics-EM-T3": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-6-mathematics-english-mathematics-term-3-2024-edition-oeURs.pdf",
"6-Science-TM-T1": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-6-science-tamil-science-term-1-2025-edition-TzTEt.pdf",
"6-Science-TM-T2": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-6-science-tamil-science-term-2-2024-edition-dZUnI.pdf",
"6-Science-TM-T3": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-6-science-tamil-science-term-3-2024-edition-QVWgj.pdf",
"6-Science-EM-T1": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-6-science-english-science-term-1-2025-edition-NrJAq.pdf",
"6-Science-EM-T2": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-6-science-english-science-term-2-2024-edition-kKnAA.pdf",
"6-Science-EM-T3": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-6-science-english-science-term-3-2024-edition-d4n3C.pdf",
"6-Social Science-TM-T1": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-6-social-science-tamil-social-science-term-1-2025-edition-F5i2Y.pdf",
"6-Social Science-TM-T2": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-6-social-science-tamil-social-science-term-2-2024-edition-jl4o9.pdf",
"6-Social Science-TM-T3": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-6-social-science-tamil-social-science-term-3-2024-edition-Axobe.pdf",
"6-Social Science-EM-T1": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-6-social-science-english-social-science-term-1-2025-edition-xiYef.pdf",
"6-Social Science-EM-T2": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-6-social-science-english-social-science-term-2-2024-edition-btH4v.pdf",
"6-Social Science-EM-T3": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-6-social-science-english-social-science-term-3-2024-edition-ev9GL.pdf",

// Class 7
"7-Tamil-TM-T1": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-7-tamil-tamil-tamil-term-1-2024-edition-7QZ5M.pdf",
"7-Tamil-TM-T2": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-7-tamil-tamil-tamil-term-2-2024-edition-ZprMK.pdf",
"7-Tamil-TM-T3": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-7-tamil-tamil-tamil-term-3-2025-edition-OoCJE.pdf",
"7-English-EM-T1": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-7-english-english-english-term-1-2024-edition-OCCZX.pdf",
"7-English-EM-T2": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-7-english-english-english-term-2-2024-edition-JZJD1.pdf",
"7-English-EM-T3": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-7-english-english-english-term-3-2024-edition-jEzj4.pdf",
"7-Mathematics-TM-T1": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-7-mathematics-tamil-mathematics-term-1-2025-edition-7fiJ8.pdf",
"7-Mathematics-TM-T2": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-7-mathematics-tamil-mathematics-term-2-2024-edition-A9TdT.pdf",
"7-Mathematics-TM-T3": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-7-mathematics-tamil-mathematics-term-3-2024-edition-j2Bi4.pdf",
"7-Mathematics-EM-T1": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-7-mathematics-english-mathematics-term-1-2025-edition-qZ9Lh.pdf",
"7-Mathematics-EM-T2": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-7-mathematics-english-mathematics-term-2-2024-edition-h2iy6.pdf",
"7-Mathematics-EM-T3": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-7-mathematics-english-mathematics-term-3-2024-edition-qOsE4.pdf",
"7-Science-TM-T1": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-7-science-tamil-science-term-1-2025-edition-ySJhp.pdf",
"7-Science-TM-T2": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-7-science-tamil-science-term-2-2024-edition-o3s9X.pdf",
"7-Science-TM-T3": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-7-science-tamil-science-term-3-2024-edition-e7oEe.pdf",
"7-Science-EM-T1": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-7-science-english-science-term-1-2025-edition-Zzw46.pdf",
"7-Science-EM-T2": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-7-science-english-science-term-2-2024-edition-7FMQb.pdf",
"7-Science-EM-T3": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-7-science-english-science-term-3-2024-edition-pAdzk.pdf",
"7-Social Science-TM-T1": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-7-social-science-tamil-social-science-term-1-2025-edition-Zeuhz.pdf",
"7-Social Science-TM-T2": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-7-social-science-tamil-social-science-term-2-2024-edition-znsbV.pdf",
"7-Social Science-TM-T3": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-7-social-science-tamil-social-science-term-3-2024-edition-82P4M.pdf",
"7-Social Science-EM-T1": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-7-social-science-english-social-science-term-1-2025-edition-0sffC.pdf",
"7-Social Science-EM-T2": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-7-social-science-english-social-science-term-2-2024-edition-r7ZuX.pdf",
"7-Social Science-EM-T3": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-7-social-science-english-social-science-term-3-2024-edition-Nsjls.pdf",

// Class 8 (no terms)
"8-Tamil-TM": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-8-tamil-tamil-tamil-2024-edition-bFpvX.pdf",
"8-English-EM": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-8-english-english-english-2024-edition-HIxUt.pdf",
"8-Mathematics-TM": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-8-mathematics-tamil-mathematics-2025-edition-EC0f7.pdf",
"8-Mathematics-EM": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-8-mathematics-english-mathematics-2025-edition-P8xob.pdf",
"8-Science-TM": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-8-science-tamil-science-2024-edition-1BCdt.pdf",
"8-Science-EM": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-8-science-english-science-2024-edition-SIM5l.pdf",
"8-Social Science-TM": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-8-social-science-tamil-social-science-2025-edition-oEWCU.pdf",
"8-Social Science-EM": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-8-social-science-english-social-science-2025-edition-ZWVCY.pdf",

// Class 9 (no terms)
"9-Tamil-TM": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-9-tamil-tamil-tamil-2024-edition-4Epnm.pdf",
"9-English-EM": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-9-english-english-english-2024-edition-QiE5a.pdf",
"9-Mathematics-TM": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-9-mathematics-tamil-mathematics-2025-edition-YcnMw.pdf",
"9-Mathematics-EM": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-9-mathematics-english-mathematics-2025-edition-sZf88.pdf",
"9-Science-TM": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-9-science-tamil-science-2024-edition-LO88I.pdf",
"9-Science-EM": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-9-science-english-science-2024-edition-sY5Jz.pdf",
"9-Social Science-TM": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-9-social-science-tamil-social-science-2025-edition-Ftxtc.pdf",
"9-Social Science-EM": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-9-social-science-english-social-science-2025-edition-cZN3J.pdf",

// Class 10 (no terms)
"10-Tamil-TM": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-10-tamil-tamil-tamil-2024-edition-BpYHj.pdf",
"10-English-EM": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-10-english-english-english-2024-edition-eB83v.pdf",
"10-Mathematics-TM": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-10-mathematics-tamil-mathematics-2025-edition-sOOEe.pdf",
"10-Mathematics-EM": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-10-mathematics-english-mathematics-2025-edition-k3D0E.pdf",
"10-Science-TM": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-10-science-tamil-science-2024-edition-rJBsm.pdf",
"10-Science-EM": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-10-science-english-science-2024-edition-CA6Fl.pdf",
"10-Social Science-TM": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-10-social-science-tamil-social-science-2025-edition-RRli4.pdf",
"10-Social Science-EM": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-10-social-science-english-social-science-2025-edition-ckeac.pdf",

// Class 11 (all subjects, no terms)
"11-Tamil-TM": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-11-tamil-tamil-tamil-2024-edition-6Vtla.pdf",
"11-English-EM": "https://d1wpyxz35bzzz4.cloudfront.net/tnschools/class-11-english-english-english-2024-edition-OfzOz.pdf",
"11-Mathematics-TM": "",
"11-Mathematics-EM": "",
"11-Physics-TM": "",
"11-Physics-EM": "",
"11-Chemistry-TM": "",
"11-Chemistry-EM": "",
"11-Botany-TM": "",
"11-Botany-EM": "",
"11-Zoology-TM": "",
"11-Zoology-EM": "",
"11-Bio Botany-TM": "",
"11-Bio Botany-EM": "",
"11-Bio Zoology-TM": "",
"11-Bio Zoology-EM": "",
"11-Bio Chemistry-TM": "",
"11-Bio Chemistry-EM": "",
"11-Accountancy-TM": "",
"11-Accountancy-EM": "",
"11-Commerce-TM": "",
"11-Commerce-EM": "",
"11-Computer Science-TM": "",
"11-Computer Science-EM": "",
"11-Computer Applications-TM": "",
"11-Computer Applications-EM": "",
"11-Business Mathematics-and-Statistics-TM": "",
"11-Business Mathematics-and-Statistics-EM": "",
"11-Economics-TM": "",
"11-Economics-EM": "",
"11-Geography-TM": "",
"11-Geography-EM": "",
"11-Home Science-TM": "",
"11-Home Science-EM": "",
"11-History-TM": "",
"11-History-EM": "",
"11-Micro Biology-TM": "",
"11-Micro Biology-EM": "",
"11-Nutrition and Dietetics-TM": "",
"11-Nutrition and Dietetics-EM": "",
"11-Political Science-TM": "",
"11-Political Science-EM": "",
"11-Statistics-TM": "",
"11-Statistics-EM": "",
"11-General Nursing-TM": "",
"11-General Nursing-EM": "",
"11-Employability Skills-TM": "",
"11-Employability Skills-EM": "",
"11-Auditing-TM": "",
"11-Auditing-EM": "",
"11-Agricultural Science-TM": "",
"11-Agricultural Science-EM": "",
"11-Basic Automobile Engineering-TM": "",
"11-Basic Automobile Engineering-EM": "",
"11-Basic Civil Engineering-TM": "",
"11-Basic Civil Engineering-EM": "",
"11-Basic Electrical Engineering-TM": "",
"11-Basic Electrical Engineering-EM": "",
"11-Basic Electronics Engineering-TM": "",
"11-Basic Electronics Engineering-EM": "",
"11-Basic Mechanical Engineering-TM": "",
"11-Basic Mechanical Engineering-EM": "",
"11-Food-Service Management-TM": "",
"11-Food-Service Management-EM": "",
"11-Office Management and Secretaryship-TM": "",
"11-Office Management and Secretaryship-EM": "",
"11-Textiles and Dress Designing-TM": "",
"11-Textiles and Dress Designing-EM": "",
"11-Textiles Technology-TM": "",
"11-Textiles Technology-EM": "",
"11-Advance Tamil-TM": "",
"11-Advance Tamil-EM": "",
"11-Communicative English-TM": "",
"11-Communicative English-EM": "",
"11-Physical Education-TM": "",
"11-Physical Education-EM": "",

// Class 12 (all subjects, no terms)
"12-Tamil-TM": "",
"12-English-EM": "",
"12-Mathematics-TM": "",
"12-Mathematics-EM": "",
"12-Physics-TM": "",
"12-Physics-EM": "",
"12-Chemistry-TM": "",
"12-Chemistry-EM": "",
"12-Botany-TM": "",
"12-Botany-EM": "",
"12-Zoology-TM": "",
"12-Zoology-EM": "",
"12-Bio-Botany-TM": "",
"12-Bio-Botany-EM": "",
"12-Bio-Zoology-TM": "",
"12-Bio-Zoology-EM": "",
"12-Bio-Chemistry-TM": "",
"12-Bio-Chemistry-EM": "",
"12-Accountancy-TM": "",
"12-Accountancy-EM": "",
"12-Commerce-TM": "",
"12-Commerce-EM": "",
"12-Computer-Science-TM": "",
"12-Computer-Science-EM": "",
"12-Computer-Applications-TM": "",
"12-Computer-Applications-EM": "",
"12-Business-Mathematics-and-Statistics-TM": "",
"12-Business-Mathematics-and-Statistics-EM": "",
"12-Economics-TM": "",
"12-Economics-EM": "",
"12-Geography-TM": "",
"12-Geography-EM": "",
"12-Home-Science-TM": "",
"12-Home-Science-EM": "",
"12-History-TM": "",
"12-History-EM": "",
"12-Micro-Biology-TM": "",
"12-Micro-Biology-EM": "",
"12-Nutrition-and-Dietetics-TM": "",
"12-Nutrition-and-Dietetics-EM": "",
"12-Political-Science-TM": "",
"12-Political-Science-EM": "",
"12-Statistics-TM": "",
"12-Statistics-EM": "",
"12-General-Nursing-TM": "",
"12-General-Nursing-EM": "",
"12-Employability-Skills-TM": "",
"12-Employability-Skills-EM": "",
"12-Auditing-TM": "",
"12-Auditing-EM": "",
"12-Agricultural-Science-TM": "",
"12-Agricultural-Science-EM": "",
"12-Basic-Automobile-Engineering-TM": "",
"12-Basic-Automobile-Engineering-EM": "",
"12-Basic-Civil-Engineering-TM": "",
"12-Basic-Civil-Engineering-EM": "",
"12-Basic-Electrical-Engineering-TM": "",
"12-Basic-Electrical-Engineering-EM": "",
"12-Basic-Electronics-Engineering-TM": "",
"12-Basic-Electronics-Engineering-EM": "",
"12-Basic-Mechanical-Engineering-TM": "",
"12-Basic-Mechanical-Engineering-EM": "",
"12-Food-Service-Management-TM": "",
"12-Food-Service-Management-EM": "",
"12-Office-Management-and-Secretaryship-TM": "",
"12-Office-Management-and-Secretaryship-EM": "",
"12-Textiles-and-Dress-Designing-TM": "",
"12-Textiles-and-Dress-Designing-EM": "",
"12-Textiles-Technology-TM": "",
"12-Textiles-Technology-EM": "",
"12-Advance-Tamil-TM": "",
"12-Advance-Tamil-EM": "",
"12-Communicative-English-TM": "",
"12-Communicative-English-EM": "",
"12-Physical-Education-TM": "",
"12-Physical-Education-EM": "",

};

// =============================
// Elements
// =============================
const classSelect = document.getElementById("classSelect");
const termTables = document.getElementById("termTables");

// =============================
// Table Generator
// =============================
function createTable(subjects, classVal, term = "") {
  let tableHTML = `
    <div class="table-responsive mb-4">
      <h4 class="text-center">${term ? 'Term ' + term : 'Books'}</h4>
      <table class="table table-bordered">
        <thead class="table-dark">
          <tr>
            <th>Book Title</th>
            <th>Tamil Medium</th>
            <th>English Medium</th>
          </tr>
        </thead>
        <tbody>
  `;

  subjects.forEach(subject => {
    const formattedSubject = subject.toLowerCase().replace(/\s+/g, '-');

    let tamilPath = "";
    let englishPath = "";

    if (classVal >= 1 && classVal <= 7) {
      // ---- Term-based (Class 1–7) ----
      tamilPath = specialLinks[`${classVal}-${subject}-TM-T${term}`] 
                  || `https://archive.org/download/tntextbooks/textbooks2024/class${classVal}/class-${classVal}-${formattedSubject}-tamil-term-${term}.pdf`;
      englishPath = specialLinks[`${classVal}-${subject}-EM-T${term}`] 
                    || `https://archive.org/download/tntextbooks/textbooks2024/class${classVal}/class-${classVal}-${formattedSubject}-english-term-${term}.pdf`;
    } else {
      // ---- No Term (Class 8–12) ----
      tamilPath = specialLinks[`${classVal}-${subject}-TM`] 
                  || `https://archive.org/download/tntextbooks/textbooks2024/class${classVal}/class-${classVal}-${formattedSubject}-tamil.pdf`;
      englishPath = specialLinks[`${classVal}-${subject}-EM`] 
                    || `https://archive.org/download/tntextbooks/textbooks2024/class${classVal}/class-${classVal}-${formattedSubject}-english.pdf`;
    }

    let tamilCol = "";
    let englishCol = "";

    if (subject.toLowerCase() === "tamil") {
      tamilCol = `<a href="${tamilPath}" class="link1">Download</a>`;
    } else if (subject.toLowerCase() === "english") {
      englishCol = `<a href="${englishPath}" class="link1">Download</a>`;
    } else {
      tamilCol = `<a href="${tamilPath}" class="link1">Download</a>`;
      englishCol = `<a href="${englishPath}" class="link1">Download</a>`;
    }

    tableHTML += `<tr><td>${subject}</td><td>${tamilCol}</td><td>${englishCol}</td></tr>`;
  });

  tableHTML += '</tbody></table></div>';
  return tableHTML;
}

// =============================
// Event Listener
// =============================
classSelect.addEventListener("change", function() {
  const classVal = parseInt(this.value);
  const subjects = subjectsByClass[classVal] || [];

  if (subjects.length === 0) {
    termTables.innerHTML = '<p class="text-center">Please choose the appropriate Class.</p>';
    return;
  }

  let content = "";
  if (classVal >= 1 && classVal <= 7) {
    [1, 2, 3].forEach(term => {
      content += createTable(subjects, classVal, term);
    });
  } else {
    content += createTable(subjects, classVal);
  }

  termTables.innerHTML = content;
});
