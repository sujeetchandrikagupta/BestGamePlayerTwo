
const teams = {
    MI: [  "Rohit Sharma","Ishan Kishan","Suryakumar Yadav","Tilak Varma","Cameron Green","Jofra Archer","Jasprit Bumrah","Tim David","Piyush Chawla","Tristan Stubbs","Dewald Brevis","Nehal Wadhera","Arjun Tendulkar","Hrithik Shokeen","Kumar Kartikeya","Ramandeep Singh","Vishnu Vinod","Jason Behrendorff","Akash Madhwal","Raghav Goyal"],
    CSK: ["Ruturaj Gaikwad","Ajinkya Rahane","Shaik Rasheed","Sameer Rizvi","Devon Conway","Rahul Tripathi","Andre Siddarth","MS Dhoni","Aravelly Avanish Rao","Vansh Bedi","Moeen Ali","Shivam Dube","Rajvardhan Hangargekar","Ravindra Jadeja","Ajay Mandal","Daryl Mitchell","Rachin Ravindra","Mitchell Santner","Nishant Sindhu","Deepak Chahar","Mukesh Choudhary","Tushar Deshpande","Matheesha Pathirana","Mustafizur Rahman","Simarjeet Singh","Shardul Thakur","Richard Gleeson","Prashant Solanki","Maheesh Theekshana"],
    RR: [ "Sanju Samson","Yashasvi Jaiswal","Riyan Parag","Dhruv Jurel","Shimron Hetmyer","Nitish Rana","Shubham Dubey","Kunal Rathore","Ashok Sharma","Wanindu Hasaranga","Maheesh Theekshana","Akash Madhwal","Kumar Kartikeya","Yudhvir Singh","Fazalhaq Farooqi","Kwena Maphaka","Jofra Archer","Sandeep Sharma","Tushar Deshpande","Nandre Burger","Avesh Khan","Kuldeep Sen","Navdeep Saini","Keshav Maharaj","Trent Boult","Yuzvendra Chahal","Abid Mushtaq"],
    RCB: [ "Virat Kohli","Rajat Patidar","Devdutt Padikkal","Swastik Chikara","Phil Salt","Jitesh Sharma","Liam Livingstone","Krunal Pandya","Tim David","Romario Shepherd","Swapnil Singh","Manoj Bhandage","Jacob Bethell","Josh Hazlewood","Bhuvneshwar Kumar","Rasikh Dar","Yash Dayal","Nuwan Thushara","Lungi Ngidi","Abhinandan Singh","Suyash Sharma"],
    KKR: [  "Rinku Singh","Angkrish Raghuvanshi","Ajinkya Rahane","Manish Pandey","Luvnith Sisodia","Rahmanullah Gurbaz","Quinton de Kock","Venkatesh Iyer","Anukul Roy","Moeen Ali","Ramandeep Singh","Andre Russell","Anrich Nortje","Vaibhav Arora","Harshit Rana","Umran Malik","Spencer Johnson","Mayank Markande","Varun Chakravarthy","Sunil Narine"],
    DC: [ "KL Rahul","Harry Brook","Jake Fraser-McGurk","Karun Nair","Faf du Plessis","Donovan Ferreira","Abishek Porel","Tristan Stubbs","Axar Patel","Ashutosh Sharma","Sameer Rizvi","Kuldeep Yadav","Mitchell Starc","T Natarajan","Mukesh Kumar","Mohit Sharma","Dushmantha Chameera"],
    PBKS: [ "Shreyas Iyer","Nehal Wadhera","Vishnu Vinod","Josh Inglis","Harnoor Pannu","Pyla Avinash","Prabhsimran Singh","Shashank Singh","Marcus Stoinis","Suryansh Shedge","Arshdeep Singh","Yuzvendra Chahal","Lockie Ferguson","Praveen Dubey","Xavier Bartlett"],
    SRH: ["Aiden Markram", "Bhuvneshwar Kumar", "Rahul Tripathi", "Umran Malik","Ishan Kishan","Travis Head","Heinrich Klaasen","Abhinav Manohar","Atharva Taide","Aniket Verma","Sachin Baby","Abhishek Sharma","Harshal Patel","Brydon Carse","Kamindu Mendis","Nitish Kumar Reddy","Rahul Chahar","Pat Cummins","Eshan Malinga","Mohammed Shami"],
    LSG: ["KL Rahul", "Quinton de Kock", "Marcus Stoinis", "Krunal Pandya", "Mark Wood",
    "Rishabh Pant","David Miller","Aiden Markram","Aryan Juyal","Himmat Singh","Matthew Breetzke","Nicholas Pooran","Abdul Samad","Mitchell Marsh","Shahbaz Ahmed","Yuvraj Chaudhary","Rajvardhan Hangargekar","Arshin Kulkarni","Ravi Bishnoi","Avesh Khan","Mayank Yadav","Mohsin Khan","Akash Deep","M Siddharth"
    ],
    GT: ["Hardik Pandya", "Mohammed Shami", "David Miller","Shubman Gill","Jos Buttler","Sai Sudharsan","Shahrukh Khan","Glenn Phillips","Anuj Rawat","Sherfane Rutherford","Kumar Kushagra","Rahul Tewatia","Washington Sundar","Mahipal Lomror","Rashid Khan","Karim Janat","Arshad Khan","Jayant Yadav","Kagiso Rabada","Mohammed Siraj","Prasidh Krishna","Gerald Coetzee","Sai Kishore","Gurnoor Brar","Ishant Sharma"]
  };
  
  let selectedPlayers = [];
  let currentTeam = null;
  
  // Show players for the selected team
  function showPlayers(team) {
    currentTeam = team;
    const playersContainer = document.getElementById("players");
    playersContainer.innerHTML = "";
  
    if (teams[team]) {
      teams[team].forEach(player => {
        const playerCheckbox = document.createElement("input");
        playerCheckbox.type = "checkbox";
        playerCheckbox.value = player;
        playerCheckbox.id = player;
  
        const playerLabel = document.createElement("label");
        playerLabel.htmlFor = player;
        playerLabel.textContent = player;
  
        const playerDiv = document.createElement("div");
        playerDiv.appendChild(playerCheckbox);
        playerDiv.appendChild(playerLabel);
  
        playersContainer.appendChild(playerDiv);
      });
    }
  }
  
  // Add selected players to the spinner
  function addSelectedPlayers() {
    const checkboxes = document.querySelectorAll("#players input[type='checkbox']:checked");
  
    checkboxes.forEach(checkbox => {
      if (!selectedPlayers.includes(checkbox.value)) {
        selectedPlayers.push(checkbox.value);
      }
    });
  
    // Ensure at least 2 and no more than 22 players are selected
    if (selectedPlayers.length < 2) {
      alert("Please select at least 2 players.");
    } else if (selectedPlayers.length > 22) {
      alert("You can select a maximum of 22 players.");
    } else {
      updateSelectedPlayersList();
    }
  }
  
  // Update the list of selected players
  function updateSelectedPlayersList() {
    const list = document.getElementById("selected-list");
    list.innerHTML = "";
  
    selectedPlayers.forEach(player => {
      const item = document.createElement("li");
      item.textContent = player;
      list.appendChild(item);
    });
  }
  
  // Add new team
  function addNewTeam() {
    const newTeamName = document.getElementById("new-team-name").value.trim();
  
    if (newTeamName && !teams[newTeamName]) {
      teams[newTeamName] = [];
      alert(`Team "${newTeamName}" added!`);
    } else {
      alert("Enter a valid, unique team name.");
    }
  }
  
  // Add player to the current team
  function addPlayerToTeam() {
    const playerName = document.getElementById("new-player-name").value.trim();
  
    if (currentTeam && playerName) {
      teams[currentTeam].push(playerName);
      alert(`Player "${playerName}" added to "${currentTeam}".`);
      showPlayers(currentTeam);
    } else {
      alert("Select a team and enter a valid player name.");
    }
  }
  
  // Spin the wheel and pick a winner
  function startSpin() {
    if (selectedPlayers.length < 2) {
      alert("Please select at lest 2 Plears for Spin.");
      return;
    }

    const spinner = document.getElementById("spinner");
    const spinButton = document.getElementById("spinButton");
    spinButton.disabled = true;

    const randomAngle = Math.random() * 360 + 720; // Ensure at least 2 full spins
    spinner.style.transition = "transform 2s ease-out";
    spinner.style.transform = `rotate(${randomAngle}deg)`;

    setTimeout(() => {
      const winner = selectedPlayers[Math.floor(Math.random() * selectedPlayers.length)];
      document.getElementById("endMessage").textContent = `🏆 Selected Player is: ${winner}!`;

      // Check if the winner is already in the Best Selected Players list
      const bestPlayersList = document.getElementById("best-players-list");
      const bestPlayers = Array.from(bestPlayersList.children).map(item => item.textContent);

      if (!bestPlayers.includes(winner)) {
        const listItem = document.createElement("li");
        listItem.textContent = winner;
        bestPlayersList.appendChild(listItem);
      } 

      // Hide spin button if 11 players are in the Best Selected Players list
      if (bestPlayersList.children.length === 11) {
            document.getElementById("spinButton").style.display = "none";
        }

        spinButton.disabled = false;

        // Show the count of items in the Best Selected Players list
        document.getElementById("endMessage").textContent += ` (${bestPlayersList.children.length} players in the list)`;

    
    }, 2000);
  }
