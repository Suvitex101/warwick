const menuIcon = document.querySelector(".menu-icon");
const sideBar = document.querySelector(".sidebar");
const mainContent = document.querySelector(".main");
const menuItems = document.querySelectorAll(".menu .icon-link");

let isSideBarVisible = window.innerWidth >= 768;

function toggleSidebar() {
	if (isSideBarVisible) {
   sideBar.style.display = 'block';
	if (window.innerWidth >= 768) {
      mainContent.style.marginLeft = '320px';
   }
} else {
   sideBar.style.display = 'none';
   if (window.innerWidth >= 768) {
      mainContent.style.marginLeft = '10px';
   }
}
}


toggleSidebar();

menuIcon.addEventListener('click', () => {
	isSideBarVisible = !isSideBarVisible;
   toggleSidebar();
});

window.addEventListener('resize', () => {
	if (!isSideBarVisible) return;
   if (window.innerWidth >= 768) {
		mainContent.style.marginLeft = '320px';
	} else {
		mainContent.style.marginLeft = '10px';
	}
});

menuItems.forEach(item => {
	const dropDown = item.querySelector(".drop");
   const subMenu = item.nextElementSibling;

   item.addEventListener('click', () => {
		menuItems.forEach(otherItem => {
      if (otherItem !== item) {
			const otherSubMenu = otherItem.nextElementSibling;
         otherSubMenu.classList.remove('active');
         otherItem.classList.remove('menu-link');
      }
	});
	subMenu.classList.toggle('active');

   item.classList.toggle('menu-link');
});
});
