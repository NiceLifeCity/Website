document.getElementById('official-launch').addEventListener('click', function() {
    const launchInfo = document.getElementById('launch-info');
    
    if (launchInfo.classList.contains('show')) {
        launchInfo.classList.remove('show');
        launchInfo.classList.add('hide');
        
        setTimeout(() => {
            launchInfo.classList.add('hidden');
            launchInfo.classList.remove('hide');
        }, 500);
    } else {
        launchInfo.classList.remove('hidden');
        launchInfo.classList.add('show');
    }
});
