import '../css/style.css';



document.addEventListener('click', (e) => {
    const button = e.target.closest('[data-drawer-target]');
    if (!button) return;

    const icon = button.querySelector('svg');
    const tooltip = document.getElementById(button.dataset.tooltipTarget);
    const drawer = FlowbiteInstances.getInstance('Drawer', 'player-drawer');

    if (icon) icon.classList.toggle('rotate-180');

    if (tooltip) tooltip.textContent = drawer.isVisible() ? 'Zamknij player' : 'Otwórz player';
});

// on button click play song and change icon

let playState = false;

document.addEventListener('click', (e) => {

    if (!e.target.closest('[data-audio]')) return;

    const buttons = document.querySelectorAll('[data-audio]');

    buttons.forEach(btn => {
        const playIcon = btn.querySelector('[data-audio-play]');
        const pauseIcon = btn.querySelector('[data-audio-pause]');

        const audio = document.querySelector(btn.dataset.audio);

        playIcon.classList.toggle('hidden');
        pauseIcon.classList.toggle('hidden');

        playState = !playState;

        if (playState) {
            audio.play();
        } else {
            audio.pause();
        }

        if (btn.dataset.tooltipTarget) {
            const tooltip = document.getElementById(btn.dataset.tooltipTarget);
            tooltip.textContent = playState ? 'Pausa' : 'Grać';
        }
    });
});