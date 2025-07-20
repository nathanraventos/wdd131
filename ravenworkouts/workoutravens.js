document.addEventListener("DOMContentLoaded", () => {
  const workouts = [
  {
    name: "Bench Press",
    group: "Push",
    description:
      "A compound barbell exercise that targets the chest, shoulders, and triceps, often used to build upper body strength.",
    tips:
      "Lie flat on the bench with your feet firmly on the floor. Grip the bar slightly wider than shoulder-width. Lower the bar slowly to your mid-chest while keeping your elbows at about a 45-degree angle. Press the bar back up by driving through your chest, avoiding elbow lockout. Keep your core tight and shoulder blades retracted throughout the movement.",
    image: "page2_images/man-workingout-local-gym.jpg",
  },
  {
    name: "Overhead Shoulder Press",
    group: "Push",
    description:
      "A vertical pressing movement that targets the deltoid muscles and triceps.",
    tips:
      "Sit or stand with a barbell or dumbbells at shoulder height. Engage your core and press the weight directly overhead while keeping your back straight. Do not lean back excessively. Lower the weights in a controlled manner until they reach shoulder level again. Keep wrists stacked over elbows throughout the movement.",
    image: "page2_images/pexels-alesiakozik-7289370.jpg",
  },
  {
    name: "Tricep Dips",
    group: "Push",
    description:
      "A bodyweight movement targeting the triceps, chest, and shoulders.",
    tips:
      "Use parallel bars or a stable bench. Lower your body by bending your elbows while keeping them close to your torso. Stop when your upper arms are parallel to the ground. Push back up by extending your elbows without locking them out. Keep your torso upright for triceps emphasis, or lean forward slightly for more chest activation.",
    image: "page2_images/pexels-sinileunen-5496589.jpg",
  },
  {
    name: "Incline Bench Press",
    group: "Push",
    description:
      "A pressing exercise that emphasizes the upper chest and front deltoids.",
    tips:
      "Set the bench to a 30–45° incline. Use a shoulder-width grip and lower the bar or dumbbells to the upper chest with control. Press the weight upward without letting the elbows flare too wide. Keep your feet flat and glutes in contact with the bench.",
    image: "page2_images/pexels-cesar-perez-224805500-13967665.jpg",
  },
  {
    name: "Chest Fly (Machine)",
    group: "Push",
    description:
      "An isolation exercise focusing on stretching and contracting the pectoral muscles.",
    tips:
      "Sit with your back flat against the pad. Grab the handles with a slight bend in your elbows. Bring your arms together in front of your chest in a wide arc. Squeeze your chest at the top, then return slowly. Do not let the weights slam or overextend past your shoulders.",
    image: "page2_images/pexels-elkady-14616295.jpg",
  },
  {
    name: "Barbell Squat",
    group: "Legs",
    description:
      "A full-body compound movement that primarily targets the quads, glutes, and hamstrings.",
    tips:
      "Position the bar on your upper traps. Keep your feet shoulder-width apart. Brace your core, keep your chest up, and initiate the movement by pushing your hips back. Descend until your thighs are parallel (or deeper), then push through your heels to return to standing. Keep your knees in line with your toes and maintain a neutral spine.",
    image: "page2_images/pexels-ketut-subiyanto-4853705.jpg",
  },
  {
    name: "Leg Press",
    group: "Legs",
    description:
      "A machine-based exercise that targets the legs, especially the quads and glutes.",
    tips:
      "Adjust the seat so your knees are at about a 90° angle. Place your feet shoulder-width on the platform. Lower the platform until your knees are close to your chest without rounding your back. Press back through your heels. Don’t lock your knees at the top and keep your lower back against the seat.",
    image: "page2_images/pexels-marcuschanmedia-18060020.jpg",
  },
  {
    name: "Romanian Deadlift",
    group: "Legs",
    description:
      "A hamstring-dominant exercise that also targets the glutes and lower back.",
    tips:
      "Stand with feet hip-width apart and a barbell in front of your thighs. Hinge at the hips with a slight knee bend. Keep the bar close to your legs as you lower it until you feel a stretch in your hamstrings. Maintain a flat back and avoid rounding your shoulders. Drive your hips forward to return to standing.",
    image: "page2_images/pexels-vido-boskovic-3876297-5759751.jpg",
  },
  {
    name: "Walking Lunges",
    group: "Legs",
    description:
      "A unilateral leg exercise that challenges balance and coordination while strengthening quads and glutes.",
    tips:
      "Take a step forward and lower into a lunge until both knees are at 90°. Keep your chest upright and your front knee stacked above your ankle. Push through the front heel to rise and step forward into the next lunge. Keep your stride consistent and avoid letting the back knee touch the ground.",
    image: "page2_images/pexels-maksgelatin-4775203.jpg",
  },
  {
    name: "Seated Leg Curl",
    group: "Legs",
    description:
      "An isolation exercise that targets the hamstrings using a machine.",
    tips:
      "Adjust the seat so your knees align with the pivot point. Place your legs under the pads and grip the handles. Curl your legs back as far as possible without jerking. Hold the squeeze briefly and return slowly. Avoid lifting your hips or bouncing at the end.",
    image: "page2_images/pexels-vika-glitter-392079-28731788.jpg",
  },
  {
    name: "Deadlift",
    group: "Pull",
    description:
      "A heavy compound lift that works nearly every major muscle group, especially the back, glutes, and hamstrings.",
    tips:
      "Stand with feet hip-width and the bar over mid-foot. Bend at the hips and knees to grip the bar just outside your legs. Brace your core, flatten your back, and pull the bar close to your body as you lift. Lock out at the top with hips and knees fully extended. Lower the bar with control. Keep your spine neutral the entire time.",
    image: "page2_images/pexels-vido-boskovic-3876297-5759751.jpg",
  },
  {
    name: "Pull-Ups",
    group: "Pull",
    description:
      "A bodyweight exercise targeting the back and biceps, great for upper body strength.",
    tips:
      "Use an overhand grip, hands slightly wider than shoulder-width. Hang with straight arms, engage your lats, and pull yourself up until your chin clears the bar. Lower slowly with control. Don’t swing or use momentum. If needed, use a resistance band for assistance.",
    image: "page2_images/pexels-tima-miroshnichenko-6389082.jpg",
  },
  {
    name: "Barbell Rows",
    group: "Pull",
    description:
      "A barbell-based movement that builds mid-back, lat, and rear shoulder strength.",
    tips:
      "Bend at the hips with a flat back, letting the bar hang at arm’s length. Pull the bar towards your lower chest or upper abs while squeezing your shoulder blades. Lower the bar slowly and avoid using your lower back to lift. Maintain tight core engagement.",
    image: "page2_images/how-to-perform-bent-over-barbells-rows-without-hurting-your-back-1400x653-1495785770.jpg",
  },
  {
    name: "Lat Pulldown",
    group: "Pull",
    description:
      "A machine exercise that mimics the pull-up and targets the latissimus dorsi.",
    tips:
      "Grip the bar wider than shoulder-width. Slightly lean back and pull the bar down to your upper chest while squeezing your lats. Avoid using momentum or pulling behind the neck. Let the bar rise under control. Focus on feeling your back muscles working.",
    image: "page2_images/pexels-dogu-tuncer-339534179-17210050.jpg",
  },
  {
    name: "Face Pulls",
    group: "Pull",
    description:
      "A cable exercise that strengthens the rear deltoids and upper traps while promoting shoulder stability.",
    tips:
      "Use a rope attachment at face level. Pull the rope toward your face while flaring your elbows outward. Squeeze your shoulder blades together at the peak. Avoid shrugging or using your lower back. Perform the movement slowly for maximum control.",
    image: "page2_images/facepulls.jpg",
  },
];


  const displayWorkout = (workout) => {
    document.getElementById("workout-title").textContent = workout.name;
    document.getElementById("workout-description").textContent = workout.description;
    document.getElementById("workout-tips").textContent = workout.tips;
    document.getElementById("workout-img").src = workout.image;
    document.getElementById("workout-img").alt = workout.name;
  };

  const renderButtons = () => {
    const pushContainer = document.getElementById("push-buttons");
    const pullContainer = document.getElementById("pull-buttons");
    const legContainer = document.getElementById("leg-buttons");

    workouts.forEach((workout) => {
      const btn = document.createElement("button");
      btn.textContent = workout.name;
      btn.className = "workout-button";
      btn.addEventListener("click", () => displayWorkout(workout));

    if (workout.group === "Push") pushContainer.appendChild(btn);
    else if (workout.group === "Pull") pullContainer.appendChild(btn);
    else if (workout.group === "Legs") legContainer.appendChild(btn);

    });
  };

  renderButtons();
});