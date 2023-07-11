// Sidebar
const manuItem = document.querySelectorAll('.menu-item');

const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages')

const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector
('#message-search');
const fontSize = document.querySelectorAll('.choose-size span');

// Theme
const theme = document.querySelector('#theme');
const themeModal = document.querySelector(".customize-theme");
let root  = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span')
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");

// Remove active class from all menu item
const changeActiveItem = () => {
    manuItem.forEach(item =>{
        item.classList.remove('active');
    })
}

manuItem.forEach(item => {
    item.addEventListener('click', ()=> {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notification-popup').
            style.display = 'none';
        }
        else{
            document.querySelector('.notification-popup').
            style.display = 'block';
            document.querySelector("#notifications .notification-count").style.display = 'none';
        }
    })
})

// Messages
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if (name.indexOf(val) !== -1) {
            chat.style.display = 'flex';
        } else {
            chat.style.display = 'none';
        }
    });
};


messageSearch.addEventListener('keyup' , searchMessage)
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    document.querySelector("#messages-notifications .notification-count").style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none'
    }, 2000)
})

// Theme Customization
const openThemeModal = () => {
    themeModal.style.display = 'grid'
}
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}

themeModal.addEventListener('click' , closeThemeModal);
theme.addEventListener('click', openThemeModal);


// Fonts

// remove active class from span or font size selectors
const removeSizeSelector = () =>{
    fontSize.forEach(size => {
        size.classList.remove('active');
    })
}
fontSize.forEach( size => {
    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontsize;
        size.classList.toggle('active');
        if(size.classList.contains('font-size-1')){
            fontsize = '10px';
            root.style.setProperty('--stickey-top-left', '5.4rem');
            root.style.setProperty('--stickey-top-right', '5.4rem');
        }else if(size.classList.contains('font-size-2')){
            fontsize = '13px';
            root.style.setProperty('--stickey-top-left', '5.4rem');
            root.style.setProperty('--stickey-top-right', '-7rem');
        }else if(size.classList.contains('font-size-3')){
            fontsize = '16px';
            root.style.setProperty('--stickey-top-left', '5.-2rem');
            root.style.setProperty('--stickey-top-right', '5.-17rem');
        }else if(size.classList.contains('font-size-4')){
            fontsize = '19px';
            root.style.setProperty('--stickey-top-left', '5.-5rem');
            root.style.setProperty('--stickey-top-right', '5.-25rem');
        }else if(size.classList.contains('font-size-5')){
            fontsize = '22px';
            root.style.setProperty('--stickey-top-left', '5.-12rem');
            root.style.setProperty('--stickey-top-right', '5.-35rem');
        }
        // Change fontsize of root html elements
        document.querySelector('html').style.fontSize = fontsize;
    })
})

// Remove active class
const changeActiveColorClass = () =>{
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

// Change Primary colors

colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primaryHue;
        changeActiveColorClass();
        if(color.classList.contains('color-1')){
            primaryHue = 252;

        }else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        color.classList.add('active')
        root.style.setProperty('--primary-color-hue',primaryHue)
    })
})




// theme Background Values
let lightColorLightness;
let whiteColorLightness;
let DarkColorLightness;

const changeBG = () =>{
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--dark-color-lightness', DarkColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
}
Bg1.addEventListener('click', () => {
    // Add active class
    Bg1.classList.add('active');
    // Remove active class from others
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    window.location.reload();
})
Bg2.addEventListener('click', () => {
    DarkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    // Add active class
    Bg2.classList.add('active');
    // Remove active class from others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
})
Bg3.addEventListener('click', () => {
    DarkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    // Add active class
    Bg3.classList.add('active');
    // Remove active class from others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
})

