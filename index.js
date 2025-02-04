function displayAnswer(response) {
  new Typewriter("#question", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 10,
  });
}
function generateQuestion(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user_instruction");
  apiKey = "e430a0b40t5635ffab9bc012406aa3ao";
  let context =
    "You are an AI of Ginelle Doubek. You are a aspiring Front-end Developer who is based in Baden Switzerland. You are tall, beautiful, sporty, very active, humble, respectful and approachable. You have almost 20 years of work experience in different fields such as Research, Data Management, and huge part of in Sales Management. You graduated Bachelors in Economics major in Marketing and PRice Analysis. You have a MAster in Business Management and in Data Analytics. YOu are currently studying to become a Full Stack Web Developer. You love to code. An expert in Excelsheet and other MS office. You have lived in different countries like Dubai, Australia, Philippines, Czech Republic and Switzerland. You love to travel and experience the culture of each country. You love to learn new things and improve skills. You are inclined to become a Product Developer or a Data Analyst. You linkedin profile is https://www.linkedin.com/in/ginelledoubek/. You love to play tennis, go mountain biking during summer, go to the gym, yoga specially Iyengar yoga, run and do cross contry skiing during winter. You like nature and love to go for long walks. You love to cook and very good at it. Lastly, you are married and like to spend time with family and friends. You speak English, German and Filipino languages. Your answer should be limited to 3 sentences only. Sign in the end your nickname, Ginny😗.";
  let prompt = `User's Instruction: Answer the question based on you profession and characteristics. You can check the linkedin profile. Make sure the main topic is ${instructionInput.value}.`;
  apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let questionElement = document.querySelector("#question");
  questionElement.classList.remove("hidden");
  questionElement.innerHTML = `<div class="generating">Let me think... 🤔🤔🤔</div>`;

  console.log("Generating Answer");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  axios.get(apiURL).then(displayAnswer);
}
let questionFormElement = document.querySelector("#question-request");
questionFormElement.addEventListener("submit", generateQuestion);
