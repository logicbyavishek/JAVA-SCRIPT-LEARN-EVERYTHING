function createToaster(config){
    return function(message){
        let div = document.createElement('div');
        div.className = `fixed ${config.positionX==='right'?"right-10":"left-10"} ${config.positionY==='top'?"top-10":"bottom-10"} p-4 rounded shadow-lg  ${config.theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'} pointer-events-none`;
        div.innerText = message;
        document.body.appendChild(div);

        setTimeout(() => {
            div.remove();
        }, config.duration * 1000);
    }
}

let toaster = createToaster({
    positionX: 'left',
    positionY: 'bottom',
    theme: 'dark',
    duration: 3,
})

toaster('This is a toaster notification!');