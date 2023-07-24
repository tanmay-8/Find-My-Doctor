import common_cold from "../Images/Diseases/common_cold.png";
import bp from "../Images/Diseases/bp.png";
import cancer from "../Images/Diseases/cancer.png";
import cholera from "../Images/Diseases/cholera.png";
import copd from "../Images/Diseases/copd.png";
import diabetes from "../Images/Diseases/diabetes.png";
import diarrhea from "../Images/Diseases/diarrhea.png";
import fever from "../Images/Diseases/fever.png";
import heart from "../Images/Diseases/heart.png";
import hepatitis from "../Images/Diseases/hepatitis.png";
import kidney from "../Images/Diseases/kidney.png";
import mental from "../Images/Diseases/mental.png";
import neuro from "../Images/Diseases/neuro.png";
import skin from "../Images/Diseases/skin.png";

// Types of diseases
const diseases = [
    {
      title: "Common cold",
      img: common_cold,
      desc: "A viral infection that affects the upper respiratory tract. Symptoms include a runny or stuffy nose, sore throat, cough, mild fever, and fatigue.",
    },
    { title: "Fever", img: fever, desc: "A medical condition in which the body temperature rises above its normal range. Common symptoms of fever include an elevated body temperature, chills, sweating, fatigue, and muscle aches. " },
    {
      title: "Cholera",
      img: cholera,
      desc: "A bacterial infection caused by the consumption of contaminated food or water. Symptoms include severe diarrhea, vomiting, and dehydration.",
    },
    {
      title: "Gastroenteritis",
      img: diarrhea,
      desc: " An infection of the digestive tract that can be caused by bacteria, viruses, or parasites. Symptoms include diarrhea, vomiting, abdominal pain, and fever.",
    },
    {
      title: "Neurodegenerative",
      img: neuro,
      desc: "These are a group of conditions that progressively damage the nervous system. Symptoms vary depending on the specific disease, but can include muscle weakness, tremors, difficulty with movement or balance, and cognitive decline.",
    },
    {
      title: "Skin care",
      img: skin,
      desc: "This is a broad category that includes a range of conditions affecting the skin, such as acne, eczema, psoriasis, and dermatitis.",
    },
    {
      title: "Hepatitis",
      img: hepatitis,
      desc: "An inflammation of the liver caused by a viral infection. Symptoms can include jaundice, abdominal pain, nausea, and fatigue.",
    },
    {
      title: "Heart disease",
      img: heart,
      desc: " A range of conditions that affect the heart and blood vessels. Symptoms can include chest pain or discomfort, shortness of breath, fatigue, and dizziness.",
    },
    {
      title: "Diabetes",
      img: diabetes,
      desc: "A chronic condition that affects how the body processes blood sugar. Symptoms can include excessive thirst, frequent urination, fatigue, and blurred vision.",
    },
    {
      title: "High BP",
      img: bp,
      desc: "A condition where the blood pressure in the arteries is consistently higher than normal. Often has no symptoms, but can lead to serious health problems over time.",
    },
    {
      title: "COPD",
      img: copd,
      desc: "A group of lung diseases that make it difficult to breathe. Symptoms can include coughing, wheezing, shortness of breath, and chest tightness.",
    },
    {
      title: "Cancer",
      img: cancer,
      desc: "A group of diseases where abnormal cells divide uncontrollably and destroy healthy tissue. Symptoms depend on the type of cancer but can include fatigue, weight loss, pain, and changes in bowel or bladder habits.",
    },
    {
      title: "Kidney disease",
      img: kidney,
      desc: "A condition where the kidneys are damaged and can't filter blood properly. Symptoms can include fatigue, swelling in the legs or ankles, nausea, and shortness of breath.",
    },
    {
      title: "Mental health",
      img: mental,
      desc: "Include depression, anxiety, bipolar disorder, and schizophrenia. Symptoms can vary depending on the specific condition but can include changes in mood, sleep disturbances, and difficulty with daily activities.",
    },
  ];

export default diseases;