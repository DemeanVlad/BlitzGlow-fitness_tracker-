let dailyGoal = 0;
let totalDuration = 0;

document.getElementById('activityForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const activity = document.getElementById('activity').value;
    const duration = parseInt(document.getElementById('duration').value, 10);

    if (!isNaN(duration)) {
        logActivity(activity, duration);
        updateProgress();
    }

    document.getElementById('activity').value = '';
    document.getElementById('duration').value = '';
});

function logActivity(activity, duration) {
    totalDuration += duration;
    console.log(`Logged: ${activity} - ${duration} minutes`);
}

function setDailyGoal() {
    dailyGoal = parseInt(document.getElementById('dailyGoal').value, 10);
    updateProgress();
}

function updateProgress() {
    const progressMessage = document.getElementById('progressMessage');

    if (dailyGoal === 0) {
        progressMessage.textContent = "Set your daily goal to track your progress!";
        return;
    }

    const percentage = Math.min((totalDuration / dailyGoal) * 100, 100);
    progressMessage.textContent = `You've completed ${percentage.toFixed(2)}% of your daily goal.`;
}
