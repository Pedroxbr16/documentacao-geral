document.addEventListener('DOMContentLoaded', function() {
    const sidebarLinks = document.querySelectorAll('.tocCollapsible_Lg4k a');
  
    sidebarLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });
