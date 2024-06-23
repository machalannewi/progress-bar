document.addEventListener("DOMContentLoaded", function () {
  const progressData = [
    { percentage: 20 },
    { percentage: 50 },
    { percentage: 98 },
  ];

  const progressContainer = document.getElementById("progressContainer");
  const progressBars = [];

  function createProgressBar(index) {
    const progressBar = document.createElement("div");
    progressBar.className = "progress-bar";
    progressBar.id = "progressBar" + index;
    progressContainer.appendChild(progressBar);

    const progressText = document.createElement("div");
    progressText.className = "progress-text";
    progressText.id = "progressText" + index;
    progressContainer.appendChild(progressText);

    progressBars.push({
      bar: progressBar,
      text: progressText,
      currentStep: 0,
      totalSteps: 100,
      targetPercentage: progressData[index].percentage,
    });
  }

  function updateProgress(barIndex, percentage) {
    const progressBar = progressBars[barIndex].bar;
    const progressText = progressBars[barIndex].text;

    progressBar.style.width = percentage + "%";
    progressText.innerText = percentage + "%";
  }

  function simulateProgress(barIndex) {
    const currentStep = progressBars[barIndex].currentStep;
    const totalSteps = progressBars[barIndex].totalSteps;
    const targetPercentage = progressBars[barIndex].targetPercentage;

    if (currentStep < totalSteps && currentStep < targetPercentage) {
      const percentage = (currentStep / totalSteps) * 100;
      updateProgress(barIndex, percentage);

      setTimeout(() => {
        progressBars[barIndex].currentStep++;
        simulateProgress(barIndex);
      }, 50);
    }
  }

  for (let i = 0; i < progressData.length; i++) {
    createProgressBar(i);
    simulateProgress(i);
  }
});
