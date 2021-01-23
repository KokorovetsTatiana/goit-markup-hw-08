(() => {
   const refs = {
     openModalBtn: document.querySelector('[data-modal-open]'),
     closeModalBtn: document.querySelector('[data-modal-close]'),
     modal: document.querySelector('[data-modal]'),
    //  drawerOverLay: document.qwerySelector('[js-drawer-overlay]'),
    //  drawer: document.qwerySelector('[js-drawer]'),
   };
 
   refs.openModalBtn.addEventListener('click', toggleModal);
   refs.closeModalBtn.addEventListener('click', toggleModal);
 
   function toggleModal() {
     refs.modal.classList.toggle('is-hidden');
   }
 

//  function toggleDrawer() {
//    refs.drawer.classList.toggle('is-open');
//    refs.drawerOvelay.classList.toggle('is-visible');

//    const isDrawerOpen = refs.drawer.classList.contains('is-open');
//    const method = isDraweropen ? 'disableBodyScroll' : 'enableBodyScroll';
//    bodyScrollLock[method](refs.drawerOverLay);
//  }

})();