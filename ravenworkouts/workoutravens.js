// workoutravens.js

document.addEventListener("DOMContentLoaded", () => {
  const workouts = [
    {
      name: "Bench Press",
      group: "Push",
      description:
        "A compound barbell exercise targeting the chest, shoulders, and triceps.",
      tips:
        "Keep your feet flat on the floor, lower the bar slowly to your chest, and avoid locking your elbows at the top.",
      image: "page2_images/man-workingout-local-gym.jpg",
    },
    {
      name: "Overhead Shoulder Press",
      group: "Push",
      description:
        "A pressing movement that targets the shoulders and works the triceps as a secondary muscle.",
      tips:
        "Engage your core, press the bar or dumbells straight up without arching your lower back, and keep your wrists stacked above your elbows.",
      image: "page2_images/pexels-alesiakozik-7289370.jpg",
    },
    {
      name: "Tricep Dips",
      group: "Push",
      description:
        "A bodyweight exercise that targets the triceps and also works the chest and shoulders.",
      tips:
        "Keep your shoulders down, elbows close to your sides, and avoid letting your hips sag.",
      image: "page2_images/pexels-sinileunen-5496589.jpg",
    },
    {
      name: "Incline Bench Press",
      group: "Push",
      description:
        "A chest-focused pressing movement performed at an incline to target the upper chest.",
      tips:
        "Keep the dumbbells controlled, avoid banging them together at the top, and press through your chest.",
      image: "page2_images/pexels-cesar-perez-224805500-13967665.jpg",
    },
    {
      name: "Chest Fly (Machine)",
      group: "Push",
      description:
        "An isolation exercise that focuses on stretching and contracting the chest muscles.",
      tips:
        "Use a slow tempo, don’t let the weights slam together, and maintain a slight bend in your elbows.",
      image: "page2_images/pexels-elkady-14616295.jpg",
    },
    {
      name: "Barbell Squat",
      group: "Legs",
      description:
        "A fundamental compound exercise targeting the quads, hamstrings, and glutes.",
      tips:
        "Keep your chest up, knees in line with your toes, and drive through your heels.",
      image: "page2_images/pexels-ketut-subiyanto-4853705.jpg",
    },
    {
      name: "Leg Press",
      group: "Legs",
      description:
        "A machine-based leg exercise that works the quads, hamstrings, and glutes.",
      tips:
        "Don’t lock your knees at the top, lower the platform slowly, and keep your lower back against the seat.",
      image: "page2_images/pexels-marcuschanmedia-18060020.jpg",
    },
    {
      name: "Romanian Deadlift",
      group: "Legs",
      description:
        "A hamstring and glute-focused exercise performed with a barbell or dumbbells.",
      tips:
        "Keep your back straight, hinge at the hips, and avoid rounding your lower back.",
      image: "page2_images/pexels-vido-boskovic-3876297-5759751.jpg",
    },
    {
      name: "Walking Lunges",
      group: "Legs",
      description:
        "A unilateral exercise targeting the quads, hamstrings, and glutes.",
      tips:
        "Step forward with control, keep your torso upright, and push through your front heel.",
      image: "page2_images/pexels-maksgelatin-4775203.jpg",
    },
    {
      name: "Seated Leg Curl",
      group: "Legs",
      description:
        "A machine-based hamstring isolation exercise.",
      tips:
        "Adjust the seat so your knees align with the machine's pivot point and avoid bouncing the weight.",
      image: "page2_images/pexels-vika-glitter-392079-28731788.jpg",
    },
    {
      name: "Deadlift",
      group: "Pull",
      description:
        "A full-body compound movement that primarily targets the back, glutes, and hamstrings.",
      tips:
        "Keep the bar close to your shins, maintain a neutral spine, and drive through your heels.",
      image: "page2_images/pexels-vido-boskovic-3876297-5759751.jpg",
    },
    {
      name: "Pull-Ups",
      group: "Pull",
      description:
        "A bodyweight exercise that targets the lats, biceps, and upper back.",
      tips:
        "Avoid swinging, pull your chin over the bar, and lower yourself in a controlled motion.",
      image: "page2_images/pexels-tima-miroshnichenko-6389082.jpg",
    },
    {
      name: "Barbell Rows",
      group: "Pull",
      description:
        "A back exercise performed with a barbell to build thickness in the lats and traps.",
      tips:
        "Keep a neutral spine, pull the bar towards your lower chest, and squeeze your shoulder blades together.",
      image: "page2_images/how-to-perform-bent-over-barbells-rows-without-hurting-your-back-1400x653-1495785770.jpg",
    },
    {
      name: "Lat Pulldown",
      group: "Pull",
      description:
        "A machine-based movement that targets the lats and upper back.",
      tips:
        "Lean back slightly, pull the bar to your upper chest, and avoid using momentum.",
      image: "page2_images/pexels-dogu-tuncer-339534179-17210050.jpg",
    },
    {
      name: "Face Pulls",
      group: "Pull",
      description:
        "A cable exercise for the rear delts and upper back, promoting shoulder health.",
      tips:
        "Use a rope attachment, pull towards your face while keeping your elbows high, and squeeze your shoulder blades.",
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